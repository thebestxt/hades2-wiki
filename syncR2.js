import { S3Client, HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto"; // 🌟 引入内置加密模块，计算 MD5
import { fileURLToPath } from "node:url";

// 兼容 ESM 的 __dirname 写法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. 🌟 升级：支持从命令行或环境变量(Cloudflare Pages 专用)中解析 R2 配置
const args = {};
process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
        const [key, value] = arg.split('=');
        args[key.replace('--', '')] = value;
    }
});

// 优先读取系统环境变量，如果不存在再降级读取本地命令行传参
const accountId = process.env.R2_ACCOUNT_ID || args.accountId;
const accessKeyId = process.env.R2_ACCESS_KEY_ID || args.accessKeyId;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || args.secretAccessKey;
const bucket = process.env.R2_BUCKET_NAME || args.bucket;

// 参数强校验
if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    console.error("❌ 错误: 缺少必要的 R2 配置参数！");
    console.error("💡 本地运行示例: pnpm run sync-r2 -- --accountId=xxx --accessKeyId=xxx --secretAccessKey=xxx --bucket=xxx");
    console.error("💡 云端部署提示: 请确保在 Cloudflare Pages 的 Environment variables 中配置了对应的变量。");
    process.exit(1);
}

// 2. 初始化 Cloudflare R2 客户端
const r2Client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
});

const SRC_DIR = path.join(__dirname, "r2Sources");

// 根据后缀获取常用的 Mime-Type
function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const map = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.mp3': 'audio/mpeg',
        '.mp4': 'video/mp4',
        '.webm': 'video/webm',
        '.webp': 'image/webp'
    };
    return map[ext] || 'application/octet-stream';
}

// 深度遍历本地目录获取所有文件
function getAllFiles(dirPath, arrayOfFiles = []) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

/**
 * 🌟 新增：计算本地文件的 MD5 值
 */
function calculateLocalMD5(fileBuffer) {
    return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

/**
 * 🌟 改造：获取远程文件的元数据（用来拿云端 ETag 做 MD5 对比）
 * @returns {Promise<{exists: boolean, etag: string}>}
 */
async function getRemoteFileMetadata(key) {
    try {
        const result = await r2Client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
        // R2 返回的 ETag 自带双引号（如 '"a5ef8..."'），用正则剔除掉，方便对比
        const etag = result.ETag ? result.ETag.replace(/"/g, '') : '';
        return { exists: true, etag };
    } catch (error) {
        if (error.name === "NotFound" || error.$metadata?.status === 404) {
            return { exists: false, etag: '' };
        }
        throw error;
    }
}

// 主逻辑
async function main() {
    console.log(`\n🚀 开始扫描本地目录: ${SRC_DIR}`);
    const localFiles = getAllFiles(SRC_DIR);
    
    if (localFiles.length === 0) {
        console.log("ℹ️ 提示: r2Sources 目录为空或不存在，无需同步。");
        return;
    }

    console.log(`📦 找到本地文件 ${localFiles.length} 个，开始与远程 R2 存储桶 [${bucket}] 比对...`);
    
    let uploadedCount = 0;
    let skippedCount = 0;
    let forcedUpdateCount = 0;

    for (const filePath of localFiles) {
        const relativePath = path.relative(SRC_DIR, filePath).replace(/\\/g, '/');
        const isSourcesJson = relativePath === 'sources.json';

        try {
            let shouldUpload = false;
            let isOverwrite = false; // 标记是否属于“内容变更导致的覆盖更新”

            // 提前把本地文件的 Buffer 读出来，因为算 MD5 和上传都要用，免得读两次
            const fileBuffer = fs.readFileSync(filePath);

            if (isSourcesJson) {
                // 如果是 sources.json，不查云端状态，直接强制覆盖上传
                shouldUpload = true;
                console.log(`🔄 [核心索引] 发现核心文件，准备强制更新: ${relativePath}`);
            } else {
                // 🌟 普通资产：引入 MD5 比对机制
                const remote = await getRemoteFileMetadata(relativePath);

                if (!remote.exists) {
                    // 云端压根没有，必须上传
                    shouldUpload = true;
                    console.log(`📤 [新文件] 远程不存在，准备上传: ${relativePath}`);
                } else {
                    // 云端存在，开始核对 MD5 内容
                    const localMd5 = calculateLocalMD5(fileBuffer);
                    
                    if (localMd5 === remote.etag) {
                        // MD5 完全一致，说明资产没有任何变动
                        console.log(`⏭️  [跳过] 资源内容无变化: ${relativePath}`);
                        skippedCount++;
                    } else {
                        // 🌟 MD5 不一致，说明老哥你在本地替换了同名图片！强制触发上传
                        shouldUpload = true;
                        isOverwrite = true;
                        console.log(`🔄 [覆盖更新] 检查到内容已发生变更: ${relativePath}`);
                    }
                }
            }

            // 执行上传逻辑
            if (shouldUpload) {
                await r2Client.send(new PutObjectCommand({
                    Bucket: bucket,
                    Key: relativePath,
                    Body: fileBuffer,
                    ContentType: getContentType(filePath),
                    // 普通资源拉满缓存，但 sources.json 作为经常变动的索引，将其缓存设为 0
                    CacheControl: isSourcesJson 
                        ? "no-cache, no-store, must-revalidate" 
                        : "public, max-age=31536000, immutable"
                }));
                
                console.log(`✅ [完成] 成功同步: ${relativePath}`);
                
                if (isSourcesJson || isOverwrite) {
                    forcedUpdateCount++;
                } else {
                    uploadedCount++;
                }
            }
        } catch (err) {
            console.error(`❌ [失败] 处理文件 ${relativePath} 时翻车:`, err.message);
        }
    }

    console.log(`\n🎉 同步工作全部结束！`);
    console.log(`📊 统计报告: 新增资源: ${uploadedCount} 个 | 覆盖更新(含索引): ${forcedUpdateCount} 个 | 保持原样跳过: ${skippedCount} 个\n`);
}

main();
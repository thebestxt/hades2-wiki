import { S3Client, HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 兼容 ESM 的 __dirname 写法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. 从命令行参数中解析 R2 配置
const args = {};
process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
        const [key, value] = arg.split('=');
        args[key.replace('--', '')] = value;
    }
});

const { accountId, accessKeyId, secretAccessKey, bucket } = args;

// 参数强校验
if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    console.error("❌ 错误: 缺少必要的 R2 配置参数！");
    console.error("📋 示例: npm run sync-r2 -- --accountId=xxx --accessKeyId=xxx --secretAccessKey=xxx --bucket=xxx");
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

// 检查远程 R2 桶里是否存在该文件
async function checkRemoteFileExists(key) {
    try {
        await r2Client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
        return true;
    } catch (error) {
        if (error.name === "NotFound") {
            return false;
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
        
        // 🌟 核心改动：检查当前文件是否是根目录下的 sources.json
        const isSourcesJson = relativePath === 'sources.json';

        try {
            let shouldUpload = false;

            if (isSourcesJson) {
                // 如果是 sources.json，不查云端状态，直接打上“需要上传”的标记
                shouldUpload = true;
                console.log(`🔄 [强制更新] 核心索引文件: ${relativePath}`);
            } else {
                // 其余普通资产，依然老老实实走远程比对逻辑
                const exists = await checkRemoteFileExists(relativePath);
                if (exists) {
                    console.log(`⏭️  [跳过] 远程已存在: ${relativePath}`);
                    skippedCount++;
                } else {
                    shouldUpload = true;
                    console.log(`📤 [上传中...] ${relativePath}`);
                }
            }

            // 执行上传逻辑
            if (shouldUpload) {
                const fileBuffer = fs.readFileSync(filePath);
                
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
                
                if (isSourcesJson) {
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
    console.log(`📊 统计报告: 新增普通资源: ${uploadedCount} 个 | 强制覆盖更新: ${forcedUpdateCount} 个 | 保持原样跳过: ${skippedCount} 个\n`);
}

main();
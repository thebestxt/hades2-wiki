import { S3Client, ListObjectsV2Command, PutObjectCommand, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. 解析 R2 配置
const args = {};
process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
        const [key, value] = arg.split('=');
        args[key.replace('--', '')] = value;
    }
});

const accountId = process.env.R2_ACCOUNT_ID || args.accountId;
const accessKeyId = process.env.R2_ACCESS_KEY_ID || args.accessKeyId;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || args.secretAccessKey;
const bucket = process.env.R2_BUCKET_NAME || args.bucket;

if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    console.error("❌ 错误: 缺少必要的 R2 配置参数！");
    process.exit(1);
}

// 2. 初始化客户端
const r2Client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
});

const SRC_DIR = path.join(__dirname, "r2Sources");

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const map = {
        '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
        '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
        '.svg': 'image/svg+xml', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4', '.webm': 'video/webm', '.webp': 'image/webp'
    };
    return map[ext] || 'application/octet-stream';
}

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

function calculateLocalMD5(fileBuffer) {
    return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

/**
 * 🌟 核心升级 1：全量拉取远程存储桶的所有资产明细（支持分页处理，一网打尽）
 */
async function fetchAllRemoteObjects() {
    const remoteMap = new Map(); // key -> etag
    let isTruncated = true;
    let continuationToken = undefined;

    console.log("📡 正在全量拉取远程云端资产明细...");
    
    while (isTruncated) {
        const response = await r2Client.send(new ListObjectsV2Command({
            Bucket: bucket,
            ContinuationToken: continuationToken
        }));

        if (response.Contents) {
            for (const obj of response.Contents) {
                // R2 的 ETag 自带双引号，切掉
                const etag = obj.ETag ? obj.ETag.replace(/"/g, '') : '';
                remoteMap.set(obj.Key, etag);
            }
        }
        
        isTruncated = response.IsTruncated;
        continuationToken = response.NextContinuationToken;
    }
    
    console.log(`📦 云端拉取完毕！共计找到远程文件 ${remoteMap.size} 个。`);
    return remoteMap;
}

// 主逻辑
async function main() {
    console.log(`\n🚀 开始扫描本地目录: ${SRC_DIR}`);
    const localFiles = getAllFiles(SRC_DIR);
    
    if (localFiles.length === 0) {
        console.log("ℹ️ 提示: r2Sources 目录为空或不存在，无需同步。");
        return;
    }

    // 🌟 一口气抓回所有云端列表
    let remoteMap;
    try {
        remoteMap = await fetchAllRemoteObjects();
    } catch (err) {
        console.error("❌ 抓取云端资产明细失败:", err.message);
        return;
    }

    console.log(`⚡ 开始在本地内存中进行高速资产对齐...`);
    
    let uploadedCount = 0;
    let skippedCount = 0;
    let forcedUpdateCount = 0;
    
    // 用来统计本地存在的路径，方便后面排查哪些云端文件被本地“无情删除了”
    const localKeysSet = new Set(); 

    // A. 上传与更新比对
    for (const filePath of localFiles) {
        const relativePath = path.relative(SRC_DIR, filePath).replace(/\\/g, '/');
        localKeysSet.add(relativePath);
        const isSourcesJson = relativePath === 'sources.json';

        try {
            let shouldUpload = false;
            let logPrefix = "";
            const fileBuffer = fs.readFileSync(filePath);

            if (isSourcesJson) {
                shouldUpload = true;
                logPrefix = "🔄 [核心索引] 强更文件";
            } else {
                // 🌟 核心升级 2：在这里直接从内存 Map 里取，再也不用慢吞吞发网络网络请求了！
                if (!remoteMap.has(relativePath)) {
                    shouldUpload = true;
                    logPrefix = "📤 [新资产] 准备上传";
                } else {
                    const localMd5 = calculateLocalMD5(fileBuffer);
                    const remoteEtag = remoteMap.get(relativePath);

                    if (localMd5 === remoteEtag) {
                        skippedCount++;
                        continue; // MD5 完美撞车，直接跳过，连日志都省了
                    } else {
                        shouldUpload = true;
                        logPrefix = "🔄 [内容变更] 覆盖更新";
                    }
                }
            }

            if (shouldUpload) {
                console.log(`${logPrefix}: ${relativePath}`);
                await r2Client.send(new PutObjectCommand({
                    Bucket: bucket,
                    Key: relativePath,
                    Body: fileBuffer,
                    ContentType: getContentType(filePath),
                    CacheControl: isSourcesJson 
                        ? "no-cache, no-store, must-revalidate" 
                        : "public, max-age=31536000, immutable"
                }));
                
                if (isSourcesJson || logPrefix.includes("内容变更")) {
                    forcedUpdateCount++;
                } else {
                    uploadedCount++;
                }
            }
        } catch (err) {
            console.error(`❌ 处理文件翻车 ${relativePath}:`, err.message);
        }
    }

    // 🌟 核心升级 3：清理垃圾（如果本地删除了某图片，云端自动连坐删除）
    let deletedCount = 0;
    const keysToDelete = [];
    
    for (const remoteKey of remoteMap.keys()) {
        if (!localKeysSet.has(remoteKey)) {
            keysToDelete.push({ Key: remoteKey });
        }
    }

    if (keysToDelete.length > 0) {
        console.log(`\n🧹 检查到有 ${keysToDelete.length} 个文件在本地已被老哥删除，开始清理云端...`);
        try {
            // S3 协议支持批量删，每次最多送 1000 个
            await r2Client.send(new DeleteObjectsCommand({
                Bucket: bucket,
                Delete: { Objects: keysToDelete }
            }));
            for (const d of keysToDelete) {
                console.log(`🗑️ [清理残留] 成功抹去: ${d.Key}`);
            }
            deletedCount = keysToDelete.length;
        } catch (delErr) {
            console.error("❌ 清理云端垃圾残留失败:", delErr.message);
        }
    }

    console.log(`\n🎉 同步工作全部结束！`);
    console.log(`📊 统计报告:`);
    console.log(`   ✨ 新增同步: ${uploadedCount} 个`);
    console.log(`   🔄 内容覆盖: ${forcedUpdateCount} 个`);
    console.log(`   🗑️ 自动清理: ${deletedCount} 个`);
    console.log(`   ⏭️  保持原样: ${skippedCount} 个\n`);
}

main();
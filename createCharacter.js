import { S3Client, HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto"; // 🌟 引入内置加密模块，计算 MD5
import { fileURLToPath } from "node:url";

// 兼容 ESM 的 __dirname 写法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = {};
process.argv.slice(2).forEach(arg => {
    if (arg.startsWith('--')) {
        const [key, value] = arg.split('=');
        args[key.replace('--', '')] = value;
    }
});

const characterName = args.characterName

fs.mkdirSync(`./src/content/docs/characters/${characterName}`)
fs.writeFileSync(`./src/content/docs/characters/${characterName}/index.mdx`, `---\ntitle: ${characterName}\npubDate: 2026-07-09 15:47:45\n---\n\n<R2Image src="/${characterName}_big.png" />`)

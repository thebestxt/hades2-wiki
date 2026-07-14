import fs from 'fs';
import path from 'path';

// 基础常量配置
const hadesSourceHost = '${hadesSourceHost}'; // 如果在 Astro 中是变量，请自行替换或保持原样字符串
const TARGET_DIR = './contents/docs/gifts';

// 1. 精准匹配长图中的中文名(C)、文件名(B)与对应的小驼峰(A)
const giftMapping = {
  'Adamant_Shard.webp': { camel: 'adamantShard', zh: '精金碎片' },
  'Aromatic_Phial.webp': { camel: 'aromaticPhial', zh: '馥郁小瓶' },
  'Barley_Sheaf.webp': { camel: 'barleySheaf', zh: '金穗麦束' },
  'Beautiful_Mirror.webp': { camel: 'beautifulMirror', zh: '美丽妆镜' },
  'Blackened_Fleece.webp': { camel: 'blackenedFleece', zh: '黑羊毛' },
  'Cloud_Bangle.webp': { camel: 'cloudBangle', zh: '云纹手镯' },
  'Concave_Stone.webp': { camel: 'concaveStone', zh: '凹陷之石' },
  'Crystal_Figurine.webp': { camel: 'crystalFigurine', zh: '水晶雕像' },
  'Discordant_Bell.webp': { camel: 'discordantBell', zh: '不谐铃铛' },
  'Engraved_Pin.webp': { camel: 'engravedPin', zh: '雕纹胸针' },
  'Everlasting_Ember.webp': { camel: 'everlastingEmber', zh: '长燃之烬' },
  'Evil_Eye.webp': { camel: 'evilEye', zh: '邪眼' },
  'Experimental_Hammer.webp': { camel: 'experimentalHammer', zh: '实验之锤' },
  'Fig_Leaf.webp': { camel: 'figLeaf', zh: '无花果叶' },
  'Ghost_Onion.webp': { camel: 'ghostOnion', zh: '幽灵洋葱' },
  'Gold_Purse.webp': { camel: 'goldPurse', zh: '零钱包' },
  'Gorgon_Amulet.webp': { camel: 'gorgonAmulet', zh: '蛇发妖护符' },
  'Iridescent_Fan.webp': { camel: 'iridescentFan', zh: '华彩手扇' },
  'Knuckle_Bones.webp': { camel: 'knuckleBones', zh: '羊拐骨袋' },
  'Lion_Fang.webp': { camel: 'lionFang', zh: '狮牙' },
  'Luckier_Tooth.webp': { camel: 'luckierTooth', zh: '更幸运的牙齿' },
  'Metallic_Droplet.webp': { camel: 'metallicDroplet', zh: '金属液滴' },
  'Moon_Beam.webp': { camel: 'moonBeam', zh: '皎月光束' },
  'Purest_Hope.webp': { camel: 'purestHope', zh: '和煦光子' },
  'Silken_Sash.webp': { camel: 'silkenSash', zh: '丝质饰带' },
  'Silver_Wheel.webp': { camel: 'silverWheel', zh: '银轮' },
  'Sword_Hilt.webp': { camel: 'swordHilt', zh: '断剑之柄' },
  'Transcendent_Embryo.webp': { camel: 'transcendentEmbryo', zh: '混沌之胚' },
  'Vivid_Sea.webp': { camel: 'vividSea', zh: '波漾之海' },
  'White_Antler.webp': { camel: 'whiteAntler', zh: '雪白鹿角' }
};

function main() {
  const sourceDir = './r2Sources/gifts';
  
  if (!fs.existsSync(sourceDir)) {
    console.error(`错误：找不到素材目录 ${sourceDir}`);
    return;
  }

  // 读取目录下的所有文件
  const files = fs.readdirSync(sourceDir);
  const sidebarData = [];

  files.forEach(file => {
    // 过滤并确保只处理我们在长图中匹配过的这30个 webp 文件
    if (!giftMapping[file]) return;

    const B = file;
    const A = giftMapping[file].camel;
    const C = giftMapping[file].zh;

    // 1. 收集侧边栏数据
    sidebarData.push({
      label: C,
      slug: `gifts/${A}`,
      attrs: {
        'data-icon': `${hadesSourceHost}/gifts/${B}`
      }
    });

    // 2. 创建 content/docs 下的文件结构
    const mdxFolder = path.join(TARGET_DIR, A);
    const mdxFilePath = path.join(mdxFolder, 'index.mdx');

    // 如果 A 目录不存在则创建
    if (!fs.existsSync(mdxFolder)) {
      fs.mkdirSync(mdxFolder, { recursive: true });
    }

    // 组装 mdx 文件内容
    const mdxContent = `---
title: ${C}
pubDate: 2026-07-15 03:09:06
---

<R2Image src="gifts/${B}" />`;

    // 写入文件
    fs.writeFileSync(mdxFilePath, mdxContent, 'utf-8');
    console.log(`已成功创建: ${mdxFilePath}`);
  });

  // 输出侧边栏 JSON 数据到控制台
  console.log('\n=========================================');
  console.log('🎉 侧边栏数据生成成功！复制下方数组：');
  console.log('=========================================临');
  console.log(JSON.stringify(sidebarData, null, 2));
}

main();
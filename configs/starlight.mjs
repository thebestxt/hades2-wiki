import globalConfigs from "./globalConfigs.mjs"
const { hadesSourceHost } = globalConfigs
export default {
    title: '哈迪斯 II',
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/thebestxt/hades2-wiki' }],
    components: {
        Sidebar: './src/components/CustomSidebar.astro'
    },
    // 为此网站设置英语为默认语言。
    locales: {
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
        root: {
            label: '简体中文',
            lang: 'zh-CN',
        },
    },
    sidebar: [
        {
            label: '概述',
            slug: 'intro',
            items: []
        },
        {
            label: '角色',
            items: [
                {
                    label: '匿踪者',
                    items: [
                        { label: '三岔路口的女巫 - 赫卡忒', slug: 'characters/hecate', attrs: { 'data-icon': `${hadesSourceHost}/hecate_icon.png` } },
                        { label: '冥界王女 - 墨利诺厄', slug: 'characters/melinoe', attrs: { 'data-icon': `${hadesSourceHost}/melinoe_icon.png`} },
                        { label: '冥河摆渡人 - 卡戎', slug: 'characters/charon', attrs: { 'data-icon': `${hadesSourceHost}/charon_icon.png` } },
                        { label: '摩罗斯', slug: 'characters/moros', attrs: { 'data-icon': `${hadesSourceHost}/moros_icon.png` } },
                        { label: '懒鬼 - 朵拉', slug: 'characters/dora', attrs: { 'data-icon': `${hadesSourceHost}/dora_icon.png` } },
                        { label: '变形女巫 - 喀尔刻', slug: 'characters/circe', attrs: { 'data-icon': `${hadesSourceHost}/circe_icon.png` } },
                        { label: '暗影女巫 - 美狄亚', slug: 'characters/medea', attrs: { 'data-icon': `${hadesSourceHost}/medea_icon.png` } },
                        
                        { label: '报应化身 - 涅墨西斯', slug: 'characters/nemesis', attrs: { 'data-icon': `${hadesSourceHost}/nemesis_icon.png` } },
                        { label: '明月化身 - 塞勒涅', slug: 'characters/selene', attrs: { 'data-icon': `${hadesSourceHost}/selene_icon.png` } },
                        { label: '久经沙场的策士 - 奥德修斯', slug: 'characters/odysseus', attrs: { 'data-icon': `${hadesSourceHost}/odysseus_icon.png` } },
                        { label: 'Skelly', slug: 'characters/skelly', attrs: { 'data-icon': `${hadesSourceHost}/skelly_icon.png` } },
                        { label: 'Icarus', slug: 'characters/icarus', attrs: { 'data-icon': `${hadesSourceHost}/icarus_icon.png` } },
                        { label: '倪克斯', slug: 'characters/nyx', attrs: { 'data-icon': `${hadesSourceHost}/nyx_icon.png` } },
                    ]
                },
                {
                    label: '奥林匹斯山众神',
                    items: [
                        { label: '奥林匹斯之王 - 宙斯', slug: 'characters/zeus', attrs: { 'data-icon': `${hadesSourceHost}/zeus_icon.png` } },
                        { label: '奥林匹斯王后 - 赫拉', slug: 'characters/hera', attrs: { 'data-icon': `${hadesSourceHost}/hera_icon.png` } },
                        { label: '波塞冬', slug: 'characters/poseidon', attrs: { 'data-icon': `${hadesSourceHost}/poseidon_icon.png` } },
                        { label: '德墨忒尔', slug: 'characters/demeter', attrs: { 'data-icon': `${hadesSourceHost}/demeter_icon.png` } },
                        { label: '光明之神 - 阿波罗', slug: 'characters/apollo', attrs: { 'data-icon': `${hadesSourceHost}/apollo_icon.png` } },
                        { label: '阿芙洛狄忒', slug: 'characters/aphrodite', attrs: { 'data-icon': `${hadesSourceHost}/aphrodite_icon.png` } },
                        { label: '赫菲斯托斯', slug: 'characters/hephaestus', attrs: { 'data-icon': `${hadesSourceHost}/hephaestus_icon.png` } },
                        { label: '炉灶女神 - 赫斯提亚', slug: 'characters/hestia', attrs: { 'data-icon': `${hadesSourceHost}/hestia_icon.png` } },
                        { label: '阿瑞斯', slug: 'characters/ares', attrs: { 'data-icon': `${hadesSourceHost}/ares_icon.png` } },
                        { label: '智慧女神 - 雅典娜', slug: 'characters/athena', attrs: { 'data-icon': `${hadesSourceHost}/athena_icon.png` } },
                        { label: '狄俄尼索斯', slug: 'characters/dionysus', attrs: { 'data-icon': `${hadesSourceHost}/dionysus_icon.png` } },
                        { label: '狩猎女神 - 阿尔忒弥斯', slug: 'characters/artemis', attrs: { 'data-icon': `${hadesSourceHost}/artemis_icon.png` } },
                        { label: '赫尔墨斯', slug: 'characters/hermes', attrs: { 'data-icon': `${hadesSourceHost}/hermes_icon.png` } },
                    ]
                },
                {
                    label: '其余角色',
                    items: [
                        { label: '克洛诺斯', slug: 'characters/chronos', attrs: { 'data-icon': `${hadesSourceHost}/chronos_icon.png` } },
                        { label: '哈迪斯', slug: 'characters/hades', attrs: { 'data-icon': `${hadesSourceHost}/hades_icon.png` } },
                        { label: '刻耳柏洛斯', slug: 'characters/cerberus', attrs: { 'data-icon': `${hadesSourceHost}/cerberus_icon.png` } },
                        { label: '提丰', slug: 'characters/typhon', attrs: { 'data-icon': `${hadesSourceHost}/typhon_icon.png` } },
                        { label: '先见泰坦 - 普罗米修斯', slug: 'characters/prometheus', attrs: { 'data-icon': `${hadesSourceHost}/prometheus_icon.png` } },
                        { label: '膂力盖世 - 赫拉克勒斯', slug: 'characters/heracles', attrs: { 'data-icon': `${hadesSourceHost}/heracles_icon.png` } },
                        { label: '纷争化身 - 厄里斯', slug: 'characters/eris', attrs: { 'data-icon': `${hadesSourceHost}/eris_icon.png` } },
                        { label: '声名败坏的独眼巨人 - 波吕斐摩斯', slug: 'characters/polyphemus', attrs: { 'data-icon': `${hadesSourceHost}/polyphemus_icon.png` } },
                        { label: '为害四海的灾祸 - 斯库拉', slug: 'characters/scylla', attrs: { 'data-icon': `${hadesSourceHost}/scylla_icon.png` } },
                        { label: '纳西索斯', slug: 'characters/narcissus', attrs: { 'data-icon': `${hadesSourceHost}/narcissus_icon.png` } },
                        { label: '织匠 - 阿拉克捏', slug: 'characters/arachne', attrs: { 'data-icon': `${hadesSourceHost}/arachne_icon.png` } },
                        { label: '修普诺斯', slug: 'characters/hypnos', attrs: { 'data-icon': `${hadesSourceHost}/hypnos_icon.png` } },

                        { label: '冥界王子 - 扎格列欧斯', slug: 'characters/zagreus', attrs: { 'data-icon': `${hadesSourceHost}/zagreus_icon.png` } },
                        { label: '泊尔塞福涅', slug: 'characters/persephone', attrs: { 'data-icon': `${hadesSourceHost}/persephone_icon.png` } },
                        { label: '落寞宁芙 - 回声', slug: 'characters/echo', attrs: { 'data-icon': `${hadesSourceHost}/echo_icon.png` } },
                        { label: '命运三姐妹', slug: 'characters/fates', attrs: { 'data-icon': `${hadesSourceHost}/fates_icon.png` } },
                        { label: '万物本源 - 卡俄斯', slug: 'characters/chaos', attrs: { 'data-icon': `${hadesSourceHost}/chaos_icon.png` } },
                    ]
                }
            ]
        },
        {
            label: '暗夜武器',
            items: [
                {
                    label: '女巫之杖 - 戴斯奇拉',
                    slug: 'weapon/staff',
                    attrs: { 'data-icon': `${hadesSourceHost}/Staff.webp` }
                },
                {
                    label: '姊妹双刃 - 利姆欧罗',
                    slug: 'weapon/blade',
                    attrs: { 'data-icon': `${hadesSourceHost}/Blade.webp` }
                },
                {
                    label: '暗影之炬 - 伊格尼姆',
                    slug: 'weapon/flame',
                    attrs: { 'data-icon': `${hadesSourceHost}/Flame.webp` }
                },
                {
                    label: '月石之斧 - 佐利菲特',
                    slug: 'weapon/axe',
                    attrs: { 'data-icon': `${hadesSourceHost}/Axe.webp` }
                },
                {
                    label: '银白之颅 - 勒瓦尔',
                    slug: 'weapon/skull',
                    attrs: { 'data-icon': `${hadesSourceHost}/Skull.webp` }
                },
                {
                    label: '漆黑战衣 - 柯辛斯',
                    slug: 'weapon/coat',
                    attrs: { 'data-icon': `${hadesSourceHost}/Coat.webp` }
                },
            ]
        },
        {
            label: '采集工具',
            items: [
                {
                    label: '月牙镐',
                    slug: 'tools/pickax',
                    attrs: { 'data-icon': `${hadesSourceHost}/tools/Pickaxe.webp` }
                },
                {
                    label: '安魂石板',
                    slug: 'tools/exorcismbook',
                    attrs: { 'data-icon': `${hadesSourceHost}/tools/ExorcismBook.webp` }
                },
                {
                    label: '银辉铲',
                    slug: 'tools/shovel',
                    attrs: { 'data-icon': `${hadesSourceHost}/tools/Shovel.webp` }
                },
                {
                    label: '钓鱼竿',
                    slug: 'tools/fishingrod',
                    attrs: { 'data-icon': `${hadesSourceHost}/tools/FishingRod.webp` }
                },
            ]
        },
        {
            label: '阿卡那牌',
            slug: 'cards'
        },
        {
            label: '信物',
            items: [
                { label: "银轮", slug: "gifts/silverwheel", attrs: { "data-icon": `${hadesSourceHost}/gifts/Silver_Wheel.webp` }},
                { label: "羊拐骨袋", slug: "gifts/knucklebones", attrs: { "data-icon": `${hadesSourceHost}/gifts/Knuckle_Bones.webp` }},
                { label: "更幸运的牙齿", slug: "gifts/luckiertooth", attrs: { "data-icon": `${hadesSourceHost}/gifts/Luckier_Tooth.webp` }},
                { label: "幽灵洋葱", slug: "gifts/ghostonion", attrs: { "data-icon": `${hadesSourceHost}/gifts/Ghost_Onion.webp` }},
                { label: "邪眼", slug: "gifts/evileye", attrs: { "data-icon": `${hadesSourceHost}/gifts/Evil_Eye.webp` }},
                { label: "零钱包", slug: "gifts/goldpurse", attrs: { "data-icon": `${hadesSourceHost}/gifts/Gold_Purse.webp` }},
                { label: "雕纹胸针", slug: "gifts/engravedpin", attrs: { "data-icon": `${hadesSourceHost}/gifts/Engraved_Pin.webp` }},
                { label: "不谐铃铛", slug: "gifts/discordantbell", attrs: { "data-icon": `${hadesSourceHost}/gifts/Discordant_Bell.webp` }},
                { label: "雪白鹿角", slug: "gifts/whiteantler", attrs: { "data-icon": `${hadesSourceHost}/gifts/White_Antler.webp` }},
                { label: "金属液滴", slug: "gifts/metalicdroplet", attrs: { "data-icon": `${hadesSourceHost}/gifts/Metallic_Droplet.webp` }},
                { label: "皎月光束", slug: "gifts/moonbeam", attrs: { "data-icon": `${hadesSourceHost}/gifts/Moon_Beam.webp` }},
                { label: "云纹手镯", slug: "gifts/cloudbangle", attrs: { "data-icon": `${hadesSourceHost}/gifts/Cloud_Bangle.webp` }},
                { label: "华彩手扇", slug: "gifts/iridescentfan", attrs: { "data-icon": `${hadesSourceHost}/gifts/Iridescent_Fan.webp` }},
                { label: "波漾之海", slug: "gifts/vividsea", attrs: { "data-icon": `${hadesSourceHost}/gifts/Vivid_Sea.webp` }},
                { label: "金穗麦束", slug: "gifts/barleysheaf", attrs: { "data-icon": `${hadesSourceHost}/gifts/Barley_Sheaf.webp` }},
                { label: "和煦光子", slug: "gifts/puresthope", attrs: { "data-icon": `${hadesSourceHost}/gifts/Purest_Hope.webp` }},
                { label: "美丽妆镜", slug: "gifts/beautifulmirror", attrs: { "data-icon": `${hadesSourceHost}/gifts/Beautiful_Mirror.webp` }},
                { label: "精金碎片", slug: "gifts/adamantshard", attrs: { "data-icon": `${hadesSourceHost}/gifts/Adamant_Shard.webp` }},
                { label: "长燃之烬", slug: "gifts/everlastingember", attrs: { "data-icon": `${hadesSourceHost}/gifts/Everlasting_Ember.webp` }},
                { label: "断剑之柄", slug: "gifts/swordhilt", attrs: { "data-icon": `${hadesSourceHost}/gifts/Sword_Hilt.webp` }},
                { label: "蛇发妖护符", slug: "gifts/gorgonamulet", attrs: { "data-icon": `${hadesSourceHost}/gifts/Gorgon_Amulet.webp` }},
                { label: "无花果叶", slug: "gifts/figleaf", attrs: { "data-icon": `${hadesSourceHost}/gifts/Fig_Leaf.webp` }},
                { label: "丝质饰带", slug: "gifts/silkensash", attrs: { "data-icon": `${hadesSourceHost}/gifts/Silken_Sash.webp` }},
                { label: "馥郁小瓶", slug: "gifts/aromaticphial", attrs: { "data-icon": `${hadesSourceHost}/gifts/Aromatic_Phial.webp` }},
                { label: "凹陷之石", slug: "gifts/concavestone", attrs: { "data-icon": `${hadesSourceHost}/gifts/Concave_Stone.webp` }},
                { label: "狮牙", slug: "gifts/lionfang", attrs: { "data-icon": `${hadesSourceHost}/gifts/Lion_Fang.webp` }},
                { label: "黑羊毛", slug: "gifts/blackenedfleece", attrs: { "data-icon": `${hadesSourceHost}/gifts/Blackened_Fleece.webp` }},
                { label: "水晶雕像", slug: "gifts/crystalfigurine", attrs: { "data-icon": `${hadesSourceHost}/gifts/Crystal_Figurine.webp` }},
                { label: "实验之锤", slug: "gifts/experimentalhammer", attrs: { "data-icon": `${hadesSourceHost}/gifts/Experimental_Hammer.webp` }},
                { label: "混沌之胚", slug: "gifts/transcendentembryo", attrs: { "data-icon": `${hadesSourceHost}/gifts/Transcendent_Embryo.webp` }}
                ]
        },
        {
            label: '魔宠',
            items: [
                { label: '弗利诺斯', slug: 'friends/frinos', attrs: { 'data-icon': `${hadesSourceHost}/friends/Frinos.webp` } },
                { label: '图拉', slug: 'friends/toula', attrs: { 'data-icon': `${hadesSourceHost}/friends/Toula.webp` } },
                { label: '拉奇', slug: 'friends/raki', attrs: { 'data-icon': `${hadesSourceHost}/friends/Raki.webp` } },
                { label: '赫库芭', slug: 'friends/hecuba', attrs: { 'data-icon': `${hadesSourceHost}/friends/Hecuba.webp` } },
                { label: '加莉', slug: 'friends/gale', attrs: { 'data-icon': `${hadesSourceHost}/friends/Gale.webp` } },

            ]
        },
        {
            label: '祝福',
            items: [
                {
                    label: '阿波罗',
                    items: [
                        { label: '阿波罗祝福1', slug: '404' }
                    ]
                },
                {
                    label: '赫拉',
                    items: [
                        { label: '赫拉祝福1', slug: '404' }
                    ]
                },
            ]
        },
        {
            label: '咒语',
            slug: 'spells'
        },
        {
            label: '预言',
            slug: 'prophecy'
        },
    ],
}
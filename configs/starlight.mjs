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
                        { label: '赫卡忒', slug: 'characters/hecate', attrs: { 'data-icon': `${hadesSourceHost}/hecate_icon.png` } },
                        { label: '冥界王女 - 墨利诺厄', slug: 'characters/melinoe', attrs: { 'data-icon': `${hadesSourceHost}/melinoe_icon.png`} },
                        { label: '冥河摆渡人 - 卡戎', slug: 'characters/charon', attrs: { 'data-icon': `${hadesSourceHost}/charon_icon.png` } },
                        { label: '摩罗斯', slug: 'characters/moros', attrs: { 'data-icon': `${hadesSourceHost}/moros_icon.png` } },
                        { label: '朵拉', slug: 'characters/dora', attrs: { 'data-icon': `${hadesSourceHost}/dora_icon.png` } },
                        { label: '喀尔刻', slug: 'characters/circe', attrs: { 'data-icon': `${hadesSourceHost}/circe_icon.png` } },
                        { label: '暗影女巫 - 美狄亚', slug: 'characters/medea', attrs: { 'data-icon': `${hadesSourceHost}/medea_icon.png` } },
                        
                        { label: '涅墨西斯', slug: 'characters/nemesis', attrs: { 'data-icon': `${hadesSourceHost}/nemesis_icon.png` } },
                        { label: 'Selene', slug: 'characters/selene', attrs: { 'data-icon': `${hadesSourceHost}/selene_icon.png` } },
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
                        { label: '赫拉', slug: 'characters/hera', attrs: { 'data-icon': `${hadesSourceHost}/hera_icon.png` } },
                        { label: '波塞冬', slug: 'characters/poseidon', attrs: { 'data-icon': `${hadesSourceHost}/poseidon_icon.png` } },
                        { label: '德墨忒尔', slug: 'characters/demeter', attrs: { 'data-icon': `${hadesSourceHost}/demeter_icon.png` } },
                        { label: '光明之神 - 阿波罗', slug: 'characters/apollo', attrs: { 'data-icon': `${hadesSourceHost}/apollo_icon.png` } },
                        { label: '阿芙洛狄忒', slug: 'characters/aphrodite', attrs: { 'data-icon': `${hadesSourceHost}/aphrodite_icon.png` } },
                        { label: '赫菲斯托斯', slug: 'characters/hephaestus', attrs: { 'data-icon': `${hadesSourceHost}/hephaestus_icon.png` } },
                        { label: '赫斯提亚', slug: 'characters/hestia', attrs: { 'data-icon': `${hadesSourceHost}/hestia_icon.png` } },
                        { label: '阿瑞斯', slug: 'characters/ares', attrs: { 'data-icon': `${hadesSourceHost}/ares_icon.png` } },
                        { label: '雅典娜', slug: 'characters/athena', attrs: { 'data-icon': `${hadesSourceHost}/athena_icon.png` } },
                        { label: '狄俄尼索斯', slug: 'characters/dionysus', attrs: { 'data-icon': `${hadesSourceHost}/dionysus_icon.png` } },
                        { label: '阿尔忒弥斯', slug: 'characters/artemis', attrs: { 'data-icon': `${hadesSourceHost}/artemis_icon.png` } },
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
                        { label: '普罗米修斯', slug: 'characters/prometheus', attrs: { 'data-icon': `${hadesSourceHost}/prometheus_icon.png` } },
                        { label: '赫拉克勒斯', slug: 'characters/heracles', attrs: { 'data-icon': `${hadesSourceHost}/heracles_icon.png` } },
                        { label: '纷争化身 - 厄里斯', slug: 'characters/eris', attrs: { 'data-icon': `${hadesSourceHost}/eris_icon.png` } },
                        { label: '声名败坏的独眼巨人 - 波吕斐摩斯', slug: 'characters/polyphemus', attrs: { 'data-icon': `${hadesSourceHost}/polyphemus_icon.png` } },
                        { label: '斯库拉', slug: 'characters/scylla', attrs: { 'data-icon': `${hadesSourceHost}/scylla_icon.png` } },
                        { label: '纳西索斯', slug: 'characters/narcissus', attrs: { 'data-icon': `${hadesSourceHost}/narcissus_icon.png` } },
                        { label: '阿拉克捏', slug: 'characters/arachne', attrs: { 'data-icon': `${hadesSourceHost}/arachne_icon.png` } },
                        { label: '修普诺斯', slug: 'characters/hypnos', attrs: { 'data-icon': `${hadesSourceHost}/hypnos_icon.png` } },

                        { label: '扎格列欧斯', slug: 'characters/zagreus', attrs: { 'data-icon': `${hadesSourceHost}/zagreus_icon.png` } },
                        { label: '泊尔塞福涅', slug: 'characters/persephone', attrs: { 'data-icon': `${hadesSourceHost}/persephone_icon.png` } },
                        { label: '回声', slug: 'characters/echo', attrs: { 'data-icon': `${hadesSourceHost}/echo_icon.png` } },
                        { label: '命运三姐妹', slug: 'characters/fates', attrs: { 'data-icon': `${hadesSourceHost}/fates_icon.png` } },
                        { label: '卡俄斯', slug: 'characters/chaos', attrs: { 'data-icon': `${hadesSourceHost}/chaos_icon.png` } },
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
            label: '信物',
            items: [
                { label: '钱包', slug: '404' },
            ]
        },
        {
            label: '魔宠',
            items: [
                { label: '猫', slug: '404' },
                { label: '蛤', slug: '404' },
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
    ],
}
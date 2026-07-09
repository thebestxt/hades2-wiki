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
                    label: '暗影眷属',
                    items: [
                        { label: '墨利诺厄', slug: 'characters/melinoe', attrs: { 'data-icon': `${hadesSourceHost}/melinoe_icon.png`} },
                        { label: '赫卡忒', slug: 'characters/hecate', attrs: { 'data-icon': `${hadesSourceHost}/hecate_icon.png` } },
                        { label: 'Nemesis', slug: 'characters/nemesis', attrs: { 'data-icon': `${hadesSourceHost}/nemesis_icon.png` } },
                        { label: 'Selene', slug: 'characters/selene', attrs: { 'data-icon': `${hadesSourceHost}/selene_icon.png` } },
                        { label: 'Odysseus', slug: 'characters/odysseus', attrs: { 'data-icon': `${hadesSourceHost}/odysseus_icon.png` } },
                        { label: 'Moros', slug: 'characters/moros', attrs: { 'data-icon': `${hadesSourceHost}/moros_icon.png` } },
                        { label: 'Dora', slug: 'characters/dora', attrs: { 'data-icon': `${hadesSourceHost}/dora_icon.png` } },
                        { label: 'Skelly', slug: 'characters/skelly', attrs: { 'data-icon': `${hadesSourceHost}/skelly_icon.png` } },
                        { label: '卡戎', slug: 'characters/charon', attrs: { 'data-icon': `${hadesSourceHost}/charon_icon.png` } },
                        { label: 'Circe', slug: 'characters/circe', attrs: { 'data-icon': `${hadesSourceHost}/circe_icon.png` } },
                        { label: 'Medea', slug: 'characters/medea', attrs: { 'data-icon': `${hadesSourceHost}/medea_icon.png` } },
                        { label: 'Icarus', slug: 'characters/icarus', attrs: { 'data-icon': `${hadesSourceHost}/icarus_icon.png` } },
                        { label: '倪克斯', slug: 'characters/nyx', attrs: { 'data-icon': `${hadesSourceHost}/nyx_icon.png` } },
                    ]
                },
                {
                    label: '奥林匹斯山众神',
                    items: [
                        { label: '宙斯', slug: 'characters/zeus', attrs: { 'data-icon': `${hadesSourceHost}/zeus_icon.png` } },
                        { label: '赫拉', slug: 'characters/hera', attrs: { 'data-icon': `${hadesSourceHost}/hera_icon.png` } },
                        { label: '波塞冬', slug: 'characters/poseidon', attrs: { 'data-icon': `${hadesSourceHost}/poseidon_icon.png` } },
                        { label: '德墨忒尔', slug: 'characters/demeter', attrs: { 'data-icon': `${hadesSourceHost}/demeter_icon.png` } },
                        { label: '阿波罗', slug: 'characters/apollo', attrs: { 'data-icon': `${hadesSourceHost}/apollo_icon.png` } },
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
                        { label: '扎格列欧斯', slug: 'characters/zagreus', attrs: { 'data-icon': `${hadesSourceHost}/zagreus_icon.png` } },
                        { label: '泊尔塞福涅', slug: 'characters/persephone', attrs: { 'data-icon': `${hadesSourceHost}/persephone_icon.png` } },
                        { label: '渊狱魔兽', slug: 'characters/cerberus', attrs: { 'data-icon': `${hadesSourceHost}/cerberus_icon.png` } },
                        { label: '提丰', slug: 'characters/typhon', attrs: { 'data-icon': `${hadesSourceHost}/typhon_icon.png` } },
                        { label: 'Heracles', slug: 'characters/heracles', attrs: { 'data-icon': `${hadesSourceHost}/heracles_icon.png` } },
                        { label: 'Arachne', slug: 'characters/arachne', attrs: { 'data-icon': `${hadesSourceHost}/arachne_icon.png` } },
                        { label: 'Narcissus', slug: 'characters/narcissus', attrs: { 'data-icon': `${hadesSourceHost}/narcissus_icon.png` } },
                        { label: '回声', slug: 'characters/echo', attrs: { 'data-icon': `${hadesSourceHost}/echo_icon.png` } },
                        { label: 'Scylla', slug: 'characters/scylla', attrs: { 'data-icon': `${hadesSourceHost}/scylla_icon.png` } },
                        { label: '独眼巨人', slug: 'characters/polyphemus', attrs: { 'data-icon': `${hadesSourceHost}/polyphemus_icon.png` } },
                        { label: '厄里斯', slug: 'characters/eris', attrs: { 'data-icon': `${hadesSourceHost}/eris_icon.png` } },
                        { label: '普罗米修斯', slug: 'characters/prometheus', attrs: { 'data-icon': `${hadesSourceHost}/prometheus_icon.png` } },
                        { label: 'Hypnos', slug: 'characters/hypnos', attrs: { 'data-icon': `${hadesSourceHost}/hypnos_icon.png` } },
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
                    label: '法杖',
                    items: [
                        { label: '法杖1', slug: '404' },
                        { label: '法杖2', slug: '404' },
                        { label: '法杖3', slug: '404' },
                    ]
                },
                {
                    label: '斧子',
                    items: [
                        { label: '斧子1', slug: '404' },
                        { label: '斧子2', slug: '404' },
                        { label: '斧子3', slug: '404' },
                    ]
                },
                {
                    label: '双刃',
                    items: [
                        { label: '双刃1', slug: '404' },
                        { label: '双刃2', slug: '404' },
                        { label: '双刃3', slug: '404' },
                    ]
                },
                {
                    label: '火炬',
                    items: [
                        { label: '火炬1', slug: '404' },
                        { label: '火炬2', slug: '404' },
                        { label: '火炬3', slug: '404' },
                    ]
                },
                {
                    label: '战衣',
                    items: [
                        { label: '战衣1', slug: '404' },
                        { label: '战衣2', slug: '404' },
                        { label: '战衣3', slug: '404' },
                    ]
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
        {
            label: '锤子强化',
            items: [
                {
                    label: '火炬',
                    items: [
                        { label: '火炬强化1', slug: '404' }
                    ]
                },
                {
                    label: '战衣',
                    items: [
                        { label: '战衣强化1', slug: '404' }
                    ]
                },
            ]
        }
    ],
}
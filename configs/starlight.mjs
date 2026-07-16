import globalConfigs from "./globalConfigs.mjs"
const { hadesSourceHost } = globalConfigs
import charecter from "./sidebar/charecter"
import weapon from "./sidebar/weapon"
import tools from './sidebar/tools'
import gift from "./sidebar/gift"
import friends from "./sidebar/friends"
import wishes from "./sidebar/wishes"

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
            label: '基础概念',
            slug: 'base'
        },
        {
            label: '角色',
            items: charecter
        },
        {
            label: '祝福',
            items: wishes
        },
        {
            label: '暗夜武器',
            items: weapon
        },
        {
            label: '采集工具',
            items: tools
        },
        {
            label: '阿卡那牌',
            slug: 'cards'
        },
        {
            label: '魔宠',
            items: friends
        },
        {
            label: '信物',
            items: gift
        },
        {
            label: '道具',
            items: [
                {
                    label: '作物',
                    slug: 'plants'
                },
                {
                    label: '炼金材料',
                    slug: 'material'
                },
                {
                    label: '礼物',
                    slug: 'goods'
                }
            ]
        },
        {
            label: '商店',
            items: [
                { label: '卡戎之井', slug: 'shops/charon' },
                { label: '黑商', slug: 'shops/charon' },
                { label: '赫尔墨斯快递', slug: 'shops/charon' },
                { label: '残魂商人', slug: 'shops/charon' },
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
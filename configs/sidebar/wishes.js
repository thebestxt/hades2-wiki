import globalConfigs from "../globalConfigs.mjs"
const { hadesSourceHost } = globalConfigs

export default [
    { label: '宙斯', slug: 'wishes/zeus', attrs: { 'data-icon': `${hadesSourceHost}/awardsIcon/Zeus_reward.webp` } },
    { label: '赫拉', slug: 'wishes/hera', attrs: { 'data-icon': `${hadesSourceHost}/awardsIcon/Hera_reward.webp` } },
    { label: '波塞冬', slug: 'wishes/poseidon', attrs: { 'data-icon': `${hadesSourceHost}/awardsIcon/Poseidon_reward.webp` } },
    { label: '德墨忒尔', slug: 'wishes/demeter', attrs: { 'data-icon': `${hadesSourceHost}/awardsIcon/Demeter_reward.webp` } },
]
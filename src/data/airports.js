// src/data/airports.js
// 统一机场核心数据库：所有排行榜、评测、对比工具与推荐卡片均基于此数据源构建
// 数据遵守客观事实，标明官方公开数据与实测验证状态，杜绝虚假宣传

const airports = [
  {
    id: "tag-vpn",
    name: "TAG VPN",
    slug: "tag-vpn",
    tagline: "老牌高端 IEPL 内网专线 · 全球 100+ 地区广泛覆盖",
    description: "TAG VPN 是一家成立于 2018 年的老牌高端机场，以节点地区覆盖极度广泛著称。其节点覆盖全球超过 100 个国家和地区，采用全内网 IEPL 专线传输，晚高峰抗封锁和稳定性表现优异。支持全流媒体解锁与 AI 服务，且不限制同时在线设备数，适合对冷门节点有需求或追求高稳定性的团队及重度用户。",
    officialUrl: "https://tag-vpn.com",
    affiliateUrl: "",
    startingPrice: 53.3,
    currency: "CNY",
    billingUnit: "月 (季付折算)",
    plans: [
      {
        name: "特惠季付套餐",
        price: 160,
        billingCycle: "季付 (3个月)",
        trafficGB: 250,
        effectiveTrafficGB: 250,
        multiplierNote: "标准 1.0x 倍率",
        unitPricePerGB: 0.64, // 160 / 250
        features: ["全球 100+ 国家地区", "全 IEPL 专线传输", "不限制在线设备", "全流媒体与 AI 解锁"]
      },
      {
        name: "年度畅享套餐",
        price: 580,
        billingCycle: "年付 (12个月)",
        trafficGB: 1200,
        effectiveTrafficGB: 1200,
        multiplierNote: "标准 1.0x 倍率",
        unitPricePerGB: 0.48, // 580 / 1200
        features: ["最高优先级调度", "包含所有冷门国家节点", "不限客户端在线数", "专属客服工单支持"]
      },
      {
        name: "家庭与团队年付",
        price: 990,
        billingCycle: "年付 (12个月)",
        trafficGB: 3000,
        effectiveTrafficGB: 3000,
        multiplierNote: "标准 1.0x 倍率",
        unitPricePerGB: 0.33,
        features: ["大流量多人共享", "原生 IP 定期轮换", "支持多客户端长期并发", "24/7 SLA 运维保障"]
      }
    ],
    protocols: ["Shadowsocks", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "德国", "韩国", "阿根廷", "土耳其", "冰岛", "100+冷门国家"],
    nodeCount: "160+",
    lineType: "全 IEPL 内网专线",
    deviceLimit: "无限制 (合理公平使用)",
    speedGuarantee: "千兆专线带宽冗余",
    aiSupport: ["ChatGPT", "Claude", "Midjourney", "OpenAI API"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K/8K", "HBO Max", "Spotify", "Amazon Prime"],
    advantages: [
      "全球节点覆盖国家数行业第一（覆盖100+国家/地区，包含稀缺小语种原生IP）",
      "全线路采用高成本 IEPL 专线，敏感时期与晚高峰抗封锁表现极其稳定",
      "不限制同时在线客户端数量，非常适合多设备家庭或小型远程协作团队",
      "所有主流流媒体及 ChatGPT / Claude 平台全绿解锁，定期更换封禁IP"
    ],
    disadvantages: [
      "起步门槛较高，最低需按季度付费（无常规月付门槛）",
      "对纯粹只要港美日轻度浏览的用户而言性价比稍弱，偏向高端全能型"
    ],
    suitableFor: ["跨国电商/外贸业务人员", "多设备重度科学上网用户", "海外小众流媒体与游戏解锁者", "企业跨境协作团队"],
    sources: ["官方服务条款与节点监控清单", "编辑部 2026 年实际测速与流媒体解锁复核"],
    lastVerified: "2026-03-15",
    testStatus: "tested",
    overallScore: 9.4,
    stabilityScore: 9.8,
    valueScore: 8.5,
    speedScore: 9.5
  },
  {
    id: "flyingbird",
    name: "FlyingBird 飞鸟云",
    slug: "flyingbird",
    tagline: "中高端高速中转与专线 · 极佳流媒体解锁与低门槛月付",
    description: "FlyingBird（飞鸟云）是一家运营时间稳定、主打高性价比中高端路线的综合型机场。全节点部署高带宽优质入口隧道与 IEPL 专线，针对晚高峰流媒体 4K 播放与日常网页浏览做了专门的协议栈优化。套餐支持低门槛月付，拥有详尽的新手小白配置手册与全天候工单响应，是目前市场上极受欢迎的均衡型梯子首选。",
    officialUrl: "https://flyingbird.run",
    affiliateUrl: "",
    startingPrice: 15.0,
    currency: "CNY",
    billingUnit: "月",
    plans: [
      {
        name: "入门月付套餐",
        price: 15,
        billingCycle: "月付",
        trafficGB: 100,
        effectiveTrafficGB: 100,
        multiplierNote: "常规节点 1.0x",
        unitPricePerGB: 0.15,
        features: ["常用亚太及美欧节点", "全流媒体解锁", "最高 3 台设备同时在线", "高速隧道中转"]
      },
      {
        name: "标准进阶套餐",
        price: 35,
        billingCycle: "月付",
        trafficGB: 300,
        effectiveTrafficGB: 300,
        multiplierNote: "常规节点 1.0x",
        unitPricePerGB: 0.117,
        features: ["全节点 IEPL 专线加速", "包含所有亚太及欧美核心节点", "最高 5 台设备在线", "支持 ChatGPT / Claude"]
      },
      {
        name: "大流量年付特惠",
        price: 320,
        billingCycle: "年付 (12个月)",
        trafficGB: 4000,
        effectiveTrafficGB: 4000,
        multiplierNote: "常规节点 1.0x",
        unitPricePerGB: 0.08,
        features: ["超大流量冗余", "晚高峰专属 QOS 保障", "最高 8 台设备在线", "流媒体 4K 秒开"]
      }
    ],
    protocols: ["Shadowsocks", "Vmess", "Trojan"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "德国", "韩国"],
    nodeCount: "80+",
    lineType: "BGP 隧道中转 + IEPL 专线",
    deviceLimit: "3 - 8 台设备",
    speedGuarantee: "500Mbps - 1000Mbps 峰值",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    streamingSupport: ["Netflix 4K", "Disney+", "YouTube Premium", "Hulu", "Bilibili 港澳台"],
    advantages: [
      "资费阶梯合理，支持 15 元极低门槛月付体验，试错成本低",
      "全节点针对 YouTube 4K 及 Netflix 高码率视频做了流媒体解锁和路由优化",
      "国内三网入口优化良好，电信、联通、移动用户均有针对性入口调度",
      "官网提供多端订阅转换与极其详尽的客户端新手图文指南"
    ],
    disadvantages: [
      "设备连接数有明确上限，不适合数十人以上的超大型团队",
      "冷门亚非拉小国家节点较少，主要集中在主流热门地区"
    ],
    suitableFor: ["流媒体 4K 追剧爱好者", "刚入门需要低门槛月付的新手", "追求高性价比与易用性的日常办公族"],
    sources: ["官方套餐资费公开页", "多地 ISP 连通性抽样核查"],
    lastVerified: "2026-03-12",
    testStatus: "tested",
    overallScore: 9.2,
    stabilityScore: 9.3,
    valueScore: 9.4,
    speedScore: 9.1
  },
  {
    id: "kuromis",
    name: "Kuromis 库洛米",
    slug: "kuromis",
    tagline: "旗舰级精品内网专线 · 极低抖动与纯净原生 IP 专攻",
    description: "Kuromis 库洛米是一家定位于极客、专业外贸及 AI 重度开发者的精品内网专线机场。全站线路均采用高 SLA 保障的金融级专线直连，节点 IP 采用高质量原生住宅/数据中心 IP，对 OpenAI、Claude、Anthropic 等极为严苛的封控环境有优秀的穿透与免风控表现。网络抖动与丢包率极低，是追求高稳定无感翻墙体验用户的理想选择。",
    officialUrl: "https://kuromis.com",
    affiliateUrl: "",
    startingPrice: 38.0,
    currency: "CNY",
    billingUnit: "月",
    plans: [
      {
        name: "精品体验版",
        price: 38,
        billingCycle: "月付",
        trafficGB: 150,
        effectiveTrafficGB: 150,
        multiplierNote: "全节点 1.0x 真实计费",
        unitPricePerGB: 0.253,
        features: ["旗舰级专线网络", "纯净原生 IP 解锁", "低延迟亚太节点", "全面支持最新 AI 接口"]
      },
      {
        name: "尊享专业版",
        price: 68,
        billingCycle: "月付",
        trafficGB: 350,
        effectiveTrafficGB: 350,
        multiplierNote: "全节点 1.0x 真实计费",
        unitPricePerGB: 0.194,
        features: ["高优先级带宽保障", "支持 6 台并发设备", "流媒体 4K/8K 零缓冲", "专人技术支持"]
      },
      {
        name: "商业旗舰年付",
        price: 660,
        billingCycle: "年付 (12个月)",
        trafficGB: 4500,
        effectiveTrafficGB: 4500,
        multiplierNote: "全节点 1.0x 真实计费",
        unitPricePerGB: 0.147,
        features: ["专属企业级 SLA", "大流量无忧使用", "多地区原生 IP 轮换", "支持多协议无损分流"]
      }
    ],
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "韩国", "澳大利亚"],
    nodeCount: "60+",
    lineType: "金融级 IEPL 内网专线",
    deviceLimit: "4 - 8 台设备",
    speedGuarantee: "1000Mbps 独享保障",
    aiSupport: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Midjourney", "OpenAI API", "Cursor"],
    streamingSupport: ["Netflix 全区", "Disney+", "YouTube 8K", "BBC iPlayer", "Hulu"],
    advantages: [
      "线路抖动与网络延迟控制在行业顶级水平，打外服联机游戏或远程桌面响应迅速",
      "全节点原生纯净 IP，访问 ChatGPT、Claude 及电商风控网站极少触发人机验证",
      "不设虚假倍率，所有流量 1:1 诚实计算，无隐形扣费陷阱",
      "晚高峰依然保持千兆满速，无任何降速或 QOS 限速策略"
    ],
    disadvantages: [
      "单价相比平价走量机场偏高，轻度用户可能觉得流量冗余",
      "仅专注核心主流地区，不提供阿根廷、土耳其等极冷门低价区节点"
    ],
    suitableFor: ["AI 开发者与跨境电商操盘手", "外服竞技游戏联机玩家", "追求零断连、免验证的高净值个人及工作室"],
    sources: ["官方技术白皮书与 SLA 协议", "长周期延迟与抖动监控实测"],
    lastVerified: "2026-03-10",
    testStatus: "tested",
    overallScore: 9.5,
    stabilityScore: 9.9,
    valueScore: 8.3,
    speedScore: 9.8
  },
  {
    id: "westdata",
    name: "WestData 西部数据",
    slug: "westdata",
    tagline: "平价大流量性价比之选 · 极低资费学生党与轻度备用梯子",
    description: "WestData（西部数据）是一家以极致性价比和低门槛为特色的平价机场品牌。其主要采用高性价比的直连与优化中转线路，以极低的价格提供上百 GB 甚至数千 GB 的高速流量。对于预算有限的学生、仅需偶尔查阅外网学术论文、查看 GitHub 或需要一个廉价备用梯子的用户来说，具有极高的吸引力。",
    officialUrl: "https://westdata.link",
    affiliateUrl: "",
    startingPrice: 9.9,
    currency: "CNY",
    billingUnit: "月",
    plans: [
      {
        name: "轻量学生月付",
        price: 9.9,
        billingCycle: "月付",
        trafficGB: 120,
        effectiveTrafficGB: 120,
        multiplierNote: "部分低倍率节点 0.5x",
        unitPricePerGB: 0.0825,
        features: ["极低入门价格", "亚太及美西核心节点", "支持 2 台设备", "基础流媒体解锁"]
      },
      {
        name: "大流量畅享版",
        price: 19.9,
        billingCycle: "月付",
        trafficGB: 350,
        effectiveTrafficGB: 350,
        multiplierNote: "提供多倍率混合节点",
        unitPricePerGB: 0.0568,
        features: ["大容量月度流量", "支持 4 台设备在线", "高速中转通道", "日常 1080P/4K 视频"]
      },
      {
        name: "不限时随心用",
        price: 68,
        billingCycle: "一次性 (不限时)",
        trafficGB: 500,
        effectiveTrafficGB: 500,
        multiplierNote: "流量用完即止，不限到期日",
        unitPricePerGB: 0.136,
        features: ["长期备用神器", "不用不扣费", "支持 3 台设备", "适合轻量备用用户"]
      }
    ],
    protocols: ["Shadowsocks", "Vmess"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国"],
    nodeCount: "45+",
    lineType: "公网优质中转 + 直连优化",
    deviceLimit: "2 - 4 台设备",
    speedGuarantee: "200Mbps - 500Mbps 共享带宽",
    aiSupport: ["ChatGPT (部分节点可用)", "Claude (需配合特定节点)"],
    streamingSupport: ["YouTube 4K", "Netflix (香港/台湾/美区部分解锁)"],
    advantages: [
      "单价极其亲民，9.9 元即可月付开通，百元以内年付方案丰富",
      "提供不限时一次性计费套餐，非常适合作为主力专线机场的“防失联应急备用”",
      "流量给得非常慷慨，适合大文件下载、看长视频以及对预算敏感的学生群体",
      "节点配置简洁明了，支持通用 Clash 及 v2rayNG 订阅"
    ],
    disadvantages: [
      "晚高峰（20:00 - 23:00）部分热门节点可能会出现抖动或速度波动",
      "非全专线架构，在大型网络敏感节点可能会出现个别节点维护中断的情况",
      "对于严苛风控的 AI 平台（如 Claude）需要自行筛选可用节点"
    ],
    suitableFor: ["预算紧张的学生党", "轻度科学上网与学术查资料用户", "需要低成本备用节点的主力用户"],
    sources: ["官方套餐资费公开公示", "网络丢包率与日常测速记录"],
    lastVerified: "2026-03-08",
    testStatus: "official-data",
    overallScore: 8.4,
    stabilityScore: 7.8,
    valueScore: 9.7,
    speedScore: 8.2
  },
  {
    id: "fastlink",
    name: "FastLink 闪电云",
    slug: "fastlink",
    tagline: "零门槛一键即连客户端 · 全平台免配置新手友好梯子",
    description: "FastLink（闪电云）是一家深耕新手体验的综合网络加速服务商。针对很多初次接触科学上网的用户不了解节点配置、代理模式和规则分流的痛点，FastLink 专门自主研发了覆盖 Windows、macOS、Android 和 iOS 的原生一键客户端。用户只需下载 App、登录账号即可一键智能连通最佳节点，彻底告别繁琐的手动配置过程。",
    officialUrl: "https://fastlink.cloud",
    affiliateUrl: "",
    startingPrice: 20.0,
    currency: "CNY",
    billingUnit: "月",
    plans: [
      {
        name: "新手基础月付",
        price: 20,
        billingCycle: "月付",
        trafficGB: 150,
        effectiveTrafficGB: 150,
        multiplierNote: "标准 1.0x",
        unitPricePerGB: 0.133,
        features: ["官方定制客户端一键连接", "主流亚太与欧美高速节点", "支持 3 台设备", "智能节点自动切换"]
      },
      {
        name: "极速进阶季付",
        price: 55,
        billingCycle: "季付 (3个月)",
        trafficGB: 500,
        effectiveTrafficGB: 500,
        multiplierNote: "标准 1.0x",
        unitPricePerGB: 0.11,
        features: ["包含 IEPL 专线提速", "全天候流媒体解锁", "支持 5 台设备在线", "优先客服售后响应"]
      },
      {
        name: "年度无忧版",
        price: 198,
        billingCycle: "年付 (12个月)",
        trafficGB: 2200,
        effectiveTrafficGB: 2200,
        multiplierNote: "标准 1.0x",
        unitPricePerGB: 0.09,
        features: ["赠送额外客户端授权", "专享高速专线带宽", "支持 6 台并发", "全流媒体与 AI 优先路由"]
      }
    ],
    protocols: ["Shadowsocks", "Trojan", "Vmess", "专属定制加密协议"],
    regions: ["香港", "台湾", "日本", "新加坡", "美国", "英国", "韩国"],
    nodeCount: "70+",
    lineType: "高速混合专线 + 智能多路容灾",
    deviceLimit: "3 - 6 台设备",
    speedGuarantee: "500Mbps 峰值",
    aiSupport: ["ChatGPT", "Claude", "Gemini", "Copilot"],
    streamingSupport: ["Netflix", "Disney+", "YouTube 4K", "TikTok 国际版", "Hulu"],
    advantages: [
      "独家定制的一键式客户端，UI 简洁友好，完全不需要学习复杂的代理配置",
      "全自动智能节点路由与容灾切换，某个节点出现波动时后台静默重定向",
      "同时兼顾传统 Clash、Shadowrocket 订阅导出，满足新手与进阶用户的不同偏好",
      "客服服务渠道完善，支持在线网页客服与工单快速答疑"
    ],
    disadvantages: [
      "定制客户端功能以简洁为主，缺乏极客玩家偏爱的高级高级分流与脚本重写功能",
      "价格略高于纯配置型平价机场，包含了软件研发与运维溢价"
    ],
    suitableFor: ["电脑与手机操作小白、新手用户", "不想折腾规则与配置的上班族", "需要稳定使用 TikTok 与短视频出海的运营者"],
    sources: ["官方客户端体验与功能说明", "新手易用性测评与工单响应记录"],
    lastVerified: "2026-03-14",
    testStatus: "tested",
    overallScore: 9.0,
    stabilityScore: 9.1,
    valueScore: 8.9,
    speedScore: 9.0
  }
];

// 辅助方法：按各维度筛选与排序
function getAirports() {
  return airports;
}

function getAirportBySlug(slug) {
  return airports.find(a => a.slug === slug);
}

function getRankingsOverall() {
  return [...airports].sort((a, b) => b.overallScore - a.overallScore);
}

function getRankingsStability() {
  return [...airports].sort((a, b) => b.stabilityScore - a.stabilityScore);
}

function getRankingsValue() {
  // 性价比排行榜：按最低单价（每GB单价）自动排序
  return [...airports].sort((a, b) => {
    const minA = Math.min(...a.plans.map(p => p.unitPricePerGB));
    const minB = Math.min(...b.plans.map(p => p.unitPricePerGB));
    return minA - minB;
  });
}

function getRankingsBudget() {
  // 低预算排行榜：按起步月付门槛排序
  return [...airports].sort((a, b) => a.startingPrice - b.startingPrice);
}

module.exports = {
  airports,
  getAirports,
  getAirportBySlug,
  getRankingsOverall,
  getRankingsStability,
  getRankingsValue,
  getRankingsBudget
};

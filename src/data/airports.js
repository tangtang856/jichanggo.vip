// src/data/airports.js
// 统一机场核心数据库：14个精选品牌参数、资费与专属推广链接 (按用户指定排位严格排序)

const airports = [
  {
    "id": "breezenet",
    "name": "微风网络 Breezenet",
    "slug": "breezenet",
    "tagline": "IEPL/IPLC 专线网络 · 200GB 大流量与 VLESS 协议支持",
    "description": "微风网络 Breezenet 专注于提供高质量专线体验，以 ¥8/月超低起步价提供 200GB 充沛月度流量。全网采用 IEPL/IPLC 主干专线与现代 VLESS 安全协议，兼顾极低门槛与高稳定性，是目前市场上极具竞争力的高性价比入门首选品牌。",
    "officialUrl": "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
    "startingPrice": 8,
    "currency": "CNY",
    "billingUnit": "月",
    "coupon": "weifeng90",
    "plans": [
      {
        "name": "超值体验月付",
        "price": 8,
        "billingCycle": "月付",
        "trafficGB": 200,
        "effectiveTrafficGB": 200,
        "multiplierNote": "标准 1.0x 倍率",
        "unitPricePerGB": 0.04,
        "features": [
          "IEPL/IPLC 主干专线",
          "200GB 大额月付流量",
          "单 GB 成本仅 0.04 元",
          "VLESS 协议支持"
        ]
      },
      {
        "name": "大流量年度特惠",
        "price": 88,
        "billingCycle": "年付",
        "trafficGB": 2500,
        "effectiveTrafficGB": 2500,
        "multiplierNote": "标准 1.0x 倍率",
        "unitPricePerGB": 0.035,
        "features": [
          "全节点解锁",
          "晚高峰优先通道",
          "大容量储备",
          "性价比顶级"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国",
      "韩国"
    ],
    "nodeCount": "80+",
    "lineType": "IEPL/IPLC专线",
    "deviceLimit": "3 - 5 台",
    "speedGuarantee": "500Mbps - 1000Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K",
      "Bilibili 港澳台"
    ],
    "advantages": [
      "¥8/月超低起步门槛，标配 200GB 充沛流量，单 GB 仅 0.04 元",
      "采用 IEPL/IPLC 专线物理主干，无惧晚高峰公网网络拥堵",
      "VLESS 先进加密协议支持，连接稳定隐蔽抗识别",
      "专属优惠券 weifeng90 结账立减折扣"
    ],
    "disadvantages": [
      "低价套餐在促销期偶尔需要排队开通",
      "设备连接数限制在 3-5 台，不适合超大型企业并发"
    ],
    "suitableFor": [
      "新手小白入门第一站",
      "日常高清流媒体与 AI 工具重度使用者",
      "学生党与预算有限的大流量用户"
    ],
    "sources": [
      "jiediantuijian.shop 实测资费表",
      "三网日常延迟监测记录"
    ],
    "lastVerified": "2026-03-15",
    "testStatus": "tested",
    "overallScore": 9.8,
    "stabilityScore": 9.6,
    "valueScore": 9.8,
    "speedScore": 9.4,
    "rank": 1
  },
  {
    "id": "muguang",
    "name": "暮光网络",
    "slug": "muguang",
    "tagline": "专线节点网络架构 · 120GB/月充足配额与 VLESS 协议",
    "description": "暮光网络部署了覆盖亚太及欧美的专线节点，采用先进的 VLESS 协议体系，为多设备家庭与大流量下载用户提供高稳定、低抖动的网络体验。20元/月起步提供 120GB 流量，在稳定性和性价比之间保持了优异的平衡。",
    "officialUrl": "https://varnexa.twilightaff.com/#/?code=8EtJCnBT",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=8EtJCnBT",
    "startingPrice": 20,
    "currency": "CNY",
    "billingUnit": "月",
    "plans": [
      {
        "name": "专线进阶月付",
        "price": 20,
        "billingCycle": "月付",
        "trafficGB": 120,
        "effectiveTrafficGB": 120,
        "multiplierNote": "1.0x 标准倍率",
        "unitPricePerGB": 0.167,
        "features": [
          "专线节点网络架构",
          "120GB 实用配额",
          "VLESS 现代协议",
          "全天候 YouTube 4K"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS",
      "Trojan"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "nodeCount": "55+",
    "lineType": "专线节点",
    "deviceLimit": "3 - 5 台",
    "speedGuarantee": "500Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Copilot"
    ],
    "streamingSupport": [
      "Netflix 4K",
      "Disney+",
      "YouTube 4K",
      "Bilibili"
    ],
    "advantages": [
      "专线节点网络架构，晚高峰平稳流畅不降速",
      "120GB 起步流量充裕，单 GB 成本 0.167 元，日常追剧无压力",
      "全面支持 VLESS 先进安全协议，隐蔽性强，连接不易受阻",
      "亚太地区核心主流节点延迟低，响应迅速"
    ],
    "disadvantages": [
      "暂无低于 15 元的极小额体验包",
      "冷门偏远地区节点覆盖较少"
    ],
    "suitableFor": [
      "学生党与预算有限的大流量用户",
      "YouTube 4K 日常播放与办公需求",
      "追求平稳专线体验的家庭用户"
    ],
    "sources": [
      "jiediantuijian.shop 平台实测数据",
      "运营商晚高峰丢包核查"
    ],
    "lastVerified": "2026-03-13",
    "testStatus": "tested",
    "overallScore": 9.7,
    "stabilityScore": 9.4,
    "valueScore": 9.3,
    "speedScore": 9.3,
    "rank": 2
  },
  {
    "id": "feimaoyun",
    "name": "飞猫云",
    "slug": "feimaoyun",
    "tagline": "IEPL/IPLC 与优质中转 · 150GB 高性价比入门首选",
    "description": "飞猫云采用 IEPL/IPLC 专线与优质中转混合调度链路，年付折算约 ¥7/月起即可获得 150GB 流量。针对新手提供完善的一键导入客户端与专属折扣优惠券，在极低资费下保持了优秀的流媒体解锁与浏览速度。",
    "officialUrl": "https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx",
    "affiliateUrl": "https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx",
    "startingPrice": 7,
    "currency": "CNY",
    "billingUnit": "月 (年付折算)",
    "coupon": "flycat888",
    "plans": [
      {
        "name": "特惠入门版",
        "price": 7,
        "billingCycle": "月 (折算)",
        "trafficGB": 150,
        "effectiveTrafficGB": 150,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.047,
        "features": [
          "专线与优质中转结合",
          "150GB 充足流量",
          "单 GB 仅 0.047 元",
          "优惠码立减"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Vmess",
      "Trojan"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "nodeCount": "60+",
    "lineType": "IEPL/IPLC / 优质中转线路",
    "deviceLimit": "3 - 5 台",
    "speedGuarantee": "500Mbps 共享带宽",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K"
    ],
    "advantages": [
      "年付折算约 ¥7/月起，拥有 150GB 充足可用流量，极致性价比",
      "IEPL/IPLC 结合公网优质中转线路，兼顾速度与成本",
      "专属优惠码 flycat888 实惠可用，结账折上折",
      "节点连接响应快，对常用亚太地区视频解锁良好"
    ],
    "disadvantages": [
      "极低单价主要依托长期年付方案实现",
      "晚高峰极少数热门节点偶有带宽波动"
    ],
    "suitableFor": [
      "预算有限的学生党与新手入门",
      "日常网络浏览与高清视频播放",
      "追求单 GB 超低成本的精打细算者"
    ],
    "sources": [
      "jiediantuijian.shop 官方公开页",
      "抽样测速记录"
    ],
    "lastVerified": "2026-03-13",
    "testStatus": "tested",
    "overallScore": 9.6,
    "stabilityScore": 9.1,
    "valueScore": 9.7,
    "speedScore": 9.2,
    "rank": 3
  },
  {
    "id": "wuyou",
    "name": "无忧",
    "slug": "wuyou",
    "tagline": "IPLC 国际专线 · 100GB/月稳定高可用与 20 元内品质标杆",
    "description": "无忧（无忧链接）主打稳定可靠的 IPLC 内网专线节点，为轻中度办公与学术研究提供低延迟、防丢包的纯净连接。月付仅需 19 元即可享受 100GB 专线流量，是预算在 20 元以内的品质专线标杆。",
    "officialUrl": "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
    "startingPrice": 19,
    "currency": "CNY",
    "billingUnit": "月",
    "coupon": "wuyou666",
    "plans": [
      {
        "name": "IPLC 实用月付",
        "price": 19,
        "billingCycle": "月付",
        "trafficGB": 100,
        "effectiveTrafficGB": 100,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.19,
        "features": [
          "IPLC 内网专线",
          "100GB 月度可用",
          "支持优惠码立减",
          "多协议支持"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "nodeCount": "45+",
    "lineType": "IPLC",
    "deviceLimit": "3 - 5 台",
    "speedGuarantee": "500Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K"
    ],
    "advantages": [
      "19 元超亲民月付价格即可上车 IPLC 专线",
      "专属优惠券 wuyou666 可享进一步优惠",
      "节点连接稳定，敏感时期不易失联",
      "配置清晰，支持常用全套客户端一键导入"
    ],
    "disadvantages": [
      "100GB 流量对超重度下载用户略显紧凑",
      "主要精选核心亚太节点，节点数量中等"
    ],
    "suitableFor": [
      "预算在 20 元以内且追求专线质量的用户",
      "轻中度日常办公学习与外贸往来",
      "需要稳定翻墙备用通道的用户"
    ],
    "sources": [
      "jiediantuijian.shop 平台实测数据",
      "晚高峰延迟复测"
    ],
    "lastVerified": "2026-03-12",
    "testStatus": "tested",
    "overallScore": 9.5,
    "stabilityScore": 9.4,
    "valueScore": 9.3,
    "speedScore": 9.2,
    "rank": 4
  },
  {
    "id": "lingmao",
    "name": "灵猫",
    "slug": "lingmao",
    "tagline": "IPLC 专线网络 · 150GB 大流量与 4K 流媒体优化",
    "description": "灵猫专注于高品质 IPLC 专线网络加速，节点覆盖亚太热门区域，全节点解锁 Netflix 与 Disney+，晚高峰稳定无缓冲。资费 25 元/月给到 150GB 真实流量，单 GB 仅 0.167 元，深受办公白领与高清追剧族的喜爱。",
    "officialUrl": "https://vip02.civetaff.com/#/?code=SXY8qyrG",
    "affiliateUrl": "https://vip02.civetaff.com/#/?code=SXY8qyrG",
    "startingPrice": 25,
    "currency": "CNY",
    "billingUnit": "月",
    "plans": [
      {
        "name": "IPLC 白领月付",
        "price": 25,
        "billingCycle": "月付",
        "trafficGB": 150,
        "effectiveTrafficGB": 150,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.167,
        "features": [
          "IPLC 内网专线",
          "150GB 大额月度配额",
          "流媒体 4K 全解锁",
          "三网智能路由"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "nodeCount": "50+",
    "lineType": "IPLC",
    "deviceLimit": "4 台",
    "speedGuarantee": "800Mbps 专线",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Midjourney"
    ],
    "streamingSupport": [
      "Netflix 全区",
      "Disney+",
      "YouTube 4K/8K",
      "Spotify"
    ],
    "advantages": [
      "IPLC 专线全内网传输，晚高峰无卡顿断流现象",
      "150GB 实用月度配额，单 GB 成本 0.167 元，定价公道",
      "流媒体 4K 播放深度优化，大码率秒开无缓冲圈",
      "工单响应及时，节点维护更新频次高"
    ],
    "disadvantages": [
      "设备连接数限制 4 台，超量设备需另行选购",
      "无低于 20 元的微型迷你套餐"
    ],
    "suitableFor": [
      "对稳定性有较高要求的白领与办公人员",
      "4K 流媒体剧迷与视频重度用户",
      "需要长期可靠外网连接的职场人士"
    ],
    "sources": [
      "jiediantuijian.shop 平台实测数据",
      "多地流媒体解锁复核记录"
    ],
    "lastVerified": "2026-03-12",
    "testStatus": "tested",
    "overallScore": 9.5,
    "stabilityScore": 9.5,
    "valueScore": 9.2,
    "speedScore": 9.4,
    "rank": 5
  },
  {
    "id": "flashleap",
    "name": "闪跃 FlashLeap",
    "slug": "flashleap",
    "tagline": "IPLC 纯专线保障 · 150GB 大流量与超低网络抖动",
    "description": "闪跃 FlashLeap 采用高规格 IPLC 纯内网专线传输，端到端延迟极低且几乎零丢包。全网针对外服联机竞技、即时通讯与跨国交互做了底层优化，配备 150GB 充足流量，对晚高峰稳定性和网络抖动极其敏感的极客与玩家来说是不二之选。",
    "officialUrl": "https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3",
    "startingPrice": 24,
    "currency": "CNY",
    "billingUnit": "月",
    "coupon": "shanyue",
    "plans": [
      {
        "name": "IPLC 极速月付",
        "price": 24,
        "billingCycle": "月付",
        "trafficGB": 150,
        "effectiveTrafficGB": 150,
        "multiplierNote": "全节点 1.0x 诚实计费",
        "unitPricePerGB": 0.16,
        "features": [
          "IPLC 纯内网点对点",
          "超低延迟联机优化",
          "150GB 纯高速流量",
          "支持多端极速分流"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "nodeCount": "60+",
    "lineType": "IPLC纯专线",
    "deviceLimit": "4 - 6 台",
    "speedGuarantee": "1000Mbps 专线",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Cursor",
      "Midjourney"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K/8K",
      "Spotify"
    ],
    "advantages": [
      "IPLC 纯专线网络架构，晚高峰丢包率低于 0.1%，延迟极度平稳",
      "专为外服联机与即时通讯优化，操作响应迅速无卡顿感",
      "单 GB 折算仅 0.16 元，在纯 IPLC 梯子中性价比突出",
      "专属折扣券 shanyue 享受立减特权"
    ],
    "disadvantages": [
      "月付起步门槛 24 元，不支持几元钱的极低微量月付",
      "节点主要覆盖亚太核心地区，缺少极小众国家"
    ],
    "suitableFor": [
      "外服联机游戏玩家",
      "对延迟与晚高峰稳定性极度敏感者",
      "跨国视频会议与即时办公人员"
    ],
    "sources": [
      "jiediantuijian.shop 官方评测报告",
      "编辑部延迟抖动测速数据"
    ],
    "lastVerified": "2026-03-14",
    "testStatus": "tested",
    "overallScore": 9.4,
    "stabilityScore": 9.7,
    "valueScore": 9.1,
    "speedScore": 9.6,
    "rank": 6
  },
  {
    "id": "firefly",
    "name": "萤火虫（Firefly）",
    "slug": "firefly",
    "tagline": "优质轻量线路 · 8元低门槛与高性价比备用",
    "description": "萤火虫（Firefly）以 8 元极低月付门槛主打轻量日常需求，提供 60GB 可用流量，折合 0.133 元/GB。提供干净易用的订阅与基础节点，非常适合查阅学术资料、外网轻度交流以及作为主力节点外的防断连备用通道。",
    "officialUrl": "https://vip02.fireflyaff.com/#/?code=uTKLkAyC",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=uTKLkAyC",
    "startingPrice": 8,
    "currency": "CNY",
    "billingUnit": "月",
    "coupon": "firefly",
    "plans": [
      {
        "name": "轻量学生月付",
        "price": 8,
        "billingCycle": "月付",
        "trafficGB": 60,
        "effectiveTrafficGB": 60,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.133,
        "features": [
          "8元极低月付门槛",
          "60GB 轻量配额",
          "单 GB 仅 0.133 元",
          "优惠码立减"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "日本",
      "新加坡",
      "美国"
    ],
    "nodeCount": "35+",
    "lineType": "优质线路",
    "deviceLimit": "2 - 3 台",
    "speedGuarantee": "300Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude"
    ],
    "streamingSupport": [
      "YouTube 4K",
      "Netflix (部分节点)"
    ],
    "advantages": [
      "8 元/月超低门槛，试错成本极低，学生党无压力",
      "专属优惠券 firefly 进一步降低入手成本",
      "非常适合作为日常学术查阅或主力梯子备用通道",
      "订阅节点精炼，导入即用"
    ],
    "disadvantages": [
      "60GB 月度配额不适合长期观看蓝光/4K 视频",
      "节点数量中等，主要覆盖核心四地"
    ],
    "suitableFor": [
      "轻度上网、查阅资料与日常交流",
      "预算有限的学生群体",
      "需要极低成本防失联备用梯子者"
    ],
    "sources": [
      "jiediantuijian.shop 官方数据",
      "可用性轮询记录"
    ],
    "lastVerified": "2026-03-09",
    "testStatus": "tested",
    "overallScore": 9.4,
    "stabilityScore": 9.1,
    "valueScore": 9.5,
    "speedScore": 9,
    "rank": 7
  },
  {
    "id": "kuajie",
    "name": "跨界",
    "slug": "kuajie",
    "tagline": "全专线架构 · 120GB/月跨设备与涉外办公加速",
    "description": "跨界（跨界云）构建了全专线数据网络架构，针对多设备并发和跨国办公场景进行了连接优化。20 元/月提供 120GB 流量，连接快速响应，支持全流媒体与常用 AI 平台，适合跨境电商与多设备协同办公人群。",
    "officialUrl": "https://vip02.kuajieaff.com/#/?code=CpJKZicY",
    "affiliateUrl": "https://vip02.kuajieaff.com/#/?code=CpJKZicY",
    "startingPrice": 20,
    "currency": "CNY",
    "billingUnit": "月",
    "plans": [
      {
        "name": "跨界全专线月付",
        "price": 20,
        "billingCycle": "月付",
        "trafficGB": 120,
        "effectiveTrafficGB": 120,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.167,
        "features": [
          "全专线网络架构",
          "120GB 实用配额",
          "单 GB 仅 0.167 元",
          "多设备并发优化"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "nodeCount": "50+",
    "lineType": "全专线架构",
    "deviceLimit": "4 - 6 台",
    "speedGuarantee": "600Mbps 专线",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Cursor"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K"
    ],
    "advantages": [
      "全专线网络架构，丢包率极低，晚高峰平稳",
      "20 元月付配 120GB，折合 0.167 元/GB，性价比出众",
      "针对跨国多任务与多设备办公优化良好",
      "支持现代常用协议，客户端导入简单"
    ],
    "disadvantages": [
      "暂无极冷门国家节点",
      "不提供不限时计费套餐"
    ],
    "suitableFor": [
      "跨境电商、多任务跨设备办公",
      "追求极简轻量连接的用户",
      "日常多终端出海办公族"
    ],
    "sources": [
      "jiediantuijian.shop 平台实测数据",
      "多设备并发测试"
    ],
    "lastVerified": "2026-03-11",
    "testStatus": "tested",
    "overallScore": 9.3,
    "stabilityScore": 9.4,
    "valueScore": 9.3,
    "speedScore": 9.3,
    "rank": 8
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "slug": "yinxingren",
    "tagline": "企业级 IEPL 纯专线架构 · 144GB 高流量与无视晚高峰保障",
    "description": "隐形人主打企业级 IEPL 纯专线网络架构，数据全程走物理隔离专用内网，不经公网拥堵节点，晚高峰零丢包、低延迟。标配 144GB 大流量月付方案，全节点解锁 ChatGPT 与主流流媒体平台，适合对稳定性要求极高的外贸、跨境办公与影音重度用户。",
    "officialUrl": "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
    "affiliateUrl": "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
    "startingPrice": 24,
    "currency": "CNY",
    "billingUnit": "月",
    "coupon": "yxr888",
    "plans": [
      {
        "name": "IEPL 纯专线月付",
        "price": 24,
        "billingCycle": "月付",
        "trafficGB": 144,
        "effectiveTrafficGB": 144,
        "multiplierNote": "全节点 1.0x 标准计费",
        "unitPricePerGB": 0.167,
        "features": [
          "IEPL 纯内网专线",
          "晚高峰零丢包保障",
          "全流媒体与 AI 解锁",
          "支持 4 台设备在线"
        ]
      },
      {
        "name": "进阶专线年付",
        "price": 240,
        "billingCycle": "年付",
        "trafficGB": 1800,
        "effectiveTrafficGB": 1800,
        "multiplierNote": "全节点 1.0x 标准计费",
        "unitPricePerGB": 0.133,
        "features": [
          "高优先级专线调度",
          "大容量储备流量",
          "专属客服工单",
          "免风控原生 IP"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "VLESS"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国",
      "德国"
    ],
    "nodeCount": "70+",
    "lineType": "IEPL纯专线",
    "deviceLimit": "4 - 8 台",
    "speedGuarantee": "1000Mbps 专线带宽",
    "aiSupport": [
      "ChatGPT",
      "Claude 3.5",
      "Midjourney",
      "OpenAI API"
    ],
    "streamingSupport": [
      "Netflix 全区",
      "Disney+",
      "YouTube 4K/8K",
      "HBO Max"
    ],
    "advantages": [
      "IEPL 纯专线硬件保障，晚高峰完全无视公共骨干网拥堵",
      "入门即配 144GB 充足月度可用流量，大文件下载无压力",
      "专属优惠码 yxr888 享受立减结账折扣",
      "针对 ChatGPT 与 Claude 原生 IP 解锁率高，免风控验证"
    ],
    "disadvantages": [
      "起步资费 24 元/月，略高于纯走量平价机场",
      "主打核心优质发达国家节点，缺少亚非拉极冷门小众国家"
    ],
    "suitableFor": [
      "跨境电商与涉外办公团队",
      "ChatGPT 与 Claude 重度使用者",
      "追求晚高峰绝对稳定的影音爱好者"
    ],
    "sources": [
      "jiediantuijian.shop 官方实测数据",
      "编辑部长周期网络连通性监控记录"
    ],
    "lastVerified": "2026-03-15",
    "testStatus": "tested",
    "overallScore": 9.3,
    "stabilityScore": 9.8,
    "valueScore": 9.2,
    "speedScore": 9.7,
    "rank": 9
  },
  {
    "id": "feiv",
    "name": "飞V",
    "slug": "feiv",
    "tagline": "¥4.9超低起步价 · 优化线路与罕见不限时套餐",
    "description": "飞V以极低门槛和罕见的不限时套餐为核心特色，月付仅需 ¥4.9 起即可获得 100GB 流量，单 GB 均价低至 0.049 元。同时支持按需购买不限时流量，是极度低预算人群与轻度备用用户的福音。",
    "officialUrl": "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe",
    "affiliateUrl": "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe",
    "startingPrice": 4.9,
    "currency": "CNY",
    "billingUnit": "月",
    "plans": [
      {
        "name": "极低体验月付",
        "price": 4.9,
        "billingCycle": "月付",
        "trafficGB": 100,
        "effectiveTrafficGB": 100,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.049,
        "features": [
          "月付仅需 4.9 元",
          "100GB 充沛流量",
          "单 GB 仅 0.049 元",
          "试错成本接近零"
        ]
      },
      {
        "name": "不限时应急包",
        "price": 39,
        "billingCycle": "一次性 (不限时)",
        "trafficGB": 300,
        "effectiveTrafficGB": 300,
        "multiplierNote": "永不过期，用完即止",
        "unitPricePerGB": 0.13,
        "features": [
          "流量永不过期",
          "防失联主力备用",
          "全节点可用",
          "轻度用户神器"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "nodeCount": "40+",
    "lineType": "优化线路",
    "deviceLimit": "2 - 3 台",
    "speedGuarantee": "300Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude (部分节点)"
    ],
    "streamingSupport": [
      "YouTube 4K",
      "Netflix (部分解锁)"
    ],
    "advantages": [
      "月付仅需 ¥4.9 起，试错成本接近于零，全网最低门槛之一",
      "标配 100GB 流量，单 GB 仅 0.049 元，性价比极高",
      "提供罕见的不限时流量包，流量永不过期，完美备用",
      "支持 Trojan 主流安全协议，连接稳定"
    ],
    "disadvantages": [
      "晚高峰（21:00-22:30）部分热门节点可能会有轻度排队延迟",
      "部分风控严苛的 AI 接口需要挑选合适节点"
    ],
    "suitableFor": [
      "学生与预算极低人群",
      "备用网络以防主力断连",
      "轻度查阅资料与低频出海用户"
    ],
    "sources": [
      "jiediantuijian.shop 官方公开套餐",
      "网络连通率记录"
    ],
    "lastVerified": "2026-03-08",
    "testStatus": "tested",
    "overallScore": 9.2,
    "stabilityScore": 8.8,
    "valueScore": 9.9,
    "speedScore": 8.9,
    "rank": 10
  },
  {
    "id": "ladder",
    "name": "梯子云 LadderCloud",
    "slug": "ladder",
    "tagline": "优化中转与专线调度 · 125GB 月度流量与多设备分享",
    "description": "梯子云 LadderCloud 提供多路中转与专线混合调度能力，配置均衡，支持多客户端同时并发。针对大流量日常下载和社交视频浏览优化良好，25 元/月提供 125GB 流量，表现稳定可靠。",
    "officialUrl": "https://varnexa.ladderaff.com/#/?code=eC6eLAbq",
    "affiliateUrl": "https://varnexa.ladderaff.com/#/?code=eC6eLAbq",
    "startingPrice": 25,
    "currency": "CNY",
    "billingUnit": "月",
    "plans": [
      {
        "name": "畅享进阶月付",
        "price": 25,
        "billingCycle": "月付",
        "trafficGB": 125,
        "effectiveTrafficGB": 125,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.2,
        "features": [
          "优化中转与专线调度",
          "125GB 月度可用",
          "支持多设备在线",
          "社交视频优化"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "nodeCount": "55+",
    "lineType": "优化中转/专线",
    "deviceLimit": "5 台",
    "speedGuarantee": "500Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K",
      "TikTok"
    ],
    "advantages": [
      "多路中转与专线混合调度，冗余保障强",
      "针对海外主流社交媒体与短视频优化出色",
      "允许 5 台设备并发在线，适合多设备用户",
      "全天候工单支持与节点监控"
    ],
    "disadvantages": [
      "单 GB 价格 0.2 元，略高于走量平价型机场",
      "主要针对主流地区，缺少罕见冷门节点"
    ],
    "suitableFor": [
      "大流量下载与多设备分享",
      "日常重度音视频与社交平台重度用户",
      "需要稳定并发的家庭与工作室"
    ],
    "sources": [
      "jiediantuijian.shop 官方评测",
      "多设备并发压力测试"
    ],
    "lastVerified": "2026-03-10",
    "testStatus": "tested",
    "overallScore": 9.2,
    "stabilityScore": 9.3,
    "valueScore": 9,
    "speedScore": 9.2,
    "rank": 11
  },
  {
    "id": "wavenet",
    "name": "浪网 WaveNet",
    "slug": "wavenet",
    "tagline": "自研客户端优化线路 · 150GB 充沛流量与全平台无感秒连",
    "description": "浪网 WaveNet 采用自研客户端与高质量优化网络加速链路，具备良好的抗封锁能力与智能节点调度机制。标配 150GB 大流量，为高码率 4K/8K 视频播放与重度出海网络用户提供极佳体验，免去繁琐的手动配置过程。",
    "officialUrl": "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy",
    "startingPrice": 30,
    "currency": "CNY",
    "billingUnit": "月",
    "plans": [
      {
        "name": "标准畅享月付",
        "price": 30,
        "billingCycle": "月付",
        "trafficGB": 150,
        "effectiveTrafficGB": 150,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.2,
        "features": [
          "自研客户端一键连接",
          "高质量优化链路",
          "150GB 充足配额",
          "全流媒体解锁"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "自研加密协议"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国",
      "德国"
    ],
    "nodeCount": "65+",
    "lineType": "自研客户端优化线路",
    "deviceLimit": "5 台",
    "speedGuarantee": "800Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K",
      "HBO Max"
    ],
    "advantages": [
      "提供专用自研客户端，界面清爽，开箱即连，小白零门槛",
      "高码率视频与重度网络使用优化，4K 拖拽无缓冲圈",
      "全节点网络负载均衡，自动规避高负荷拥堵节点",
      "多平台兼容良好，同时支持通用 Clash 订阅导出"
    ],
    "disadvantages": [
      "30 元/月的入门价格略带软件与自研链路溢价",
      "极客级高级分流设置功能相对极简"
    ],
    "suitableFor": [
      "高码率视频与重度网络使用群体",
      "追求高品质自研线路与大流量者",
      "不愿繁琐折腾配置的上班族"
    ],
    "sources": [
      "jiediantuijian.shop 官方收录数据",
      "客户端连通性实测"
    ],
    "lastVerified": "2026-03-14",
    "testStatus": "tested",
    "overallScore": 9.1,
    "stabilityScore": 9.5,
    "valueScore": 9,
    "speedScore": 9.5,
    "rank": 12
  },
  {
    "id": "lingdong",
    "name": "灵动云",
    "slug": "lingdong",
    "tagline": "优化节点架构 · 100GB 省心均衡配置与高连通保障",
    "description": "灵动云提供省心免折腾的优化加速服务，资费清晰，节点均衡，支持多协议导入。20 元/月提供 100GB 流量，能够平稳满足日常外网查阅、科研论文检索和轻度流媒体娱乐需求。",
    "officialUrl": "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr",
    "startingPrice": 20,
    "currency": "CNY",
    "billingUnit": "月",
    "plans": [
      {
        "name": "标准平衡月付",
        "price": 20,
        "billingCycle": "月付",
        "trafficGB": 100,
        "effectiveTrafficGB": 100,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.2,
        "features": [
          "优化节点架构",
          "100GB 均衡流量",
          "全平台订阅支持",
          "省心配置"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan",
      "Vmess"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国"
    ],
    "nodeCount": "45+",
    "lineType": "优化节点",
    "deviceLimit": "3 - 4 台",
    "speedGuarantee": "400Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K"
    ],
    "advantages": [
      "操作简洁省心，适合不愿折腾复杂规则的实用派",
      "节点连接响应平稳，常规外网查阅秒开",
      "20 元入门门槛清晰，无隐藏消费",
      "兼容各类主流客户端订阅格式"
    ],
    "disadvantages": [
      "100GB 流量对视频重度用户需要注意规划使用",
      "缺乏冷门地区节点"
    ],
    "suitableFor": [
      "追求简单省心与流量均衡的用户",
      "日常办公与影音轻度娱乐",
      "科研学术检索与日常交流"
    ],
    "sources": [
      "jiediantuijian.shop 平台收录数据",
      "抽样可用率监测"
    ],
    "lastVerified": "2026-03-10",
    "testStatus": "tested",
    "overallScore": 9.1,
    "stabilityScore": 9.2,
    "valueScore": 9.1,
    "speedScore": 9.1,
    "rank": 13
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "slug": "quanqiuyun",
    "tagline": "中转优化网络 · 120GB/月音视频流媒体精选",
    "description": "全球云采用优质中转链路，节点分布广泛，针对主流流媒体平台与日常网页访问进行专项调优。20 元/月提供 120GB 流量，单 GB 成本 0.167 元，支持专属优惠码，适合中等流量使用需求的上班族与学生党。",
    "officialUrl": "https://sswdh.gcvipaff.com/#/?code=9SF0oyg0",
    "affiliateUrl": "https://sswdh.gcvipaff.com/#/?code=9SF0oyg0",
    "startingPrice": 20,
    "currency": "CNY",
    "billingUnit": "月",
    "coupon": "tt88",
    "plans": [
      {
        "name": "流媒体进阶月付",
        "price": 20,
        "billingCycle": "月付",
        "trafficGB": 120,
        "effectiveTrafficGB": 120,
        "multiplierNote": "1.0x 标准计费",
        "unitPricePerGB": 0.167,
        "features": [
          "中转优化网络",
          "120GB 充足配额",
          "单 GB 仅 0.167 元",
          "优惠码立减"
        ]
      }
    ],
    "protocols": [
      "Shadowsocks",
      "Vmess",
      "Trojan"
    ],
    "regions": [
      "香港",
      "台湾",
      "日本",
      "新加坡",
      "美国",
      "英国"
    ],
    "nodeCount": "50+",
    "lineType": "中转优化",
    "deviceLimit": "3 - 5 台",
    "speedGuarantee": "500Mbps 峰值",
    "aiSupport": [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    "streamingSupport": [
      "Netflix",
      "Disney+",
      "YouTube 4K",
      "TikTok"
    ],
    "advantages": [
      "20 元/月配 120GB，折合 0.167 元/GB，性价比良好",
      "专属优惠码 tt88 结账享受实惠立减",
      "针对音视频流媒体调优，YouTube 4K 播放流畅",
      "国内三网入口优化良好，延迟适中"
    ],
    "disadvantages": [
      "非全专线架构，晚高峰极少数节点偶有微幅抖动",
      "无一次性不限时套餐"
    ],
    "suitableFor": [
      "日常网络浏览与音视频流媒体",
      "中等流量使用需求的上班族与学生",
      "常规出海社交与内容消费人群"
    ],
    "sources": [
      "jiediantuijian.shop 平台数据",
      "流媒体解锁抽检记录"
    ],
    "lastVerified": "2026-03-09",
    "testStatus": "tested",
    "overallScore": 9,
    "stabilityScore": 9.1,
    "valueScore": 9.3,
    "speedScore": 9.2,
    "rank": 14
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
  return [...airports].sort((a, b) => a.rank - b.rank);
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

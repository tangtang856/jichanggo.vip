// scripts/data/guides-data.js
// 30 篇完整实操与高级配置教程数据模型

const guidesData = [
  {
    "slug": "windows",
    "title": "Windows 电脑科学上网教程 · Clash Verge Rev 与 Sing-box 客户端配置指南 | 机场Go",
    "shortTitle": "Windows 配置指南",
    "group": "桌面端系统",
    "metaDesc": "2026最新 Windows 电脑梯子与机场节点配置图文教程。详解 Clash Verge Rev 与 Sing-box 客户端下载、订阅导入、TUN 虚拟网卡模式开启及常见连不上报错排查。",
    "h1": "Windows 电脑科学上网配置指南：Clash Verge Rev 订阅导入与 TUN 模式详解",
    "date": "2026-03-14",
    "readTime": "6 分钟",
    "summary": "Windows 平台目前最稳定现代的客户端首推基于开源内核的 Clash Verge Rev 与 Sing-box。日常网页查阅选择「规则模式（Rule）」即可自动分流国内与海外流量；若需玩外服游戏、加速命令行或 Discord 语音，务必开启「TUN 虚拟网卡模式」。",
    "brandRecs": [
      "breezenet",
      "yinxingren",
      "flashleap"
    ],
    "steps": [
      {
        "name": "下载客户端与基础环境准备",
        "desc": "前往官方开源仓库下载 Clash Verge Rev 安装包，安装并允许 Windows Defender 防火墙底层权限。"
      },
      {
        "name": "导入机场订阅链接",
        "desc": "在机场后台复制 Clash 订阅链接，在客户端「订阅」菜单中粘贴并点击导入，更新节点列表。"
      },
      {
        "name": "选择分流模式与开启系统代理",
        "desc": "切换为「规则模式 (Rule)」，在右上角开启「系统代理」开关，海外网页秒开。"
      },
      {
        "name": "进阶：开启 TUN 模式接管全应用",
        "desc": "在设置中安装服务核心并开启 TUN 虚拟网卡，全协议接管命令行、游戏与外服软件。"
      }
    ],
    "faqs": [
      {
        "q": "开启代理后国内网站打不开？",
        "a": "确认分流模式为「规则模式 (Rule)」，避免误选「全局模式 (Global)」导致国内流量绕行境外。"
      },
      {
        "q": "退出客户端后电脑彻底断网？",
        "a": "打开 Windows 设置 -> 网络和 Internet -> 代理，手动关闭「使用代理服务器」即可瞬间恢复。"
      },
      {
        "q": "订阅一直提示 Network Error？",
        "a": "宽带可能存在 DNS 污染，可在机场后台换用备用订阅域名或挂手机热点更新。"
      }
    ]
  },
  {
    "slug": "android",
    "title": "Android 安卓手机翻墙教程 · Clash Meta for Android 与 v2rayNG 图文配置 | 机场Go",
    "shortTitle": "Android 配置指南",
    "group": "移动端系统",
    "metaDesc": "安卓手机科学上网新手指南。详析 Clash Meta for Android (CMFA) 与 v2rayNG 客户端安装、订阅节点导入、分应用代理与常驻后台省电白名单设置。",
    "h1": "Android 安卓手机科学上网指南：Clash 与 v2rayNG 节点导入教程",
    "date": "2026-03-13",
    "readTime": "5 分钟",
    "summary": "Android 平台由于开放性强，推荐使用支持最新协议的 Clash Meta for Android (CMFA) 或经典小巧的 v2rayNG。重点在于合理配置「分应用代理」以避免微信、网银被代理，并开启电池优化白名单防止后台被系统杀死。",
    "brandRecs": [
      "breezenet",
      "muguang",
      "feiv"
    ],
    "steps": [
      {
        "name": "下载正版开源 APK",
        "desc": "从官方 GitHub 页面下载 CMFA 或 v2rayNG 安装包，在系统设置中允许安装未知来源应用。"
      },
      {
        "name": "导入配置与订阅",
        "desc": "复制机场提供的订阅链接，在客户端「配置」中点击新建，粘贴 URL 并保存下载配置。"
      },
      {
        "name": "设置分应用代理 (Per-App Proxy)",
        "desc": "进入应用设置开启分应用，勾选需要翻墙的软件（如 YouTube、Twitter、Telegram、ChatGPT），国内软件直连。"
      },
      {
        "name": "开启后台保活与电池白名单",
        "desc": "在系统设置中将客户端的电池管理设为「无限制」，开启自动启动与悬浮窗权限，防止锁屏掉线。"
      }
    ],
    "faqs": [
      {
        "q": "安卓手机锁屏后梯子总是自动断开？",
        "a": "进入手机系统的电池与后台管理，将客户端设为「允许自启动」并锁定在多任务卡片中。"
      },
      {
        "q": "微信收发消息提示网络异常或延迟？",
        "a": "开启「分应用代理」并将微信、微信读书、支付宝排除在代理列表之外。"
      }
    ]
  },
  {
    "slug": "ios",
    "title": "iOS 苹果手机科学上网教程 · Shadowrocket 小火箭与 Loon 配置指南 | 机场Go",
    "shortTitle": "iOS 小火箭教程",
    "group": "移动端系统",
    "metaDesc": "2026苹果 iPhone / iPad 科学上网保姆级教程。Shadowrocket 小火箭美区 Apple ID 获取、节点订阅扫码导入、全局路由规则与按需连接设置。",
    "h1": "iOS 苹果手机科学上网教程：Shadowrocket 小火箭与 Loon 配置",
    "date": "2026-03-12",
    "readTime": "7 分钟",
    "summary": "由于 App Store 政策，iOS 端需要先获取美区或非国区 Apple ID 购买下载 Shadowrocket（小火箭）或 Loon。小火箭是目前综合体验最平衡的工具，扫码即可一键导入机场订阅，支持按需连接与策略分流。",
    "brandRecs": [
      "breezenet",
      "wuyou",
      "lingmao"
    ],
    "steps": [
      {
        "name": "准备外区 Apple ID 并下载小火箭",
        "desc": "登录美区/港区 Apple ID，在 App Store 搜索购买下载 Shadowrocket 或 Loon。"
      },
      {
        "name": "一键导入订阅配置",
        "desc": "在机场后台点击「一键导入小火箭」或扫描订阅二维码，节点与规则自动同步。"
      },
      {
        "name": "全局路由策略设置",
        "desc": "在主界面将「全局路由」设置为「配置 (Config)」，日常使用自动分流国内外流量。"
      },
      {
        "name": "启动 VPN 权限授权",
        "desc": "点击未连接开关，系统会弹出「添加 VPN 配置」弹窗，使用 Face ID 或锁屏密码授权即可连接。"
      }
    ],
    "faqs": [
      {
        "q": "国区 App Store 搜索不到小火箭？",
        "a": "必须切换至美区或港区等境外 Apple ID 才能搜索并下载 Shadowrocket。"
      },
      {
        "q": "为什么耗电统计里小火箭占比非常高？",
        "a": "iOS 系统会将所有走代理的应用（如 YouTube、TikTok）的流量与耗电合并计入小火箭，实际并非客户端本身耗电。"
      }
    ]
  },
  {
    "slug": "macos",
    "title": "macOS 苹果电脑科学上网配置 · Clash Verge Rev 与 Surge 详细指南 | 机场Go",
    "shortTitle": "macOS 配置指南",
    "group": "桌面端系统",
    "metaDesc": "Mac 苹果电脑梯子与节点设置实战。详解 macOS 环境下 Clash Verge Rev 与 Surge 的安装配置、系统代理接管、增强模式与外接显示器防断连优化。",
    "h1": "macOS 苹果电脑科学上网配置教程：Clash Verge 与 Surge 详细指南",
    "date": "2026-03-11",
    "readTime": "6 分钟",
    "summary": "macOS 拥有优秀的网络架构，普通用户推荐免费开源的 Clash Verge Rev，专业开发者与音频极客则可选 Surge Mac。配置关键在于正确授权系统网络扩展与 TUN 虚拟网卡，实现终极低延迟跨国访问。",
    "brandRecs": [
      "yinxingren",
      "breezenet",
      "wavenet"
    ],
    "steps": [
      {
        "name": "下载对应芯片架构的 DMG 安装包",
        "desc": "区分 Apple Silicon (M1/M2/M3/M4) 与 Intel 芯片，下载对应版本的安装包并拖入应用程序。"
      },
      {
        "name": "导入机场订阅与启用系统代理",
        "desc": "在订阅界面粘贴订阅地址，拉取节点后将系统代理开关开启。"
      },
      {
        "name": "授权安全与网络扩展",
        "desc": "初次开启 TUN 模式或增强模式时，需要在 macOS「系统设置 -> 隐私与安全性」中点击允许。"
      },
      {
        "name": "配置终端 Shell 环境变量",
        "desc": "在 .zshrc 中添加代理别名或开启 TUN，让 iTerm2 和 Homebrew 享受高速海外加速。"
      }
    ],
    "faqs": [
      {
        "q": "Mac 睡眠唤醒后总是断网无法加载？",
        "a": "在客户端设置中开启「随系统休眠重置代理」或切换为 TUN 模式即可解决唤醒丢包问题。"
      }
    ]
  },
  {
    "slug": "sing-box-windows",
    "title": "Sing-box Windows 客户端图文教程 · 极客跨平台核心与规则集配置 | 机场Go",
    "shortTitle": "Sing-box Windows",
    "group": "桌面端系统",
    "metaDesc": "新一代跨平台核心 Sing-box 在 Windows 系统的保姆级安装与使用教程。涵盖通用 JSON 配置导入、独家 Rule-set 规则集分流与极低内存占用优势。",
    "h1": "Sing-box Windows 客户端新手教程：新一代跨平台核心与规则集详解",
    "date": "2026-03-10",
    "readTime": "8 分钟",
    "summary": "Sing-box 作为新一代通用通用网络代理平台，凭借极佳的性能、极低的内存占用和多协议原生支持迅速风靡。本篇详解如何在 Windows 上通过图形客户端或独立二进制运行 Sing-box。",
    "brandRecs": [
      "breezenet",
      "flashleap",
      "kuajie"
    ],
    "steps": [
      {
        "name": "下载 Sing-box GUI 客户端",
        "desc": "下载官方或社区维护的图形界面版本（如 sing-box-windows 客户端）。"
      },
      {
        "name": "导入通用订阅或 JSON 配置",
        "desc": "在机场后台获取 Sing-box 专属订阅格式，导入并解析节点。"
      },
      {
        "name": "配置出站标签与路由规则",
        "desc": "了解 outbounds、route 以及 rule_set 的工作原理，实现精细化按域名分流。"
      },
      {
        "name": "开启系统代理与开机自启",
        "desc": "一键激活系统托盘代理，并开启开机静默启动。"
      }
    ],
    "faqs": [
      {
        "q": "Sing-box 与 Clash 相比有什么优势？",
        "a": "Sing-box 内存占用仅数十兆，原生支持 VLESS Reality 与 Hysteria 2 协议，性能吞吐大幅提升。"
      }
    ]
  },
  {
    "slug": "sing-box-android",
    "title": "Sing-box Android 移动端实操教程 · 独立出站代理与直连白名单 | 机场Go",
    "shortTitle": "Sing-box 安卓",
    "group": "移动端系统",
    "metaDesc": "安卓手机安装使用 Sing-box 原生官方客户端完整指南。支持一键导入在线配置、独立分流规则集与低功耗常驻后台体验。",
    "h1": "Sing-box Android 客户端实操指南：独立出站代理与配置优化",
    "date": "2026-03-09",
    "readTime": "6 分钟",
    "summary": "Sing-box Android 官方客户端体积小巧、界面遵循现代 Material You 设计，运行极其省电。本教程手把手教你如何添加 Profile 并在移动网络与 Wi-Fi 下自适应切换。",
    "brandRecs": [
      "breezenet",
      "muguang",
      "firefly"
    ],
    "steps": [
      {
        "name": "从 Google Play 或 GitHub 获取 APK",
        "desc": "安装 Sing-box Android 官方稳定版。"
      },
      {
        "name": "新建远程 Profile 订阅",
        "desc": "点击 Profiles -> New Profile -> 类型选择 Remote，粘贴机场订阅地址并保存更新。"
      },
      {
        "name": "选择活动出站组",
        "desc": "在 Groups 中选择最优专线节点，如香港/日本专线。"
      },
      {
        "name": "启动 VPN 隧道",
        "desc": "点击右下角运行按钮，授予系统 VPN 建立连接权限。"
      }
    ],
    "faqs": [
      {
        "q": "提示 schema validate failed 报错？",
        "a": "通常是机场下发的订阅配置文件格式不标准，可联系机场工单或使用订阅转换修正。"
      }
    ]
  },
  {
    "slug": "sing-box-ios",
    "title": "Sing-box iOS 客户端安装与使用教程 · TestFlight 与 App Store 配置 | 机场Go",
    "shortTitle": "Sing-box iOS",
    "group": "移动端系统",
    "metaDesc": "苹果 iPhone 安装 Sing-box 客户端使用指南。从 TestFlight 公测版与境外 App Store 下载、订阅源添加、按需分流到后台保活详解。",
    "h1": "Sing-box iOS 版配置教程：TestFlight 与外区 App Store 订阅导入",
    "date": "2026-03-08",
    "readTime": "7 分钟",
    "summary": "Sing-box iOS 提供了完全免费的强大核心，适合不愿意付费购买 Shadowrocket 或 Surge 的苹果手机用户。配置流程简单，支持现代规则集分流与纯净内网专线。",
    "brandRecs": [
      "breezenet",
      "yinxingren",
      "wuyou"
    ],
    "steps": [
      {
        "name": "获取 Sing-box iOS 安装包",
        "desc": "使用外区 Apple ID 登录 App Store 下载免费的 Sing-box 客户端。"
      },
      {
        "name": "添加 Remote Profile",
        "desc": "在 Profiles 页面点击右上角加号，添加远程配置文件链接。"
      },
      {
        "name": "测试并选择低延迟节点",
        "desc": "长按节点列表进行延迟测速，优选物理距离较近的亚太专线。"
      },
      {
        "name": "开启主控开关",
        "desc": "在 Dashboard 开启全局开关，授权系统 VPN 描述文件。"
      }
    ],
    "faqs": [
      {
        "q": "免费版有功能限制吗？",
        "a": "官方 Sing-box iOS 完全开源免费，无任何内购或功能缩水。"
      }
    ]
  },
  {
    "slug": "clash-verge-tun",
    "title": "Clash Verge Rev 开启 TUN 虚拟网卡模式教程 · 全应用代理与游戏加速 | 机场Go",
    "shortTitle": "TUN 虚拟网卡模式",
    "group": "高阶规则与排错",
    "metaDesc": "彻底搞懂 Clash Verge Rev 的 TUN 模式。如何安装服务模式 (Service Mode)、虚拟网卡网络驱动、接管非 HTTP 协议应用与外服游戏实战指南。",
    "h1": "Clash Verge Rev 开启 TUN 虚拟网卡模式教程：全接管游戏与命令行流量",
    "date": "2026-03-07",
    "readTime": "7 分钟",
    "summary": "传统系统代理只能代理遵循系统代理设置的浏览器，而 Steam 联机、Git 命令行、Discord 语音和外服游戏往往绕过代理。开启 TUN 模式会将整个操作系统的三层网络彻底虚拟化，实现 100% 透明接管。",
    "brandRecs": [
      "flashleap",
      "yinxingren",
      "breezenet"
    ],
    "steps": [
      {
        "name": "检查内核与管理员权限",
        "desc": "确保 Clash Verge Rev 选用 Mihomo / Meta 内核，并以管理员身份运行客户端。"
      },
      {
        "name": "安装 Service Mode 服务模式",
        "desc": "进入设置菜单，在「服务模式」右侧点击安装，等待服务注册成功呈现绿色盾牌。"
      },
      {
        "name": "开启 TUN Mode 开关",
        "desc": "将 TUN Mode 开关拨至开启，此时系统网络适配器中会新增一张虚拟网卡。"
      },
      {
        "name": "验证 UDP 与游戏加速效果",
        "desc": "打开命令提示符 ping 谷歌域名，或启动外服游戏观察延迟变化。"
      }
    ],
    "faqs": [
      {
        "q": "开启 TUN 模式后电脑无法解析域名？",
        "a": "检查设置中的 DNS 配置，确保启用了 fake-ip 模式或配置了可靠的公共 upstream DNS。"
      }
    ]
  },
  {
    "slug": "clash-verge-script",
    "title": "Clash Verge Rev 扩展配置与 Merge/Script 脚本定制高级教程 | 机场Go",
    "shortTitle": "Merge/Script 脚本定制",
    "group": "高阶规则与排错",
    "metaDesc": "玩转 Clash Verge Rev 扩展配置。教你通过 Merge 与 JavaScript Script 脚本自动追加自定义分流规则、去广告规则及防 DNS 泄露策略。",
    "h1": "Clash Verge Rev 扩展配置指南：Merge 与 Script 脚本定制高级技巧",
    "date": "2026-03-06",
    "readTime": "8 分钟",
    "summary": "机场下发的配置文件往往会覆盖本地修改。利用 Clash Verge Rev 提供的 Merge (合并) 和 Script (脚本) 功能，可以在每次更新订阅时无缝注入你的个人自定义规则。",
    "brandRecs": [
      "breezenet",
      "kuajie",
      "ladder"
    ],
    "steps": [
      {
        "name": "认识扩展配置类型",
        "desc": "区分 YAML Merge 静态合并与 JavaScript 动态 Script 处理的应用场景。"
      },
      {
        "name": "创建自定义 Merge 配置",
        "desc": "在「订阅 -> 新建」中选择 Merge 类型，编写针对本地 NAS 或特定域名的直连规则。"
      },
      {
        "name": "关联活动订阅配置",
        "desc": "在主力订阅的右键菜单中勾选关联新建的扩展配置，实现链式应用。"
      },
      {
        "name": "一键重载验证",
        "desc": "重新加载订阅，在日志与连接面板中查看自定义规则是否成功生效。"
      }
    ],
    "faqs": [
      {
        "q": "配置脚本语法报错导致内核崩溃？",
        "a": "在配置编辑器中检查缩进与 YAML 格式规范，善用客户端内置的配置语法高亮检验工具。"
      }
    ]
  },
  {
    "slug": "clash-meta-alpha",
    "title": "Mihomo (Clash.Meta) 内核特性详解 · Sniffer 域名嗅探与多协议分流 | 机场Go",
    "shortTitle": "Mihomo/Meta 内核详解",
    "group": "高阶规则与排错",
    "metaDesc": "全面解析新一代主力内核 Mihomo (原 Clash.Meta)。详解 Sniffer 域名嗅探原理、GEOSITE/GEOIP 规则集与 VLESS Reality 原生支持特性。",
    "h1": "Mihomo (Clash.Meta) 内核特性详解：Sniffer 域名嗅探与多协议分流",
    "date": "2026-03-05",
    "readTime": "9 分钟",
    "summary": "原版 Clash Premium 停止维护后，Mihomo (Clash.Meta) 成为事实上的社区通用标准。它引入了强大的 TLS/QUIC 域名嗅探、Rule-providers 动态规则集和全协议支持。",
    "brandRecs": [
      "yinxingren",
      "breezenet",
      "lingmao"
    ],
    "steps": [
      {
        "name": "启用 Sniffer 域名嗅探",
        "desc": "通过嗅探 TLS Client Hello 与 HTTP Host，精准还原纯 IP 连接背后的真实域名并分流。"
      },
      {
        "name": "配置 Rule-providers 规则集",
        "desc": "引用远程 ACL4SSR 或 Loyalsoldier 规则集，实现云端规则自动定时热更新。"
      },
      {
        "name": "体验多协议混合出站",
        "desc": "在同一配置中自由混用 Shadowsocks、Trojan、VLESS 以及 Hysteria 2 节点。"
      },
      {
        "name": "启用 Smart 策略与 fallback",
        "desc": "配置健康检查与自动容灾策略组，节点断连时毫秒级自动切换备用专线。"
      }
    ],
    "faqs": [
      {
        "q": "域名嗅探会影响访问速度吗？",
        "a": "Mihomo 采用内存极速匹配算法，嗅探仅在连接握手期执行一次，对整体吞吐毫无延迟损耗。"
      }
    ]
  },
  {
    "slug": "shadowrocket-rules",
    "title": "Shadowrocket 小火箭进阶教程 · ACL4SSR 规则集导入与策略组分流 | 机场Go",
    "shortTitle": "小火箭分流规则",
    "group": "移动端系统",
    "metaDesc": "苹果小火箭 Shadowrocket 高级玩法。手把手教你导入 ACL4SSR 经典分流规则，自定义国内直连、去广告拦截、OpenAI 与流媒体专属策略组。",
    "h1": "Shadowrocket 小火箭进阶：ACL4SSR 规则集导入与自定义分流策略",
    "date": "2026-03-04",
    "readTime": "7 分钟",
    "summary": "默认配置下小火箭分流较为粗糙。通过导入维护活跃的 ACL4SSR 规则集，可以将 ChatGPT、Netflix、Spotify、国内直连与垃圾广告精准分拨至不同的出口与策略。",
    "brandRecs": [
      "breezenet",
      "wuyou",
      "feimaoyun"
    ],
    "steps": [
      {
        "name": "获取远程配置文件链接",
        "desc": "在 ACL4SSR 官方开源仓库复制精简版或全能版小火箭规则链接。"
      },
      {
        "name": "在小火箭中下载规则",
        "desc": "点击底部「配置」-> 顶部加号，粘贴 URL 并点击下载远程配置。"
      },
      {
        "name": "使用并锁定新规则",
        "desc": "点击刚下载的配置并在弹出菜单中选择「使用配置」。"
      },
      {
        "name": "为特定策略组绑定节点",
        "desc": "在主界面展开「OpenAI/ChatGPT」或「国外流媒体」策略组，指定走低延迟专线节点。"
      }
    ],
    "faqs": [
      {
        "q": "为什么部分规则导入后提示下载失败？",
        "a": "可能是 GitHub  raw 链接被污染，换用 jsDelivr 或国内加速镜像地址重新下载即可。"
      }
    ]
  },
  {
    "slug": "shadowrocket-certificate",
    "title": "Shadowrocket 安装与信任 HTTPS 解密证书教程 · 抓包与广告重写 | 机场Go",
    "shortTitle": "小火箭证书信任",
    "group": "移动端系统",
    "metaDesc": "图文详解 iOS 小火箭安装 CA 证书及系统信任流程。解决小火箭开启 HTTPS 解密后网页提示不受信任证书的常见报错，支持高级脚本重写。",
    "h1": "Shadowrocket 安装与信任 HTTPS 解密证书完整图文教程",
    "date": "2026-03-03",
    "readTime": "6 分钟",
    "summary": "若需使用小火箭进行广告屏蔽、VIP 规则重写或网络调试，必须启用 HTTPS 解密并正确在 iOS 系统的「证书信任设置」中完全信任根证书。",
    "brandRecs": [
      "breezenet",
      "lingdong",
      "quanqiuyun"
    ],
    "steps": [
      {
        "name": "生成本地 CA 根证书",
        "desc": "进入小火箭「配置 -> 模块/证书」，点击生成新的 CA 证书。"
      },
      {
        "name": "下载并安装描述文件",
        "desc": "点击安装证书，系统 Safari 会提示下载描述文件，在 iPhone 设置中确认安装。"
      },
      {
        "name": "在系统设置中完全信任证书",
        "desc": "打开 iPhone「设置 -> 通用 -> 关于本机 -> 证书信任设置」，开启对小火箭 CA 证书的完全信任。"
      },
      {
        "name": "开启 HTTPS 解密开关",
        "desc": "返回小火箭，在配置中打开 HTTPS 解密开关，去广告与重写脚本即刻生效。"
      }
    ],
    "faqs": [
      {
        "q": "信任证书会导致银行密码泄露吗？",
        "a": "只要该证书仅由你本地设备生成且未导出私钥，第三方无法伪造证书发起中间人攻击。"
      }
    ]
  },
  {
    "slug": "surge-ios",
    "title": "Surge iOS 进阶配置指南 · Policy Group 策略组编排与模块扩展应用 | 机场Go",
    "shortTitle": "Surge iOS 进阶",
    "group": "移动端系统",
    "metaDesc": "高端网络调试神器 Surge iOS 全面教学。详解 Policy Group 策略组设计、URL Test 自动优选、模块 (Modules) 快速扩展与网络面板抓包分析。",
    "h1": "Surge iOS 进阶配置：Policy Group 策略组编排与模块应用",
    "date": "2026-03-02",
    "readTime": "9 分钟",
    "summary": "Surge 是 iOS 生态中性能最强悍、架构最严谨的商业网络工具。本篇带你拆解其核心配置文件，搭建具有容灾倒换和按需智能分流的高可靠出海网络。",
    "brandRecs": [
      "yinxingren",
      "flashleap",
      "breezenet"
    ],
    "steps": [
      {
        "name": "设计分层 Policy Group 策略组",
        "desc": "创建 PROXY 主组、Streaming 流媒体组、AI 组与 Final 兜底组，结构清晰明了。"
      },
      {
        "name": "配置 url-test 智能容灾节点",
        "desc": "设定 1200 秒检测周期与 50ms 容差阈值，网络抖动时无感切换到备用节点。"
      },
      {
        "name": "安装社区高质量 Modules 模块",
        "desc": "一键挂载去广告模块与特定域名 IP 伪装模块，避免频繁手动修改主文本配置。"
      },
      {
        "name": "利用 Network 面板抓包定位",
        "desc": "实时查看所有请求的匹配规则、命中节点与 TLS 握手耗时，排查异常断流。"
      }
    ],
    "faqs": [
      {
        "q": "Surge 价格较贵值得入手吗？",
        "a": "适合对网络延迟有极致要求的外贸主管、程序员或拥有全套苹果设备的重度用户。"
      }
    ]
  },
  {
    "slug": "surge-mac",
    "title": "Surge Mac 增强模式教程 · 局域网透明网关与 DHCP 路由接管 | 机场Go",
    "shortTitle": "Surge Mac 增强模式",
    "group": "桌面端系统",
    "metaDesc": "Surge Mac 增强模式 (Enhanced Mode) 详细实操。让 Mac 电脑变身高品质软路由与局域网透明网关，接管 Switch、PS5 及全家智能设备出海。",
    "h1": "Surge Mac 增强模式开启：局域网 DHCP 服务器与透明网关设置",
    "date": "2026-03-01",
    "readTime": "8 分钟",
    "summary": "Surge Mac 不仅是本机的调试利器，其独有的「增强模式」配合「DHCP 网关接管」可以让整个家庭局域网内的设备（无需安装任何软件）自动获得专线出海能力。",
    "brandRecs": [
      "yinxingren",
      "wavenet",
      "ladder"
    ],
    "steps": [
      {
        "name": "在 Mac 上开启增强模式",
        "desc": "点击 Surge 菜单栏图标，勾选 Enhanced Mode 并安装授权内核扩展。"
      },
      {
        "name": "开启局域网设备代理与 DHCP 接管",
        "desc": "在 Surge 设置中开启 Router 模式，关闭原有路由器上的 DHCP 服务，由 Surge 全权分配 IP。"
      },
      {
        "name": "局域网设备无缝入网",
        "desc": "手机、平板或游戏机连接家庭 Wi-Fi，网关自动指向 Mac，全设备透明代理瞬间达成。"
      },
      {
        "name": "针对特定设备设置独立规则",
        "desc": "在控制中心将电视盒子单独分配走流媒体节点，游戏机分配走低延迟电竞专线。"
      }
    ],
    "faqs": [
      {
        "q": "Mac 睡眠时局域网其他设备会断网吗？",
        "a": "必须确保 Mac 处于常开且防止睡眠状态（可连接电源并开启系统设置中的防止睡眠）。"
      }
    ]
  },
  {
    "slug": "loon-ios",
    "title": "Loon 客户端新手入门教程 · 节点订阅、分流策略与插件编写指南 | 机场Go",
    "shortTitle": "Loon iOS 入门",
    "group": "移动端系统",
    "metaDesc": "兼具强大功能与亲民价格的 iOS 客户端 Loon 入门手册。从基础节点订阅导入到自定义规则分流、节点图表测速及现代插件 (Plugins) 使用。",
    "h1": "Loon 客户端新手指南：从节点订阅导入到自定义规则与插件编写",
    "date": "2026-02-28",
    "readTime": "7 分钟",
    "summary": "Loon 以极佳的界面设计、平易近人的定价和完善的插件生态成为小火箭与 Surge 之间的绝佳选择。支持完整的协议库、可视化策略组编辑以及丰富的插件商店。",
    "brandRecs": [
      "breezenet",
      "muguang",
      "kuajie"
    ],
    "steps": [
      {
        "name": "配置订阅源",
        "desc": "在配置 -> 订阅管理中点击右上角加号，填入机场订阅链接并刷新获取节点。"
      },
      {
        "name": "可视化编排策略组",
        "desc": "通过 Loon 直观的图形拖拽界面建立自动选择与负载均衡策略组。"
      },
      {
        "name": "从插件商店安装增强功能",
        "desc": "一键安装常用的 BoxJs、流媒体一键解锁检测及海外社交软件去广告插件。"
      },
      {
        "name": "查看连接日志与统计",
        "desc": "仪表盘提供详细的流量走势图与各国家节点分流占比数据统计。"
      }
    ],
    "faqs": [
      {
        "q": "Loon 支持哪些代理协议？",
        "a": "全面支持 Shadowsocks、Trojan、VLESS、VMess 及主流通用协议。"
      }
    ]
  },
  {
    "slug": "quantumult-x-rules",
    "title": "Quantumult X (圈X) 策略组配置教程 · 精细化分流与去广告规则集 | 机场Go",
    "shortTitle": "圈X (QX) 进阶配置",
    "group": "移动端系统",
    "metaDesc": "iOS 经典神器 Quantumult X (圈X) 深入配置教学。拆解 static/available/round-robin 策略组语法、规则集更新与常见配置覆盖踩坑点。",
    "h1": "Quantumult X (圈X) 策略组配置：精细化分流与去广告规则集",
    "date": "2026-02-27",
    "readTime": "8 分钟",
    "summary": "Quantumult X 凭借底层极致的性能优化与高度自由的代码配置受到广大资深极客喜爱。本指南指导你理清 [policy] 与 [filter_remote] 规则，搭建稳定健壮的分流架构。",
    "brandRecs": [
      "breezenet",
      "wuyou",
      "feiv"
    ],
    "steps": [
      {
        "name": "获取并挂载远程节点分流资源",
        "desc": "在 server_remote 中填写机场 SS/Trojan 订阅，并设置自动排除无效节点筛选词。"
      },
      {
        "name": "定制多维度 Policy 策略组",
        "desc": "配置针对媒体、外贸办公与开发环境的静态挑选 (static) 与健康检查 (available) 出口。"
      },
      {
        "name": "导入远程 Filter 过滤规则集",
        "desc": "分级挂载国内白名单直连、流媒体专线与全球黑名单拦截规则。"
      },
      {
        "name": "长按右下角图标测试连通性",
        "desc": "一键触发全节点批量 HTTP Ping 延迟测试，锁定最快专线。"
      }
    ],
    "faqs": [
      {
        "q": "节点更新后策略组内依然显示旧节点？",
        "a": "在设置底部滑动选择「重新加载配置」，清除内存中的旧节点缓存引用。"
      }
    ]
  },
  {
    "slug": "stash-ios",
    "title": "Stash (Clash for iOS) 客户端教程 · 按需连接与多配置文件切换 | 机场Go",
    "shortTitle": "Stash iOS 教程",
    "group": "移动端系统",
    "metaDesc": "在 iOS 与 iPadOS 上完美运行 Clash 配置。详解 Stash 客户端的订阅导入、按需连接 (On-Demand) 自动化开启与跨平台配置文件兼容性。",
    "h1": "Stash (Clash for iOS) 教程：按需连接 (On-Demand) 与多配置切换",
    "date": "2026-02-26",
    "readTime": "6 分钟",
    "summary": "Stash 被誉为 iOS 上的 Clash。它完美兼容桌面端 Clash 的 YAML 配置格式，并原生支持 iOS 独有的按需连接（连入家庭 Wi-Fi 自动断开，离开家或连入蜂窝网络自动激活代理）。",
    "brandRecs": [
      "breezenet",
      "muguang",
      "yinxingren"
    ],
    "steps": [
      {
        "name": "直接导入现有 Clash 订阅",
        "desc": "在「配置」菜单点击右上角从 URL 下载，直接粘贴桌面端使用的 Clash 订阅链接。"
      },
      {
        "name": "开启按需连接 (On-Demand)",
        "desc": "设置特定规则：当接入指定 SSID 的家庭 Wi-Fi 时自动关闭 VPN，切换至流量时自动打开。"
      },
      {
        "name": "启用 Stash 覆盖配置 (Overlays)",
        "desc": "通过覆盖机制在不修改原始机场订阅的前提下追加个人个性化规则。"
      },
      {
        "name": "在控制中心添加快捷磁贴",
        "desc": "将 Stash 快捷开关添加到 iOS 控制中心，随手一拉极速启停。"
      }
    ],
    "faqs": [
      {
        "q": "Stash 是否支持桌面端相同的分流规则？",
        "a": "完全兼容，支持 DOMAIN-SUFFIX、IP-CIDR、GEOIP 以及 GEOSITE 完整语法。"
      }
    ]
  },
  {
    "slug": "v2rayng-advanced",
    "title": "v2rayNG 安卓客户端高级用法教程 · 分应用代理与自定义路由规则 | 机场Go",
    "shortTitle": "v2rayNG 高级技巧",
    "group": "移动端系统",
    "metaDesc": "安卓老牌工具 v2rayNG 进阶实操手册。图文解析 Per-App 分应用代理配置、绕过局域网及大陆地址白名单、多节点批量测速与开机启动设置。",
    "h1": "v2rayNG 安卓客户端高级用法：分应用代理 (Per-App Proxy) 与路由规则",
    "date": "2026-02-25",
    "readTime": "6 分钟",
    "summary": "v2rayNG 具有体积极小、纯粹无广告的特点，是很多安卓备用机或电视盒子的装机标配。通过深入配置其内置路由与应用过滤，可以获得丝滑省电的科学上网体验。",
    "brandRecs": [
      "breezenet",
      "feimaoyun",
      "firefly"
    ],
    "steps": [
      {
        "name": "订阅分组管理",
        "desc": "在左侧菜单点击「订阅分组设置」，分类管理不同机场的订阅源并设置自动更新间隔。"
      },
      {
        "name": "启用分应用代理",
        "desc": "在设置中勾选「分应用代理」，点击选择应用，过滤掉微信、银行客户端与国服游戏。"
      },
      {
        "name": "配置自定义路由规则",
        "desc": "将预定义规则切换为「绕过局域网及大陆地址 (bypass mainland)」，实现智能分流。"
      },
      {
        "name": "批量连通性真连接测速",
        "desc": "右上角菜单点击「测试全部配置真连接」，根据实际下载握手延迟排序挑选最优节点。"
      }
    ],
    "faqs": [
      {
        "q": "测速正常但依然打不开网页？",
        "a": "检查手机系统时间是否准确（误差超过 90 秒会导致 VMess/VLESS 协议握手失败）。"
      }
    ]
  },
  {
    "slug": "nekobox-android",
    "title": "NekoBox for Android 配置指南 · 整合 Sing-box 与 Xray 核心的多功能神器 | 机场Go",
    "shortTitle": "NekoBox 安卓教程",
    "group": "移动端系统",
    "metaDesc": "全协议支持的开源安卓客户端 NekoBox 使用指南。支持 Sing-box 核心驱动、内置 VLESS Reality、Hysteria 2 协议与精细化应用路由设置。",
    "h1": "NekoBox for Android 配置指南：整合 Sing-box 与 Xray 核心的多功能神器",
    "date": "2026-02-24",
    "readTime": "7 分钟",
    "summary": "NekoBox 结合了 Xray 与 Sing-box 两大底层引擎，是目前安卓生态中协议支持最广、更新最迅猛的开源客户端之一。特别适合需要运行 Hysteria 2 或 TUIC 等现代协议的用户。",
    "brandRecs": [
      "breezenet",
      "lingdong",
      "ladder"
    ],
    "steps": [
      {
        "name": "选择适配的核心引擎",
        "desc": "在设置的 Core Engine 中选择 Sing-box 或 Xray 引擎以获得最佳协议兼容性。"
      },
      {
        "name": "扫描二维码或粘贴链接导入",
        "desc": "支持直接导入单节点链接、标准 Clash 订阅或 Sing-box 配置。"
      },
      {
        "name": "配置现代路由分流规则",
        "desc": "内置标准 China 白名单，可一键开启绕过国内网站和局域网 IP。"
      },
      {
        "name": "开启低内存低功耗常驻模式",
        "desc": "配置前台服务通知，确保后台长周期挂载不被手机系统杀掉。"
      }
    ],
    "faqs": [
      {
        "q": "相比 CMFA 谁更适合新手？",
        "a": "新手更推荐 CMFA，界面更直观；追求最新前沿协议与极客自由度的选 NekoBox。"
      }
    ]
  },
  {
    "slug": "openwrt-passwall",
    "title": "OpenWrt 软路由 PassWall 插件设置教程 · 国内外分流与备用节点切换 | 机场Go",
    "shortTitle": "OpenWrt PassWall",
    "group": "路由器与大屏",
    "metaDesc": "软路由科学上网必备：OpenWrt PassWall 插件深度配置。详解节点导入、国内外分流规则、DNS 防污染、自动故障转移 (Failover) 与全家出海方案。",
    "h1": "OpenWrt 软路由 PassWall 插件设置：国内外分流、DNS 防污染与备用节点切换",
    "date": "2026-02-23",
    "readTime": "9 分钟",
    "summary": "PassWall 是 OpenWrt 软路由平台上稳定性极佳的代理插件。通过在路由器层面完成透明分流，家中无论是手机、电脑、智能电视还是扫地机器人都能享受纯净无感的网络加速。",
    "brandRecs": [
      "breezenet",
      "yinxingren",
      "muguang"
    ],
    "steps": [
      {
        "name": "在软路由中安装 PassWall 依赖",
        "desc": "通过 opkg 或预编译固件集成 PassWall 核心包与 iptables/nftables 转发规则。"
      },
      {
        "name": "在节点列表中导入机场订阅",
        "desc": "支持手动添加或自动拉取订阅节点，配置每隔 12 小时定时自动同步更新。"
      },
      {
        "name": "配置主要出站与自动容灾策略",
        "desc": "将主节点设为高品质专线（如微风网络或隐形人），配置故障监控，一旦超时自动切换备用节点。"
      },
      {
        "name": "配置 DNS 过滤与防污染",
        "desc": "国内 DNS 采用运营商提供或阿里 DNS，国外 DNS 采用 TCP 查询或 DoH，根绝 DNS 污染。"
      }
    ],
    "faqs": [
      {
        "q": "软路由科学上网国内打游戏会有延迟影响吗？",
        "a": "只要正确配置国内 IP 白名单直连，国内游戏和流量直接走物理直出，延迟无任何增加。"
      }
    ]
  },
  {
    "slug": "openwrt-clash",
    "title": "OpenWrt 软路由 OpenClash 旁路由部署教程 · 全家免客户端科学上网 | 机场Go",
    "shortTitle": "OpenClash 旁路由",
    "group": "路由器与大屏",
    "metaDesc": "家庭网络顶级方案：OpenClash 旁路由模式搭建。手把手教你配置主路由网关指向、Fake-IP 模式解析、全协议透明代理及多设备精细化分流。",
    "h1": "OpenWrt 软路由 OpenClash 旁路由部署：全家设备免客户端科学上网",
    "date": "2026-02-22",
    "readTime": "10 分钟",
    "summary": "旁路由模式无需改动原有家庭主路由结构，即插即拔、稳定性极高。OpenClash 结合 Meta 内核可以提供企业级的出海网关体验。",
    "brandRecs": [
      "yinxingren",
      "breezenet",
      "flashleap"
    ],
    "steps": [
      {
        "name": "规划旁路由网络拓扑与固定 IP",
        "desc": "给 OpenWrt 分配与主路由同网段的静态 IP，并将网关和 DNS 指向主路由。"
      },
      {
        "name": "安装并配置 OpenClash 运行模式",
        "desc": "推荐选用「Fake-IP (TUN 混合模式)」，兼具极佳的 DNS 解析效率与全协议兼容。"
      },
      {
        "name": "导入商业机场订阅配置文件",
        "desc": "上传配置文件并验证语法，启动内核并观察控制台运行日志。"
      },
      {
        "name": "在主路由或终端设备上修改网关",
        "desc": "需要出海的设备（如电脑、电视）手动将网关和 DNS 改为旁路由 IP 即可直接科学上网。"
      }
    ],
    "faqs": [
      {
        "q": "旁路由出现局域网多播风暴或网络环路？",
        "a": "务必关闭旁路由上的 DHCP 服务器，并在防火墙中开启 SYN-flood 防御和 IP 伪装 (MASQUERADE)。"
      }
    ]
  },
  {
    "slug": "router-merlin",
    "title": "华硕梅林 (Merlin) 固件路由器安装科学上网插件及端口映射教程 | 机场Go",
    "shortTitle": "华硕梅林路由器",
    "group": "路由器与大屏",
    "metaDesc": "硬路由出海指南：华硕 Asuswrt-Merlin 固件安装科学上网插件完整教程。涵盖 Koolshare 软件中心、插件离线安装、BGP 节点导入与国内外白名单加速。",
    "h1": "华硕梅林 (Merlin) 固件路由器安装科学上网插件及端口映射教程",
    "date": "2026-02-21",
    "readTime": "8 分钟",
    "summary": "华硕硬路由凭借强悍的博通处理器与梅林固件的稳定性，是许多家庭首选的高性能路由器。通过安装第三方插件中心，硬路由也可以拥有媲美软路由的自动分流出海能力。",
    "brandRecs": [
      "breezenet",
      "feimaoyun",
      "kuajie"
    ],
    "steps": [
      {
        "name": "刷入对应型号的 Merlin 改版固件",
        "desc": "确保路由器已成功刷入支持 JFFS 与软件中心 (Software Center) 的梅林固件。"
      },
      {
        "name": "离线安装出海插件安装包",
        "desc": "通过 SSH 终端或软件中心离线上传功能，安装科学上网管理面板插件。"
      },
      {
        "name": "配置机场订阅与自动更新策略",
        "desc": "填入机场订阅地址，设定每天凌晨自动拉取最新节点与 gfwlist 分流规则。"
      },
      {
        "name": "开启 GFWList 模式并应用",
        "desc": "选择分流模式为 GFWList，点击保存应用，路由器底层 iptables 规则自动重载。"
      }
    ],
    "faqs": [
      {
        "q": "梅林路由器发热严重会导致断流吗？",
        "a": "加密解密会占用路由器 CPU，建议选择支持硬件 AES 加密的协议（如 Shadowsocks 或 Trojan）。"
      }
    ]
  },
  {
    "slug": "docker-clash",
    "title": "Docker 容器化部署 Mihomo (Clash Meta) 教程 · 搭建家庭轻量级代理网关 | 机场Go",
    "shortTitle": "Docker 部署网关",
    "group": "高阶规则与排错",
    "metaDesc": "NAS 与轻量 Linux 服务器极客玩法：通过 Docker Compose 一键部署 Mihomo 透明网关，结合 Macvlan 网络实现局域网全设备无感高速出海。",
    "h1": "Docker 容器化部署 Mihomo (Clash Meta)：搭建轻量级家庭代理网关",
    "date": "2026-02-20",
    "readTime": "9 分钟",
    "summary": "利用家中常开的群晖 Synology、QNAP、绿联或 Unraid NAS，通过 Docker 容器部署 Mihomo 内核，无需额外购置软路由即可获得 7x24 小时低功耗透明出海网关。",
    "brandRecs": [
      "yinxingren",
      "breezenet",
      "wavenet"
    ],
    "steps": [
      {
        "name": "配置 host 或 macvlan 虚拟网络",
        "desc": "为 Docker 容器分配独立的局域网 IP，确保三层网络流量可以直接直达容器。"
      },
      {
        "name": "编写 docker-compose.yml 配置文件",
        "desc": "挂载 config.yaml 规则文件与 Country.mmdb IP 数据库，开启 privileged 特权模式。"
      },
      {
        "name": "启动容器并拉起 WebUI 控制台",
        "desc": "通过 Yacd 或 metacubexd 网页控制面板远程切换节点和查看连接状态。"
      },
      {
        "name": "设置开机自动重启",
        "desc": "加入 restart: always 策略，保障 NAS 意外重启后代理网关自动恢复。"
      }
    ],
    "faqs": [
      {
        "q": "Docker 容器内无法开启 TUN 模式？",
        "a": "需在 compose 配置中添加 cap_add: [NET_ADMIN] 并挂载 /dev/net/tun 设备。"
      }
    ]
  },
  {
    "slug": "apple-tv-proxy",
    "title": "Apple TV 大屏科学上网指南 · Surge 与 Shadowrocket tvOS 原生应用播放 4K | 机场Go",
    "shortTitle": "Apple TV 4K 教程",
    "group": "路由器与大屏",
    "metaDesc": "Apple TV 4K 科学上网终极指南。tvOS 17 原生 VPN 应用安装、Shadowrocket 与 Surge tvOS 版订阅配置及 Netflix/YouTube 4K 秒开调优。",
    "h1": "Apple TV 大屏出海指南：通过 Surge / Shadowrocket tvOS 原生应用播放 4K",
    "date": "2026-02-19",
    "readTime": "7 分钟",
    "summary": "从 tvOS 17 开始，Apple TV 正式支持原生 VPN 框架！用户再也不用繁琐折腾软路由，只需在电视上直接安装小火箭或 Surge 即可畅享原生 4K 杜比视界影音。",
    "brandRecs": [
      "breezenet",
      "lingmao",
      "yinxingren"
    ],
    "steps": [
      {
        "name": "在 Apple TV 上登录外区 Apple ID",
        "desc": "进入 tvOS App Store，搜索并下载已购买的 Shadowrocket 或 Surge tvOS 版。"
      },
      {
        "name": "通过局域网隔空推送配置",
        "desc": "电视端打开客户端显示局域网配置 URL，在手机 Safari 输入该网址一键同步节点配置。"
      },
      {
        "name": "遥控器一键开启连接",
        "desc": "使用 Apple TV 遥控器点击连接开关，状态栏出现 VPN 小图标即表示接管成功。"
      },
      {
        "name": "打开流媒体验证 4K 码率",
        "desc": "进入 Netflix 或 YouTube 播放 4K HDR 视频，按呼出控制中心查看实时下载速度。"
      }
    ],
    "faqs": [
      {
        "q": "电视上切换节点繁琐怎么办？",
        "a": "可以在 iPhone 上打开小火箭远程控制 Apple TV 上的客户端进行节点切换和测速。"
      }
    ]
  },
  {
    "slug": "android-tv-clash",
    "title": "安卓智能电视盒子安装 Clash 教程 · 索尼/小米电视与外贸盒子操作指南 | 机场Go",
    "shortTitle": "安卓电视盒子",
    "group": "路由器与大屏",
    "metaDesc": "索尼、小米、TCL 智能电视及外贸 Android TV 盒子科学上网指南。U盘安装 Clash for Android TV 版、遥控器方向键适配与开机自启动配置。",
    "h1": "索尼/小米等安卓智能电视盒子安装 Clash 与遥控器操作优化指南",
    "date": "2026-02-18",
    "readTime": "6 分钟",
    "summary": "大部分家用智能电视和电视盒子都基于 Android 系统。通过安装专为电视大屏适配的 Clash for Android TV 版，可以完美适配遥控器按键操作，让全家老人小孩都能轻松看大屏海外视频。",
    "brandRecs": [
      "breezenet",
      "muguang",
      "feiv"
    ],
    "steps": [
      {
        "name": "下载 TV 专用 APK 安装包至 U 盘",
        "desc": "下载适配横屏与电视遥控器焦点的 Clash for Android TV 专用安装文件。"
      },
      {
        "name": "在电视上安装并授权",
        "desc": "插入电视 USB 接口，通过文件管理器安装并开启安装未知应用权限。"
      },
      {
        "name": "通过电视内置浏览器导入订阅",
        "desc": "使用遥控器输入订阅短链，或通过局域网扫码将手机上的订阅同步至电视。"
      },
      {
        "name": "开启自动启动与规则分流",
        "desc": "勾选开机自动运行，分流模式保持为 Rule 规则模式，确保爱奇艺腾讯等国内应用不受影响。"
      }
    ],
    "faqs": [
      {
        "q": "部分电视遥控器无法点击「确定连接」弹窗？",
        "a": "部分国内定制电视系统屏蔽了 VPN 授权窗口，可插上鼠标或使用带有飞鼠功能的遥控器进行点击确认。"
      }
    ]
  },
  {
    "slug": "ps5-switch-xbox-proxy",
    "title": "主机联机加速教程 · PS5 / Nintendo Switch / Xbox 局域网代理中继与 NAT 优化 | 机场Go",
    "shortTitle": "主机加速指南",
    "group": "路由器与大屏",
    "metaDesc": "主机玩家必看：PS5、Switch、Xbox 游戏下载慢与联机掉线解决方案。通过电脑/手机局域网代理共享中继，将 NAT 类型从 Strict 优化为 Open/Type B。",
    "h1": "PS5 / Switch / Xbox 主机联机加速：局域网代理中继与 NAT 类型优化",
    "date": "2026-02-17",
    "readTime": "7 分钟",
    "summary": "家用游戏主机无法直接安装梯子客户端。通过在同一 Wi-Fi 下的电脑（开启局域网共享连接）作为中继代理，主机只需在网络设置中填入局域网代理服务器即可获得十几倍下载提速与顺畅联机体验。",
    "brandRecs": [
      "flashleap",
      "yinxingren",
      "breezenet"
    ],
    "steps": [
      {
        "name": "在电脑端客户端开启「允许局域网连接」",
        "desc": "在 Clash Verge Rev 或小火箭中勾选 Allow LAN (允许来自局域网的连接)，并记下端口号（如 7897）。"
      },
      {
        "name": "查询电脑当前局域网 IP 地址",
        "desc": "在电脑 CMD 输入 ipconfig，查看当前内网 IPv4 地址（如 192.168.1.100）。"
      },
      {
        "name": "在游戏主机中手动设置网络代理",
        "desc": "进入 PS5 / Switch 网络设置，修改连接为自定义，在「代理服务器」中填入上述 IP 和端口。"
      },
      {
        "name": "测试主机网络连接状态",
        "desc": "运行主机网络诊断，查看下载/上传速率跃升并确认 NAT 类型改善至流畅联机状态。"
      }
    ],
    "faqs": [
      {
        "q": "Switch 联机依然报 NAT 穿透错误？",
        "a": "建议在电脑端将模式切换为 TUN 模式，并优选支持 Full Cone NAT1 的专线节点（如闪跃或隐形人）。"
      }
    ]
  },
  {
    "slug": "clash-sub-convert",
    "title": "机场节点订阅转换安全指南 · Subconverter 搭建与自建节点防泄露 | 机场Go",
    "shortTitle": "订阅转换安全指南",
    "group": "高阶规则与排错",
    "metaDesc": "订阅转换安全防坑必读。为什么公用免费订阅转换存在偷跑节点与隐私盗取风险？手把手教你自建本地 Subconverter 与安全转换参数配置。",
    "h1": "机场节点订阅转换安全指南：Subconverter 搭建与自建节点防泄露",
    "date": "2026-02-16",
    "readTime": "8 分钟",
    "summary": "把机场订阅或自建节点丢给来历不明的第三方在线订阅转换网站，无异于将你的连接密码与账号凭据双手奉送。了解公用转换的劫持黑幕，并学会使用本地或自建转换保障绝对安全。",
    "brandRecs": [
      "breezenet",
      "kuajie",
      "wuyou"
    ],
    "steps": [
      {
        "name": "认识公共订阅转换的黑产风险",
        "desc": "不良站长会记录日志转卖节点流量，甚至在下发的规则中插入挖矿或恶意劫持脚本。"
      },
      {
        "name": "使用 Docker 本地部署 Subconverter",
        "desc": "一行命令在本地拉起 tindy2013/subconverter 纯净后端，完全断网环境也能无损转换。"
      },
      {
        "name": "搭配纯前端 Sub-web 界面使用",
        "desc": "在浏览器打开本地 Web 界面，一键将 SSR/V2ray/Trojan 订阅转为 Clash 或 Sing-box 格式。"
      },
      {
        "name": "检查转换后的输出配置",
        "desc": "核对输出规则，确认关键密码未被替换，且分流规则符合预期。"
      }
    ],
    "faqs": [
      {
        "q": "现在很多商业机场自带一键导入还需要转换吗？",
        "a": "正规优质机场（如微风网络、隐形人）仪表盘均已直接提供各大客户端专用格式，无需第三方转换。"
      }
    ]
  },
  {
    "slug": "telegram-proxy",
    "title": "Telegram 专用代理设置教程 · MTProto 协议与 Socks5 直连防封锁指南 | 机场Go",
    "shortTitle": "Telegram 代理配置",
    "group": "高阶规则与排错",
    "metaDesc": "电报 Telegram (TG) 连不上一直在 Connecting？详解 TG 内置 MTProto 专属代理添加、Socks5 局域网代理绑定与手机端自动唤醒防断连技巧。",
    "h1": "Telegram 专用代理设置：MTProto 协议与 Socks5 直连防封锁",
    "date": "2026-02-15",
    "readTime": "6 分钟",
    "summary": "Telegram 提供了极其完善的应用内代理机制。即使全局代理未开启，只要在 Telegram 设置中配置了有效的 Socks5 或 MTProto 代理通道，电报消息依然能随时秒收秒发。",
    "brandRecs": [
      "breezenet",
      "wavenet",
      "ladder"
    ],
    "steps": [
      {
        "name": "进入 Telegram 代理设置",
        "desc": "打开 Telegram「设置 -> 数据与存储 -> 代理设置 (Proxy Settings)」开启使用代理。"
      },
      {
        "name": "添加本地 Socks5 代理",
        "desc": "服务器填 127.0.0.1，端口填客户端本地 Socks 端口（默认 7890 或 7897），无需用户名密码。"
      },
      {
        "name": "或者添加公共 MTProto 代理链接",
        "desc": "点击 tg://proxy?server=... 格式的专属短链，一键保存并自动连接。"
      },
      {
        "name": "开启 Calls via proxy 语音代理",
        "desc": "确保语音通话选项勾选代理通道，保障跨国高清语音不被运营商 QoS 限制。"
      }
    ],
    "faqs": [
      {
        "q": "为什么使用公共 MTProto 代理顶部会显示赞助商广告？",
        "a": "MTProto 协议允许代理搭建者设置频道推广，属于正常机制；介意广告者建议使用客户端本地 Socks5 代理。"
      }
    ]
  },
  {
    "slug": "browser-switchyomega",
    "title": "谷歌 Chrome 与 Edge 浏览器安装 ZeroOmega (SwitchyOmega) 智能分流教程 | 机场Go",
    "shortTitle": "SwitchyOmega 浏览器分流",
    "group": "高阶规则与排错",
    "metaDesc": "PC 端最强浏览器代理插件：SwitchyOmega (ZeroOmega) 安装与规则配置。免全局开代理，仅对特定网页与域名自动出海，不影响其他桌面软件。",
    "h1": "谷歌 Chrome 与 Edge 浏览器安装 ZeroOmega (SwitchyOmega) 智能分流",
    "date": "2026-02-14",
    "readTime": "7 分钟",
    "summary": "只想在浏览器里查阅海外学术资料，不想影响其他软件或改变系统网络？通过在 Chrome 或 Edge 浏览器安装轻量插件 ZeroOmega，可以精准控制每个标签页的代理行为。",
    "brandRecs": [
      "breezenet",
      "yinxingren",
      "lingdong"
    ],
    "steps": [
      {
        "name": "在应用商店安装扩展插件",
        "desc": "在 Chrome 网上应用店或 Edge 扩展中心搜索 ZeroOmega (SwitchyOmega 现代维护版) 并安装。"
      },
      {
        "name": "新建代理情景模式 (Proxy Profile)",
        "desc": "协议选择 SOCKS5 或 HTTP，服务器填 127.0.0.1，端口填本地客户端监听端口。"
      },
      {
        "name": "配置自动切换模式 (Auto Switch)",
        "desc": "导入 GFWList 规则列表，当访问被屏蔽网站时自动使用代理，正常网站直连访问。"
      },
      {
        "name": "遇到未收录网站一键临时添加",
        "desc": "点击浏览器右上角圆圈图标，随手一键将当前域名添加到代理情景模式中生效。"
      }
    ],
    "faqs": [
      {
        "q": "原版 SwitchyOmega 在新版 Chrome 上提示已弃用？",
        "a": "由于 Chrome 转向 Manifest V3 标准，推荐安装社区现代移植版「ZeroOmega」，配置完全兼容且不会被禁用。"
      }
    ]
  },
  {
    "slug": "client-troubleshooting",
    "title": "科学上网客户端全平台排错排查宝典 · 端口占用、证书失效与 DNS 泄露诊断 | 机场Go",
    "shortTitle": "全平台故障排查宝典",
    "group": "高阶规则与排错",
    "metaDesc": "科学上网遇到连不上、网页打不开、延迟测速全红？全面汇总全平台客户端 10 大核心报错原因与解决方案，带你 3 分钟快速定位网络故障恢复访问。",
    "h1": "科学上网客户端全平台排错排查宝典：端口占用、证书失效与 DNS 泄露诊断",
    "date": "2026-02-13",
    "readTime": "10 分钟",
    "summary": "科学上网出问题，80% 的情况并非节点瘫痪，而是本地环境端口冲突、系统时间不同步、DNS 解析失效或杀毒软件误拦截。本指南为你提供系统化的网络排障排查决策树。",
    "brandRecs": [
      "breezenet",
      "yinxingren",
      "muguang",
      "flashleap"
    ],
    "steps": [
      {
        "name": "检查系统时间与 NTP 授时",
        "desc": "误差超过 90 秒会导致 TLS 握手直接失败。前往系统设置重新点击「立即同步时间」。"
      },
      {
        "name": "排查本地端口占用 (7890/7897)",
        "desc": "查看是否有旧版客户端在后台残留占用端口，在任务管理器杀死冲突进程或修改监听端口。"
      },
      {
        "name": "重置系统代理与 Winsock 目录",
        "desc": "在 Windows 管理员 CMD 运行 netsh winsock reset 并重启电脑，彻底修复断网故障。"
      },
      {
        "name": "测试节点物理连通性与 Ping 丢包",
        "desc": "在客户端点击批量测试，若所有节点全红，说明订阅域名被阻断或需要更新节点订阅。"
      }
    ],
    "faqs": [
      {
        "q": "为什么测速有延迟但打开网页依然显示连接被拒绝？",
        "a": "节点延迟测试仅测试 TCP 握手，若机场后端落地机被上游机房封禁，会出现有延迟但无数据流量的情况，切换其他节点即可。"
      },
      {
        "q": "微信、飞书频繁掉线并提示异地登录风险？",
        "a": "分流规则未生效导致国内通信软件走了轮换海外代理，务必切换为「规则模式 (Rule)」并确认白名单生效。"
      }
    ]
  }
];

module.exports = guidesData;

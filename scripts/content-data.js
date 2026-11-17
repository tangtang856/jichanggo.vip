// scripts/content-data.js
// 包含教程中心、选购指南博客、知识百科与法律政策页面的丰富、原创内容模型

const guidesData = [
  {
    slug: "windows",
    title: "Windows 电脑科学上网教程 · Clash Verge Rev 与 Sing-box 客户端配置指南",
    shortTitle: "Windows 配置教程",
    metaDesc: "2026最新 Windows 电脑梯子与机场节点配置图文教程。详解 Clash Verge Rev 与 Sing-box 客户端下载、订阅导入、TUN 虚拟网卡模式开启及常见连不上报错排查。",
    h1: "Windows 电脑科学上网配置指南：Clash Verge Rev 订阅导入与 TUN 模式详解",
    date: "2026-03-14",
    readTime: "6 分钟",
    content: `
      <p>在 Windows 操作系统中，使用机场节点或 VPN 梯子进行科学上网，目前主流且维护活跃的核心客户端为 <strong>Clash Verge Rev</strong> 以及基于新一代核心的 <strong>Sing-box</strong>。本指南以目前用户体验最佳、界面现代的 Clash Verge Rev 为例，带您一步步完成从下载安装到节点订阅、模式选择的完整流程。</p>
      
      <h2>一、客户端下载与安装</h2>
      <p>请认准官方开源维护地址，避免通过第三方不明下载站下载被植入木马或广告的篡改版本：</p>
      <ul>
        <li><strong>推荐工具：</strong>Clash Verge Rev（支持 Clash Meta / Mihomo 新核心）</li>
        <li><strong>系统要求：</strong>Windows 10 / Windows 11 64 位操作系统</li>
        <li><strong>安装步骤：</strong>下载 <code>.exe</code> 或 <code>.msi</code> 安装包后正常双击安装，初次启动时若弹出 Windows Defender 防火墙网络访问提示，请务必勾选“专用网络”和“公用网络”并点击允许。</li>
      </ul>

      <h2>二、导入机场订阅链接</h2>
      <ol>
        <li>登录您所购买的机场后台（如 <a href="../../airport/flyingbird/index.html">FlyingBird 飞鸟云</a> 或 <a href="../../airport/tag-vpn/index.html">TAG VPN</a> 等）。</li>
        <li>在用户中心找到“便捷导入”或“复制订阅链接”按钮，选择 <strong>Clash 订阅</strong> 并复制该 URL。</li>
        <li>打开 Clash Verge Rev，在左侧导航栏点击 <strong>「订阅（Profiles）」</strong>。</li>
        <li>在顶部输入框粘贴刚才复制的订阅链接，点击 <strong>「导入（Import）」</strong> 按钮。</li>
        <li>导入成功后，鼠标右键点击该订阅配置，选择 <strong>「使用（Select）」</strong>。</li>
      </ol>

      <h2>三、选择代理节点与路由分流</h2>
      <p>导入成功后，点击左侧 <strong>「代理（Proxies）」</strong> 菜单进入节点控制面板：</p>
      <ul>
        <li><strong>规则模式（Rule）：</strong>【强烈推荐】系统会自动识别访问的目标网站。访问国内网站（如百度、淘宝、B站）走直连不消耗翻墙流量；访问海外受限网站（Google、YouTube、GitHub）自动走机场节点。</li>
        <li><strong>全局模式（Global）：</strong>无论访问国内还是海外网站，全部强行通过代理节点。仅在遇到极特殊排错需求时临时开启，日常使用易导致国内应用卡顿或账号风控。</li>
        <li><strong>直连模式（Direct）：</strong>完全不走任何代理，相当于直接连网。</li>
      </ul>

      <h2>四、开启 TUN 虚拟网卡模式（解决部分软件不走代理）</h2>
      <p>默认情况下，Clash 采用系统 HTTP 代理协议，部分不遵循系统代理的软件（如命令行终端 CMD/PowerShell、部分游戏客户端、Git 同步、Telegram 桌面版）可能无法正常科学上网。开启 TUN 模式即可解决：</p>
      <blockquote>
        <p><strong>开启方法：</strong>在 Clash Verge Rev 左侧进入「设置（Settings）」→ 找到「服务模式（Service Mode）」并点击安装 → 安装完成后将「TUN 模式（Tun Mode）」开关打开即可接管整机所有网络流量。</p>
      </blockquote>

      <h2>五、常见问题与连不上排查</h2>
      <ul>
        <li><strong>问题 1：节点测试延迟全部 Timeout 超时？</strong><br>排查原因：系统时间存在误差。Windows 任务栏右下角时间必须与北京时间误差在 60 秒以内，否则 TLS 加密握手会被服务端拒绝。请在 Windows 设置中点击“立即同步时间”。</li>
        <li><strong>问题 2：浏览器打不开网页，提示代理服务器拒绝连接？</strong><br>排查原因：上次关机前未正常关闭系统代理。打开 Windows 设置 → 网络和 Internet → 代理 → 将“使用代理服务器”手动关闭即可。</li>
      </ul>
    `
  },
  {
    slug: "android",
    title: "Android 安卓手机科学上网指南 · Clash 与 v2rayNG 节点导入教程",
    shortTitle: "Android 配置教程",
    metaDesc: "2026安卓手机科学上网新手指南。详述 Clash Meta for Android (CMFA) 与 v2rayNG 客户端安装、订阅配置、绕过大陆局域网及电池省电白名单设置。",
    h1: "Android 安卓手机科学上网指南：Clash 与 v2rayNG 详细使用教程",
    date: "2026-03-13",
    readTime: "5 分钟",
    content: `
      <p>Android 平台因其高度开放的特性，拥有非常丰富且强大的代理工具。目前最推荐的主流工具为 <strong>Clash Meta for Android (CMFA)</strong> 与轻量级的 <strong>v2rayNG</strong>。本文将针对安卓系统独特的系统后台杀进程、权限授予及节点订阅进行全面拆解。</p>

      <h2>一、常用安卓代理客户端对比</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>客户端名称</th>
              <th>适用人群</th>
              <th>优势特点</th>
              <th>支持协议</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Clash Meta (CMFA)</strong></td>
              <td>日常综合使用、追剧</td>
              <td>UI 精美、自动分流规则完善、多节点策略组切换便捷</td>
              <td>Shadowsocks, Trojan, Vmess, VLESS, Hysteria2</td>
            </tr>
            <tr>
              <td><strong>v2rayNG</strong></td>
              <td>轻量需求、备用救急</td>
              <td>启动极快、占用内存微小、单一节点调试直观</td>
              <td>Vmess, VLESS, Trojan, Shadowsocks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>二、Clash Meta for Android 详细配置流程</h2>
      <ol>
        <li>从 GitHub Releases 或可靠渠道下载并安装 Clash Meta 官方 APK 文件。</li>
        <li>打开手机浏览器，登录您的机场网站账户（例如 <a href="../../airport/flyingbird/index.html">FlyingBird</a>）。</li>
        <li>点击「一键导入 Clash」或长按复制订阅链接。</li>
        <li>进入 CMFA 应用，点击 <strong>「配置（Profiles）」</strong> → 点击右上角 <strong>「+」</strong> 号 → 选择 <strong>「URL（从 URL 导入）」</strong>。</li>
        <li>名称可自定义填写（如“我的主力机场”），在 URL 栏粘贴刚才复制的订阅链接，右上角点击保存。</li>
        <li>返回主界面，点击灰色的 <strong>「点击启动」</strong> 开关。系统会弹出 VPN 连接请求，点击“确定”。</li>
        <li>点击 <strong>「代理」</strong> 选项卡，选择所需的国家地区节点（推荐选择延迟较低的香港、日本或新加坡节点）。</li>
      </ol>

      <h2>三、安卓系统必须设置的两个防掉线关键项</h2>
      <p>很多安卓用户常反馈：“刚连上好好的，锁屏几分钟后再打开手机就断开了”，这几乎全部是因为国产安卓系统（MIUI/HyperOS、OriginOS、ColorOS、EMUI）激进的省电优化杀后台导致的：</p>
      <ul>
        <li><strong>1. 锁定后台应用：</strong>在手机多任务卡片界面，长按 Clash Meta 卡片，点击“小锁”图标锁定后台。</li>
        <li><strong>2. 电池优化设置为无限制：</strong>长按桌面 Clash 图标 → 应用信息 → 电池优化（或省电策略） → 将“智能省电”更改为 <strong>“无限制（允许后台活动）”</strong>。</li>
      </ul>
    `
  },
  {
    slug: "ios",
    title: "iOS 苹果手机科学上网教程 · Shadowrocket 小火箭与 Loon 配置指南",
    shortTitle: "iOS 小火箭教程",
    metaDesc: "2026苹果 iPhone / iPad 科学上网配置图文教程。详解美区 Apple ID 获取、Shadowrocket（小火箭）安装、机场节点扫码与订阅导入、分流规则更新。",
    h1: "iOS 苹果手机科学上网教程：Shadowrocket 小火箭与 Loon 节点配置指南",
    date: "2026-03-12",
    readTime: "7 分钟",
    content: `
      <p>苹果 iOS 系统的安全性与生态限制与 Android 有很大差异。在中国大陆地区 App Store 中，所有代理相关应用均未上架。因此，iOS 用户科学上网的第一步也是最关键的一步，是准备一个<strong>海外地区（如美区、日区、港区）的 Apple ID</strong>。</p>

      <h2>一、前期准备：获取海外 Apple ID 与 Shadowrocket</h2>
      <p>目前 iOS 平台最流行、普及率最高的梯子客户端为 <strong>Shadowrocket（俗称小火箭，售价 $2.99 美元）</strong>，进阶极客用户亦可选择 Loon、Quantumult X 或 Surge。</p>
      <ul>
        <li><strong>海外 Apple ID：</strong>可通过苹果官网自行免费注册（选择美国地区，地址填免税州如俄勒冈），或在合规第三方平台购买已兑换好小火箭的现成账号。</li>
        <li><strong>切记注意：</strong>海外 Apple ID 只能在 <strong>App Store 应用商店</strong> 登录，<strong>严禁在手机「系统设置」的 iCloud 中登录</strong>，以防手机被意外锁死或隐私同步风险！</li>
      </ul>

      <h2>二、Shadowrocket 小火箭订阅导入</h2>
      <p>下载好小火箭后，将订阅节点导入非常简单，支持以下两种最便捷的方式：</p>
      <ol>
        <li><strong>方式 A：一键唤醒导入（推荐）</strong><br>用 Safari 浏览器登录机场后台，点击「一键导入到 Shadowrocket」，系统会自动唤醒小火箭并完成节点同步。</li>
        <li><strong>方式 B：手动添加订阅 URL</strong><br>在机场复制订阅链接 → 打开小火箭，点击右上角「+」号 → 类型选择 <strong>「Subscribe（订阅）」</strong> → 在 URL 栏粘贴链接，备注填写机场名称 → 点击右上角保存。</li>
      </ol>

      <h2>三、全局路由与常用分流规则设置</h2>
      <p>小火箭首页正下方有 <strong>「全局路由」</strong> 选项，点击可进行切换：</p>
      <ul>
        <li><strong>配置（Config）：【必选】</strong>类似 PC 端的规则分流。小火箭内置了大陆域名直连列表，国内网络走本地网络，外网访问走选中的节点。</li>
        <li><strong>代理（Proxy）：</strong>全部流量走代理。</li>
        <li><strong>直连（Direct）：</strong>全部直连。</li>
      </ul>
      <blockquote>
        <p><strong>进阶提示：</strong>在小火箭底部点击「配置」选项卡，定期点击 <code>default.conf</code> 后的感叹号，选择从网络更新规则库，可以保证国内最新网站不被误判走代理，有效节省套餐流量。</p>
      </blockquote>
    `
  },
  {
    slug: "macos",
    title: "macOS 苹果电脑科学上网配置 · Clash Verge Rev 与 Surge 详细指南",
    shortTitle: "macOS 配置教程",
    metaDesc: "2026苹果 Mac 电脑科学上网教程。支持 Apple Silicon M1/M2/M3/M4 芯片。详解 Clash Verge Rev for Mac 安装、安全隐私权限放行、增强模式与系统代理设置。",
    h1: "macOS 苹果电脑科学上网配置指南：Clash Verge Rev 与系统代理设置",
    date: "2026-03-11",
    readTime: "5 分钟",
    content: `
      <p>在 macOS 苹果电脑系统上，科学上网不仅要满足日常 Safari 与 Chrome 浏览，往往还需要兼顾 Terminal 终端下载、Homebrew 安装包、Docker 拉取镜像以及 Xcode 依赖同步等专业开发场景。</p>

      <h2>一、支持 Apple Silicon 架构的客户端选择</h2>
      <p>请根据您的 Mac 处理器芯片架构（可在屏幕左上角苹果图标 → 关于本机中查看）下载匹配的安装包：</p>
      <ul>
        <li><strong>M1 / M2 / M3 / M4 芯片：</strong>下载带有 <code>arm64</code> 或 <code>aarch64</code> 后缀的 DMG 安装包（原生运行，零性能损耗）。</li>
        <li><strong>Intel 处理器芯片：</strong>下载带有 <code>x64</code> 后缀的安装包。</li>
      </ul>

      <h2>二、macOS 安装提示“已损坏，无法打开”解决办法</h2>
      <p>由于开源客户端通常未向苹果官方缴纳高额的商业公证费用，macOS Gatekeeper 安全机制可能会拦截。处理方式如下：</p>
      <ol>
        <li>打开「系统设置」→「隐私与安全性」。</li>
        <li>滚动到“安全性”栏目，在拦截提示下方点击 <strong>“仍要打开”</strong> 并输入开机密码。</li>
        <li>若仍无法启动，可打开终端（Terminal）输入命令：<code>sudo xattr -rd com.apple.quarantine /Applications/Clash\\ Verge.app</code> 并回车即可解除隔离。</li>
      </ol>

      <h2>三、配置订阅与开启增强模式（Tun）</h2>
      <p>将机场后台的 Clash 订阅导入后，勾选「系统代理（System Proxy）」。对于程序员与终端开发者，强烈建议开启 <strong>TUN 模式（Tun Mode）</strong>。开启 TUN 模式后，系统所有层面的网络请求（包括终端 curl、git clone、npm i、pip 等）将自动无缝享受加速，不再需要在终端手动输入 export http_proxy 等环境变量。</p>
    `
  }
];

const blogData = [
  {
    slug: "how-to-choose-airport",
    title: "新手如何选择适合自己的机场节点与梯子？5大避坑法则与核心选购维度",
    metaDesc: "科学上网新手选购机场节点的完整指南。深入剖析月付试错、专线架构与公网直连差异、协议兼容性、流媒体解锁真实需求，告别跑路与降速陷阱。",
    h1: "新手如何选择适合自己的机场节点与梯子？5大避坑法则与核心考量维度",
    date: "2026-03-14",
    category: "选购技巧",
    readTime: "8 分钟",
    content: `
      <p>进入 2026 年，网络防火长城（GFW）的探测算法与封锁机制日趋精细化，传统的单台 VPS 自建模式不仅容易被精准识别阻断导致 IP 被封，而且综合维护成本高昂。这使得越来越多的出海工作者、科研学者以及追剧爱好者转向使用成熟专业的<strong>商业机场节点服务</strong>。然而面对市场上琳琅满目的机场品牌，新手极易落入“超售严重、晚高峰卡顿、虚假倍率甚至商家跑路”的坑。本文总结出 5 条黄金选购准则。</p>

      <h2>一、法则一：坚持“先月付后季付，严禁盲目年付”</h2>
      <p>这是机场圈最核心的铁律。无论某家机场在各类论坛上吹嘘得多么天花乱坠、无论其给出的“年付立减 50%”的折扣多么诱人，<strong>新手初次上车务必先选择单月付费套餐</strong>。原因有二：</p>
      <ul>
        <li><strong>本地网络与运营商匹配度：</strong>即便同一家机场，由于你所在的省份与家庭宽带（电信/联通/移动）入口调度不同，别人的测速结果绝不等于你的实际体验。</li>
        <li><strong>防范跑路风险：</strong>机场本质上属于高风险灰度业务，按月付费即便遭遇突发情况，损失也被严格控制在一杯奶茶钱以内。</li>
      </ul>

      <h2>二、法则二：认清线路底层——IEPL/IPLC 专线 vs 公网隧道中转</h2>
      <p>很多人只看套餐价格，却不看线路底层的架构成本。这直接决定了你在网络敏感时期的上网体验：</p>
      <ul>
        <li><strong>内网专线（IEPL / IPLC）：</strong>数据在境内入口服务器接收后，通过物理光纤专用内网直接传输到香港或海外机房，完全不经过 GFW 审查。优点是零封锁风险、延迟极低且极度稳定；缺点是带宽成本高昂，套餐单价偏高。代表品牌如 <a href="../../airport/tag-vpn/index.html">TAG VPN</a>、<a href="../../airport/kuromis/index.html">Kuromis</a>。</li>
        <li><strong>隧道中转：</strong>在国内入口与境外落地之间通过加密协议传输，性价比较高，但敏感时期若入口机房被断网，可能出现阶段性波动。代表品牌如 <a href="../../airport/flyingbird/index.html">FlyingBird 飞鸟云</a>。</li>
      </ul>

      <h2>三、法则三：警惕“超高倍率”背后的流量虚标陷阱</h2>
      <p>很多新手看到某个套餐标称“月付 10 元给 1000GB 流量”，觉得性价比高到爆棚，买完才发现看两个视频流量就耗尽了。原因就是隐藏的<strong>节点倍率（Multiplier）</strong>：</p>
      <p>如果该机场所有常用的高速节点都设置了 <code>3.0x</code> 或 <code>5.0x</code> 倍率，意味着你实际下载 1GB 文件，系统扣除 3GB 至 5GB 流量！原本 1000GB 的套餐实际只能用 200GB。因此，务必计算<strong>真实可用流量与真实单价</strong>，详见我们的 <a href="../../ranking/value/index.html">2026性价比排行榜</a>。</p>

      <h2>四、法则四：明确自己的核心使用场景</h2>
      <ol>
        <li><strong>如果是搞科研/查资料/写代码：</strong>重点看节点稳定性和 GitHub、Google 连通率，平价机场如 <a href="../../airport/westdata/index.html">WestData</a> 或轻量月付即可胜任。</li>
        <li><strong>如果是追 Netflix / Disney+ 流媒体：</strong>务必选择标明“原生 IP 解锁”的机场，否则打开 Netflix 只能看没有版权的自制剧。</li>
        <li><strong>如果是日常深度使用 ChatGPT / Claude / Midjourney：</strong>AI 服务商对机房 IP 的封控极为严厉，机房共享 IP 极易被判“Access Denied”。需要选择具有纯净家宽住宅 IP 或专精 AI 解锁的节点服务。</li>
      </ol>
    `
  },
  {
    slug: "vpn-vs-airport",
    title: "传统VPN与机场节点有何区别？出海与翻墙网络架构深度对比",
    metaDesc: "传统商业 VPN (ExpressVPN/NordVPN) 与国内机场节点对比。为什么在中国大陆翻墙传统 VPN 经常连不上？解析协议伪装、中转加速与分流机制原理。",
    h1: "传统VPN与机场节点究竟有何区别？原理、速度与安全性对比",
    date: "2026-03-13",
    category: "技术科普",
    readTime: "7 分钟",
    content: `
      <p>在中文语境下，很多刚接触科学上网的朋友常常把“翻墙”、“梯子”、“VPN”和“机场”混为一谈。不少新手甚至花费数百美元购买了海外大名鼎鼎的 ExpressVPN 或 NordVPN，结果在国内根本连不上或者慢如龟速。这两者究竟有什么本质区别？</p>

      <h2>一、诞生初衷与设计目标的不同</h2>
      <ul>
        <li><strong>传统 VPN（虚拟专用网络）：</strong>其诞生的首要目的是<strong>在公共网络上建立加密安全隧道</strong>，防止黑客窃听或公司内网远程接入，协议如 OpenVPN、IPsec、WireGuard。其特点是<strong>流量特征极度明显</strong>。在没有 GFW 审查的自由网络环境下，它非常安全；但在中国大陆，GFW 的深度包检测（DPI）能在毫秒级识别出 OpenVPN 的特征并直接丢包阻断。</li>
        <li><strong>机场节点（代理服务）：</strong>诞生于国内网络对抗前沿，底层采用 Shadowsocks、Vmess、Trojan、VLESS 等专门针对<strong>混淆与抗审查</strong>设计的专用协议。它的目标是将翻墙流量伪装成正常的 HTTPS 网页访问（如浏览微软或苹果官网），让防火墙难以分辨并安全放行。</li>
      </ul>

      <h2>二、网络传输架构的巨大差异</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>对比维度</th>
              <th>传统国际商业 VPN</th>
              <th>现代高质量机场节点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>连接拓扑</strong></td>
              <td>国内电脑 → 国际公网长途直连 → 境外服务器</td>
              <td>国内电脑 → 境内高防中转/专线入口 → 内网专线 → 境外落地</td>
            </tr>
            <tr>
              <td><strong>抗封锁能力</strong></td>
              <td>较差，敏感时期往往大面积连不上</td>
              <td>极强，尤其是 IEPL/IPLC 专线完全不经外网出口</td>
            </tr>
            <tr>
              <td><strong>国内网站分流</strong></td>
              <td>全盘接管网络，打开淘宝微信极慢甚至断连</td>
              <td>智能规则分流，国内应用秒开走直连，外网走代理</td>
            </tr>
            <tr>
              <td><strong>晚高峰延迟</strong></td>
              <td>通常 200ms - 400ms，丢包率高</td>
              <td>专线延迟低至 30ms - 70ms，基本不丢包</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>三、结论与推荐建议</h2>
      <p>如果您的主要场景是在中国大陆境内突破网络封锁、访问 Google、YouTube、Twitter、GitHub、ChatGPT 以及畅快追剧，<strong>现代机场节点在速度、延迟、稳定性和使用体验上全方位碾压传统 VPN</strong>。请根据自身预算，参考本站 <a href="../../recommend/index.html">机场推荐专题</a> 进行挑选。</p>
    `
  },
  {
    slug: "bgp-iplc-iepl-explained",
    title: "BGP、IPLC、IEPL专线深度解析：为什么专线不易断连与敏感期稳定？",
    metaDesc: "深入通俗解析机场线路黑话：BGP多线中转、IPLC国际私有租用线路与IEPL国际以太网专线。了解专线物理光纤传输原理及晚高峰不降速的核心原因。",
    h1: "BGP中转、IPLC与IEPL内网专线全方位解析：专线为什么更稳定？",
    date: "2026-03-11",
    category: "架构深度",
    readTime: "9 分钟",
    content: `
      <p>在查看机场套餐介绍或加入机场交流群时，大家经常会看到“三网 BGP 入口”、“全 IEPL 内网专线”、“IPLC 商务专线”等术语。这些专业名词究竟代表什么？为什么专线机场的定价通常是普通机场的 2 到 3 倍以上？本文为您深度揭秘。</p>

      <h2>一、什么是 BGP 多线接入？</h2>
      <p>BGP（边界网关协议，Border Gateway Protocol）指的是机房服务器同时接入了中国电信、中国联通、中国移动等多家骨干运营商线路。当你的本地宽带发起请求时，BGP 路由器会自动根据网络拥塞状况和跳数，为你匹配延迟最低、速度最快的入口通道。拥有优质 BGP 入口的机场，无论用户在哪个省份、使用什么宽带，都能获得较低的接入延迟。</p>

      <h2>二、什么是 IPLC 与 IEPL 内网专线？</h2>
      <ul>
        <li><strong>IPLC（International Private Leased Circuit，国际私有租用线路）：</strong>通信服务商在大陆与境外节点（如深圳至香港、上海至日本）之间拉设的端到端专用点对点通信电缆。数据完全在两端专有内网跑，<strong>不经过公共互联网网关，因此根本不会经过 GFW 防火长城的检测</strong>。</li>
        <li><strong>IEPL（International Ethernet Private Line，国际以太网专线）：</strong>IPLC 的现代化升级版，基于以太网技术构建，具备更高级的抖动控制、二层透明传输和更高的带宽扩容弹性。目前顶级高端机场（如 <a href="../../airport/tag-vpn/index.html">TAG VPN</a>、<a href="../../airport/kuromis/index.html">Kuromis</a>）普遍采用高质量 IEPL 专线。</li>
      </ul>

      <h2>三、普通公网中转 vs 内网专线的核心对比</h2>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>线路类别</th>
              <th>物理链路</th>
              <th>GFW 封锁影响</th>
              <th>晚高峰波动</th>
              <th>成本水平</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>直连/普通公网</strong></td>
              <td>普通国际互联网出口</td>
              <td>极易被干扰和封锁 IP</td>
              <td>拥堵严重、丢包率高</td>
              <td>极低</td>
            </tr>
            <tr>
              <td><strong>BGP 隧道中转</strong></td>
              <td>国内中转机房加密公网传输</td>
              <td>敏感时期入口易受影响</td>
              <td>中等稳定</td>
              <td>适中</td>
            </tr>
            <tr>
              <td><strong>IEPL / IPLC 专线</strong></td>
              <td>专用内网点对点光纤</td>
              <td><strong>零封锁风险（不经GFW）</strong></td>
              <td>极度平稳，抖动接近0</td>
              <td>昂贵</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>四、选购建议</h2>
      <p>如果您对外贸业务沟通、跨国会议（Zoom/Teams）、外服游戏对战或股票交易有“零容忍掉线”的高要求，请毫不犹豫选择专线机场。如果仅是平时随便刷刷视频，性价比中转机场已足够实用。</p>
    `
  },
  {
    slug: "airport-security-and-privacy",
    title: "翻墙安全与隐私防范：机场日志记录、DNS泄露与防关联指南",
    metaDesc: "科学上网网络安全必读指南。详解机场所有者能否看到你的访问内容、如何配置 DoH/DoT 杜绝 DNS 泄露、HTTPS 加密保护原理以及个人身份防关联技巧。",
    h1: "机场与梯子网络安全防范：如何杜绝DNS泄露与防范日志风险",
    date: "2026-03-09",
    category: "网络安全",
    readTime: "6 分钟",
    content: `
      <p>使用商业机场或第三方节点上网时，“隐私安全”是每个用户都应高度重视的议题。很多用户心存疑虑：机场主能看到我的银行密码或聊天记录吗？使用机场会不会暴露我的国内真实 IP？本文从网络技术原理为您客观厘清事实边界。</p>

      <h2>一、机场主究竟能看到你的什么？</h2>
      <p>首先明确一点：现代互联网绝大多数网站（95% 以上）均强制采用 <strong>HTTPS（TLS/SSL）加密</strong> 传输。</p>
      <ul>
        <li><strong>机场主【看不到】的内容：</strong>你在网站上填写的账号、密码、聊天信息、交易细节、信用卡号。这些数据在你的浏览器端就已经被非对称公钥加密，机场服务器只是一个中继管道，看到的只是一串无意义的随机密文。</li>
        <li><strong>机场主【可以看到】的内容：</strong>你访问了哪个域名（如你正在访问 google.com 还是 youtube.com）、你的连接时间戳以及消耗的流量大小。</li>
      </ul>

      <h2>二、如何防范 DNS 泄露？</h2>
      <p><strong>DNS 泄露（DNS Leak）</strong>是指在使用代理上网时，域名解析请求没有走代理服务器的加密通道，而是依然发送给了本地电信、联通或移动运营商的默认 DNS 服务器。这不仅会导致运营商知道你访问了什么外网网站，甚至可能触发域名污染导致无法访问。</p>
      <blockquote>
        <p><strong>防护措施：</strong>在 Clash 或 Sing-box 客户端中，开启 <code>DNS 劫持</code> 与 <code>Fake-IP 模式</code>，并将远程上游 DNS 配置为知名的加密 DNS，如 Cloudflare (<code>https://1.1.1.1/dns-query</code>) 或 Google (<code>https://8.8.8.8/resolve</code>)。</p>
      </blockquote>

      <h2>三、个人隐私防关联的 4 项黄金法则</h2>
      <ol>
        <li><strong>严禁使用翻墙节点发表违反当地法律的极端敏感言论：</strong>机场为了合规运营通常配置有敏感审计规则，触碰红线会被封禁账号。</li>
        <li><strong>注册机场账号使用独立邮箱：</strong>建议使用 ProtonMail 或专门的 Outlook 邮箱，不要直接使用国内包含实名认证的 QQ/网易邮箱。</li>
        <li><strong>支付方式选择：</strong>若对匿名性有极高要求，可选择支持 USDT 加密货币支付的高端机场。</li>
        <li><strong>定期检查客户端版本：</strong>及时更新客户端核心代码，避免旧版本潜在的安全漏洞。</li>
      </ol>
    `
  },
  {
    slug: "ai-chatgpt-airport-nodes",
    title: "访问ChatGPT提示Access Denied？解锁AI工具的机场节点选择技巧",
    metaDesc: "访问 ChatGPT、Claude、Cursor 提示 IP 被拉黑或人机验证死循环？深度解析 OpenAI 防封控机制、原生家宽住宅 IP 与数据中心机房 IP 差异及专用节点选购建议。",
    h1: "访问ChatGPT/Claude提示IP被封？解锁AI工具的机场节点选择秘籍",
    date: "2026-03-08",
    category: "AI出海",
    readTime: "7 分钟",
    content: `
      <p>随着 ChatGPT、Claude 3.5 Sonnet、Midjourney、Perplexity 以及编程神器 Cursor 的普及，跨国使用 AI 工具已经成为很多开发人员与白领的刚需。然而，许多人在开启梯子后，却频频遇到以下令人抓狂的提示：</p>
      <blockquote>
        <p><em>“Access denied: You do not have access to chatgpt.com”</em><br>或者在登录 Claude 时提示：<em>“Your account has been disabled / App is not available in your country”</em></p>
      </blockquote>

      <h2>一、为什么很多机场节点无法使用 ChatGPT 或 Claude？</h2>
      <p>OpenAI 与 Anthropic 引入了全球最严格的<strong>网络信誉风险控制系统（Risk Score）</strong>。它们不仅检测你的地理位置，还会通过 IP 库查询该 IP 的属性：</p>
      <ul>
        <li><strong>数据中心广播 IP（Datacenter IP）：</strong>便宜机场为了节约成本，大量使用租用的公有云 IDC 机房 IP。如果一个机房 IP 同时有数千名机场用户在频繁发起请求，风控系统会判定该 IP 为爬虫或机器人，直接进行整网段屏蔽。</li>
        <li><strong>原生住宅 IP（Residential IP）：</strong>由当地正规互联网服务商（如美国 AT&T、Verizon，日本 NTT）分配给家庭宽带的真实原生 IP。这种 IP 纯净度极高，被 OpenAI 判定为合法真实自然人，极少触发封锁与人机验证。</li>
      </ul>

      <h2>二、AI 专用机场选购要点</h2>
      <ol>
        <li><strong>确认是否提供标注为「原生IP」或「OpenAI/Claude专线」的节点：</strong>如 <a href="../../airport/kuromis/index.html">Kuromis 库洛米</a> 和 <a href="../../airport/tag-vpn/index.html">TAG VPN</a> 均对 AI 接口做了针对性路由保障。</li>
        <li><strong>协议支持与 UDP 转发：</strong>确保客户端开启了 UDP 转发支持，部分实时语音对话（如 ChatGPT Voice 模式）依赖 WebRTC 与 UDP 协议，若节点不支持 UDP 将无法正常语音通话。</li>
        <li><strong>分流规则配置：</strong>在 Clash 订阅规则中，确保 <code>OpenAI.yaml</code> 和 <code>Claude.yaml</code> 规则库为最新版本，避免相关 API 域名漏走代理。</li>
      </ol>
    `
  }
];

const glossaryData = [
  {
    slug: "iplc",
    title: "什么是 IPLC 专线？国际私有租用线路工作原理与优势详解",
    metaDesc: "通俗科普什么是 IPLC 专线（国际私有租用线路）。详解其物理光纤工作原理、为什么不经过 GFW 防火长城、低延迟与高成本原因。",
    h1: "什么是 IPLC 专线？国际私有租用线路工作原理解析",
    date: "2026-03-10",
    content: `
      <p><strong>IPLC</strong> 是英文 <strong>International Private Leased Circuit</strong> 的缩写，直译为“国际私有租用线路”。在计算机网络通信中，它是跨国电信运营商在两个国家或地区之间架设的点对点专用物理通信链路。</p>

      <h2>一、IPLC 专线的工作原理</h2>
      <p>普通公网翻墙的数据路径是：你的电脑 → 本地运营商 → 国际公网出口网关（部署有 GFW 审查系统） → 境外互联网。在这个过程中，数据包必须经过层层审查，极易被识别阻断。</p>
      <p>而 IPLC 专线的数据路径则是：你的电脑 → 境内入口内网机房 → <strong>物理专用光纤点对点内网传输</strong> → 境外机房落地。整个内网传输阶段与公共互联网完全物理隔离，<strong>根本不走国际互联网公网出口，因此天然免疫 GFW 的任何封锁和嗅探</strong>。</p>

      <h2>二、IPLC 的核心优势</h2>
      <ul>
        <li><strong>永远在线、极度稳定：</strong>不受任何外部重大事件或敏感日期的公网封锁影响。</li>
        <li><strong>超低且恒定的延迟：</strong>由于是两点之间直达的光纤物理距离，网络抖动极小，没有公网路由乱跳的现象。</li>
        <li><strong>丢包率趋近于 0：</strong>即使在晚高峰国际出口网络塞车时期，专线依然畅行无阻。</li>
      </ul>

      <h2>三、为什么 IPLC 机场相对昂贵？</h2>
      <p>专线带宽属于企业级昂贵电信资产，通常是按 Mbps 独享带宽每月向电信运营商支付高额租赁费用（每 Gbps 每月费用数万至数十万元人民币）。因此采用真正全专线架构的机场（如 <a href="../../airport/tag-vpn/index.html">TAG VPN</a>），其套餐价格普遍高于普通中转机场。</p>
    `
  },
  {
    slug: "shadowsocks-vless-hysteria2",
    title: "SS、VLESS、Trojan 与 Hysteria 2 协议对比 · 常见代理协议详解",
    metaDesc: "2026主流翻墙科学上网协议全面横评对比。深入剖析 Shadowsocks、Trojan、VLESS-XTLS 与新兴 UDP 协议 Hysteria 2 的速度、抗封锁与资源消耗。",
    h1: "VPN节点常用协议解析：Shadowsocks、VLESS、Trojan 与 Hysteria 2",
    date: "2026-03-08",
    content: `
      <p>现代科学上网体系中，协议是客户端与服务端通信的“密码语言”。了解常用协议的特性，有助于我们在不同网络环境下挑选最合适的节点。</p>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>协议名称</th>
              <th>传输层基础</th>
              <th>主要优势</th>
              <th>适用场景</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Shadowsocks (SS)</strong></td>
              <td>TCP / UDP</td>
              <td>轻量级、加解密速度极快、资源消耗低</td>
              <td>专线内网传输（专线内部无需过度伪装）</td>
            </tr>
            <tr>
              <td><strong>Trojan</strong></td>
              <td>TLS / TCP</td>
              <td>伪装成标准 HTTPS 流量、合规证书认证</td>
              <td>公网中转与防识别</td>
            </tr>
            <tr>
              <td><strong>VLESS (Reality)</strong></td>
              <td>TCP</td>
              <td>去除了多余的加密握手负载、模拟借用真实大厂证书</td>
              <td>直连防探测、新一代高隐蔽代理</td>
            </tr>
            <tr>
              <td><strong>Hysteria 2</strong></td>
              <td>QUIC / UDP</td>
              <td>双向魔改拥塞控制、弱网及高丢包环境下暴力跑满带宽</td>
              <td>校园网、晚高峰公网恶劣弱网环境</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    slug: "rules-and-routing",
    title: "代理分流规则原理科普：全局模式、绕过大陆与PAC机制区别",
    metaDesc: "科普科学上网中的分流规则与路由机制。为什么需要智能分流？详解规则模式（Rule）、全局模式（Global）与直连模式（Direct）的运作流程。",
    h1: "代理分流规则与路由模式解析：全局、绕过大陆与规则分流机制",
    date: "2026-03-07",
    content: `
      <p>在日常使用客户端时，很多人常问：“为什么我翻墙之后，微信或京东的定位跑到了香港？为什么有时候国内 App 刷不出来？”这些都与客户端的<strong>路由分流（Routing Rules）</strong>息息相关。</p>

      <h2>一、分流规则的核心工作流程</h2>
      <p>当你在浏览器输入一个网址时，分流引擎会按照预先配置的规则表自上而下匹配：</p>
      <ol>
        <li><strong>域名后缀匹配：</strong>例如匹配到 <code>.cn</code> 结尾，直接命中直连规则（DIRECT），走本地宽带直出。</li>
        <li><strong>地理位置 IP 匹配：</strong>如果是国内常见 CDN IP（GeoIP CN），走直连。</li>
        <li><strong>黑名单列表匹配：</strong>命中 Google、Twitter、Netflix 域名列表，自动路由给选定的代理节点（PROXY）。</li>
        <li><strong>最终兜底规则（MATCH）：</strong>未命中上述所有规则的未知网站，根据用户设定的默认策略决定走代理还是直连。</li>
      </ol>
    `
  },
  {
    slug: "node-multiplier",
    title: "什么是机场节点倍率？0.1倍率与3倍率流量实际消耗计算公式",
    metaDesc: "科普什么是机场节点倍率。详细解释为什么有些节点流量消耗极快、低倍率冷门节点省流量技巧以及套餐真实可用流量换算方法。",
    h1: "什么是机场节点倍率？为什么有些节点流量消耗特别快？",
    date: "2026-03-06",
    content: `
      <p>在机场节点列表中，节点名称后面常常会带有 <code>[0.2x]</code>、<code>[1.0x]</code>、<code>[3.0x]</code> 甚至 <code>[5.0x]</code> 的数字标签，这就是<strong>节点倍率（Traffic Multiplier）</strong>。</p>

      <h2>一、倍率扣费计算公式</h2>
      <blockquote>
        <p><strong>实际扣除流量 = 产生的数据流量 × 节点倍率</strong></p>
      </blockquote>
      <p>举例说明：你在 YouTube 上看了一部 4K 电影，实际下载了 <strong>10 GB</strong> 视频数据：</p>
      <ul>
        <li>如果你使用的是 <strong>1.0x 标准倍率</strong> 节点，账户扣除：<code>10GB × 1.0 = 10GB</code>。</li>
        <li>如果你使用的是 <strong>3.0x 高速专线</strong> 节点，账户扣除：<code>10GB × 3.0 = 30GB</code>！</li>
        <li>如果你使用的是 <strong>0.2x 闲时或走量</strong> 节点，账户扣除：<code>10GB × 0.2 = 2GB</code>。</li>
      </ul>

      <h2>二、如何合理利用倍率省流量？</h2>
      <p>在下载大型游戏客户端（如 Steam / Epic 几十 GB 的补丁）或常规网页浏览时，尽量选用 <code>0.5x</code> 或 <code>1.0x</code> 的平价节点；而只有在进行关键远程会议、打联机游戏或需要极高稳定性的商务操作时，才切换到 <code>2.0x</code> 以上的优质专线节点，这是老玩家最重要的省流量秘诀。</p>
    `
  },
  {
    slug: "dns-leak",
    title: "什么是 DNS 泄露？真实IP如何被暴露以及本地客户端防泄露配置",
    metaDesc: "科普什么是 DNS 泄露（DNS Leak）。解析其安全风险原理、真实访客意图如何被本地运营商窥探，以及如何在客户端中配置防泄露方案。",
    h1: "什么是 DNS 泄露？原理机制与客户端本地防护配置指南",
    date: "2026-03-05",
    content: `
      <p>当用户开启代理软件访问外网时，网络数据本身虽然已被加密，但如果计算机在查询域名对应的 IP 地址时，依然悄悄向国内宽带运营商的本地 DNS 服务器发送查询请求，这种现象就叫做 <strong>DNS 泄露（DNS Leak）</strong>。</p>

      <h2>一、DNS 泄露的危害</h2>
      <ol>
        <li><strong>浏览记录被截获：</strong>本地 ISP 虽然看不到你下载的具体内容，但能清晰记录下你在几点几分查询了解析哪个外网域名。</li>
        <li><strong>遭遇 DNS 投毒与污染：</strong>国内运营商的 DNS 节点对受限域名实施了污染阻断，返回一个错误的虚假 IP，导致即便挂着梯子也依然显示“网站无法访问”。</li>
      </ol>

      <h2>二、如何在客户端中彻底杜绝 DNS 泄露？</h2>
      <p>在现代客户端（如 Clash Verge Rev、Surge、Shadowrocket）中，请确保勾选了以下关键配置：</p>
      <ul>
        <li>启用 <strong>Fake-IP 模式</strong>，由客户端在本地合成虚拟 IP，彻底阻断远程解析泄露。</li>
        <li>启用 <strong>DoH (DNS over HTTPS)</strong>，所有 DNS 解析请求全部通过加密 HTTPS 隧道发送至海外知名公共 DNS（如 Cloudflare <code>1.1.1.1</code>）。</li>
      </ul>
    `
  }
];

module.exports = {
  guidesData,
  blogData,
  glossaryData
};

# Bing Webmaster Tools (必应站长工具) 实操与上线维护指南

本指南指导网站管理员在将 `jichanggo.vip` 部署上线后，完成 Bing 搜索引擎的验证、收录加速与日常维护。

---

## 一、前置准备：部署到 Cloudflare Pages

由于本站采用纯 HTML + 原生 CSS 的静态秒开架构，部署到 Cloudflare Pages 极其简单快捷，且全球 CDN 边缘节点加载速度极快。

### 步骤 1：连接 GitHub 仓库
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)。
2. 在左侧菜单点击 **Workers 与 Pages (Workers & Pages)** → 点击 **创建应用程序 (Create application)** → 选择 **Pages** 选项卡。
3. 点击 **连接到 Git (Connect to Git)**，授权并选择 GitHub 仓库：`tangtang856/jichanggo.vip`。

### 步骤 2：配置构建设置
- **项目名称 (Project Name)**：`jichanggo` (或自定义)
- **生产分支 (Production Branch)**：`main`
- **框架预设 (Framework preset)**：选择 **None (无)**
- **构建命令 (Build command)**：`npm run build` (或者留空，因为代码仓库根目录已包含完整生成后的纯 HTML/CSS 文件)
- **构建输出目录 (Build output directory)**：`/` (根目录，直接填 `/` 或留空)

点击 **保存并部署 (Save and Deploy)**。通常在 30 秒以内即可在全球完成部署并获得类似 `jichanggo.pages.dev` 的访问地址。

### 步骤 3：绑定自定义独立域名 `jichanggo.vip`
1. 在 Pages 项目控制台，进入 **自定义域 (Custom Domains)** 选项卡。
2. 点击 **设置自定义域 (Set up a custom domain)**，输入 `jichanggo.vip`。
3. 如果您的域名已经在 Cloudflare 托管，系统会自动配置好 CNAME 记录并免费开启 HTTPS SSL 证书。

---

## 二、Bing Webmaster Tools (必应站长工具) 配置流程

### 1. 网站添加与站长验证 (Site Verification)
1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters) 并使用微软账号登录。
2. 在左上角选择“添加站点”，输入您的正式域名：`https://jichanggo.vip`。
3. 验证方式选择：
   - **方式 A（最推荐）：XML 文件验证**
     我们已经在项目根目录预置了验证文件：`BingSiteAuth.xml`。上线后 Bing 访问 `https://jichanggo.vip/BingSiteAuth.xml` 即可直接验证通过。
   - **方式 B：Google Search Console 一键同步导入**
     如果您已在 GSC 验证过该域名，可在 Bing 站长工具直接选择“从 Google Search Console 导入”，无需二次验证。

---

### 2. 提交 Sitemap (网站地图)
1. 在 Bing 站长工具左侧导航栏，点击 **Sitemaps (站点地图)**。
2. 点击右上角 **提交站点地图 (Submit sitemap)**。
3. 输入您的 Sitemap 完整路径：
   ```text
   https://jichanggo.vip/sitemap.xml
   ```
4. 点击提交。Bing 爬虫将在 24-48 小时内完成首次遍历并抓取。

---

### 3. IndexNow 状态监控与验证
本站已完全集成 IndexNow 协议：
- **Key 验证文件**：`https://jichanggo.vip/8f25e5a00ac14961bdbf4f2eff07a668.txt`
- **自动化提交命令**：`npm run indexnow`

#### 如何在 Bing 站长后台查看 IndexNow：
1. 在左侧菜单点击 **IndexNow** 模块。
2. 您将看到最近通过 API 推送的 URL 列表、推送成功率以及 Bingbot 的抓取转化情况。
3. **重要说明**：IndexNow 成功返回 HTTP 202 代表推送被接收，搜索引擎仍会根据网页原创度、技术结构与反垃圾机制进行爬取调度，并不代表提交即刻收录。

---

### 4. URL 检查工具 (URL Inspection)
对于核心高优先级页面（如首页、综合排行榜、核心评测）：
1. 在 Bing 站长工具顶部或左侧菜单打开 **URL 检查 (URL Inspection)**。
2. 输入 `https://jichanggo.vip/`。
3. 点击 **测试实时 URL (Test Live URL)**，验证：
   - HTTP 状态码是否为 200 OK
   - 抓取是否成功（HTML、CSS 是否无阻塞放行）
   - 结构化数据 Schema 是否被识别
4. 点击 **请求编制索引 (Request Indexing)**，加速首页在 Bing 中的建库。

---

### 5. 抓取问题与收录覆盖率监控 (Crawl Issues & Coverage)
- **Crawl Control (抓取控制)**：默认设置为自适应即可。若晚高峰访问量大，可设置 Bingbot 在中国大陆凌晨时间段进行深度抓取。
- **Index Coverage (索引覆盖率)**：定期检查是否有被标记为“抓取异常”或“404 错误”的页面。
- **Search Performance (搜索表现)**：监控主攻关键词（`机场推荐`、`性价比机场`、`梯子推荐` 等）在 Bing 搜索结果中的真实展示次数（Impressions）、点击量（Clicks）及平均排名（Average Position）。

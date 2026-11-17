// scripts/generate.js
// 静态站点生成引擎：自动编译 38+ 页面，严格遵循相对路径规范与 Bing SEO 要求

const fs = require('fs');
const path = require('path');
const {
  airports,
  getAirports,
  getAirportBySlug,
  getRankingsOverall,
  getRankingsStability,
  getRankingsValue,
  getRankingsBudget
} = require('../src/data/airports.js');

const BASE_URL = "https://jichanggo.vip";
const ROOT_DIR = path.resolve(__dirname, '..');

// 辅助方法：确保目标目录存在
function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 辅助方法：根据相对根目录层级计算相对路径前缀
function getRelPrefix(depth) {
  if (depth === 0) return "./";
  return "../".repeat(depth);
}

// 全局 Header 渲染（严格使用 relPrefix 确保相对路径）
function renderHeader(relPrefix, activeNav = "") {
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${relPrefix}index.html" class="site-logo">
        <span class="badge-logo">机场Go</span>
        <span>JichangGo.vip</span>
      </a>
      <nav>
        <ul class="nav-desktop">
          <li><a href="${relPrefix}index.html" class="nav-link ${activeNav === 'home' ? 'active' : ''}">首页</a></li>
          <li><a href="${relPrefix}recommend/index.html" class="nav-link ${activeNav === 'recommend' ? 'active' : ''}">机场推荐</a></li>
          <li><a href="${relPrefix}ranking/index.html" class="nav-link ${activeNav === 'ranking' ? 'active' : ''}">机场排行</a></li>
          <li><a href="${relPrefix}review/index.html" class="nav-link ${activeNav === 'review' ? 'active' : ''}">独立评测</a></li>
          <li><a href="${relPrefix}compare/index.html" class="nav-link ${activeNav === 'compare' ? 'active' : ''}">机场对比</a></li>
          <li><a href="${relPrefix}guides/index.html" class="nav-link ${activeNav === 'guides' ? 'active' : ''}">使用教程</a></li>
          <li><a href="${relPrefix}blog/index.html" class="nav-link ${activeNav === 'blog' ? 'active' : ''}">选购指南</a></li>
          <li><a href="${relPrefix}glossary/index.html" class="nav-link ${activeNav === 'glossary' ? 'active' : ''}">知识百科</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="${relPrefix}compare/index.html" class="btn btn-primary btn-sm">横向对比</a>
        <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="展开导航菜单" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
    <div id="mobile-nav" class="nav-mobile">
      <ul class="nav-mobile-list">
        <li><a href="${relPrefix}index.html" class="nav-mobile-link ${activeNav === 'home' ? 'active' : ''}">首页</a></li>
        <li><a href="${relPrefix}recommend/index.html" class="nav-mobile-link ${activeNav === 'recommend' ? 'active' : ''}">机场推荐专题</a></li>
        <li><a href="${relPrefix}ranking/index.html" class="nav-mobile-link ${activeNav === 'ranking' ? 'active' : ''}">多维度排行榜</a></li>
        <li><a href="${relPrefix}review/index.html" class="nav-mobile-link ${activeNav === 'review' ? 'active' : ''}">机场独立深度评测</a></li>
        <li><a href="${relPrefix}compare/index.html" class="nav-mobile-link ${activeNav === 'compare' ? 'active' : ''}">机场在线对比工具</a></li>
        <li><a href="${relPrefix}guides/index.html" class="nav-mobile-link ${activeNav === 'guides' ? 'active' : ''}">全平台客户端教程</a></li>
        <li><a href="${relPrefix}blog/index.html" class="nav-mobile-link ${activeNav === 'blog' ? 'active' : ''}">博客与选购技巧</a></li>
        <li><a href="${relPrefix}glossary/index.html" class="nav-mobile-link ${activeNav === 'glossary' ? 'active' : ''}">网络术语与知识百科</a></li>
        <li><a href="${relPrefix}about/index.html" class="nav-mobile-link">关于我们与评测标准</a></li>
      </ul>
    </div>
  </header>`;
}

// 全局 Footer 渲染（严格使用 relPrefix 确保相对路径）
function renderFooter(relPrefix) {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h4>机场Go (JichangGo.vip)</h4>
          <p>专注于中文科学上网、优质机场推荐、梯子与 VPN 节点深度评测的独立技术资讯门户。坚持客观、透明、可验证的测试原则，拒绝虚构测速与虚假参数，帮助用户安全高效出海。</p>
          <div style="margin-top: 1rem;">
            <span class="badge badge-primary">Bing SEO 优化站</span>
            <span class="badge badge-success" style="margin-left: 0.5rem;">客观独立评测</span>
          </div>
        </div>
        <div class="footer-col">
          <h5>核心专题</h5>
          <ul class="footer-links">
            <li><a href="${relPrefix}recommend/budget/index.html">平价性价比机场</a></li>
            <li><a href="${relPrefix}recommend/premium/index.html">高端稳定专线</a></li>
            <li><a href="${relPrefix}recommend/beginner/index.html">新手一键客户端</a></li>
            <li><a href="${relPrefix}recommend/ai/index.html">ChatGPT / AI专用节点</a></li>
            <li><a href="${relPrefix}recommend/streaming/index.html">流媒体 4K 解锁</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>教程与工具</h5>
          <ul class="footer-links">
            <li><a href="${relPrefix}compare/index.html">机场横向对比工具</a></li>
            <li><a href="${relPrefix}ranking/overall/index.html">综合实力排行榜</a></li>
            <li><a href="${relPrefix}guides/windows/index.html">Windows 配置指南</a></li>
            <li><a href="${relPrefix}guides/android/index.html">Android 翻墙配置</a></li>
            <li><a href="${relPrefix}guides/ios/index.html">iOS 小火箭教程</a></li>
            <li><a href="${relPrefix}guides/macos/index.html">macOS 客户端教程</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>关于与政策</h5>
          <ul class="footer-links">
            <li><a href="${relPrefix}about/index.html">关于本站</a></li>
            <li><a href="${relPrefix}editorial-policy/index.html">编辑政策与评测标准</a></li>
            <li><a href="${relPrefix}contact/index.html">联系我们与商务反馈</a></li>
            <li><a href="${relPrefix}privacy-policy/index.html">隐私权保护政策</a></li>
            <li><a href="${relPrefix}disclaimer/index.html">法律免责声明</a></li>
            <li><a href="${relPrefix}sitemap.xml">XML 网站地图</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; 2026 JichangGo.vip 版权所有 · 机场推荐与VPN节点选购指南 · 纯静态秒开架构</div>
        <div>
          <span>本站仅提供网络技术科普与客观信息整理，请遵守所在地法律法规。</span>
        </div>
      </div>
    </div>
  </footer>
  <script src="${relPrefix}js/main.js"></script>`;
}

// 面包屑渲染
function renderBreadcrumbs(items, relPrefix) {
  const listItems = items.map((item, index) => {
    const isLast = index === items.length - 1;
    if (isLast) {
      return `<li><span class="text-main" aria-current="page">${item.name}</span></li>`;
    }
    return `<li><a href="${item.url}">${item.name}</a></li><li class="breadcrumb-separator">/</li>`;
  }).join("");

  return `
  <nav class="breadcrumb-nav" aria-label="面包屑路径导航">
    <ul class="breadcrumb-list">
      ${listItems}
    </ul>
  </nav>`;
}

// 统一 HTML 页面骨架
function renderLayout({
  title,
  description,
  keywords,
  canonicalUrl,
  relPrefix,
  activeNav,
  breadcrumbs = [],
  schema = null,
  content,
  extraScripts = ""
}) {
  const schemaScript = schema ? `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>` : "";
  const keywordsMeta = keywords ? `\n  <meta name="keywords" content="${keywords}">` : "";

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">${keywordsMeta}
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="${canonicalUrl}">
  <meta property="og:locale" content="zh_CN">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="机场Go (JichangGo.vip)">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <!-- 严格相对路径加载 CSS -->
  <link rel="stylesheet" href="${relPrefix}css/style.css">
  ${schemaScript}
</head>
<body>
  ${renderHeader(relPrefix, activeNav)}
  <main class="main-content">
    <div class="container">
      ${breadcrumbs.length > 0 ? renderBreadcrumbs(breadcrumbs, relPrefix) : ""}
      ${content}
    </div>
  </main>
  ${renderFooter(relPrefix)}
  ${extraScripts}
</body>
</html>`;
}

// 导出模块方法
module.exports = {
  BASE_URL,
  ROOT_DIR,
  ensureDirSync,
  getRelPrefix,
  renderHeader,
  renderFooter,
  renderBreadcrumbs,
  renderLayout
};

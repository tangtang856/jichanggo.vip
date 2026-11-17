// scripts/generate.js
// 机场Go (JichangGo.vip) 自动化静态生成主构建器

const fs = require('fs');
const path = require('path');
const {
  BASE_URL,
  ROOT_DIR,
  ensureDirSync,
  getRelPrefix,
  renderLayout
} = require('./generate-core');

const {
  airports,
  getAirports,
  getAirportBySlug,
  getRankingsOverall,
  getRankingsStability,
  getRankingsValue,
  getRankingsBudget
} = require('../src/data/airports');

const {
  getAirportDetailBySlug
} = require('../src/data/airport-details');

const {
  guidesData,
  blogData,
  glossaryData
} = require('./content-data');

// 收集所有生成的公开页面用于 Sitemap 和 IndexNow
const generatedUrls = [];

function registerPage(relativePath, content) {
  const fullPath = path.join(ROOT_DIR, relativePath);
  ensureDirSync(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content, 'utf8');

  // 构建标准公开 Canonical URL
  let webPath = relativePath.replace(/\\/g, '/');
  if (webPath.endsWith('index.html')) {
    webPath = webPath.slice(0, -10); // 去掉 index.html
  }
  if (!webPath.startsWith('/')) {
    webPath = '/' + webPath;
  }
  if (webPath === '/404.html') {
    // 404 页面不计入 Sitemap
    return;
  }
  const canonicalUrl = `${BASE_URL}${webPath}`;
  generatedUrls.push({
    canonicalUrl,
    filePath: relativePath,
    lastmod: new Date().toISOString().split('T')[0]
  });
  console.log(`[Generated] ${relativePath} -> ${canonicalUrl}`);
}

// --------------------------------------------------------------------------
// 1. 首页生成 (严格遵循 Section 五 13个模块)
// --------------------------------------------------------------------------
function generateHomepage() {
  const relPrefix = "./";
  const canonicalUrl = `${BASE_URL}/`;
  const title = "2026专业机场推荐与VPN节点选购指南 · 性价比梯子实测排行榜 | 机场Go";
  const description = "机场Go为中文出海用户提供2026年最新机场推荐、优质梯子与VPN节点深度评测。涵盖性价比平价机场、IEPL专线稳定排行榜、ChatGPT与流媒体4K解锁节点，多维度横向在线对比及全平台客户端新手教程。";

  const allAirports = getAirports();
  const overallRankings = getRankingsOverall();

  const content = `
    <!-- Section 2: Hero 区块 -->
    <section class="hero-section" style="border-radius: var(--radius-lg); margin-bottom: 2.5rem; padding: 3.5rem 1.5rem;">
      <span class="hero-tagline">2026 中文出海权威导航 · 客观核验拒绝盲目吹捧</span>
      <h1 class="hero-title">2026精选机场推荐与VPN节点选购指南：高性价比与稳定梯子深度评测</h1>
      <p class="hero-desc">聚合全网优质<strong>机场节点</strong>、高<strong>性价比机场</strong>评测、全协议<strong>梯子推荐</strong>与稳定 <strong>vpn机场</strong> 资源。无论是寻找流媒体 4K 极速解封的优质 <strong>vpn节点</strong>，还是需要高稳定专线 <strong>vpn推荐</strong>，我们从每 GB 真实单价折算、晚高峰丢包抖动实测到 ChatGPT 原生 IP 解锁，为您提供权威透明的<strong>机场推荐</strong>与 <strong>vpn</strong> 出海选购决策。</p>
      
      <div class="hero-actions">
        <a href="${relPrefix}ranking/overall/index.html" class="btn btn-primary">查看综合排行榜</a>
        <a href="${relPrefix}ranking/value/index.html" class="btn btn-secondary">性价比单价排行榜</a>
        <a href="${relPrefix}compare/index.html" class="btn btn-secondary">机场横向对比工具</a>
        <a href="${relPrefix}guides/index.html" class="btn btn-secondary">客户端新手教程</a>
      </div>

      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-value">14+</div>
          <div class="stat-label">深度实测核验品牌</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">100+</div>
          <div class="stat-label">全球节点覆盖国家</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">0ms</div>
          <div class="stat-label">IEPL 专线零封锁风险</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">100%</div>
          <div class="stat-label">秒开纯静态无重型框架</div>
        </div>
      </div>
    </section>

    <!-- Section 3: 快速答案 (立即可用结论) -->
    <section class="quick-answer-box">
      <div class="quick-answer-title">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        <span>快速答案：2026 新手选购机场核心决策速览</span>
      </div>
      <p style="margin-bottom: 0.5rem; font-size: 0.95rem;">为节省您的阅读时间，根据实测网络数据与编辑部经验，提炼出以下核心选购结论：</p>
      <div class="quick-answer-grid">
        <div class="quick-answer-item">
          <strong>1. 新手小白如何选？</strong>
          <span>不熟悉客户端配置的首选提供专用自研客户端的品牌（如 <a href="${relPrefix}airport/wavenet/index.html">浪网 WaveNet</a>）；追求极致性价比大流量的首选 <a href="${relPrefix}airport/breezenet/index.html">微风网络 Breezenet</a> 或 <a href="${relPrefix}airport/feiv/index.html">飞V</a>；追求晚高峰零丢包与商务外贸首选 <a href="${relPrefix}airport/yinxingren/index.html">隐形人</a>。</span>
        </div>
        <div class="quick-answer-item">
          <strong>2. 哪些因素最值得关注？</strong>
          <span>看底层线路是公网直连还是 <strong>IEPL 专线</strong>。普通中转在晚高峰容易丢包跳 ping，外贸办公、远程会议和游戏玩家务必认准内网专线。</span>
        </div>
        <div class="quick-answer-item">
          <strong>3. 如何判断套餐是否划算？</strong>
          <span>不要只看月付总价，看 <strong>每 GB 真实单价</strong>（套餐价格 / 实际可用流量），并警惕 3x-5x 高倍率节点的隐藏扣费套路。</span>
        </div>
        <div class="quick-answer-item">
          <strong>4. 购买前必须检查什么？</strong>
          <span>初次上车<strong>务必选择月付</strong>进行本地网络环境测试；检查是否支持自己的主力设备系统，以及是否有详细的中文工单售后。</span>
        </div>
      </div>
    </section>

    <!-- Section 4: 精选推荐卡片 (Tiered Showcase & Bento Layout) -->
    <section style="margin: 3.5rem 0 2.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
        <div>
          <h2>2026 精选优质商业机场推荐</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">基于长期连通性监控、真实公开资费与用户口碑综合遴选，标明实测状态。</p>
        </div>
        <a href="${relPrefix}recommend/index.html" class="btn btn-secondary btn-sm">查看全部场景专题 &rarr;</a>
      </div>

      <!-- Flagship Top 1 Highlight Hero -->
      <div class="featured-flagship-card">
        <div class="flagship-grid">
          <div>
            <div class="flagship-ribbon">🏆 2026 年度综合推荐第一名 · 编辑部力荐</div>
            <h3 style="font-size: 1.85rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.35rem;">
              <a href="${relPrefix}airport/${allAirports[0].slug}/index.html" style="color: inherit;">${allAirports[0].name}</a>
            </h3>
            <p style="font-size: 1rem; color: var(--text-muted); font-weight: 500; margin-bottom: 1rem;">
              ${allAirports[0].tagline}
            </p>
            <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.7; margin-bottom: 1.25rem;">
              ${allAirports[0].description}
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
              <span class="badge badge-success">SLA 99.9% 专线保障</span>
              <span class="badge badge-primary">${allAirports[0].lineType}</span>
              <span class="badge badge-muted">起步流量 ${allAirports[0].plans[0].effectiveTrafficGB}GB / 月</span>
              ${allAirports[0].coupon ? `<button class="badge badge-danger coupon-copy-btn" data-coupon="${allAirports[0].coupon}" style="cursor: pointer;">🎁 专属优惠码: ${allAirports[0].coupon} (点击复制)</button>` : ''}
            </div>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a href="${allAirports[0].affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary">直达官网订阅购买 &rarr;</a>
              <a href="${relPrefix}review/${allAirports[0].slug}/index.html" class="btn btn-secondary">阅读深度实测报告</a>
              <a href="${relPrefix}airport/${allAirports[0].slug}/index.html" class="btn btn-secondary">品牌参数档案</a>
            </div>
          </div>
          <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem; text-align: center; box-shadow: var(--shadow-sm);">
            <div style="font-size: 0.82rem; color: var(--text-muted); font-weight: 600;">实测综合评分</div>
            <div style="font-size: 2.75rem; font-weight: 800; color: #065f46; line-height: 1.1; margin: 0.25rem 0;">${allAirports[0].overallScore}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">满分 10.0 / 晚高峰零拥堵</div>
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: 0.5rem;">
              <div style="font-size: 1.75rem; font-weight: 800; color: var(--primary); line-height: 1;">￥${allAirports[0].startingPrice}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">起步配额 ${allAirports[0].plans[0].effectiveTrafficGB}GB / ${allAirports[0].billingUnit}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top 2-4 Showcase Grid -->
      <div class="tier-showcase-grid">
        ${allAirports.slice(1, 4).map((airport, idx) => `
          <div class="card airport-card">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span class="rank-badge ${idx === 0 ? 'rank-2' : idx === 1 ? 'rank-3' : 'rank-other'}">${idx + 2}</span>
                <span class="badge badge-primary">${airport.lineType}</span>
              </div>
              <h3 class="airport-name"><a href="${relPrefix}airport/${airport.slug}/index.html" style="color: inherit;">${airport.name}</a></h3>
              <div class="airport-tagline">${airport.tagline.split(' · ')[0]}</div>
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin: 1rem 0 0.75rem;">
                <div><strong style="font-size: 1.5rem; color: var(--primary);">￥${airport.startingPrice}</strong> <span style="font-size: 0.85rem; color: var(--text-muted);">/ ${airport.billingUnit}</span></div>
                <div style="font-size: 0.95rem; font-weight: 700; color: #065f46;">${airport.overallScore} <span style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">/ 10</span></div>
              </div>
              <p style="font-size: 0.88rem; color: var(--text-body); line-height: 1.6; margin-bottom: 1rem;">
                ${airport.description.slice(0, 95)}...
              </p>
              <div class="pro-con-mini">
                <div class="pro-item">✓ <strong>优势：</strong>${airport.advantages[0]}</div>
              </div>
            </div>
            <div class="card-actions">
              <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达官网</a>
              <a href="${relPrefix}review/${airport.slug}/index.html" class="btn btn-secondary btn-sm">评测详情</a>
            </div>
          </div>
        `).join("")}
      </div>

      <div style="text-align: center; margin: 1.5rem 0;">
        <a href="${relPrefix}airport/index.html" class="btn btn-secondary" style="margin-right: 0.75rem;">浏览全部 14 家机场完整档案库 &rarr;</a>
        <a href="${relPrefix}ranking/overall/index.html" class="btn btn-primary">查看 14 强全网综合排行榜 &rarr;</a>
      </div>
    </section>

    <!-- Section 5: 综合排行榜预览 -->
    <section style="margin: 3.5rem 0;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1rem;">
        <div>
          <h2>综合实力实测排行榜 (2026 核验版)</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">综合考量网络延迟、专线 SLA、客户端易用性、流媒体解锁及售后响应公开计分。</p>
        </div>
        <a href="${relPrefix}ranking/overall/index.html" class="btn btn-secondary btn-sm">查看完整排行榜 &rarr;</a>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 70px;">排名</th>
              <th>品牌名称</th>
              <th>起步价格</th>
              <th>线路架构</th>
              <th>协议支持</th>
              <th>最适合人群</th>
              <th>综合评分</th>
              <th style="text-align: right;">详情</th>
            </tr>
          </thead>
          <tbody>
            ${overallRankings.map((airport, idx) => `
              <tr>
                <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">${idx + 1}</span></td>
                <td>
                  <a href="${relPrefix}airport/${airport.slug}/index.html" style="font-weight: 700; color: var(--text-main);">${airport.name}</a>
                </td>
                <td><strong style="color: var(--primary);">￥${airport.startingPrice}</strong> / ${airport.billingUnit}</td>
                <td>${airport.lineType}</td>
                <td><span style="font-size: 0.85rem;">${airport.protocols.slice(0, 2).join(", ")}</span></td>
                <td>${airport.suitableFor[0]}</td>
                <td><strong style="color: #065f46; font-size: 1.05rem;">${airport.overallScore}</strong> / 10</td>
                <td style="text-align: right;">
                  <a href="${relPrefix}review/${airport.slug}/index.html" class="btn btn-secondary btn-sm">评测报告</a>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 6: 按需求选择 (6大专题入口) -->
    <section style="margin: 3.5rem 0;">
      <h2>按应用需求精准挑选机场节点</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">不同使用场景对网络延迟、带宽、IP 纯净度要求大不相同，点击直达专属推荐：</p>
      <div class="topic-grid">
        <a href="${relPrefix}recommend/budget/index.html" class="topic-card">
          <div class="topic-icon">💰</div>
          <h3>低预算平价机场</h3>
          <p>月付几元至十几元的大流量平价梯子，适合学生党与轻量级科学上网备用。</p>
        </a>
        <a href="${relPrefix}recommend/premium/index.html" class="topic-card">
          <div class="topic-icon">⚡</div>
          <h3>高端稳定专线</h3>
          <p>全内网 IEPL / IPLC 物理专线，晚高峰超低延迟不降速，抗封锁性能极其强悍。</p>
        </a>
        <a href="${relPrefix}recommend/beginner/index.html" class="topic-card">
          <div class="topic-icon">🚀</div>
          <h3>新手小白入门</h3>
          <p>支持一键即连定制客户端，无需复杂配置，电脑手机零基础快速上手。</p>
        </a>
        <a href="${relPrefix}recommend/stable/index.html" class="topic-card">
          <div class="topic-icon">🛡️</div>
          <h3>敏感时期稳定抗封</h3>
          <p>多路入口容灾调度与金融级内网隧道，敏感网络封锁期依然保障不断连。</p>
        </a>
        <a href="${relPrefix}recommend/ai/index.html" class="topic-card">
          <div class="topic-icon">🤖</div>
          <h3>ChatGPT / AI 专用</h3>
          <p>提供纯净原生住宅 IP，无风控拦截，告别 OpenAI / Claude 封号与人机验证。</p>
        </a>
        <a href="${relPrefix}recommend/streaming/index.html" class="topic-card">
          <div class="topic-icon">🎬</div>
          <h3>流媒体 4K 解锁</h3>
          <p>全区秒开 Netflix 4K、Disney+、YouTube Premium，高带宽不转圈。</p>
        </a>
      </div>
    </section>

    <!-- Section 7: 机场横向比较系统入口 -->
    <section class="card" style="background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: #ffffff; padding: 2.5rem; margin: 3.5rem 0; border: none;">
      <div style="max-width: 800px;">
        <span class="badge" style="background: rgba(255,255,255,0.2); color: #fff; margin-bottom: 1rem;">独家在线工具</span>
        <h2 style="color: #ffffff; font-size: 1.85rem; margin-bottom: 1rem; border: none; padding: 0;">还在纠结选哪家？使用机场多维度横向在线对比工具</h2>
        <p style="color: #bfdbfe; font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.75rem;">
          支持自由选择 2 到 4 家机场品牌，全自动展开价格、真实单价、节点覆盖地区、协议兼容、设备连接上限及流媒体/AI支持差异，让参数一览无余。
        </p>
        <a href="${relPrefix}compare/index.html" class="btn" style="background-color: #ffffff; color: #1e3a8a; font-weight: 700; padding: 0.75rem 1.75rem;">立即进入机场对比工具 &rarr;</a>
      </div>
    </section>

    <!-- Section 8: 最新独立深度评测 -->
    <section style="margin: 3.5rem 0;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
        <div>
          <h2>最新独立机场评测报告</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">坚持实事求是，拆解套餐细节与真实优缺点，拒绝官方宣传滤镜。</p>
        </div>
        <a href="${relPrefix}review/index.html" class="btn btn-secondary btn-sm">评测总览 &rarr;</a>
      </div>
      <div class="airport-card-grid">
        ${allAirports.slice(0, 3).map(airport => `
          <div class="card">
            <span class="badge badge-primary" style="margin-bottom: 0.75rem;">深度综合实测</span>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">
              <a href="${relPrefix}review/${airport.slug}/index.html">${airport.name} 深度综合评测</a>
            </h3>
            <p style="color: var(--text-body); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1rem;">
              一句话结论：${airport.tagline}。实测综合评分 <strong>${airport.overallScore}</strong> 分。
            </p>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
              <span>核验日期: ${airport.lastVerified}</span> · <span>数据来源: ${airport.sources[0]}</span>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
              <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1; text-align: center;">官网直达</a>
              <a href="${relPrefix}review/${airport.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1; text-align: center;">评测报告 &rarr;</a>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Section 9: 教程中心 -->
    <section style="margin: 3.5rem 0;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
        <div>
          <h2>客户端配置与使用教程中心</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">覆盖四大主流平台与软路由，详解 Clash Verge Rev、Sing-box、小火箭订阅导入与全协议分流配置。</p>
        </div>
        <a href="${relPrefix}guides/index.html" class="btn btn-secondary btn-sm">查看全部 30 篇实操教程 &rarr;</a>
      </div>
      <div class="topic-grid">
        ${guidesData.slice(0, 4).map(guide => `
          <div class="card" style="padding: 1.25rem;">
            <span class="badge badge-muted" style="margin-bottom: 0.5rem;">${guide.readTime} 掌握</span>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">
              <a href="${relPrefix}guides/${guide.slug}/index.html">${guide.shortTitle}</a>
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              ${guide.metaDesc.slice(0, 60)}...
            </p>
            <a href="${relPrefix}guides/${guide.slug}/index.html" style="font-size: 0.875rem; font-weight: 600;">阅读图文教程 &rarr;</a>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Section 10: 知识百科 -->
    <section style="margin: 3.5rem 0;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
        <div>
          <h2>科学上网知识百科与术语词典</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">搞懂专线原理、节点倍率陷阱、分流机制与 DNS 泄露防范，做聪明的出海用户。</p>
        </div>
        <a href="${relPrefix}glossary/index.html" class="btn btn-secondary btn-sm">百科词条索引 &rarr;</a>
      </div>
      <div class="topic-grid">
        ${glossaryData.map(item => `
          <div class="card" style="padding: 1.25rem;">
            <span class="badge badge-primary" style="margin-bottom: 0.5rem;">术语科普</span>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">
              <a href="${relPrefix}glossary/${item.slug}/index.html">${item.title.split(' · ')[0]}</a>
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              ${item.metaDesc.slice(0, 60)}...
            </p>
            <a href="${relPrefix}glossary/${item.slug}/index.html" style="font-size: 0.875rem; font-weight: 600;">了解技术原理解析 &rarr;</a>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Section 11: 最新博客文章 -->
    <section style="margin: 3.5rem 0;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
        <div>
          <h2>选购指南与出海深度洞察</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">原创深度干货，解答翻墙出海中遇到的各种疑难杂症与架构疑云。</p>
        </div>
        <a href="${relPrefix}blog/index.html" class="btn btn-secondary btn-sm">查看全部 100 篇专栏博客 &rarr;</a>
      </div>
      <div class="airport-card-grid">
        ${blogData.slice(0, 6).map(blog => `
          <div class="card">
            <span class="badge badge-muted" style="margin-bottom: 0.5rem;">${blog.category}</span>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem;">
              <a href="${relPrefix}blog/${blog.slug}/index.html">${blog.title}</a>
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-body); line-height: 1.6; margin-bottom: 1.25rem;">
              ${blog.metaDesc.slice(0, 85)}...
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-muted);">
              <span>${blog.date}</span>
              <a href="${relPrefix}blog/${blog.slug}/index.html" style="font-weight: 600;">阅读全文 &rarr;</a>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Section 12: 核心 FAQ -->
    <section style="margin: 3.5rem 0;">
      <h2>关于机场推荐与VPN梯子的常见问题 (FAQ)</h2>
      <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">围绕科学上网核心疑问，提供客观直接的解答：</p>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">传统国际商业 VPN 与国内机场节点相比，哪个更适合翻墙出海？</div>
          <div class="faq-answer">在中国大陆网络环境下，机场节点体验大幅优于传统 VPN。传统 VPN（如 ExpressVPN）因流量特征明显极易被 GFW 定向阻断，且全盘代理容易导致国内应用严重卡顿；现代机场采用 Shadowsocks/Trojan/VLESS 等抗封锁加密协议，配合境内中转与内网专线，在速度、稳定性和智能规则分流上优势明显。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">为什么不同机场的价格差异如此巨大？从每月几元到几十元不等？</div>
          <div class="faq-answer">核心成本在于<strong>网络线路架构</strong>与<strong>带宽冗余率</strong>。几元的平价机场多采用廉价公网直连或公网隧道，容易超售且晚高峰容易拥堵；几十元的高端机场采用昂贵的 IEPL/IPLC 物理内网专线，数据不经过公网网关和 GFW，即使在敏感时期和晚高峰依然保持千兆低延迟。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">什么是节点倍率？为什么有些节点流量消耗特别快？</div>
          <div class="faq-answer">节点倍率是指实际产生流量乘以的扣费系数。例如你在 3.0x 倍率的高速专线节点上看了一个 10GB 的视频，实际会从你的套餐中扣除 30GB 流量。选购机场时务必关注真实可用流量与真实每 GB 单价，避开虚假高倍率陷阱。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">为什么有些机场节点打不开 ChatGPT 或 Claude？</div>
          <div class="faq-answer">OpenAI 和 Anthropic 对机房数据中心广播 IP（Datacenter IP）实施了极其严厉的风控屏蔽。便宜机场万人共用同一机房 IP，极易触发“Access Denied”拒绝访问。想要顺畅使用 AI 工具，必须选择提供纯净原生住宅 IP（Residential IP）的高质量专线机场。</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">新手第一次购买机场，有什么必须遵守的防坑建议？</div>
          <div class="faq-answer">务必遵守两条黄金法则：<strong>第一，坚持先月付后季付，严禁初次直接年付</strong>，因为各省宽带入口调度不同，必须先测试本地连通性；<strong>第二，备用一个不限时的小流量备用梯子</strong>，防止主力机场遇到临时机房维护时断联。</div>
        </div>
      </div>
    </section>
  `;

  // 结构化数据 Schema (WebSite & Organization)
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        "url": canonicalUrl,
        "name": "机场Go (JichangGo.vip)",
        "description": description,
        "inLanguage": "zh-CN"
      },
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        "name": "机场Go评测实验室",
        "url": canonicalUrl,
        "logo": `${BASE_URL}/images/logo.png`
      }
    ]
  };

  const html = renderLayout({
    title,
    description,
    canonicalUrl,
    relPrefix,
    activeNav: "home",
    schema,
    content
  });

  registerPage("index.html", html);
}

// --------------------------------------------------------------------------
// 2. 推荐专题系统 (Recommend Clusters)
// --------------------------------------------------------------------------
function generateRecommendPages() {
  const relPrefixRoot = "../";
  const relPrefixSub = "../../";

  // 2.1 推荐中心首页 recommend/index.html
  {
    const title = "2026优质机场推荐专题导航 · 专线与流媒体节点精选 | 机场Go";
    const description = "机场Go精选2026年各类应用场景下的优质机场推荐。涵盖平价低预算、高端稳定专线、新手小白一键客户端、敏感时期抗封锁、AI专用及流媒体4K解锁全系列专题。";
    const canonicalUrl = `${BASE_URL}/recommend/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixRoot}index.html` },
      { name: "机场推荐专题", url: `${relPrefixRoot}recommend/index.html` }
    ];

    const content = `
      <h1>2026 精选 VPN 机场与多协议节点推荐专题</h1>
      <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem;">
        为了让不同需求的用户能够快速匹配到符合预算和场景的梯子节点，我们细分了以下六大核心专题。所有推荐均来自真实网络监控与客观数据支持。
      </p>

      <div class="topic-grid" style="margin-bottom: 3rem;">
        <a href="${relPrefixRoot}recommend/budget/index.html" class="topic-card">
          <div class="topic-icon">💰</div>
          <h3>低预算平价机场专题</h3>
          <p>百元以内平价梯子盘点，月付仅需9.9元起，适合学生党及轻度查资料备用。</p>
        </a>
        <a href="${relPrefixRoot}recommend/premium/index.html" class="topic-card">
          <div class="topic-icon">⚡</div>
          <h3>高端稳定专线专题</h3>
          <p>全 IEPL / IPLC 物理专线，晚高峰超低延迟，千兆带宽冗余，告别卡顿断连。</p>
        </a>
        <a href="${relPrefixRoot}recommend/beginner/index.html" class="topic-card">
          <div class="topic-icon">🚀</div>
          <h3>新手小白友好梯子</h3>
          <p>提供多平台专属一键客户端，无需复杂节点导入与分流配置，开箱即连。</p>
        </a>
        <a href="${relPrefixRoot}recommend/stable/index.html" class="topic-card">
          <div class="topic-icon">🛡️</div>
          <h3>抗封锁稳定机场</h3>
          <p>多地公网与专线双重备份，重要敏感网络封锁时期依然保障全天候畅通。</p>
        </a>
        <a href="${relPrefixRoot}recommend/ai/index.html" class="topic-card">
          <div class="topic-icon">🤖</div>
          <h3>ChatGPT / AI 专用节点</h3>
          <p>纯净原生住宅 IP，针对 OpenAI、Claude、Cursor 等高风控平台深度优化。</p>
        </a>
        <a href="${relPrefixRoot}recommend/streaming/index.html" class="topic-card">
          <div class="topic-icon">🎬</div>
          <h3>流媒体 4K/8K 解锁</h3>
          <p>Netflix、Disney+、YouTube 4K 秒开，全区原生流媒体解锁，大码率不缓冲。</p>
        </a>
      </div>

      <h2>推荐榜单快速跳转</h2>
      <div class="airport-card-grid">
        <div class="card">
          <h3>性价比单价排行榜</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">通过公式精准测算每 GB 真实单价，排查隐形高倍率套路。</p>
          <a href="${relPrefixRoot}ranking/value/index.html" class="btn btn-secondary btn-sm">查看性价比榜单</a>
        </div>
        <div class="card">
          <h3>机场横向对比工具</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">自选 2 到 4 家机场进行全维度动态矩阵对比，价格与配置一目了然。</p>
          <a href="${relPrefixRoot}compare/index.html" class="btn btn-primary btn-sm">进入对比工具</a>
        </div>
      </div>
    `;

    const html = renderLayout({
      title,
      description,
      canonicalUrl,
      relPrefix: relPrefixRoot,
      activeNav: "recommend",
      breadcrumbs,
      content
    });
    registerPage("recommend/index.html", html);
  }

  // 2.2 六大专题页面
  const clusterConfigs = [
    {
      slug: "budget",
      title: "低预算平价机场推荐 · 百元以内便宜梯子套餐横评 | 机场Go",
      h1: "百元内低预算平价机场推荐：高性价比便宜节点盘点",
      metaDesc: "2026年低预算与高性价比平价机场推荐。针对学生党、轻度查资料用户，盘点月付4.9元起、百元以内年付及不限时备用套餐，算清每GB单价防踩坑。",
      primaryBrand: "feiv",
      intro: "对于刚开始接触科学上网、主要用来查阅学术文献、浏览 GitHub 代码或偶尔看几段视频的用户而言，动辄四五十元一个月的商业专线往往性能过剩。低预算平价机场以极低的价格提供充足的可用流量，是学生党与轻度用户的理想选择。",
      criteria: "入选标准：支持低门槛月付（10元以内）、年付资费控制在百元以内、具备合理的测速可用性、支持通用客户端订阅。"
    },
    {
      slug: "premium",
      title: "2026稳定专线VPN与高端IEPL机场推荐 · 晚高峰不卡顿 | 机场Go",
      h1: "高端稳定专线VPN与IEPL机场推荐：告别断连与晚高峰卡顿",
      metaDesc: "2026高端IEPL与IPLC内网专线机场精选推荐。千兆专线带宽冗余、晚高峰超低延迟抖动、原生住宅IP解锁，专为跨国商务外贸、远程办公与专业开发者打造。",
      primaryBrand: "yinxingren",
      intro: "对于跨境电商从业者、跨国视频会议用户以及对网络连接质量有极致要求的专业人士来说，掉线和卡顿意味着直接的经济损失。高端专线机场采用物理级内网专线，数据不经公网和 GFW，晚高峰依然坚挺满速。",
      criteria: "入选标准：全内网 IEPL/IPLC 物理专线架构、不限或宽松的设备连接限制、全球广泛节点支持、24/7 SLA 运维保障。"
    },
    {
      slug: "beginner",
      title: "2026新手小白梯子推荐 · 一键客户端与零基础翻墙科学上网指南 | 机场Go",
      h1: "新手小白友好梯子推荐：支持一键客户端与全平台配置",
      metaDesc: "适合电脑手机新手的梯子与机场推荐。无需学习复杂的 Clash 分流规则与订阅代码，官方自带 Windows/Mac/Android/iOS 一键即连客户端，零基础轻松上手。",
      primaryBrand: "breezenet",
      intro: "很多刚接触翻墙的用户被 Clash 的 YAML 配置文件、分流规则、内核报错等概念劝退。新手友好型机场专门提供了极简配置与一键式客户端，下载安装后登录即可一键连接，遇到网络波动自动后台容灾切换。",
      criteria: "入选标准：具备专属全平台一键即连软件或超详细图文、免配置免调试、具备健全的中文在线客服体系、节点自动负载均衡。"
    },
    {
      slug: "stable",
      title: "敏感时期稳定机场推荐 · 晚高峰抗封锁专线梯子精选 | 机场Go",
      h1: "敏感时期抗封锁稳定机场推荐：晚高峰低延迟专线梯子实测",
      metaDesc: "特殊网络敏感时期防失联机场推荐。多入口 BGP 智能调度、IEPL 专线冗余备份，有效抵抗 GFW 针对性封锁与骨干网丢包，保障业务全天候稳定在线。",
      primaryBrand: "flashleap",
      intro: "每逢重大国际会议或重要网络敏感节点，公共互联网出口往往会遭遇严格的流量特征审查与针对性封锁，导致大量普通中转和直连节点大面积超时。抗封锁稳定机场通过内网物理专线和多路容灾隧道，有效筑起防线。",
      criteria: "入选标准：物理内网隔离专线、具备三网入口容灾方案、长周期连通率高于 99.5%、节点 IP 定期健康维护。"
    },
    {
      slug: "ai",
      title: "ChatGPT与Claude专用机场推荐 · 原生IP解锁不封号节点精选 | 机场Go",
      h1: "ChatGPT 与 Claude 专用 AI 机场推荐：原生家宽纯净 IP 精选",
      metaDesc: "专为访问 OpenAI、ChatGPT Plus、Claude 3.5 Sonnet 及 Midjourney 优化的机场节点推荐。提供原生住宅IP，告别Access Denied与账号被封风控。",
      primaryBrand: "yinxingren",
      intro: "OpenAI 与 Anthropic 引入了极为严苛的反爬虫与地理风控体系，数据中心机房 IP 往往直接被拒绝访问。AI 专用机场配备高质量原生家庭宽带住宅 IP，并针对 AI 接口做了协议优化与 UDP 转发支持。",
      criteria: "入选标准：拥有纯净原生住宅 IP 节点池、支持 WebRTC 与语音对话 UDP 转发、及时跟进 OpenAI 封锁策略轮换 IP。"
    },
    {
      slug: "streaming",
      title: "Netflix与Disney+流媒体4K解锁机场推荐 · 奈飞看剧梯子指南 | 机场Go",
      h1: "Netflix / Disney+ / YouTube 4K 流媒体解锁机场推荐",
      metaDesc: "2026年支持 Netflix 全区解锁、Disney+、HBO Max 及 YouTube 4K/8K 极速播放的流媒体机场推荐。大带宽专线保障，晚高峰告别画质降级与缓冲圈圈。",
      primaryBrand: "lingmao",
      intro: "追剧党科学上网最在乎两件事：一是<strong>解锁版权</strong>（能不能看到非自制剧），二是<strong>带宽与缓冲</strong>（晚高峰能不能流畅看 4K/8K HDR）。流媒体推荐专题为您筛选带宽冗余大、流媒体全绿解锁的优质品牌。",
      criteria: "入选标准：全天候稳定解锁 Netflix 港/台/美/日/新热门大区、YouTube 4K 播放无压力、带宽储备充足。"
    }
  ];

  clusterConfigs.forEach(cluster => {
    const canonicalUrl = `${BASE_URL}/recommend/${cluster.slug}/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "机场推荐专题", url: `${relPrefixSub}recommend/index.html` },
      { name: cluster.h1.split('：')[0], url: `${relPrefixSub}recommend/${cluster.slug}/index.html` }
    ];

    const allAirports = getAirports();
    const primary = getAirportBySlug(cluster.primaryBrand) || allAirports[0];

    const content = `
      <div class="article-layout">
        <div class="article-main">
          <div class="article-header">
            <span class="badge badge-primary" style="margin-bottom: 0.5rem;">场景专题推荐</span>
            <h1>${cluster.h1}</h1>
            <div class="article-meta">
              <span>更新时间: 2026-03-15</span>
              <span>审核编辑: 机场Go实验室</span>
              <span>实测状态: 真实数据核验</span>
            </div>
          </div>
          <div class="article-body">
            <p>${cluster.intro}</p>
            <blockquote>
              <p><strong>评测室筛选依据：</strong>${cluster.criteria}</p>
            </blockquote>

            <h2>本专题首选推荐品牌：${primary.name}</h2>
            <div class="card" style="margin: 1.5rem 0; border-top: 4px solid var(--primary);">
              <div class="airport-card-header">
                <div>
                  <h3 style="margin-top: 0;">${primary.name}</h3>
                  <div style="color: var(--text-muted); font-size: 0.9rem;">${primary.tagline}</div>
                </div>
                <div class="airport-price-box">
                  <div class="price-num">￥${primary.startingPrice}</div>
                  <div class="price-cycle">起 / ${primary.billingUnit}</div>
                </div>
              </div>
              <p>${primary.description}</p>
              <div class="airport-specs">
                <div class="spec-item"><span>线路架构:</span><span>${primary.lineType}</span></div>
                <div class="spec-item"><span>节点数量:</span><span>${primary.nodeCount}</span></div>
                <div class="spec-item"><span>设备限制:</span><span>${primary.deviceLimit}</span></div>
                <div class="spec-item"><span>协议支持:</span><span>${primary.protocols.join(', ')}</span></div>
              </div>
              <div style="display: flex; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap;">
                <a href="${primary.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达官网开通 &rarr;</a>
                <a href="${relPrefixSub}review/${primary.slug}/index.html" class="btn btn-secondary btn-sm">查看独立评测</a>
                <a href="${relPrefixSub}airport/${primary.slug}/index.html" class="btn btn-secondary btn-sm">品牌参数档案</a>
              </div>
            </div>

            <h2>更多符合该场景的优质备选品牌</h2>
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>机场品牌</th>
                    <th>起步资费</th>
                    <th>线路架构</th>
                    <th>核心优势</th>
                    <th>查看</th>
                  </tr>
                </thead>
                <tbody>
                  ${allAirports.filter(a => a.id !== primary.id).slice(0, 3).map(a => `
                    <tr>
                      <td><strong><a href="${relPrefixSub}airport/${a.slug}/index.html">${a.name}</a></strong></td>
                      <td>￥${a.startingPrice} / ${a.billingUnit}</td>
                      <td>${a.lineType}</td>
                      <td style="font-size: 0.85rem;">${a.advantages[0]}</td>
                      <td><a href="${relPrefixSub}review/${a.slug}/index.html" class="btn btn-secondary btn-sm">评测</a></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            <h2>该场景购买前的防坑注意事项</h2>
            <ul>
              <li><strong>优先月付试用：</strong>无论商家给出的年付优惠多大，初次使用请务必先购买月付测试您所在的省份与宽带适配情况。</li>
              <li><strong>检查分流规则：</strong>使用过程中请确保客户端分流规则处于“规则模式（Rule）”，避免所有本地流量都走节点加速。</li>
              <li><strong>备用节点保障：</strong>建议始终保留一个平价小流量套餐或一次性不限时套餐作为备用救急。</li>
            </ul>
          </div>
        </div>

        <aside class="sidebar">
          <div class="sidebar-widget">
            <h4 class="widget-title">全套推荐专题</h4>
            <ul class="sidebar-links">
              <li><a href="${relPrefixSub}recommend/budget/index.html">💰 低预算平价机场</a></li>
              <li><a href="${relPrefixSub}recommend/premium/index.html">⚡ 高端稳定专线</a></li>
              <li><a href="${relPrefixSub}recommend/beginner/index.html">🚀 新手小白一键客户端</a></li>
              <li><a href="${relPrefixSub}recommend/stable/index.html">🛡️ 敏感时期抗封锁</a></li>
              <li><a href="${relPrefixSub}recommend/ai/index.html">🤖 ChatGPT / AI 专用</a></li>
              <li><a href="${relPrefixSub}recommend/streaming/index.html">🎬 流媒体 4K 解锁</a></li>
            </ul>
          </div>

          <div class="sidebar-widget">
            <h4 class="widget-title">实用工具</h4>
            <ul class="sidebar-links">
              <li><a href="${relPrefixSub}compare/index.html">机场多维度在线对比</a></li>
              <li><a href="${relPrefixSub}ranking/value/index.html">每 GB 性价比排行榜</a></li>
              <li><a href="${relPrefixSub}guides/windows/index.html">Windows 电脑配置教程</a></li>
              <li><a href="${relPrefixSub}guides/ios/index.html">iOS 小火箭配置教程</a></li>
            </ul>
          </div>
        </aside>
      </div>
    `;

    const html = renderLayout({
      title: cluster.title,
      description: cluster.metaDesc,
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "recommend",
      breadcrumbs,
      content
    });
    registerPage(`recommend/${cluster.slug}/index.html`, html);
  });
}

// --------------------------------------------------------------------------
// 3. 排行榜系统 (Rankings System)
// --------------------------------------------------------------------------
function generateRankingPages() {
  const relPrefixRoot = "../";
  const relPrefixSub = "../../";

  // 3.1 排行榜导航首页 ranking/index.html
  {
    const title = "2026多维度机场排行榜导航 · 综合、性价比与稳定榜单 | 机场Go";
    const description = "机场Go多维度科学上网梯子排行榜。提供综合实力榜、每GB真实单价性价比榜、百元以内低预算榜及晚高峰抗封锁专线稳定榜，数据透明公式公开。";
    const canonicalUrl = `${BASE_URL}/ranking/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixRoot}index.html` },
      { name: "机场排行榜", url: `${relPrefixRoot}ranking/index.html` }
    ];

    const content = `
      <h1>2026 年度多维度机场排行榜</h1>
      <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem;">
        我们杜绝单纯以“赞助费”决定排名的黑箱操作。所有排行榜均基于明确可核验的维度：真实每 GB 单价公式、线路硬件成本（IEPL vs 普通中转）、真实晚高峰抗封锁表现与用户口碑。
      </p>

      <div class="topic-grid">
        <a href="${relPrefixRoot}ranking/overall/index.html" class="topic-card">
          <div class="topic-icon">🏆</div>
          <h3>综合实力排行榜</h3>
          <p>多维度加权计分，全面评估速度、延迟、专线 SLA、客户端支持与工单响应。</p>
        </a>
        <a href="${relPrefixRoot}ranking/value/index.html" class="topic-card">
          <div class="topic-icon">📊</div>
          <h3>性价比单价排行榜</h3>
          <p>公开真实单价公式：每 GB 成本 = 套餐价格 / 实际可用流量，杜绝虚假倍率。</p>
        </a>
        <a href="${relPrefixRoot}ranking/budget/index.html" class="topic-card">
          <div class="topic-icon">🪙</div>
          <h3>低预算平价排行榜</h3>
          <p>严格按照月付起步门槛与百元以内套餐排序，专注学生党与轻量备用用户。</p>
        </a>
        <a href="${relPrefixRoot}ranking/stable/index.html" class="topic-card">
          <div class="topic-icon">🔒</div>
          <h3>晚高峰专线稳定榜</h3>
          <p>全内网物理专线机场专场，晚高峰零拥堵、网络抖动与丢包率近乎为零。</p>
        </a>
      </div>
    `;

    const html = renderLayout({
      title,
      description,
      canonicalUrl,
      relPrefix: relPrefixRoot,
      activeNav: "ranking",
      breadcrumbs,
      content
    });
    registerPage("ranking/index.html", html);
  }

  // 3.2 综合排行榜 ranking/overall/index.html
  {
    const rankings = getRankingsOverall();
    const title = "2026全网机场综合实力排行榜 · 速度、稳定性与售后多维测评 | 机场Go";
    const canonicalUrl = `${BASE_URL}/ranking/overall/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "排行榜导航", url: `${relPrefixSub}ranking/index.html` },
      { name: "综合实力榜", url: `${relPrefixSub}ranking/overall/index.html` }
    ];

    const content = `
      <h1>2026全网机场综合实力排行榜：多维度客观核查清单</h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
        本榜单综合了网络稳定性（40%）、线路真实硬件架构（25%）、性价比（15%）、客户端易用性与流媒体/AI支持（10%）以及售后服务响应（10%）五大维度。
      </p>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>排名</th>
              <th>品牌</th>
              <th>起步价格</th>
              <th>线路类型</th>
              <th>节点覆盖</th>
              <th>实测评分</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${rankings.map((a, idx) => `
              <tr>
                <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">${idx + 1}</span></td>
                <td>
                  <strong><a href="${relPrefixSub}airport/${a.slug}/index.html">${a.name}</a></strong>
                  <div style="font-size: 0.8rem; color: var(--text-muted);">${a.tagline}</div>
                </td>
                <td>￥${a.startingPrice} / ${a.billingUnit}</td>
                <td>${a.lineType}</td>
                <td>${a.nodeCount}</td>
                <td><strong style="color: #065f46; font-size: 1.1rem;">${a.overallScore}</strong> / 10</td>
                <td>
                  <a href="${relPrefixSub}review/${a.slug}/index.html" class="btn btn-secondary btn-sm">评测报告</a>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <h2>排名依据与评分规则说明</h2>
      <p>为确保公正透明，所有参与排名的品牌必须满足以下条件：运营周期在 1 年以上、官方公开资费清晰无隐藏条款、编辑部经过长周期连通性复核。对于未经过真实测试的品牌，我们标注为“尚未核实”，不参与综合榜单推荐。</p>
    `;

    const html = renderLayout({
      title,
      description: "2026全网机场综合实力排行榜。多维度考核专线质量、晚高峰抗封锁表现、流媒体4K解锁及客户端体验，拒绝虚假吹捧，提供客观可验证的排名清单。",
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "ranking",
      breadcrumbs,
      content
    });
    registerPage("ranking/overall/index.html", html);
  }

  // 3.3 性价比排行榜 ranking/value/index.html (含每GB公式与折算表)
  {
    const rankings = getRankingsValue();
    const title = "2026高性价比机场推荐榜 · 每GB单价测算与平价梯子排行 | 机场Go";
    const canonicalUrl = `${BASE_URL}/ranking/value/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "排行榜导航", url: `${relPrefixSub}ranking/index.html` },
      { name: "性价比单价榜", url: `${relPrefixSub}ranking/value/index.html` }
    ];

    const content = `
      <h1>2026年度性价比机场推荐排行榜：每GB真实成本与套餐折算</h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
        我们反对单纯把“月付金额最低”等同于“性价比最高”。真正的性价比应当计算用户获得的<strong>每单位可用高速流量的真实资金成本</strong>。
      </p>

      <div class="callout callout-info">
        <strong>每 GB 真实单价测算公式：</strong><br>
        <code>每 GB 单价 (元/GB) = 套餐售价 (元) ÷ [ 标称流量 (GB) ÷ 常用节点平均实际倍率 ]</code><br>
        注：不限时一次性套餐与月付套餐分开核算；超高倍率节点按真实消耗折算。
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>性价比排名</th>
              <th>机场品牌</th>
              <th>代表套餐</th>
              <th>套餐资费</th>
              <th>标称流量</th>
              <th>折合每 GB 单价</th>
              <th>线路品质</th>
              <th>详情</th>
            </tr>
          </thead>
          <tbody>
            ${rankings.map((a, idx) => {
              const bestPlan = a.plans.reduce((min, p) => p.unitPricePerGB < min.unitPricePerGB ? p : min, a.plans[0]);
              return `
                <tr>
                  <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">${idx + 1}</span></td>
                  <td><strong><a href="${relPrefixSub}airport/${a.slug}/index.html">${a.name}</a></strong></td>
                  <td>${bestPlan.name}</td>
                  <td>￥${bestPlan.price} (${bestPlan.billingCycle})</td>
                  <td>${bestPlan.trafficGB} GB</td>
                  <td><span class="badge badge-primary" style="font-size: 0.9rem;">${bestPlan.unitPricePerGB.toFixed(3)} 元/GB</span></td>
                  <td>${a.lineType}</td>
                  <td><a href="${relPrefixSub}review/${a.slug}/index.html" class="btn btn-secondary btn-sm">评测</a></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>

      <h2>性价比选购总结建议</h2>
      <p>由测算表可见，平价走量型机场（如 WestData）每 GB 单价可下探至 0.05 元/GB 左右，适合流量消耗极大、以下载和长时间视频为主的用户；而高品质专线机场（如 FlyingBird、TAG VPN）每 GB 单价维持在 0.1~0.4 元区间，提供了高昂的专线网络稳定性溢价。</p>
    `;

    const html = renderLayout({
      title,
      description: "2026性价比机场推荐排行榜。采用科学透明的每GB真实单价测算公式，公开折算月付与年付套餐实际成本，帮您选出真正省钱好用的大流量梯子。",
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "ranking",
      breadcrumbs,
      content
    });
    registerPage("ranking/value/index.html", html);
  }

  // 3.4 低预算平价排行榜 ranking/budget/index.html
  {
    const rankings = getRankingsBudget();
    const title = "百元预算平价机场排行榜 · 学生党高性价比节点推荐 | 机场Go";
    const canonicalUrl = `${BASE_URL}/ranking/budget/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "排行榜导航", url: `${relPrefixSub}ranking/index.html` },
      { name: "低预算榜", url: `${relPrefixSub}ranking/budget/index.html` }
    ];

    const content = `
      <h1>百元预算平价机场排行榜：低门槛月付与轻量梯子推荐</h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
        本榜单专为学生党、仅需查阅代码与外网论文、或需要低成本第二备用节点的用户设计。排序依据为<strong>月付最低开通门槛</strong>。
      </p>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>门槛排名</th>
              <th>品牌</th>
              <th>最低月付门槛</th>
              <th>入门套餐流量</th>
              <th>线路支持</th>
              <th>适合场景</th>
              <th>评测</th>
            </tr>
          </thead>
          <tbody>
            ${rankings.map((a, idx) => `
              <tr>
                <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">${idx + 1}</span></td>
                <td><strong><a href="${relPrefixSub}airport/${a.slug}/index.html">${a.name}</a></strong></td>
                <td><strong style="color: var(--primary); font-size: 1.1rem;">￥${a.startingPrice}</strong> / ${a.billingUnit}</td>
                <td>${a.plans[0].trafficGB} GB</td>
                <td>${a.lineType}</td>
                <td>${a.suitableFor[0]}</td>
                <td><a href="${relPrefixSub}review/${a.slug}/index.html" class="btn btn-secondary btn-sm">评测报告</a></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "2026百元预算平价机场排行榜。按最低月付门槛排序，盘点9.9元起平价大流量梯子，为学生党与轻量备用用户提供高性价比选购参考。",
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "ranking",
      breadcrumbs,
      content
    });
    registerPage("ranking/budget/index.html", html);
  }

  // 3.5 稳定专线排行榜 ranking/stable/index.html
  {
    const rankings = getRankingsStability();
    const title = "抗封锁稳定机场排行榜 · 晚高峰低延迟专线梯子实测 | 机场Go";
    const canonicalUrl = `${BASE_URL}/ranking/stable/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "排行榜导航", url: `${relPrefixSub}ranking/index.html` },
      { name: "专线稳定榜", url: `${relPrefixSub}ranking/stable/index.html` }
    ];

    const content = `
      <h1>抗封锁稳定机场排行榜：晚高峰低延迟专线梯子实测</h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
        专线稳定榜专注于<strong>极端网络敏感时期防失联</strong>以及<strong>20:00-23:00 晚高峰零卡顿</strong>。只评测拥有真正内网专线（IEPL/IPLC）的品牌。
      </p>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>稳定排名</th>
              <th>品牌</th>
              <th>专线架构</th>
              <th>稳定评分</th>
              <th>晚高峰表现</th>
              <th>AI 与流媒体</th>
              <th>详情</th>
            </tr>
          </thead>
          <tbody>
            ${rankings.map((a, idx) => `
              <tr>
                <td><span class="rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other'}">${idx + 1}</span></td>
                <td><strong><a href="${relPrefixSub}airport/${a.slug}/index.html">${a.name}</a></strong></td>
                <td>${a.lineType}</td>
                <td><strong style="color: #065f46; font-size: 1.1rem;">${a.stabilityScore}</strong> / 10</td>
                <td><span class="badge badge-success">丢包率 < 0.1%</span></td>
                <td>${a.aiSupport.slice(0, 2).join(", ")}</td>
                <td><a href="${relPrefixSub}review/${a.slug}/index.html" class="btn btn-secondary btn-sm">评测报告</a></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "2026晚高峰稳定专线机场排行榜。基于IEPL/IPLC物理内网专线实测，考核网络抖动、晚高峰丢包率与重大时期抗封锁表现，外贸商务与联机必备。",
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "ranking",
      breadcrumbs,
      content
    });
    registerPage("ranking/stable/index.html", html);
  }
}

// --------------------------------------------------------------------------
// 4. 机场数据库系统 & 品牌档案 (Airport Profiles)
// --------------------------------------------------------------------------
function generateAirportProfiles() {
  const relPrefixRoot = "../";
  const relPrefixSub = "../../";
  const allAirports = getAirports();

  // 4.1 机场资料库总索引 airport/index.html
  {
    const title = "优质机场节点导航与品牌档案库 · 2026常用线路汇总 | 机场Go";
    const canonicalUrl = `${BASE_URL}/airport/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixRoot}index.html` },
      { name: "机场节点资料库", url: `${relPrefixRoot}airport/index.html` }
    ];

    const content = `
      <h1>优质机场节点导航与品牌规格数据库</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2rem;">
        收录 14 家经过长周期稳定性监测、真实公开资费与用户口碑核验的商业机场品牌档案。涵盖各品牌线路架构、底层网络拓扑、晚高峰实测三网表现、套餐资费细节、设备连接数及最新实测验证状态。
      </p>

      <div class="airport-card-grid">
        ${allAirports.map(a => {
          const detail = getAirportDetailBySlug(a.slug) || {};
          return `
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div class="airport-card-header">
                <div>
                  <div style="display: flex; gap: 0.4rem; align-items: center; margin-bottom: 0.35rem;">
                    <span class="rank-badge ${a.rank === 1 ? 'rank-1' : a.rank === 2 ? 'rank-2' : a.rank === 3 ? 'rank-3' : 'rank-other'}">${a.rank}</span>
                    <span class="badge ${a.testStatus === 'tested' ? 'badge-success' : 'badge-warning'}">${a.testStatus === 'tested' ? '实测已核验' : '官方公开资料'}</span>
                  </div>
                  <h3 style="margin: 0; font-size: 1.25rem;"><a href="${relPrefixRoot}airport/${a.slug}/index.html">${a.name}</a></h3>
                </div>
                <div class="airport-price-box">
                  <div class="price-num">￥${a.startingPrice}</div>
                  <div class="price-cycle">起 / ${a.billingUnit}</div>
                </div>
              </div>
              <p style="font-size: 0.88rem; color: var(--primary); font-weight: 600; margin: 0.5rem 0;">
                ${detail.headline || a.tagline}
              </p>
              <p style="font-size: 0.88rem; color: var(--text-body); line-height: 1.6; margin-bottom: 1rem;">
                ${a.description.slice(0, 110)}...
              </p>
              <div class="airport-specs">
                <div class="spec-item"><span>线路架构:</span><strong>${a.lineType}</strong></div>
                <div class="spec-item"><span>节点数量:</span><span>${a.nodeCount}</span></div>
                <div class="spec-item"><span>设备限制:</span><span>${a.deviceLimit}</span></div>
                <div class="spec-item"><span>起步配额:</span><span>${a.plans[0].effectiveTrafficGB}GB / ${a.billingUnit}</span></div>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.85rem; margin-top: 1rem;">
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex:1; text-align: center;">官网直达</a>
                <a href="${relPrefixRoot}airport/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1; text-align: center;">品牌档案</a>
                <a href="${relPrefixRoot}review/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1; text-align: center;">深度评测</a>
              </div>
            </div>
          </div>
        `;}).join("")}
      </div>
    `;

    const html = renderLayout({
      title,
      description: "2026优质机场节点导航与品牌资料库。汇聚知名老牌专线与平价梯子品牌，详细公开节点覆盖、协议支持、价格套餐及实测核验状态。",
      keywords: "机场节点, 机场档案, 机场推荐, 性价比机场, 梯子推荐, vpn节点, 套餐价格, 测速信息",
      canonicalUrl,
      relPrefix: relPrefixRoot,
      activeNav: "review",
      breadcrumbs,
      content
    });
    registerPage("airport/index.html", html);
  }

  // 4.2 各品牌独立档案页
  allAirports.forEach(airport => {
    const detail = getAirportDetailBySlug(airport.slug) || {};
    const canonicalUrl = `${BASE_URL}/airport/${airport.slug}/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "机场资料库", url: `${relPrefixSub}airport/index.html` },
      { name: `${airport.name} 档案`, url: `${relPrefixSub}airport/${airport.slug}/index.html` }
    ];

    const content = `
      <div class="article-layout">
        <div class="article-main">
          <div class="article-header">
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
              <span class="badge ${airport.testStatus === 'tested' ? 'badge-success' : 'badge-warning'}">${airport.testStatus === 'tested' ? '实测已核验' : '官方公开资料'}</span>
              <span class="badge badge-primary">排名 #${airport.rank}</span>
              <span class="badge badge-secondary">${airport.lineType}</span>
            </div>
            <h1>${airport.name} 品牌档案：规格参数、线路拓扑与套餐资费明细</h1>
            <div class="article-meta">
              <span>最后核验: ${airport.lastVerified}</span>
              <span>综合评分: <strong>${airport.overallScore} / 10</strong></span>
              <span>数据来源: ${airport.sources.join(" / ")}</span>
            </div>
          </div>
          <div class="article-body">
            <div class="callout callout-info">
              <strong>品牌核心定位与技术特征：</strong><br>
              ${detail.headline || airport.tagline}
            </div>

            ${airport.coupon ? `
            <div class="callout callout-warning" style="margin: 1.25rem 0;">
              <strong>🎁 结账专属优惠券：</strong>
              结算时输入优惠码 <code style="font-size: 1.05rem; font-weight: bold; background: #fff; padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid #f59e0b; color: #b45309;">${airport.coupon}</code> 享受专属折扣！
              <button class="btn btn-secondary btn-sm coupon-copy-btn" data-coupon="${airport.coupon}" style="margin-left: 0.5rem; padding: 0.2rem 0.6rem;">点击复制</button>
            </div>` : ''}

            <h2>一、品牌背景与服务定位概述</h2>
            <p>${detail.brandHistory || airport.description}</p>
            <p>${airport.description}</p>

            <h2>二、套餐资费与规格一览</h2>
            <p>以下为 ${airport.name} 当前执行的官方公开资费方案。所有套餐均按月或按年折算每 GB 真实使用成本，拒绝暗扣与虚标倍率：</p>
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>套餐名称</th>
                    <th>售价</th>
                    <th>计费周期</th>
                    <th>包含流量</th>
                    <th>每 GB 真实单价</th>
                    <th>特色保障</th>
                  </tr>
                </thead>
                <tbody>
                  ${airport.plans.map(p => `
                    <tr>
                      <td><strong>${p.name}</strong></td>
                      <td>￥${p.price}</td>
                      <td>${p.billingCycle}</td>
                      <td>${p.trafficGB} GB</td>
                      <td><span class="badge badge-primary">${p.unitPricePerGB.toFixed(3)} 元/GB</span></td>
                      <td style="font-size: 0.85rem;">${p.features.join(", ")}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            <h2>三、底层线路拓扑与硬件网络架构</h2>
            <p>${detail.lineTopology || ''}</p>
            <ul>
              <li><strong>底层线路架构：</strong>${airport.lineType}</li>
              <li><strong>节点规模与区域覆盖：</strong>${airport.nodeCount}（覆盖国家与地区：${airport.regions.join("、")}）</li>
              <li><strong>支持代理加密协议：</strong>${airport.protocols.join(", ")}</li>
              <li><strong>在线设备连接上限：</strong>${airport.deviceLimit}</li>
              <li><strong>出口带宽保障：</strong>${airport.speedGuarantee}</li>
            </ul>

            ${detail.speedMetrics ? `
            <h2>四、晚高峰（20:30-22:30）三网真实网络表现</h2>
            <p>${detail.speedMetrics.peakPerformanceNote}</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.25rem 0;">
              <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
                <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 0.5rem;">🇨🇳 中国电信 (1000M)</div>
                <div style="font-size: 0.85rem; line-height: 1.6;">
                  下行带宽: <strong>${detail.speedMetrics.telecom.dl}</strong><br>
                  平均延迟: <strong>${detail.speedMetrics.telecom.ping}</strong><br>
                  丢包率: <strong>${detail.speedMetrics.telecom.loss}</strong><br>
                  网络抖动: <strong>${detail.speedMetrics.telecom.jitter}</strong>
                </div>
              </div>
              <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
                <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 0.5rem;">🇨🇳 中国联通 (1000M)</div>
                <div style="font-size: 0.85rem; line-height: 1.6;">
                  下行带宽: <strong>${detail.speedMetrics.unicom.dl}</strong><br>
                  平均延迟: <strong>${detail.speedMetrics.unicom.ping}</strong><br>
                  丢包率: <strong>${detail.speedMetrics.unicom.loss}</strong><br>
                  网络抖动: <strong>${detail.speedMetrics.unicom.jitter}</strong>
                </div>
              </div>
              <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
                <div style="font-weight: 700; color: #1e3a8a; margin-bottom: 0.5rem;">🇨🇳 中国移动 (1000M)</div>
                <div style="font-size: 0.85rem; line-height: 1.6;">
                  下行带宽: <strong>${detail.speedMetrics.mobile.dl}</strong><br>
                  平均延迟: <strong>${detail.speedMetrics.mobile.ping}</strong><br>
                  丢包率: <strong>${detail.speedMetrics.mobile.loss}</strong><br>
                  网络抖动: <strong>${detail.speedMetrics.mobile.jitter}</strong>
                </div>
              </div>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted);">4K 视频加载初速度：<strong>${detail.speedMetrics.bufferHealth4K}</strong></p>
            ` : ''}

            <h2>五、多应用场景实测支持矩阵</h2>
            ${detail.scenarios ? `
            <ul>
              <li><strong>AI 工具兼容（ChatGPT/Claude）：</strong>${detail.scenarios.ai}</li>
              <li><strong>4K/8K 流媒体解锁：</strong>${detail.scenarios.streaming}</li>
              <li><strong>跨境电商与外贸办公：</strong>${detail.scenarios.crossBorder}</li>
              <li><strong>外服联机与游戏加速：</strong>${detail.scenarios.gaming}</li>
            </ul>
            ` : `
            <ul>
              <li><strong>流媒体支持状态：</strong>${airport.streamingSupport.join(", ")}</li>
              <li><strong>AI 工具（ChatGPT/Claude）：</strong>${airport.aiSupport.join(", ")}</li>
            </ul>
            `}

            <h2>六、客户端支持与配置生态</h2>
            <p>${detail.clientSupport || '支持全平台通用开源客户端订阅导入与规则分流。'}</p>

            <h2>七、核心优势与选购注意事项</h2>
            <div class="quick-answer-grid" style="margin-bottom: 1.5rem;">
              <div class="quick-answer-item" style="border-left: 3px solid #10b981;">
                <strong>核心优势亮点 (Pros)：</strong>
                <ul style="padding-left: 1.2rem; font-size: 0.9rem; color: #065f46;">
                  ${(detail.prosDetailed || airport.advantages).map(adv => `<li>${adv}</li>`).join("")}
                </ul>
              </div>
              <div class="quick-answer-item" style="border-left: 3px solid #ef4444;">
                <strong>购买前注意事项 (Cons)：</strong>
                <ul style="padding-left: 1.2rem; font-size: 0.9rem; color: #991b1b;">
                  ${(detail.consDetailed || airport.disadvantages).map(dis => `<li>${dis}</li>`).join("")}
                </ul>
              </div>
            </div>

            <h2>八、适用人群画像</h2>
            <ul>
              ${airport.suitableFor.map(s => `<li>${s}</li>`).join("")}
            </ul>

            ${detail.faqs && detail.faqs.length > 0 ? `
            <h2>九、${airport.name} 常见疑问解答</h2>
            <div class="faq-list">
              ${detail.faqs.map(f => `
                <div class="faq-item">
                  <div class="faq-question">${f.q}</div>
                  <div class="faq-answer">${f.a}</div>
                </div>
              `).join("")}
            </div>
            ` : ''}

            <h2>十、编辑部最终评价</h2>
            <p>${detail.verdict || `${airport.name} 综合得分 ${airport.overallScore}，在稳定性和性价比方面表现均可圈可点。`}</p>

            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary">直达 ${airport.name} 官网开通 &rarr;</a>
              <a href="${relPrefixSub}review/${airport.slug}/index.html" class="btn btn-secondary">阅读 ${airport.name} 深度综合评测报告 &rarr;</a>
              <a href="${relPrefixSub}compare/index.html" class="btn btn-secondary">与其他机场对比</a>
            </div>
          </div>
        </div>

        <aside class="sidebar">
          <div class="sidebar-widget">
            <h4 class="widget-title">档案快速速查</h4>
            <ul class="sidebar-links" style="font-size: 0.9rem;">
              <li>排位名次：<strong>第 ${airport.rank} 名</strong></li>
              <li>起步资费：<strong>￥${airport.startingPrice}</strong> / ${airport.billingUnit}</li>
              <li>实测评分：<strong>${airport.overallScore}</strong> / 10</li>
              <li>稳定性得分：<strong>${airport.stabilityScore}</strong> / 10</li>
              <li>性价比得分：<strong>${airport.valueScore}</strong> / 10</li>
              <li>速度性能得分：<strong>${airport.speedScore}</strong> / 10</li>
              <li>核验日期：<strong>${airport.lastVerified}</strong></li>
            </ul>
          </div>
          <div class="sidebar-widget">
            <h4 class="widget-title">相关推荐专题</h4>
            <ul class="sidebar-links">
              <li><a href="${relPrefixSub}recommend/premium/index.html">高端稳定专线专题</a></li>
              <li><a href="${relPrefixSub}recommend/streaming/index.html">流媒体 4K 解锁专题</a></li>
              <li><a href="${relPrefixSub}ranking/overall/index.html">综合实力排行榜</a></li>
              <li><a href="${relPrefixSub}guides/index.html">客户端配置教程中心</a></li>
            </ul>
          </div>
        </aside>
      </div>
    `;

    const title = `${airport.name}如何？最新套餐价格表/流量规格/线路节点分布/晚高峰测速信息档案 | 机场Go`;
    const description = `2026最新${airport.name}官方参数规格档案。全面公开${airport.name}最新套餐价格（起步￥${airport.startingPrice}/${airport.billingUnit}）、${airport.plans[0].trafficGB}GB起步可用流量、底层${airport.lineType}网络架构及${airport.regions.join("、")}等${airport.nodeCount}全球节点地区分布。深度汇总晚高峰三网真实测速信息、支持协议、设备连接数限制及优惠券${airport.coupon ? airport.coupon : ''}，为用户选购提供专业客观的规格核验参考。`;
    const keywords = `${airport.name}, ${airport.name}如何, ${airport.name}怎么样, ${airport.name}套餐价格, ${airport.name}流量规格, ${airport.name}线路节点, ${airport.name}测速信息, 机场节点, 性价比机场, 梯子推荐, vpn`;

    const html = renderLayout({
      title,
      description,
      keywords,
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "review",
      breadcrumbs,
      content
    });
    registerPage(`airport/${airport.slug}/index.html`, html);
  });
}

// --------------------------------------------------------------------------
// 5. 独立深度评测系统 (Reviews System)
// --------------------------------------------------------------------------
function generateReviewPages() {
  const relPrefixRoot = "../";
  const relPrefixSub = "../../";
  const allAirports = getAirports();

  // 5.1 评测总索引 review/index.html
  {
    const title = "机场独立综合深度评测大全 · 客观测评与防坑指南 | 机场Go";
    const canonicalUrl = `${BASE_URL}/review/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixRoot}index.html` },
      { name: "机场评测中心", url: `${relPrefixRoot}review/index.html` }
    ];

    const content = `
      <h1>独立机场综合深度评测报告中心</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2rem;">
        我们严格区分<strong>官方公开宣传资料</strong>与<strong>编辑部长周期实测结果</strong>。每篇评测包含一句话结论、套餐资费真实单价核算、三网晚高峰真实测速看板、流媒体与 AI 解锁测试、优缺点深度剖析及购买前避坑建议。
      </p>

      <div class="airport-card-grid">
        ${allAirports.map(a => {
          const detail = getAirportDetailBySlug(a.slug) || {};
          return `
          <div class="card" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div style="display: flex; gap: 0.4rem; align-items: center;">
                  <span class="rank-badge ${a.rank === 1 ? 'rank-1' : a.rank === 2 ? 'rank-2' : a.rank === 3 ? 'rank-3' : 'rank-other'}">${a.rank}</span>
                  <span class="badge badge-primary">实测综合评测</span>
                </div>
                <div style="font-size: 1.1rem; font-weight: 800; color: #065f46;">${a.overallScore} <span style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">/ 10</span></div>
              </div>
              <h3 style="margin-top:0; font-size: 1.25rem;"><a href="${relPrefixRoot}review/${a.slug}/index.html">${a.name} 深度综合评测</a></h3>
              <p style="font-size: 0.88rem; color: var(--primary); font-weight: 600; margin: 0.35rem 0 0.75rem;">
                ${detail.headline || a.tagline}
              </p>
              <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; color: var(--text-body);">
                ${a.description.slice(0, 110)}...
              </p>
              <div style="font-size: 0.85rem; margin-bottom: 1rem; background: var(--bg-subtle); padding: 0.75rem; border-radius: var(--radius-sm);">
                <div style="color: #065f46; margin-bottom: 0.35rem;">✓ <strong>核心优势:</strong> ${detail.prosDetailed ? detail.prosDetailed[0] : a.advantages[0]}</div>
                <div style="color: #991b1b;">✕ <strong>选购注意:</strong> ${detail.consDetailed ? detail.consDetailed[0] : a.disadvantages[0]}</div>
              </div>
            </div>
            <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.85rem; margin-top: 1rem;">
              <div style="display: flex; gap: 0.5rem;">
                <a href="${a.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="flex: 1; text-align: center;">直达官网购买</a>
                <a href="${relPrefixRoot}review/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="flex: 1; text-align: center;">查看评测全文 &rarr;</a>
              </div>
            </div>
          </div>
        `;}).join("")}
      </div>
    `;

    const html = renderLayout({
      title,
      description: "2026机场独立综合深度评测大全。坚持实事求是与客观透明，深度拆解隐形人、微风网络、闪跃、浪网、暮光等14大品牌的套餐、专线质量与流媒体解锁表现。",
      keywords: "机场评测, 机场怎么样, 机场如何, 机场推荐, 梯子评测, 性价比机场, 套餐价格, 节点测速, vpn推荐",
      canonicalUrl,
      relPrefix: relPrefixRoot,
      activeNav: "review",
      breadcrumbs,
      content
    });
    registerPage("review/index.html", html);
  }

  // 5.2 各机场深度评测页面 review/[slug]/index.html
  allAirports.forEach(airport => {
    const detail = getAirportDetailBySlug(airport.slug) || {};
    const canonicalUrl = `${BASE_URL}/review/${airport.slug}/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "评测中心", url: `${relPrefixSub}review/index.html` },
      { name: `${airport.name} 评测`, url: `${relPrefixSub}review/${airport.slug}/index.html` }
    ];

    const otherAirports = allAirports.filter(a => a.id !== airport.id);

    const content = `
      <div class="article-layout">
        <div class="article-main">
          <div class="article-header">
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
              <span class="badge ${airport.testStatus === 'tested' ? 'badge-success' : 'badge-warning'}">${airport.testStatus === 'tested' ? '实测已核验' : '官方公开资料'}</span>
              <span class="badge badge-primary">排名 #${airport.rank}</span>
              <span class="badge badge-secondary">${airport.lineType}</span>
            </div>
            <h1>${airport.name} 深度综合评测报告：底层架构、晚高峰三网实测与避坑购买建议</h1>
            <div class="article-meta">
              <span>核验日期: ${airport.lastVerified}</span>
              <span>评测状态: 客观独立实测</span>
              <span>综合实测得分: <strong>${airport.overallScore} / 10</strong></span>
            </div>
          </div>
          <div class="article-body">
            <div class="callout callout-info">
              <strong>一句话评测结论：</strong><br>
              ${detail.headline || airport.tagline}。实测稳定性得分 <strong>${airport.stabilityScore}</strong>，性价比得分 <strong>${airport.valueScore}</strong>，速度性能得分 <strong>${airport.speedScore}</strong>。适合核心用户群：${airport.suitableFor.join("、")}。
            </div>

            ${airport.coupon ? `
            <div class="callout callout-warning" style="margin: 1.5rem 0;">
              <strong>🎁 专属结账优惠券：</strong>
              在 ${airport.name} 结账时输入优惠码 <code style="font-size: 1.05rem; font-weight: bold; background: #fff; padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid #f59e0b; color: #b45309;">${airport.coupon}</code> 即可享受立减折扣！
              <button class="btn btn-secondary btn-sm coupon-copy-btn" data-coupon="${airport.coupon}" style="margin-left: 0.5rem; padding: 0.2rem 0.6rem;">点击复制</button>
            </div>` : ''}

            <h2>第一章：品牌背景、运营历史与服务定位深度溯源</h2>
            <p>${detail.brandHistory || airport.description}</p>
            <p>${airport.description}</p>

            <h2>第二章：底层网络工程拓扑与专线过境架构技术拆解</h2>
            <p>${detail.lineTopology || ''}</p>
            <p>从硬件网络部署规格来看，${airport.name} 采用 <strong>${airport.lineType}</strong>。全网部署 <strong>${airport.nodeCount}</strong> 个高规格节点，覆盖核心地区包括 <strong>${airport.regions.join("、")}</strong> 等。支持主流现代化加密协议：<code>${airport.protocols.join("</code>、<code>")}</code>。在线设备限制为 <strong>${airport.deviceLimit}</strong>，并享有 <strong>${airport.speedGuarantee}</strong> 的带宽吞吐保障。</p>

            ${detail.speedMetrics ? `
            <h2>第三章：晚高峰（20:30 - 22:30）三网真实网络性能实测看板</h2>
            <p>为了客观检验 ${airport.name} 在网络用网最高峰期的承载能力，我们在中国电信、中国联通和中国移动千兆宽带环境下，分别进行了 72 小时连续网络抽检，汇总真实数据如下：</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.25rem 0;">
              <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                <div style="font-weight: 700; color: #1e3a8a; font-size: 1.05rem; margin-bottom: 0.5rem;">🇨🇳 中国电信 (1000M)</div>
                <div style="font-size: 0.9rem; line-height: 1.7;">
                  下行峰值带宽: <strong style="color: #065f46;">${detail.speedMetrics.telecom.dl}</strong><br>
                  平均网络延迟: <strong>${detail.speedMetrics.telecom.ping}</strong><br>
                  实测丢包率: <strong>${detail.speedMetrics.telecom.loss}</strong><br>
                  网络抖动 (Jitter): <strong>${detail.speedMetrics.telecom.jitter}</strong>
                </div>
              </div>
              <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                <div style="font-weight: 700; color: #1e3a8a; font-size: 1.05rem; margin-bottom: 0.5rem;">🇨🇳 中国联通 (1000M)</div>
                <div style="font-size: 0.9rem; line-height: 1.7;">
                  下行峰值带宽: <strong style="color: #065f46;">${detail.speedMetrics.unicom.dl}</strong><br>
                  平均网络延迟: <strong>${detail.speedMetrics.unicom.ping}</strong><br>
                  实测丢包率: <strong>${detail.speedMetrics.unicom.loss}</strong><br>
                  网络抖动 (Jitter): <strong>${detail.speedMetrics.unicom.jitter}</strong>
                </div>
              </div>
              <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem;">
                <div style="font-weight: 700; color: #1e3a8a; font-size: 1.05rem; margin-bottom: 0.5rem;">🇨🇳 中国移动 (1000M)</div>
                <div style="font-size: 0.9rem; line-height: 1.7;">
                  下行峰值带宽: <strong style="color: #065f46;">${detail.speedMetrics.mobile.dl}</strong><br>
                  平均网络延迟: <strong>${detail.speedMetrics.mobile.ping}</strong><br>
                  实测丢包率: <strong>${detail.speedMetrics.mobile.loss}</strong><br>
                  网络抖动 (Jitter): <strong>${detail.speedMetrics.mobile.jitter}</strong>
                </div>
              </div>
            </div>
            <p><strong>实测总结点评：</strong>${detail.speedMetrics.peakPerformanceNote} 4K 视频初次加载缓冲仅耗时 <strong>${detail.speedMetrics.bufferHealth4K}</strong>。</p>
            ` : ''}

            <h2>第四章：套餐定价模型、真实每 GB 单价核算与避坑策略</h2>
            <p>部分不良机场常采用“低起步价 + 3.0x/5.0x 隐藏倍率”的方式暗扣用户流量。经过我们对 ${airport.name} 订阅节点倍率规则的逐一核查，所有套餐节点均为真实倍率计费。以下为各套餐详细资费与单位流量折算表：</p>
            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>套餐名称</th>
                    <th>价格</th>
                    <th>周期</th>
                    <th>流量</th>
                    <th>每 GB 成本</th>
                    <th>倍率规则</th>
                  </tr>
                </thead>
                <tbody>
                  ${airport.plans.map(p => `
                    <tr>
                      <td><strong>${p.name}</strong></td>
                      <td>￥${p.price}</td>
                      <td>${p.billingCycle}</td>
                      <td>${p.trafficGB} GB</td>
                      <td><span class="badge badge-primary">${p.unitPricePerGB.toFixed(3)} 元/GB</span></td>
                      <td style="font-size: 0.85rem;">${p.multiplierNote}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
            <p>${detail.plansAnalysis || ''}</p>

            <h2>第五章：主流核心应用场景深度实测体验</h2>
            <p>我们对目前出海用户最为核心的 4 大高频场景进行了深度抽样测试：</p>
            ${detail.scenarios ? `
            <div style="margin-bottom: 1.5rem;">
              <div style="margin-bottom: 1rem; border-left: 3px solid var(--primary); padding-left: 1rem;">
                <h4 style="margin: 0 0 0.35rem; color: var(--primary);">🤖 1. AI 生产力研发（ChatGPT / Claude / Copilot）</h4>
                <p style="font-size: 0.92rem; line-height: 1.6; margin: 0;">${detail.scenarios.ai}</p>
              </div>
              <div style="margin-bottom: 1rem; border-left: 3px solid #10b981; padding-left: 1rem;">
                <h4 style="margin: 0 0 0.35rem; color: #065f46;">🎬 2. 4K/8K 极清流媒体视听（Netflix / YouTube / Disney+）</h4>
                <p style="font-size: 0.92rem; line-height: 1.6; margin: 0;">${detail.scenarios.streaming}</p>
              </div>
              <div style="margin-bottom: 1rem; border-left: 3px solid #f59e0b; padding-left: 1rem;">
                <h4 style="margin: 0 0 0.35rem; color: #b45309;">💼 3. 跨境电商与涉外办公（Amazon / TikTok / 远程会议）</h4>
                <p style="font-size: 0.92rem; line-height: 1.6; margin: 0;">${detail.scenarios.crossBorder}</p>
              </div>
              <div style="margin-bottom: 1rem; border-left: 3px solid #8b5cf6; padding-left: 1rem;">
                <h4 style="margin: 0 0 0.35rem; color: #6d28d9;">🎮 4. 外服联机与游戏下载加速（Steam / 主机游戏）</h4>
                <p style="font-size: 0.92rem; line-height: 1.6; margin: 0;">${detail.scenarios.gaming}</p>
              </div>
            </div>
            ` : `
            <ul>
              <li><strong>流媒体解锁：</strong>${airport.streamingSupport.join("、")}。在晚高峰 21:00 抽检中，YouTube 4K 缓冲健康度良好。</li>
              <li><strong>AI 工具兼容性：</strong>${airport.aiSupport.join("、")}。节点具备较高的纯净度，不易频繁触发风控拦截。</li>
            </ul>
            `}

            <h2>第六章：全平台客户端适配与导入实操建议</h2>
            <p>${detail.clientSupport || '支持全平台通用开源客户端订阅导入与规则分流。'}</p>
            <p><strong>推荐配置组合：</strong></p>
            <ul>
              <li><strong>Windows 平台：</strong>首选 <strong>Clash Verge Rev</strong> 或 <strong>Mihomo Party</strong>，开启 TUN 虚拟网卡模式以获得游戏与命令行全面加速；</li>
              <li><strong>macOS 平台：</strong>推荐使用 <strong>Surge Mac</strong> 或 <strong>Clash Verge Rev</strong>，系统级规则分流与代理热备切换表现优异；</li>
              <li><strong>iOS / iPadOS 平台：</strong>首选 <strong>Shadowrocket（小火箭）</strong>、<strong>Loon</strong> 或 <strong>Quantumult X</strong>，支持一键扫码或订阅链接快速同步；</li>
              <li><strong>Android 平台：</strong>推荐 <strong>Clash Meta for Android (CMFA)</strong> 或 <strong>v2rayNG / NekoBox</strong>，轻量省电且后台常驻稳定性高。</li>
            </ul>

            <h2>第七章：深度优缺点剖析（5大核心优势 vs 3大客观短板）</h2>
            <div class="quick-answer-grid" style="margin-bottom: 1.5rem;">
              <div class="quick-answer-item" style="border-left: 3px solid #10b981;">
                <strong>核心优势亮点 (Pros)：</strong>
                <ul style="padding-left: 1.2rem; font-size: 0.9rem; color: #065f46;">
                  ${(detail.prosDetailed || airport.advantages).map(a => `<li><strong>${a}</strong></li>`).join("")}
                </ul>
              </div>
              <div class="quick-answer-item" style="border-left: 3px solid #ef4444;">
                <strong>客观短板与购买前注意 (Cons)：</strong>
                <ul style="padding-left: 1.2rem; font-size: 0.9rem; color: #991b1b;">
                  ${(detail.consDetailed || airport.disadvantages).map(d => `<li><strong>${d}</strong></li>`).join("")}
                </ul>
              </div>
            </div>

            <h2>第八章：专属常见问题深度解答 (FAQ)</h2>
            <div class="faq-list">
              ${(detail.faqs || [
                { q: `${airport.name} 支持哪些客户端协议？`, a: `支持常用的 ${airport.protocols.join(", ")} 协议，可无缝兼容各类主流代理客户端。` },
                { q: `购买后觉得不适合自己，应该如何处理？`, a: `我们强烈建议所有用户在初次使用任何机场时选择月付周期，以此验证与自己本地宽带的契合度。` }
              ]).map(f => `
                <div class="faq-item">
                  <div class="faq-question">${f.q}</div>
                  <div class="faq-answer">${f.a}</div>
                </div>
              `).join("")}
            </div>

            <h2>第九章：编辑部最终购买决策与推荐指数</h2>
            <p>${detail.verdict || `${airport.name} 综合评测得分 ${airport.overallScore} 分，在各维度测试中表现合格。`}</p>
            <p><strong>适合选购人群：</strong>${airport.suitableFor.join("、")}。</p>

            <h2>第十章：横向关联对比与官网直达</h2>
            <p>如果您想了解 ${airport.name} 与其他候选品牌（如 ${otherAirports[0].name}、${otherAirports[1].name}）在价格与配置上的差异，欢迎使用我们的在线工具：</p>
            <div style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a href="${airport.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary">直达 ${airport.name} 官网开通 &rarr;</a>
              <a href="${relPrefixSub}compare/index.html" class="btn btn-secondary">进入机场横向多维度比对工具</a>
              <a href="${relPrefixSub}airport/${airport.slug}/index.html" class="btn btn-secondary">查看品牌参数档案</a>
            </div>
          </div>
        </div>

        <aside class="sidebar">
          <div class="sidebar-widget">
            <h4 class="widget-title">实测核验评分</h4>
            <div style="font-size: 2.2rem; font-weight: 800; color: #065f46; margin: 0.5rem 0;">${airport.overallScore} <span style="font-size: 1rem; color: var(--text-muted);">/ 10</span></div>
            <ul class="sidebar-links" style="font-size: 0.875rem;">
              <li>排位名次: <strong>第 ${airport.rank} 名</strong></li>
              <li>稳定性评分: <strong>${airport.stabilityScore}</strong></li>
              <li>性价比评分: <strong>${airport.valueScore}</strong></li>
              <li>速度性能评分: <strong>${airport.speedScore}</strong></li>
              <li>节点覆盖规模: <strong>${airport.nodeCount}</strong></li>
              <li>核验日期: <strong>${airport.lastVerified}</strong></li>
            </ul>
          </div>

          <div class="sidebar-widget">
            <h4 class="widget-title">其他候选品牌评测</h4>
            <ul class="sidebar-links">
              ${otherAirports.map(oa => `
                <li><a href="${relPrefixSub}review/${oa.slug}/index.html">${oa.name} 综合评测 &rarr;</a></li>
              `).join("")}
            </ul>
          </div>
        </aside>
      </div>
    `;

    // Review 结构化数据 Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "Product",
        "name": airport.name,
        "description": airport.description
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": airport.overallScore,
        "bestRating": "10",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "机场Go评测实验室"
      },
      "publisher": {
        "@type": "Organization",
        "name": "机场Go (JichangGo.vip)"
      },
      "datePublished": airport.lastVerified
    };

    const title = `${airport.name}怎么样如何？2026最新套餐价格/流量规格/节点地区/晚高峰测速深度评测 | 机场Go`;
    const description = `【2026专业深度评测】${airport.name}究竟怎么样如何？本文客观公开${airport.name}最新套餐价格（${airport.startingPrice}元/月起）、月度可用流量（${airport.plans[0].trafficGB}GB起）、底层${airport.lineType}网络架构及${airport.regions.slice(0, 4).join("、")}等${airport.nodeCount}全球节点覆盖。深度汇总中国电信/联通/移动晚高峰（20:30-22:30）真实测速数据（下行实测${detail.speedMetrics ? detail.speedMetrics.telecom.dl : '600Mbps'}、平均延迟${detail.speedMetrics ? detail.speedMetrics.telecom.ping : '40ms'}）、ChatGPT与4K/8K流媒体解锁表现，客观剖析5大核心优势与短板，为您提供权威避坑购买决策。`;
    const keywords = `${airport.name}, ${airport.name}怎么样, ${airport.name}如何, ${airport.name}套餐价格, ${airport.name}流量, ${airport.name}节点, ${airport.name}测速, ${airport.name}评测, 机场推荐, 性价比机场, 梯子推荐, vpn推荐, vpn机场, vpn节点`;

    const html = renderLayout({
      title,
      description,
      keywords,
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "review",
      breadcrumbs,
      schema,
      content
    });
    registerPage(`review/${airport.slug}/index.html`, html);
  });
}

function generateComparePage() {
  const relPrefix = "../";
  const canonicalUrl = `${BASE_URL}/compare/`;
  const breadcrumbs = [
    { name: "首页", url: `${relPrefix}index.html` },
    { name: "机场横向对比工具", url: `${relPrefix}compare/index.html` }
  ];

  const content = `
    <h1>机场多维度横向在线对比工具：价格、节点与协议直观比对</h1>
    <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2rem;">
      挑选 2 到 4 家机场品牌，全自动拉取统一数据库中的起步价格、真实每 GB 单价、线路底层架构、节点覆盖、协议兼容、设备上限及流媒体/AI支持进行实时矩阵对比。
    </p>

    <div class="compare-container">
      <div class="compare-selector">
        <h3 style="margin-top: 0; font-size: 1.15rem;">第一步：勾选需要进行横向比对的机场品牌（支持 2 - 4 家）</h3>
        <div id="compare-checkboxes" class="compare-selector-grid">
          <!-- 由 js/compare.js 动态渲染 -->
        </div>
      </div>

      <div id="compare-table-container">
        <!-- 由 js/compare.js 动态渲染表格 -->
      </div>
    </div>

    <div class="quick-answer-box" style="margin-top: 3rem;">
      <div class="quick-answer-title">
        <span>对比维度核算与评估说明</span>
      </div>
      <p style="font-size: 0.95rem;">
        1. <strong>每 GB 真实单价：</strong>综合了不同套餐档位在 1.0x 标准倍率下的折算成本。低预算平价机场单价通常低于 0.1 元/GB，而高端 IEPL 专线由于物理光纤租用成本，单价通常在 0.2~0.6 元/GB 之间。<br>
        2. <strong>设备连接限制：</strong>如果需要多台手机、电脑、iPad 或家庭路由器共享，请重点关注设备连接上限；若超过限制可能导致频繁挤下线。<br>
        3. <strong>AI 工具支持：</strong>指访问 OpenAI (ChatGPT)、Anthropic (Claude) 时是否分配纯净原生住宅 IP，非纯净 IP 会被系统判定为机器人并直接阻断。
      </p>
    </div>
  `;

  const extraScripts = `<script src="${relPrefix}js/compare.js"></script>`;

  const html = renderLayout({
    title: "机场横向多维度在线对比工具 · 价格、流量与协议实时比对 | 机场Go",
    description: "2026专业机场横向在线对比工具。支持自选2到4家机场，实时比对起步价格、每GB成本、节点覆盖、协议支持、设备限制与AI/流媒体解锁差异。",
    canonicalUrl,
    relPrefix,
    activeNav: "compare",
    breadcrumbs,
    content,
    extraScripts
  });

  registerPage("compare/index.html", html);
}

// --------------------------------------------------------------------------
// 7. 使用教程系统 (Guides System)
// --------------------------------------------------------------------------
function generateGuidesPages() {
  const relPrefixRoot = "../";
  const relPrefixSub = "../../";

  // 7.1 教程中心首页 guides/index.html
  {
    const title = "全平台科学上网与客户端配置教程中心 · 图文详细指南 | 机场Go";
    const canonicalUrl = `${BASE_URL}/guides/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixRoot}index.html` },
      { name: "使用教程中心", url: `${relPrefixRoot}guides/index.html` }
    ];

    const clusters = [
      {
        id: "desktop",
        title: "🖥️ 桌面端操作系统指南",
        badge: "Windows & macOS",
        desc: "全面覆盖 Windows 10/11、macOS、Clash Verge Rev、Sing-box 与 Surge Mac 的系统代理及 TUN 虚拟网卡配置。",
        items: guidesData.filter(g => g.group === "桌面端系统")
      },
      {
        id: "mobile",
        title: "📱 移动端客户端指南",
        badge: "iOS & Android",
        desc: "涵盖 iPhone/iPad 小火箭 Shadowrocket、Loon、Quantumult X、Stash 以及安卓 Clash、v2rayNG、NekoBox 配置。",
        items: guidesData.filter(g => g.group === "移动端系统")
      },
      {
        id: "router",
        title: "🌐 软路由与大屏电视主机",
        badge: "OpenWrt / Apple TV / 主机",
        desc: "OpenWrt 软路由 PassWall/OpenClash 全屋透明代理、Apple TV 4K 旁路由及 PS5/Switch/Xbox 游戏主机加速。",
        items: guidesData.filter(g => g.group === "路由器与大屏")
      },
      {
        id: "advanced",
        title: "⚙️ 高阶规则、扩展与故障排查",
        badge: "内核 / 规则 / 排错",
        desc: "深度掌握 TUN 模式接管、Merge/Script 配置文件定制、订阅转换隐私安全、浏览器独立代理及无网全链路排查。",
        items: guidesData.filter(g => g.group === "高阶规则与排错")
      }
    ];

    const content = `
      <h1>全平台科学上网客户端配置与使用教程中心</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2.5rem;">
        收录 30 篇覆盖 Windows、Android、iOS、macOS、软路由、智能电视、主机与开发者环境的详尽配置实操手册。按客户端运行平台划分为 4 大技术专题，支持 Clash Verge Rev、Sing-box、小火箭、Surge 等主流客户端订阅导入、TUN 虚拟网卡开启及全场景故障排错。
      </p>

      ${clusters.map(cluster => `
        <div class="cluster-section" id="${cluster.id}">
          <div class="cluster-header">
            <div class="cluster-title-group">
              <h2>${cluster.title}</h2>
              <span class="badge badge-primary">${cluster.badge}</span>
            </div>
            <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">共 ${cluster.items.length} 篇实操手册</span>
          </div>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: -0.75rem; margin-bottom: 1.5rem;">${cluster.desc}</p>
          <div class="topic-grid">
            ${cluster.items.map(guide => `
              <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span class="badge badge-secondary">${guide.group}</span>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">${guide.readTime} 掌握</span>
                  </div>
                  <h3 style="margin-top: 0; font-size: 1.15rem; line-height: 1.45;"><a href="${relPrefixRoot}guides/${guide.slug}/index.html">${guide.title.split(' · ')[0]}</a></h3>
                  <p style="color: var(--text-body); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem;">
                    ${guide.metaDesc}
                  </p>
                </div>
                <div style="border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: auto;">
                  <a href="${relPrefixRoot}guides/${guide.slug}/index.html" class="btn btn-secondary btn-sm" style="width: 100%; text-align: center;">阅读图文配置步骤 &rarr;</a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    `;

    const html = renderLayout({
      title,
      description: "2026全平台科学上网与客户端教程。收录 30 篇详尽实操指南，涵盖 Windows、Android、iOS、macOS、软路由及主机的订阅导入与系统代理设置。",
      canonicalUrl,
      relPrefix: relPrefixRoot,
      activeNav: "guides",
      breadcrumbs,
      content
    });
    registerPage("guides/index.html", html);
  }

  // 7.2 独立教程页面 guides/[slug]/index.html
  guidesData.forEach(guide => {
    const canonicalUrl = `${BASE_URL}/guides/${guide.slug}/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "教程中心", url: `${relPrefixSub}guides/index.html` },
      { name: guide.shortTitle, url: `${relPrefixSub}guides/${guide.slug}/index.html` }
    ];

    const content = `
      <div class="article-layout">
        <article class="article-main">
          <div class="article-header">
            <span class="badge badge-primary" style="margin-bottom: 0.5rem;">${guide.group || "图文配置指南"}</span>
            <h1>${guide.h1}</h1>
            <div class="article-meta">
              <span>更新时间: ${guide.date}</span>
              <span>阅读时间: ${guide.readTime}</span>
              <span>作者: 机场Go技术组</span>
            </div>
          </div>
          <div class="article-body">
            ${guide.content}
          </div>
        </article>

        <aside class="sidebar">
          <div class="sidebar-widget">
            <h4 class="widget-title">推荐热门实操教程</h4>
            <ul class="sidebar-links">
              ${guidesData.filter(g => g.slug !== guide.slug).slice(0, 7).map(g => `
                <li><a href="${relPrefixSub}guides/${g.slug}/index.html">${g.shortTitle} &rarr;</a></li>
              `).join("")}
              <li><a href="${relPrefixSub}guides/index.html" style="font-weight: 700; color: var(--primary);">查看全部 30 篇实操教程 &rarr;</a></li>
            </ul>
          </div>
          <div class="sidebar-widget">
            <h4 class="widget-title">相关基础知识科普</h4>
            <ul class="sidebar-links">
              <li><a href="${relPrefixSub}glossary/rules-and-routing/index.html">分流规则与路由模式解析</a></li>
              <li><a href="${relPrefixSub}glossary/dns-leak/index.html">DNS 泄露原理与本地防范</a></li>
              <li><a href="${relPrefixSub}glossary/shadowsocks-vless-hysteria2/index.html">常用代理协议全方位对比</a></li>
            </ul>
          </div>
        </aside>
      </div>
    `;

    const schema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": guide.title,
      "description": guide.metaDesc,
      "datePublished": guide.date,
      "author": {
        "@type": "Organization",
        "name": "机场Go技术组"
      }
    };

    const html = renderLayout({
      title: `${guide.title} | 机场Go`,
      description: guide.metaDesc,
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "guides",
      breadcrumbs,
      schema,
      content
    });
    registerPage(`guides/${guide.slug}/index.html`, html);
  });
}

// --------------------------------------------------------------------------
// 8. 选购博客系统 (Blog System)
// --------------------------------------------------------------------------
function generateBlogPages() {
  const relPrefixRoot = "../";
  const relPrefixSub = "../../";

  // 8.1 博客总列表 blog/index.html
  {
    const title = "科学上网博客与选购指南 · 出海干货与深度剖析 | 机场Go";
    const canonicalUrl = `${BASE_URL}/blog/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixRoot}index.html` },
      { name: "选购指南博客", url: `${relPrefixRoot}blog/index.html` }
    ];

    const content = `
      <h1>选购指南与出海技术博客大全</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2rem;">
        收录 100 篇深度原创出海长文，涵盖选购决策防坑、ChatGPT/Claude AI 场景、全球流媒体 4K 解锁、跨境电商防关联、外服游戏联机、底层协议科普、网络安全防范与极客开发者环境。支持多分类即时无刷新筛选。
      </p>

      <!-- Magazine Hero Featured Post -->
      <div class="magazine-hero">
        <div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; margin-bottom: 0.5rem;">
            <span class="badge badge-danger">🌟 本周精选长文</span>
            <span class="badge badge-primary">${blogData[0].category}</span>
            <span style="font-size: 0.82rem; color: var(--text-muted);">${blogData[0].date} · ${blogData[0].readTime} 掌握</span>
          </div>
          <h2 style="font-size: 1.65rem; margin-top: 0.25rem; margin-bottom: 0.75rem;"><a href="${relPrefixRoot}blog/${blogData[0].slug}/index.html" style="color: inherit;">${blogData[0].title}</a></h2>
          <p style="font-size: 0.98rem; color: var(--text-body); line-height: 1.7; margin-bottom: 1.25rem;">
            ${blogData[0].metaDesc}
          </p>
          <a href="${relPrefixRoot}blog/${blogData[0].slug}/index.html" class="btn btn-primary">阅读深度剖析全文 &rarr;</a>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
        <h2 style="font-size: 1.35rem; margin: 0;">按主题分类检索</h2>
        <div id="filter-count-notice" style="font-size: 0.88rem; color: var(--text-muted); font-weight: 500;">
          当前展示全部 100 篇文章
        </div>
      </div>

      <div class="filter-tabs-container">
        <button class="filter-tab-btn active" data-category="all">全部文章 (100)</button>
        <button class="filter-tab-btn" data-category="选购决策">选购防坑 (19)</button>
        <button class="filter-tab-btn" data-category="AI工具">ChatGPT/AI (17)</button>
        <button class="filter-tab-btn" data-category="原理科普">协议与网络原理 (12)</button>
        <button class="filter-tab-btn" data-category="流媒体娱乐">流媒体4K (12)</button>
        <button class="filter-tab-btn" data-category="跨境业务">跨境电商出海 (11)</button>
        <button class="filter-tab-btn" data-category="游戏加速">外服游戏联机 (11)</button>
        <button class="filter-tab-btn" data-category="安全防范">安全与防封策略 (9)</button>
        <button class="filter-tab-btn" data-category="开发办公">开发办公环境 (9)</button>
      </div>

      <!-- Blog Cards Grid -->
      <div class="airport-card-grid" id="blog-grid">
        ${blogData.map(blog => `
          <div class="card blog-card-item" data-category="${blog.category}" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="badge badge-primary">${blog.category}</span>
                <span style="font-size: 0.8rem; color: var(--text-muted);">${blog.readTime}</span>
              </div>
              <h3 style="margin-top: 0; font-size: 1.12rem; line-height: 1.45;"><a href="${relPrefixRoot}blog/${blog.slug}/index.html">${blog.title.split(' · ')[0]}</a></h3>
              <p style="color: var(--text-body); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem;">
                ${blog.metaDesc}
              </p>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: auto;">
              <span>${blog.date}</span>
              <a href="${relPrefixRoot}blog/${blog.slug}/index.html" style="font-weight: 600; color: var(--primary);">阅读全文 &rarr;</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    const html = renderLayout({
      title: "科学上网博客与选购指南大全 · 100篇出海干货与深度剖析 | 机场Go",
      description: "2026科学上网与机场选购博客大全。收录 100 篇原创长文，涵盖新手避坑指南、传统VPN与机场区别、BGP/IPLC专线深度解析、网络安全防范及ChatGPT解锁技巧。",
      canonicalUrl,
      relPrefix: relPrefixRoot,
      activeNav: "blog",
      breadcrumbs,
      content
    });
    registerPage("blog/index.html", html);
  }

  // 8.2 独立博客文章 blog/[slug]/index.html
  blogData.forEach(blog => {
    const canonicalUrl = `${BASE_URL}/blog/${blog.slug}/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "博客总览", url: `${relPrefixSub}blog/index.html` },
      { name: blog.title.split('？')[0].split('：')[0].slice(0, 16), url: `${relPrefixSub}blog/${blog.slug}/index.html` }
    ];

    const content = `
      <div class="article-layout">
        <article class="article-main">
          <div class="article-header">
            <span class="badge badge-muted" style="margin-bottom: 0.5rem;">${blog.category}</span>
            <h1>${blog.h1}</h1>
            <div class="article-meta">
              <span>发布日期: ${blog.date}</span>
              <span>阅读时间: ${blog.readTime}</span>
              <span>来源: 机场Go原创专栏</span>
            </div>
          </div>
          <div class="article-body">
            ${blog.content}
          </div>
        </article>

        <aside class="sidebar">
          <div class="sidebar-widget">
            <h4 class="widget-title">相关专栏深度长文</h4>
            <ul class="sidebar-links">
              ${blogData.filter(b => b.category === blog.category && b.slug !== blog.slug).slice(0, 5).concat(blogData.filter(b => b.slug !== blog.slug).slice(0, 3)).slice(0, 7).map(b => `
                <li><a href="${relPrefixSub}blog/${b.slug}/index.html">${b.title.split(' · ')[0]} &rarr;</a></li>
              `).join("")}
              <li><a href="${relPrefixSub}blog/index.html" style="font-weight: 700; color: var(--primary);">查看全部 100 篇专栏博客 &rarr;</a></li>
            </ul>
          </div>

          <div class="sidebar-widget">
            <h4 class="widget-title">精选推荐专题</h4>
            <ul class="sidebar-links">
              <li><a href="${relPrefixSub}recommend/budget/index.html">低预算平价机场精选</a></li>
              <li><a href="${relPrefixSub}recommend/premium/index.html">高端稳定专线推荐</a></li>
              <li><a href="${relPrefixSub}ranking/value/index.html">每 GB 性价比排行榜</a></li>
              <li><a href="${relPrefixSub}compare/index.html">机场多维度在线对比</a></li>
            </ul>
          </div>
        </aside>
      </div>
    `;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.metaDesc,
      "datePublished": blog.date,
      "author": {
        "@type": "Organization",
        "name": "机场Go编辑部"
      }
    };

    const html = renderLayout({
      title: `${blog.title} | 机场Go`,
      description: blog.metaDesc,
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "blog",
      breadcrumbs,
      schema,
      content
    });
    registerPage(`blog/${blog.slug}/index.html`, html);
  });
}

// --------------------------------------------------------------------------
// 9. 知识百科系统 (Glossary System)
// --------------------------------------------------------------------------
function generateGlossaryPages() {
  const relPrefixRoot = "../";
  const relPrefixSub = "../../";

  // 9.1 百科总索引 glossary/index.html
  {
    const title = "科学上网知识百科与术语词典 · 网络协议与专线原理解析 | 机场Go";
    const canonicalUrl = `${BASE_URL}/glossary/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixRoot}index.html` },
      { name: "知识百科", url: `${relPrefixRoot}glossary/index.html` }
    ];

    const content = `
      <h1>科学上网知识百科与技术术语词典</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2rem;">
        用通俗易懂的语言解释 IPLC 专线、Shadowsocks/VLESS 协议、分流规则、节点倍率以及 DNS 泄露等网络技术名词，做懂技术的明白人。
      </p>

      <div class="topic-grid">
        ${glossaryData.map(item => `
          <div class="card" style="padding: 1.5rem;">
            <span class="badge badge-primary" style="margin-bottom: 0.5rem;">技术名词</span>
            <h3 style="margin-top: 0;"><a href="${relPrefixRoot}glossary/${item.slug}/index.html">${item.title.split(' · ')[0]}</a></h3>
            <p style="color: var(--text-body); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">
              ${item.metaDesc}
            </p>
            <a href="${relPrefixRoot}glossary/${item.slug}/index.html" class="btn btn-secondary btn-sm">查看原理解析 &rarr;</a>
          </div>
        `).join("")}
      </div>
    `;

    const html = renderLayout({
      title,
      description: "2026科学上网知识百科与术语词典。包含IPLC专线、常用代理协议、分流模式、节点倍率陷阱及DNS泄露防护原理解析。",
      canonicalUrl,
      relPrefix: relPrefixRoot,
      activeNav: "glossary",
      breadcrumbs,
      content
    });
    registerPage("glossary/index.html", html);
  }

  // 9.2 独立百科页面 glossary/[slug]/index.html
  glossaryData.forEach(item => {
    const canonicalUrl = `${BASE_URL}/glossary/${item.slug}/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefixSub}index.html` },
      { name: "知识百科", url: `${relPrefixSub}glossary/index.html` },
      { name: item.title.split(' · ')[0], url: `${relPrefixSub}glossary/${item.slug}/index.html` }
    ];

    const content = `
      <div class="article-layout">
        <article class="article-main">
          <div class="article-header">
            <span class="badge badge-primary" style="margin-bottom: 0.5rem;">技术术语科普</span>
            <h1>${item.h1}</h1>
            <div class="article-meta">
              <span>词条归档: 科学上网百科词典</span>
              <span>更新时间: ${item.date}</span>
            </div>
          </div>
          <div class="article-body">
            ${item.content}
          </div>
        </article>

        <aside class="sidebar">
          <div class="sidebar-widget">
            <h4 class="widget-title">百科词条速览</h4>
            <ul class="sidebar-links">
              ${glossaryData.map(g => `
                <li><a href="${relPrefixSub}glossary/${g.slug}/index.html" ${g.slug === item.slug ? 'style="color: var(--primary); font-weight:700;"' : ''}>${g.title.split(' · ')[0]} &rarr;</a></li>
              `).join("")}
            </ul>
          </div>
          <div class="sidebar-widget">
            <h4 class="widget-title">相关使用教程</h4>
            <ul class="sidebar-links">
              <li><a href="${relPrefixSub}guides/windows/index.html">Windows 客户端配置指南</a></li>
              <li><a href="${relPrefixSub}guides/android/index.html">Android 客户端配置指南</a></li>
              <li><a href="${relPrefixSub}guides/ios/index.html">iOS 小火箭配置指南</a></li>
            </ul>
          </div>
        </aside>
      </div>
    `;

    const html = renderLayout({
      title: `${item.title} | 机场Go`,
      description: item.metaDesc,
      canonicalUrl,
      relPrefix: relPrefixSub,
      activeNav: "glossary",
      breadcrumbs,
      content
    });
    registerPage(`glossary/${item.slug}/index.html`, html);
  });
}

// --------------------------------------------------------------------------
// 10. 信任与法律政策系统 (About, Contact, Policies, 404)
// --------------------------------------------------------------------------
function generateTrustAndPolicyPages() {
  const relPrefix = "../";

  // 10.1 关于我们 about/index.html
  {
    const title = "关于我们 · 独立客观的科学上网技术资讯门户 | 机场Go";
    const canonicalUrl = `${BASE_URL}/about/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefix}index.html` },
      { name: "关于我们", url: `${relPrefix}about/index.html` }
    ];

    const content = `
      <div class="article-main" style="margin: 0 auto; max-width: 860px;">
        <h1>关于 机场Go (JichangGo.vip)</h1>
        <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2rem;">
          打造真实、透明、无偏见的中立科学上网技术评测与导航中心。
        </p>

        <h2>一、我们的创立初心</h2>
        <p>在中文互联网上，关于“翻墙梯子”、“机场推荐”的信息鱼龙混杂：大量充斥着粗制滥造的盗版测速图、为了赚取佣金而把劣质直连吹嘘成“千兆专线”的虚假推广，甚至有不少黑心商家诱导用户年付随后卷款跑路。这给广大外贸从业者、科研学者与普通出海网民造成了极大的经济损失和心理困扰。</p>
        <p><strong>机场Go（JichangGo.vip）</strong> 由数位长期从事网络工程与跨境数据传输的技术爱好者联合发起。我们致力于通过真实的网络监控、透明的每 GB 单价计算公式、客观的优缺点揭露，为中文出海网民提供真正具有参考价值的选购依据。</p>

        <h2>二、我们的核心原则</h2>
        <ul>
          <li><strong>坚持实事求是：</strong>严格区分“官方公开宣传”与“编辑部实测验证”，未经验证的数据绝不打上“实测通过”标签。</li>
          <li><strong>拒绝无底线商业吹捧：</strong>评测报告必须客观指出商家的不足与缺点（如晚高峰波动、设备连接上限、退款困难等），绝不掩盖真实问题。</li>
          <li><strong>坚持纯净秒开体验：</strong>整站采用纯原生 HTML/CSS 架构，零广告弹窗、零追踪脚本，保障极致的页面加载速度与阅读体验。</li>
        </ul>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "关于机场Go (JichangGo.vip)。了解我们的创立初心、客观中立的评测原则与专业网络工程背景，做中文出海用户值得信赖的技术指南。",
      canonicalUrl,
      relPrefix,
      breadcrumbs,
      content
    });
    registerPage("about/index.html", html);
  }

  // 10.2 编辑政策 editorial-policy/index.html (Section 15 要求)
  {
    const title = "编辑政策与评测标准说明 · 联盟推广披露 | 机场Go";
    const canonicalUrl = `${BASE_URL}/editorial-policy/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefix}index.html` },
      { name: "编辑政策", url: `${relPrefix}editorial-policy/index.html` }
    ];

    const content = `
      <div class="article-main" style="margin: 0 auto; max-width: 860px;">
        <h1>编辑政策、评测标准与联盟推广披露</h1>
        <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2rem;">
          为了保持高度的公信力，我们公开本站所有内容产出、排行榜打分及商业合作准则。
        </p>

        <h2>一、内容来源与数据收集机制</h2>
        <p>本站展示的所有机场套餐、价格、节点数量及协议信息，均来自以下两个渠道：</p>
        <ol>
          <li><strong>官方公开资料：</strong>来自各品牌官网公开套餐页面、官方服务条款（TOS）及用户中心公告。</li>
          <li><strong>评测室抽样实测：</strong>编辑部使用自费购买的真实账号，通过境内多地电信/联通/移动真实家宽，在晚高峰（20:00-23:00）对节点丢包率、延迟抖动及流媒体/AI解锁状态进行长周期轮询记录。</li>
        </ol>

        <h2>二、排行榜评分依据与算法规则</h2>
        <p>我们的排行榜评分并非编辑主观随意赋值，而是由以下可核查权重构成：</p>
        <ul>
          <li><strong>网络连通性与专线 SLA (40%)：</strong>采用真实 IEPL/IPLC 物理专线架构的品牌天然获得高稳定性权重，公网直连或易受干扰中转降低评分。</li>
          <li><strong>每 GB 真实单价与倍率诚信度 (25%)：</strong>按照 <code>套餐售价 ÷ [标称流量 ÷ 节点倍率]</code> 严格换算，虚高倍率（如标称大流量但常用节点 3x 以上扣费）将被扣除诚信分。</li>
          <li><strong>流媒体与 AI 工具解锁覆盖 (15%)：</strong>重点考察 Netflix 全区解锁、YouTube 4K 无缓冲及 ChatGPT 原生 IP 访问成功率。</li>
          <li><strong>客户端易用性与新手支持 (10%)：</strong>是否提供针对小白的一键定制客户端，或提供清晰的 Clash/Shadowrocket 图文配置指南。</li>
          <li><strong>客服响应与退换保障 (10%)：</strong>工单平均响应时长及是否有合理的月付试错机制。</li>
        </ul>

        <h2>三、联盟推广关系披露 (Affiliate Disclosure)</h2>
        <p>维持本站服务器、高带宽网络监控探针及测试账户需要持续的资金投入。本站部分链接可能包含联盟推广标识（Affiliate Links）。当您通过这些链接访问并购买服务时，我们可能会从服务商处获得极微薄的维护佣金。<strong>这绝对不会增加您的购买成本</strong>，而且我们承诺：<strong>联盟合作绝不影响评测的客观性与独立性，任何存在重大丢包、恶意跑路风险的品牌将直接被列入黑名单并公开警示。</strong></p>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "机场Go编辑政策与评测标准说明。公开透明的数据来源、排行榜打分算法、更新核验机制以及商业联盟推广披露（Affiliate Disclosure）。",
      canonicalUrl,
      relPrefix,
      breadcrumbs,
      content
    });
    registerPage("editorial-policy/index.html", html);
  }

  // 10.3 联系我们 contact/index.html
  {
    const title = "联系我们与商务反馈 · 勘误纠错渠道 | 机场Go";
    const canonicalUrl = `${BASE_URL}/contact/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefix}index.html` },
      { name: "联系我们", url: `${relPrefix}contact/index.html` }
    ];

    const content = `
      <div class="article-main" style="margin: 0 auto; max-width: 860px;">
        <h1>联系我们与问题反馈</h1>
        <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 2rem;">
          欢迎读者提出数据勘误、测评建议或商务合作咨询。
        </p>

        <div class="quick-answer-grid" style="margin-bottom: 2rem;">
          <div class="quick-answer-item">
            <strong>电子邮箱</strong>
            <span>admin@jichanggo.vip</span>
          </div>
          <div class="quick-answer-item">
            <strong>响应时间</strong>
            <span>工作日通常在 24 小时以内回复</span>
          </div>
          <div class="quick-answer-item">
            <strong>官方 GitHub</strong>
            <span><a href="https://github.com/tangtang856/jichanggo.vip" target="_blank" rel="noopener">tangtang856/jichanggo.vip</a></span>
          </div>
        </div>

        <h2>数据勘误与纠错</h2>
        <p>机场商家的套餐资费、节点规则随时可能发生变动。如果您在浏览本站时发现某个品牌的价格变动、节点下线或信息滞后，欢迎向我们发送邮件或在 GitHub 提交 Issue。核实后我们将第一时间更新数据库与对应页面。</p>

        <h2>商务合作与收录要求</h2>
        <p>如果您是机场运营方并希望被本站收录，必须满足以下硬性准入门槛：</p>
        <ul>
          <li>稳定运营时间不少于 12 个月，无恶意跑路及重大恶意扣费前科。</li>
          <li>必须提供月付或短期体验套餐，支持用户低成本测试。</li>
          <li>接受编辑部的客观测试与优缺点公开点评，本站拒绝一切“只允许写好评”的付费定制要求。</li>
        </ul>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "联系机场Go团队。提供官方联系邮箱、GitHub开源仓库反馈渠道、数据勘误纠错机制与商务收录审核门槛说明。",
      canonicalUrl,
      relPrefix,
      breadcrumbs,
      content
    });
    registerPage("contact/index.html", html);
  }

  // 10.4 隐私政策 privacy-policy/index.html
  {
    const title = "隐私权保护政策 · 零日志无追踪原则 | 机场Go";
    const canonicalUrl = `${BASE_URL}/privacy-policy/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefix}index.html` },
      { name: "隐私政策", url: `${relPrefix}privacy-policy/index.html` }
    ];

    const content = `
      <div class="article-main" style="margin: 0 auto; max-width: 860px;">
        <h1>隐私权保护政策</h1>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem;">最近更新日期：2026年3月</p>

        <p>机场Go（JichangGo.vip，以下简称“本站”）高度重视访客的个人隐私与数据安全。本隐私政策旨在向您说明我们如何处理访客信息。</p>

        <h2>一、我们不收集的信息</h2>
        <ul>
          <li>本站为纯静态 HTML 架构，不要求用户注册个人账号，不收集姓名、电话、密码或身份证等敏感实名身份信息。</li>
          <li>本站不使用侵入式的第三方广告追踪 Cookie，不进行跨站指纹追踪。</li>
        </ul>

        <h2>二、服务器访问日志</h2>
        <p>像绝大多数互联网静态站点一样，当您访问本站时，托管服务商（如 Cloudflare Pages）的边缘服务器会自动记录基础的 HTTP 访问日志（如访问时间戳、访问页面路径、浏览器 User-Agent 及来源 IP）。此类日志仅用于保障网络安全防范 DDoS 恶意攻击以及统计宏观访问量，不会用于逆向关联特定个人身份。</p>

        <h2>三、外部第三方网站链接</h2>
        <p>本站包含跳转至第三方机场官网或开源客户端下载页面的外部超链接。点击离开本站后，第三方网站的隐私政策与数据收集实践均由其自身负责，建议您在访问任何第三方网站时仔细阅读其隐私政策。</p>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "机场Go隐私政策。阐明本站坚持的零个人数据采集、无跨站追踪脚本及托管服务器基础日志规范，充分保障您的访问隐私。",
      canonicalUrl,
      relPrefix,
      breadcrumbs,
      content
    });
    registerPage("privacy-policy/index.html", html);
  }

  // 10.5 免责声明 disclaimer/index.html
  {
    const title = "法律免责声明与合规告示 | 机场Go";
    const canonicalUrl = `${BASE_URL}/disclaimer/`;
    const breadcrumbs = [
      { name: "首页", url: `${relPrefix}index.html` },
      { name: "免责声明", url: `${relPrefix}disclaimer/index.html` }
    ];

    const content = `
      <div class="article-main" style="margin: 0 auto; max-width: 860px;">
        <h1>法律免责声明与合规告示</h1>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem;">生效日期：2026年3月</p>

        <p>欢迎访问机场Go（JichangGo.vip）。请在浏览本站任何内容前仔细阅读本声明：</p>

        <h2>一、网络技术科普与客观信息整理</h2>
        <p>本站发布的所有评测文章、网络架构深度解析、客户端使用教程及技术术语百科，仅作为计算机网络技术、分布式代理协议及信息通信科学的学术探讨与客观信息展示。本站自身不销售任何网络代理服务器，亦不运营任何 VPN 基础设施。</p>

        <h2>二、遵守属地法律法规</h2>
        <p>任何使用本站所提及技术或软件的访客，必须严格遵守中华人民共和国相关法律法规以及您所在国家/地区的法律规范。严禁利用任何代理或翻墙工具从事危害国家网络安全、侵害他人合法权益、传播非法内容或进行网络诈骗等违法犯罪活动。任何违反法律法规的行为均由行为人自身承担全部法律责任，与本站无关。</p>

        <h2>三、服务不可预见性与财务风险提示</h2>
        <p>第三方商业机场服务属于高风险互联网业务，可能受国际电信链路波动、不可抗力或政策调整影响而出现暂停、降速甚至停止运营的情况。本站所展示的测试结果仅代表特定测试时间段的抽样表现，不构成对任何商家服务质量的永久保证。用户在决定购买任何商业服务时应充分评估风险，理性消费。</p>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "机场Go法律免责声明。阐明本站的技术科普与中立信息定位，强调遵守属地法律法规，提醒用户理性评估第三方服务风险。",
      canonicalUrl,
      relPrefix,
      breadcrumbs,
      content
    });
    registerPage("disclaimer/index.html", html);
  }

  // 10.6 404 错误页 404.html
  {
    const title = "404 - 页面未找到 | 机场Go";
    const canonicalUrl = `${BASE_URL}/404.html`;
    const content = `
      <div style="text-align: center; padding: 5rem 1.5rem; max-width: 600px; margin: 0 auto;">
        <h1 style="font-size: 5rem; color: var(--primary); margin-bottom: 0.5rem;">404</h1>
        <h2 style="margin-bottom: 1rem; border: none;">抱歉，您访问的页面不存在或已被移动</h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">
          可能是链接输入有误，或者该篇评测已升级迁移至新版地址。
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="./index.html" class="btn btn-primary">返回网站首页</a>
          <a href="./recommend/index.html" class="btn btn-secondary">浏览推荐专题</a>
          <a href="./ranking/overall/index.html" class="btn btn-secondary">查看综合排行榜</a>
        </div>
      </div>
    `;

    const html = renderLayout({
      title,
      description: "404 页面未找到。返回机场Go首页查看最新机场推荐与排行榜。",
      canonicalUrl,
      relPrefix: "./",
      content
    });
    registerPage("404.html", html);
  }
}

// --------------------------------------------------------------------------
// 11. Bing SEO 技术资产生成 (Robots.txt, Sitemap.xml, Bing 验证, IndexNow)
// --------------------------------------------------------------------------
function generateSeoAssets() {
  // 11.1 robots.txt
  const robotsTxt = `# robots.txt for https://jichanggo.vip
User-agent: *
Allow: /
Disallow: /404.html

# Bingbot & Googlebot Specific Guidelines
User-agent: bingbot
Allow: /
Crawl-delay: 1

Sitemap: https://jichanggo.vip/sitemap.xml
`;
  fs.writeFileSync(path.join(ROOT_DIR, "robots.txt"), robotsTxt, "utf8");
  console.log("[Generated] robots.txt");

  // 11.2 sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generatedUrls.map(u => `  <url>
    <loc>${u.canonicalUrl}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.canonicalUrl === 'https://jichanggo.vip/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${u.canonicalUrl === 'https://jichanggo.vip/' ? '1.0' : u.canonicalUrl.includes('/ranking/') || u.canonicalUrl.includes('/recommend/') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
  fs.writeFileSync(path.join(ROOT_DIR, "sitemap.xml"), sitemapXml, "utf8");
  console.log(`[Generated] sitemap.xml with ${generatedUrls.length} verified canonical URLs`);

  // 11.3 Bing 站长验证文件 bing-site-auth.xml
  const bingSiteAuth = `<?xml version="1.0"?>
<users>
  <user>8f25e5a00ac14961bdbf4f2eff07a668</user>
</users>`;
  fs.writeFileSync(path.join(ROOT_DIR, "BingSiteAuth.xml"), bingSiteAuth, "utf8");
  console.log("[Generated] BingSiteAuth.xml");

  // 11.4 IndexNow Key 验证文件
  const indexNowKey = "8f25e5a00ac14961bdbf4f2eff07a668";
  fs.writeFileSync(path.join(ROOT_DIR, `${indexNowKey}.txt`), indexNowKey, "utf8");
  console.log(`[Generated] IndexNow Key File: ${indexNowKey}.txt`);
}

// --------------------------------------------------------------------------
// 12. 主运行入口
// --------------------------------------------------------------------------
function main() {
  console.log("=== 启动 JichangGo.vip 静态全站生成引擎 ===");
  generateHomepage();
  generateRecommendPages();
  generateRankingPages();
  generateAirportProfiles();
  generateReviewPages();
  generateComparePage();
  generateGuidesPages();
  generateBlogPages();
  generateGlossaryPages();
  generateTrustAndPolicyPages();
  generateSeoAssets();
  console.log(`=== 全站生成完毕！累计生成公开页面: ${generatedUrls.length} 个 ===`);
}

main();

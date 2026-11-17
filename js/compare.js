// js/compare.js - 机场横向多维度在线比对引擎（纯原生 JS，零重型依赖）
(function () {
  // 数据源（保持与 src/data/airports.js 完全一致）
  const airportsData = [
    {
      id: "tag-vpn",
      name: "TAG VPN",
      slug: "tag-vpn",
      startingPrice: 53.3,
      billingUnit: "月 (季付折算)",
      trafficRange: "250GB - 3000GB",
      unitPricePerGB: "0.33 - 0.64 元/GB",
      lineType: "全 IEPL 内网专线",
      nodeCount: "160+ (全球100+国家地区)",
      protocols: "Shadowsocks, Trojan",
      deviceLimit: "不限制在线设备",
      aiSupport: "全绿解锁 (ChatGPT / Claude / API)",
      streamingSupport: "全区解锁 (Netflix, Disney+, YouTube 4K/8K)",
      advantages: "全球100+国家覆盖行业第一；全IEPL专线极度抗封锁；不限客户端设备数量",
      disadvantages: "最低需季付开通；对仅需港美日轻度浏览用户价格稍偏高",
      suitableFor: "外贸电商、跨国业务团队、小众国家IP需求、多设备重度用户",
      status: "实测已核验"
    },
    {
      id: "flyingbird",
      name: "FlyingBird 飞鸟云",
      slug: "flyingbird",
      startingPrice: 15.0,
      billingUnit: "月",
      trafficRange: "100GB - 4000GB",
      unitPricePerGB: "0.08 - 0.15 元/GB",
      lineType: "BGP 隧道中转 + IEPL 专线",
      nodeCount: "80+ (亚太及欧美主流)",
      protocols: "Shadowsocks, Vmess, Trojan",
      deviceLimit: "3 - 8 台",
      aiSupport: "深度优化 (ChatGPT, Claude, Gemini)",
      streamingSupport: "全解锁 (Netflix, Disney+, YouTube Premium)",
      advantages: "支持15元极低门槛月付；流媒体4K秒开优化极佳；三网入口智能调度",
      disadvantages: "限制同时在线设备数；缺少亚非拉极小众冷门节点",
      suitableFor: "流媒体4K追剧、日常办公学习、需要低门槛月付的新手",
      status: "实测已核验"
    },
    {
      id: "kuromis",
      name: "Kuromis 库洛米",
      slug: "kuromis",
      startingPrice: 38.0,
      billingUnit: "月",
      trafficRange: "150GB - 4500GB",
      unitPricePerGB: "0.147 - 0.253 元/GB",
      lineType: "金融级 IEPL 内网专线",
      nodeCount: "60+ (旗舰专线节点)",
      protocols: "Shadowsocks, Trojan, VLESS",
      deviceLimit: "4 - 8 台",
      aiSupport: "原生住宅IP (ChatGPT Plus, Claude 3.5, Cursor)",
      streamingSupport: "全区解锁 (Netflix, Disney+, 8K视频无缓冲)",
      advantages: "金融级专线延迟与抖动极低；纯净原生IP不易触发人机风控；诚实1:1倍率",
      disadvantages: "单价相对偏高；仅专注主流发达国家地区节点",
      suitableFor: "AI 开发者、外贸高风控电商、游戏联机、追求极致稳定群体",
      status: "实测已核验"
    },
    {
      id: "westdata",
      name: "WestData 西部数据",
      slug: "westdata",
      startingPrice: 9.9,
      billingUnit: "月",
      trafficRange: "120GB - 500GB (含不限时)",
      unitPricePerGB: "0.056 - 0.136 元/GB",
      lineType: "公网优质中转 + 直连优化",
      nodeCount: "45+ (核心亚太美西)",
      protocols: "Shadowsocks, Vmess",
      deviceLimit: "2 - 4 台",
      aiSupport: "部分节点可用 (需自测可用性)",
      streamingSupport: "基础解锁 (YouTube 4K, 港台奈飞)",
      advantages: "单价低至9.9元/月；提供不限时一次性计费备用套餐；流量给得非常慷慨",
      disadvantages: "晚高峰偶有波动；对严苛风控的AI工具需要挑选节点",
      suitableFor: "预算有限学生党、备用梯子方案、轻度查资料与查代码用户",
      status: "官方公开资料"
    },
    {
      id: "fastlink",
      name: "FastLink 闪电云",
      slug: "fastlink",
      startingPrice: 20.0,
      billingUnit: "月",
      trafficRange: "150GB - 2200GB",
      unitPricePerGB: "0.09 - 0.133 元/GB",
      lineType: "高速混合专线 + 智能多路容灾",
      nodeCount: "70+ (覆盖亚太美欧)",
      protocols: "SS, Trojan, Vmess, 专属定制协议",
      deviceLimit: "3 - 6 台",
      aiSupport: "全面支持 (ChatGPT, Claude, Copilot)",
      streamingSupport: "主流解锁 (Netflix, Disney+, TikTok)",
      advantages: "自带全平台一键式定制客户端免配置；故障自动无感切换；新手客服响应好",
      disadvantages: "客户端功能偏向极简，缺乏深度分流自定义；比纯节点机场稍有软件溢价",
      suitableFor: "电脑手机操作小白、零基础用户、不想折腾配置规则的办公族",
      status: "实测已核验"
    }
  ];

  // 默认选中前两家
  let selectedIds = ["tag-vpn", "flyingbird", "kuromis"];

  function renderCheckboxes() {
    const container = document.getElementById("compare-checkboxes");
    if (!container) return;

    container.innerHTML = airportsData.map(airport => {
      const isChecked = selectedIds.includes(airport.id) ? "checked" : "";
      return `
        <label class="compare-label">
          <input type="checkbox" value="${airport.id}" ${isChecked} data-airport-id="${airport.id}">
          <span>${airport.name}</span>
        </label>
      `;
    }).join("");

    container.querySelectorAll('input[type="checkbox"]').forEach(input => {
      input.addEventListener("change", function () {
        const id = this.value;
        if (this.checked) {
          if (selectedIds.length >= 4) {
            alert("为保证表格可读性，最多同时支持比对 4 家机场。请先取消勾选其他品牌。");
            this.checked = false;
            return;
          }
          selectedIds.push(id);
        } else {
          if (selectedIds.length <= 1) {
            alert("请至少保留 1 家机场进行查看。");
            this.checked = true;
            return;
          }
          selectedIds = selectedIds.filter(item => item !== id);
        }
        renderTable();
      });
    });
  }

  function renderTable() {
    const tableContainer = document.getElementById("compare-table-container");
    if (!tableContainer) return;

    const activeAirports = airportsData.filter(a => selectedIds.includes(a.id));

    if (activeAirports.length === 0) {
      tableContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem; background: #fff; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <p style="color: var(--text-muted); font-size: 1.1rem;">请在上方勾选至少 2 家机场进行横向对比。</p>
        </div>
      `;
      return;
    }

    // 表头
    let html = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="min-width: 140px;">比对维度</th>
              ${activeAirports.map(a => `
                <th style="min-width: 220px;">
                  <div style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.25rem;">${a.name}</div>
                  <span class="badge ${a.status === '实测已核验' ? 'badge-success' : 'badge-warning'}">${a.status}</span>
                </th>
              `).join("")}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>起步价格</strong></td>
              ${activeAirports.map(a => `<td><strong style="color: var(--primary); font-size: 1.1rem;">￥${a.startingPrice}</strong> / ${a.billingUnit}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>套餐流量范围</strong></td>
              ${activeAirports.map(a => `<td>${a.trafficRange}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>每 GB 真实单价</strong></td>
              ${activeAirports.map(a => `<td><span class="badge badge-primary">${a.unitPricePerGB}</span></td>`).join("")}
            </tr>
            <tr>
              <td><strong>线路架构类型</strong></td>
              ${activeAirports.map(a => `<td><strong>${a.lineType}</strong></td>`).join("")}
            </tr>
            <tr>
              <td><strong>节点数量与覆盖</strong></td>
              ${activeAirports.map(a => `<td>${a.nodeCount}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>支持代理协议</strong></td>
              ${activeAirports.map(a => `<td>${a.protocols}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>在线设备连接限制</strong></td>
              ${activeAirports.map(a => `<td>${a.deviceLimit}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>AI (ChatGPT/Claude)</strong></td>
              ${activeAirports.map(a => `<td>${a.aiSupport}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>流媒体 4K/8K 解锁</strong></td>
              ${activeAirports.map(a => `<td>${a.streamingSupport}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>核心优势</strong></td>
              ${activeAirports.map(a => `<td style="color: #065f46; font-size: 0.9rem;">${a.advantages}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>购买前注意</strong></td>
              ${activeAirports.map(a => `<td style="color: #991b1b; font-size: 0.9rem;">${a.disadvantages}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>最适合人群</strong></td>
              ${activeAirports.map(a => `<td>${a.suitableFor}</td>`).join("")}
            </tr>
            <tr>
              <td><strong>独立评测与档案</strong></td>
              ${activeAirports.map(a => `
                <td>
                  <a href="../review/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="margin-right: 0.5rem;">深度评测</a>
                  <a href="../airport/${a.slug}/index.html" class="btn btn-primary btn-sm">规格档案</a>
                </td>
              `).join("")}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    tableContainer.innerHTML = html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderCheckboxes();
    renderTable();
  });
})();

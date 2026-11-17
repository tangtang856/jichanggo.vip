// js/compare.js - 机场横向多维度在线比对引擎（纯原生 JS，支持 14 家精选品牌）
(function () {
  // 数据源（保持与 src/data/airports.js 完全一致）
  const airportsData = [
    {
      id: "yinxingren",
      name: "隐形人",
      slug: "yinxingren",
      startingPrice: 24,
      billingUnit: "月",
      trafficRange: "144GB - 1800GB",
      unitPricePerGB: "0.133 - 0.167 元/GB",
      lineType: "IEPL纯专线",
      nodeCount: "70+ (亚太美欧核心)",
      protocols: "Shadowsocks, Trojan, VLESS",
      deviceLimit: "4 - 8 台",
      aiSupport: "深度解锁 (ChatGPT, Claude 3.5, API)",
      streamingSupport: "全区秒开 (Netflix, Disney+, YouTube 4K/8K)",
      advantages: "IEPL纯专线硬件保障无视晚高峰；标配144GB起步流量；专属券yxr888立减",
      disadvantages: "起步资费24元/月；缺少极冷门国家节点",
      suitableFor: "跨境电商团队、ChatGPT重度用户、晚高峰高要求影音爱好者",
      status: "实测已核验",
      aff: "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
      coupon: "yxr888"
    },
    {
      id: "breezenet",
      name: "微风网络 Breezenet",
      slug: "breezenet",
      startingPrice: 8,
      billingUnit: "月",
      trafficRange: "200GB - 2500GB",
      unitPricePerGB: "0.035 - 0.04 元/GB",
      lineType: "IEPL/IPLC专线",
      nodeCount: "80+ (亚太美欧主流)",
      protocols: "Shadowsocks, VLESS, Trojan",
      deviceLimit: "3 - 5 台",
      aiSupport: "全绿支持 (ChatGPT, Claude, Gemini)",
      streamingSupport: "流畅解锁 (Netflix, Disney+, YouTube 4K)",
      advantages: "¥8/月超低起步价配200GB充沛流量；单GB仅0.04元；IEPL/IPLC主干",
      disadvantages: "促销高峰期偶尔排队；设备数限3-5台",
      suitableFor: "新手小白入门第一站、日常高清流媒体与AI重度使用者、学生党",
      status: "实测已核验",
      aff: "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
      coupon: "weifeng90"
    },
    {
      id: "flashleap",
      name: "闪跃 FlashLeap",
      slug: "flashleap",
      startingPrice: 24,
      billingUnit: "月",
      trafficRange: "150GB",
      unitPricePerGB: "0.16 元/GB",
      lineType: "IPLC纯专线",
      nodeCount: "60+ (低延迟节点群)",
      protocols: "Shadowsocks, Trojan, VLESS",
      deviceLimit: "4 - 6 台",
      aiSupport: "原生支持 (ChatGPT, Claude, Cursor)",
      streamingSupport: "全区解锁 (Netflix, Disney+, YouTube 4K/8K)",
      advantages: "IPLC纯内网传输延迟极低丢包率<0.1%；专为外服联机优化；专属券shanyue",
      disadvantages: "起步门槛24元；暂无微量体验包",
      suitableFor: "外服联机游戏玩家、跨国视频会议、对晚高峰极度敏感者",
      status: "实测已核验",
      aff: "https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3",
      coupon: "shanyue"
    },
    {
      id: "wavenet",
      name: "浪网 WaveNet",
      slug: "wavenet",
      startingPrice: 30,
      billingUnit: "月",
      trafficRange: "150GB",
      unitPricePerGB: "0.2 元/GB",
      lineType: "自研客户端优化线路",
      nodeCount: "65+ (高带宽集群)",
      protocols: "Shadowsocks, Trojan, 自研协议",
      deviceLimit: "5 台",
      aiSupport: "主流支持 (ChatGPT, Claude, Gemini)",
      streamingSupport: "高码率秒开 (Netflix, Disney+, YouTube 4K)",
      advantages: "自带专用自研客户端免配置；高码率4K视频无缓冲；智能负载均衡",
      disadvantages: "30元/月门槛略高；高级规则自定义偏简",
      suitableFor: "高码率视频与重度网络使用群体、追求高品质自研线路者",
      status: "实测已核验",
      aff: "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy"
    },
    {
      id: "muguang",
      name: "暮光网络",
      slug: "muguang",
      startingPrice: 20,
      billingUnit: "月",
      trafficRange: "120GB",
      unitPricePerGB: "0.167 元/GB",
      lineType: "专线节点",
      nodeCount: "55+ (覆盖亚太欧美)",
      protocols: "Shadowsocks, VLESS, Trojan",
      deviceLimit: "3 - 5 台",
      aiSupport: "稳定支持 (ChatGPT, Claude, Copilot)",
      streamingSupport: "全天候解锁 (Netflix 4K, Disney+, YouTube 4K)",
      advantages: "专线节点架构晚高峰平稳；120GB起步配额充足；全面支持VLESS协议",
      disadvantages: "暂无15元以下超小包；缺少极小众国家",
      suitableFor: "学生党与大流量用户、YouTube 4K日常播放、家庭办公",
      status: "实测已核验",
      aff: "https://varnexa.twilightaff.com/#/?code=8EtJCnBT"
    },
    {
      id: "feimaoyun",
      name: "飞猫云",
      slug: "feimaoyun",
      startingPrice: 7,
      billingUnit: "月 (折算)",
      trafficRange: "150GB",
      unitPricePerGB: "0.047 元/GB",
      lineType: "IEPL/IPLC / 优质中转线路",
      nodeCount: "60+ (主流热门)",
      protocols: "Shadowsocks, Vmess, Trojan",
      deviceLimit: "3 - 5 台",
      aiSupport: "支持常用 (ChatGPT, Claude)",
      streamingSupport: "主流解锁 (Netflix, Disney+, YouTube 4K)",
      advantages: "年付折算仅约¥7/月配150GB流量；专线与优质中转结合；专属券flycat888",
      disadvantages: "极低单价需年付体现；晚高峰少数节点偶有波动",
      suitableFor: "预算有限的学生党、精打细算者、日常高清看剧与新手",
      status: "实测已核验",
      aff: "https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx",
      coupon: "flycat888"
    },
    {
      id: "lingmao",
      name: "灵猫",
      slug: "lingmao",
      startingPrice: 25,
      billingUnit: "月",
      trafficRange: "150GB",
      unitPricePerGB: "0.167 元/GB",
      lineType: "IPLC",
      nodeCount: "50+ (亚太专精)",
      protocols: "Shadowsocks, Trojan",
      deviceLimit: "4 台",
      aiSupport: "良好支持 (ChatGPT, Claude, Midjourney)",
      streamingSupport: "全区解锁 (Netflix 全区, Disney+, 8K视频)",
      advantages: "IPLC专线全内网传输；150GB大流量单GB仅0.167元；4K流媒体深度优化",
      disadvantages: "限4台设备在线；无低于20元迷你包",
      suitableFor: "追求稳定性的职场白领、4K流媒体剧迷、长期可靠出海人员",
      status: "实测已核验",
      aff: "https://vip02.civetaff.com/#/?code=SXY8qyrG"
    },
    {
      id: "wuyou",
      name: "无忧",
      slug: "wuyou",
      startingPrice: 19,
      billingUnit: "月",
      trafficRange: "100GB",
      unitPricePerGB: "0.19 元/GB",
      lineType: "IPLC",
      nodeCount: "45+ (亚太美西)",
      protocols: "Shadowsocks, Trojan, Vmess",
      deviceLimit: "3 - 5 台",
      aiSupport: "支持良好 (ChatGPT, Claude)",
      streamingSupport: "稳定解锁 (Netflix, Disney+, YouTube 4K)",
      advantages: "19元超亲民月付即可上车IPLC专线；专属券wuyou666立减；敏感期高稳定",
      disadvantages: "100GB对超重度下载略紧凑；节点数量适中",
      suitableFor: "20元以内追求专线品质者、轻中度办公学习、备用通道",
      status: "实测已核验",
      aff: "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
      coupon: "wuyou666"
    },
    {
      id: "kuajie",
      name: "跨界",
      slug: "kuajie",
      startingPrice: 20,
      billingUnit: "月",
      trafficRange: "120GB",
      unitPricePerGB: "0.167 元/GB",
      lineType: "全专线架构",
      nodeCount: "50+ (多设备优化)",
      protocols: "Shadowsocks, Trojan, VLESS",
      deviceLimit: "4 - 6 台",
      aiSupport: "深度支持 (ChatGPT, Claude, Cursor)",
      streamingSupport: "全解锁 (Netflix, Disney+, YouTube 4K)",
      advantages: "全专线网络架构丢包率极低；20元月付配120GB；针对跨国多任务办公优化",
      disadvantages: "暂无极冷门国家；无不限时包",
      suitableFor: "跨境电商、多任务跨设备办公、追求极简轻量连接者",
      status: "实测已核验",
      aff: "https://vip02.kuajieaff.com/#/?code=CpJKZicY"
    },
    {
      id: "ladder",
      name: "梯子云 LadderCloud",
      slug: "ladder",
      startingPrice: 25,
      billingUnit: "月",
      trafficRange: "125GB",
      unitPricePerGB: "0.2 元/GB",
      lineType: "优化中转/专线",
      nodeCount: "55+ (多路容灾)",
      protocols: "Shadowsocks, Trojan, Vmess",
      deviceLimit: "5 台",
      aiSupport: "支持常用 (ChatGPT, Claude)",
      streamingSupport: "流畅解锁 (Netflix, TikTok, YouTube 4K)",
      advantages: "中转与专线混合调度容灾强；针对海外社交媒体与短视频优化；支持5台设备",
      disadvantages: "单GB成本0.2元略高；以主流发达国家为主",
      suitableFor: "大流量下载与多设备分享、日常重度音视频与社交平台重度用户",
      status: "实测已核验",
      aff: "https://varnexa.ladderaff.com/#/?code=eC6eLAbq"
    },
    {
      id: "lingdong",
      name: "灵动云",
      slug: "lingdong",
      startingPrice: 20,
      billingUnit: "月",
      trafficRange: "100GB",
      unitPricePerGB: "0.2 元/GB",
      lineType: "优化节点",
      nodeCount: "45+ (均衡稳定)",
      protocols: "Shadowsocks, Trojan, Vmess",
      deviceLimit: "3 - 4 台",
      aiSupport: "基础支持 (ChatGPT, Claude)",
      streamingSupport: "支持主流 (Netflix, YouTube 4K)",
      advantages: "简单省心免折腾；节点连接响应平稳；20元门槛清晰无套路",
      disadvantages: "100GB对重度视频需规划；缺少冷门节点",
      suitableFor: "追求简单省心与流量均衡者、日常办公与影音轻度娱乐、学术检索",
      status: "实测已核验",
      aff: "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr"
    },
    {
      id: "firefly",
      name: "萤火虫（Firefly）",
      slug: "firefly",
      startingPrice: 8,
      billingUnit: "月",
      trafficRange: "60GB",
      unitPricePerGB: "0.133 元/GB",
      lineType: "优质线路",
      nodeCount: "35+ (精简核心)",
      protocols: "Shadowsocks, Trojan",
      deviceLimit: "2 - 3 台",
      aiSupport: "基础支持 (ChatGPT, Claude)",
      streamingSupport: "常规支持 (YouTube 4K, 港台奈飞)",
      advantages: "8元极低月付门槛；单GB仅0.133元；专属券firefly进一步立减；完美备用",
      disadvantages: "60GB不适合看蓝光长视频；节点数量中等",
      suitableFor: "轻度上网与查阅资料、预算有限学生党、防断连备用梯子",
      status: "实测已核验",
      aff: "https://vip02.fireflyaff.com/#/?code=uTKLkAyC",
      coupon: "firefly"
    },
    {
      id: "quanqiuyun",
      name: "全球云",
      slug: "quanqiuyun",
      startingPrice: 20,
      billingUnit: "月",
      trafficRange: "120GB",
      unitPricePerGB: "0.167 元/GB",
      lineType: "中转优化",
      nodeCount: "50+ (流媒体优化)",
      protocols: "Shadowsocks, Vmess, Trojan",
      deviceLimit: "3 - 5 台",
      aiSupport: "良好支持 (ChatGPT, Claude, Gemini)",
      streamingSupport: "专调解锁 (Netflix, Disney+, YouTube 4K, TikTok)",
      advantages: "20元配120GB单GB仅0.167元；专属券tt88折上折；针对流媒体专项调优",
      disadvantages: "非全专线架构极少数节点偶有微抖；无不限时包",
      suitableFor: "日常网络浏览与流媒体用户、中等流量上班族与学生",
      status: "实测已核验",
      aff: "https://sswdh.gcvipaff.com/#/?code=9SF0oyg0",
      coupon: "tt88"
    },
    {
      id: "feiv",
      name: "飞V",
      slug: "feiv",
      startingPrice: 4.9,
      billingUnit: "月",
      trafficRange: "100GB (提供不限时)",
      unitPricePerGB: "0.049 元/GB",
      lineType: "优化线路",
      nodeCount: "40+ (核心五地)",
      protocols: "Shadowsocks, Trojan",
      deviceLimit: "2 - 3 台",
      aiSupport: "基础支持 (部分节点可用)",
      streamingSupport: "基础解锁 (YouTube 4K, 部分奈飞)",
      advantages: "月付仅需¥4.9起全网最低门槛之一；单GB仅0.049元；提供罕见不限时流量包",
      disadvantages: "晚高峰极少数热门节点有排队；AI风控严格需挑选节点",
      suitableFor: "极低预算学生党、主力梯子断网防失联备用、轻度查资料",
      status: "实测已核验",
      aff: "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe"
    }
  ];

  // 默认选中前三家
  let selectedIds = ["yinxingren", "breezenet", "flashleap"];

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
                  <span class="badge badge-success">${a.status}</span>
                  ${a.coupon ? `<div style="font-size: 0.75rem; color: #b91c1c; margin-top: 0.25rem; font-weight: 700;">券码: ${a.coupon}</div>` : ''}
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
              <td><strong>购买与独立评测</strong></td>
              ${activeAirports.map(a => `
                <td>
                  <a href="${a.aff}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="margin-bottom: 0.35rem; display: block; text-align: center;">直达官网购买</a>
                  <div style="display: flex; gap: 0.35rem;">
                    <a href="../review/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1; text-align: center;">评测报告</a>
                    <a href="../airport/${a.slug}/index.html" class="btn btn-secondary btn-sm" style="flex:1; text-align: center;">品牌档案</a>
                  </div>
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

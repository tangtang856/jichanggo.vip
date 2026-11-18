/**
 * js/wave-bg.js
 * 现代高质感科技动态背景引擎 (Neo-Dynamic Background & Visual Engine)
 * 支持三种电影级艺术模式一键无缝切换：
 *   1. 🌊 蓝眼泪流光 (Bioluminescent Ocean Waves & Stardust) - 默认
 *   2. 🌌 赛博星网 (Cyber 3D Constellation & Neural Mesh)
 *   3. ✨ 深空极光 (Cosmic Aurora Borealis & Nebula Dust)
 *
 * 特性：
 *   - 纯原生 HTML5 Canvas 2D，零外部库依赖，超轻量，秒开无负担
 *   - 60FPS 丝滑高频刷新，自适应 DPR (Retina 超清渲染)
 *   - 智能能耗控制：页面失焦/标签切出时自动降频休眠
 *   - 交互反馈：鼠标平滑扰动、光斑引力流与点击冲击涟漪
 *   - 状态持久化：自动记忆用户选定的偏好视觉模式
 */

(function () {
  'use strict';

  if (window.__dynamicBgEngineInitialized) return;
  window.__dynamicBgEngineInitialized = true;

  // 1. 获取或创建 Canvas 画布
  let canvas = document.getElementById('bioluminescent-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'bioluminescent-canvas';
    canvas.className = 'bioluminescent-bg';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 2. 核心状态与参数
  let width = 0;
  let height = 0;
  let dpr = 1;
  let animId = null;
  let isRunning = true;
  let t = 0;

  // 模式管理 (0: 蓝眼泪, 1: 赛博星网, 2: 深空极光)
  const MODES = [
    { id: 0, key: 'ocean', name: '蓝眼泪流光', icon: '🌊' },
    { id: 1, key: 'cyber', name: '赛博星网', icon: '🌌' },
    { id: 2, key: 'aurora', name: '深空极光', icon: '✨' }
  ];

  let currentMode = 0;
  try {
    const saved = localStorage.getItem('jichanggo_dynamic_bg_mode');
    if (saved !== null && !isNaN(parseInt(saved, 10))) {
      currentMode = Math.max(0, Math.min(2, parseInt(saved, 10)));
    }
  } catch (e) {
    currentMode = 0;
  }

  // 鼠标交互状态
  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isHover: false
  };

  // 点击涟漪效果
  let ripples = [];

  // 3. 元素池：微光粒子、星尘、极光光源
  let particles = [];
  let cyberNodes = [];
  let stars = [];

  // 流光氛围光源节点
  const ambientOrbs = [
    { x: 0.2, y: 0.3, r: 480, color: 'rgba(0, 240, 255, 0.13)', speedX: 0.0006, speedY: 0.0008, phase: 0 },
    { x: 0.8, y: 0.4, r: 520, color: 'rgba(59, 130, 246, 0.16)', speedX: 0.0008, speedY: 0.0005, phase: 2 },
    { x: 0.5, y: 0.75, r: 560, color: 'rgba(16, 185, 129, 0.09)', speedX: 0.0005, speedY: 0.0009, phase: 4 },
    { x: 0.85, y: 0.85, r: 460, color: 'rgba(139, 92, 246, 0.12)', speedX: 0.0007, speedY: 0.0006, phase: 1.5 }
  ];

  // 初始化星空星星
  function initStars() {
    stars = [];
    const count = Math.floor(Math.min(width, 1920) / 16);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.7,
        radius: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.8 ? '#fed7aa' : (Math.random() > 0.5 ? '#93c5fd' : '#ffffff')
      });
    }
  }

  // 初始化蓝眼泪发光微粒
  function initOceanParticles() {
    particles = [];
    const count = Math.floor(Math.min(width, 1920) / 18);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: height * (0.45 + Math.random() * 0.52),
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.4 - 0.1,
        radius: Math.random() * 2.0 + 0.7,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        phase: Math.random() * Math.PI * 2,
        colorType: Math.random() > 0.4 ? 'cyan' : (Math.random() > 0.5 ? 'blue' : 'white')
      });
    }
  }

  // 初始化赛博星网节点
  function initCyberNodes() {
    cyberNodes = [];
    const count = Math.floor(Math.min(width, 1920) / 22);
    for (let i = 0; i < count; i++) {
      cyberNodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.2 + 1.2,
        pulse: Math.random() * Math.PI * 2,
        color: Math.random() > 0.3 ? '#00f0ff' : '#60a5fa'
      });
    }
  }

  // 尺寸重设
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);

    initStars();
    initOceanParticles();
    initCyberNodes();
  }

  window.addEventListener('resize', resize);
  resize();

  // 鼠标交互监听
  window.addEventListener('mousemove', function (e) {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    mouse.isHover = true;
    if (mouse.x === -1000) {
      mouse.x = mouse.targetX;
      mouse.y = mouse.targetY;
    }
  });

  window.addEventListener('mouseleave', function () {
    mouse.isHover = false;
  });

  window.addEventListener('click', function (e) {
    if (ripples.length < 6) {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: Math.min(width, height) * 0.4,
        alpha: 0.85
      });
    }
  });

  // =========================================================================
  // 模式 1 绘制：蓝眼泪流光 (Bioluminescent Ocean Waves & Stardust)
  // =========================================================================
  function renderBioluminescentOcean() {
    // 1. 深邃海洋黑曜石夜空底色
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#02050e');
    bgGrad.addColorStop(0.45, '#040d21');
    bgGrad.addColorStop(0.8, '#061733');
    bgGrad.addColorStop(1, '#031024');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. 绘制星空微闪星星
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const flicker = Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.35 + 0.65;
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha * flicker;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    // 3. 柔光深海极光光晕 (Ambient Orbs)
    for (let i = 0; i < ambientOrbs.length; i++) {
      const orb = ambientOrbs[i];
      const currentX = (orb.x + Math.sin(t * orb.speedX + orb.phase) * 0.08) * width;
      const currentY = (orb.y + Math.cos(t * orb.speedY + orb.phase) * 0.08) * height;

      const radGrad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, orb.r);
      radGrad.addColorStop(0, orb.color);
      radGrad.addColorStop(1, 'transparent');

      ctx.fillStyle = radGrad;
      ctx.beginPath();
      ctx.arc(currentX, currentY, orb.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. 复合高阶流体波浪曲线 (使用 lighter 混合呈现莹光叠加)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    const waveLayers = [
      {
        baseY: height * 0.52,
        amp1: 26, freq1: 0.0020, speed1: 0.022,
        amp2: 14, freq2: 0.0055, speed2: 0.038,
        stroke: 'rgba(0, 240, 255, 0.45)',
        fillTop: 'rgba(0, 240, 255, 0.12)',
        fillBottom: 'rgba(3, 16, 36, 0.0)',
        lineWidth: 2.2
      },
      {
        baseY: height * 0.64,
        amp1: 34, freq1: 0.0016, speed1: 0.018,
        amp2: 18, freq2: 0.0042, speed2: 0.028,
        stroke: 'rgba(56, 189, 248, 0.55)',
        fillTop: 'rgba(56, 189, 248, 0.18)',
        fillBottom: 'rgba(2, 6, 23, 0.0)',
        lineWidth: 2.8
      },
      {
        baseY: height * 0.76,
        amp1: 42, freq1: 0.0012, speed1: 0.014,
        amp2: 24, freq2: 0.0030, speed2: 0.022,
        stroke: 'rgba(0, 245, 255, 0.75)',
        fillTop: 'rgba(0, 245, 255, 0.25)',
        fillBottom: 'rgba(4, 18, 45, 0.0)',
        lineWidth: 3.5
      },
      {
        baseY: height * 0.88,
        amp1: 48, freq1: 0.0010, speed1: 0.010,
        amp2: 28, freq2: 0.0024, speed2: 0.016,
        stroke: 'rgba(99, 102, 241, 0.60)',
        fillTop: 'rgba(99, 102, 241, 0.22)',
        fillBottom: 'rgba(2, 6, 23, 0.0)',
        lineWidth: 4.0
      }
    ];

    waveLayers.forEach(layer => {
      ctx.beginPath();
      ctx.moveTo(0, height);

      let firstPoint = true;
      const step = 8;

      for (let x = 0; x <= width + step; x += step) {
        // 多谐波叠加正弦波浪方程
        let waveY = layer.baseY +
          Math.sin(x * layer.freq1 + t * layer.speed1) * layer.amp1 +
          Math.cos(x * layer.freq2 - t * layer.speed2) * layer.amp2;

        // 鼠标邻近柔和扰动
        if (mouse.isHover) {
          const dx = x - mouse.x;
          const dist = Math.abs(dx);
          if (dist < 320) {
            const influence = (1 - dist / 320);
            const dy = (mouse.y - waveY) * 0.18 * influence;
            waveY += dy;
          }
        }

        if (firstPoint) {
          ctx.lineTo(x, waveY);
          firstPoint = false;
        } else {
          ctx.lineTo(x, waveY);
        }
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      // 填充水下渐变
      const fillGrad = ctx.createLinearGradient(0, layer.baseY - layer.amp1, 0, height);
      fillGrad.addColorStop(0, layer.fillTop);
      fillGrad.addColorStop(1, layer.fillBottom);
      ctx.fillStyle = fillGrad;
      ctx.fill();

      // 浪尖高亮发光描边
      ctx.strokeStyle = layer.stroke;
      ctx.lineWidth = layer.lineWidth;
      ctx.stroke();
    });

    // 5. 蓝眼泪浮游微粒 (微光生辉，随波浪浮游)
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < height * 0.4) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      const pulse = Math.sin(t * p.pulseSpeed + p.phase) * 0.4 + 0.6;
      const currentAlpha = p.alpha * pulse;

      // 粒子光晕
      const rad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2.5);
      if (p.colorType === 'cyan') {
        rad.addColorStop(0, `rgba(0, 245, 255, ${currentAlpha})`);
        rad.addColorStop(1, 'rgba(0, 245, 255, 0)');
      } else if (p.colorType === 'blue') {
        rad.addColorStop(0, `rgba(96, 165, 250, ${currentAlpha})`);
        rad.addColorStop(1, 'rgba(96, 165, 250, 0)');
      } else {
        rad.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
        rad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }

      ctx.fillStyle = rad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  // =========================================================================
  // 模式 2 绘制：赛博星网 (Cyber 3D Constellation & Neural Mesh)
  // =========================================================================
  function renderCyberConstellation() {
    // 深邃高科技底色
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, width, height);

    // 柔光微弱极光底色
    for (let i = 0; i < 2; i++) {
      const orb = ambientOrbs[i];
      const radGrad = ctx.createRadialGradient(orb.x * width, orb.y * height, 0, orb.x * width, orb.y * height, orb.r);
      radGrad.addColorStop(0, orb.color);
      radGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);
    }

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    // 更新与绘制节点
    const maxConnDist = 130;
    const maxMouseDist = 180;

    for (let i = 0; i < cyberNodes.length; i++) {
      const n = cyberNodes[i];
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      // 鼠标引力
      if (mouse.isHover) {
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxMouseDist) {
          const force = (1 - dist / maxMouseDist) * 0.08;
          n.x += dx * force;
          n.y += dy * force;

          // 连线到鼠标
          ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / maxMouseDist) * 0.6})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // 节点间连线
      for (let j = i + 1; j < cyberNodes.length; j++) {
        const n2 = cyberNodes[j];
        const dx = n.x - n2.x;
        const dy = n.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxConnDist) {
          const alpha = (1 - dist / maxConnDist) * 0.35;
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }

      // 绘制节点本身
      ctx.fillStyle = n.color;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  // =========================================================================
  // 模式 3 绘制：深空极光 (Cosmic Aurora Borealis & Nebula Dust)
  // =========================================================================
  function renderCosmicAurora() {
    // 极黑深空底色
    ctx.fillStyle = '#01040a';
    ctx.fillRect(0, 0, width, height);

    // 星星背景
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const flicker = Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.4 + 0.6;
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha * flicker;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    // 绚烂流体极光幔幕 (Curtains of Light)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    const auroraCount = 3;
    const colors = [
      { r: 0, g: 245, b: 255 },  // 青色
      { r: 16, g: 185, b: 129 }, // 翡翠绿
      { r: 139, g: 92, b: 246 }  // 极光紫
    ];

    for (let a = 0; a < auroraCount; a++) {
      const c = colors[a % colors.length];
      const baseH = height * (0.28 + a * 0.18);
      const amp = 70 + a * 20;

      ctx.beginPath();
      ctx.moveTo(0, 0);

      const step = 12;
      for (let x = 0; x <= width + step; x += step) {
        const y = baseH +
          Math.sin(x * 0.0015 + t * (0.012 + a * 0.006) + a) * amp +
          Math.cos(x * 0.003 - t * 0.015) * 30;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, 0);
      ctx.closePath();

      const grad = ctx.createLinearGradient(0, 0, 0, baseH + amp);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
      grad.addColorStop(0.5, `rgba(${c.r}, ${c.g}, ${c.b}, 0.12)`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.fill();
    }

    ctx.restore();
  }

  // =========================================================================
  // 涟漪动画绘制 (通用叠加)
  // =========================================================================
  function renderRipples() {
    if (ripples.length === 0) return;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    for (let i = ripples.length - 1; i >= 0; i--) {
      const rip = ripples[i];
      rip.radius += (rip.maxRadius - rip.radius) * 0.055 + 1.2;
      rip.alpha *= 0.94;

      if (rip.alpha < 0.01 || rip.radius >= rip.maxRadius) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.strokeStyle = `rgba(0, 240, 255, ${rip.alpha * 0.75})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = `rgba(56, 189, 248, ${rip.alpha * 0.4})`;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(rip.x, rip.y, Math.max(0, rip.radius - 8), 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  // =========================================================================
  // 主循环调度引擎 (Main Render Loop)
  // =========================================================================
  function loop() {
    if (!isRunning) return;

    t += 1;

    // 鼠标平滑阻尼趋近
    if (mouse.targetX !== -1000) {
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
    }

    // 根据当前模式渲染核心视觉层
    if (currentMode === 0) {
      renderBioluminescentOcean();
    } else if (currentMode === 1) {
      renderCyberConstellation();
    } else if (currentMode === 2) {
      renderCosmicAurora();
    }

    // 叠加交互涟漪
    renderRipples();

    animId = requestAnimationFrame(loop);
  }

  // 页面可见性管理 (标签切出自动休眠节电)
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      isRunning = false;
      if (animId) cancelAnimationFrame(animId);
    } else {
      isRunning = true;
      animId = requestAnimationFrame(loop);
    }
  });

  // 启动主循环
  animId = requestAnimationFrame(loop);

  // =========================================================================
  // 4. 注入无扰式右下角动态视觉切换胶囊 (Floating Mode Switcher)
  // =========================================================================
  function injectModeSwitcher() {
    if (document.getElementById('jichanggo-bg-switcher')) return;

    const switcher = document.createElement('div');
    switcher.id = 'jichanggo-bg-switcher';
    switcher.className = 'bg-mode-switcher';
    switcher.setAttribute('aria-label', '动态背景视觉模式切换');

    switcher.innerHTML = `
      <div class="bg-mode-inner">
        <span class="bg-mode-label" title="切换当前动态背景风格">视觉特效</span>
        <div class="bg-mode-buttons">
          ${MODES.map(m => `
            <button type="button" class="bg-mode-btn ${m.id === currentMode ? 'active' : ''}" data-mode="${m.id}" title="${m.name}">
              <span class="bg-mode-icon">${m.icon}</span>
              <span class="bg-mode-text">${m.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    document.body.appendChild(switcher);

    // 绑定点击切换事件
    switcher.addEventListener('click', function (e) {
      const btn = e.target.closest('.bg-mode-btn');
      if (!btn) return;

      const modeId = parseInt(btn.getAttribute('data-mode'), 10);
      if (isNaN(modeId) || modeId === currentMode) return;

      currentMode = modeId;
      try {
        localStorage.setItem('jichanggo_dynamic_bg_mode', modeId.toString());
      } catch (err) {}

      // 更新按钮高亮态
      const allBtns = switcher.querySelectorAll('.bg-mode-btn');
      allBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 触发微光切换涟漪
      ripples.push({
        x: width * 0.5,
        y: height * 0.5,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.7,
        alpha: 0.95
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectModeSwitcher);
  } else {
    injectModeSwitcher();
  }

})();

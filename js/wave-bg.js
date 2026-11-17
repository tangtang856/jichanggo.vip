/**
 * js/wave-bg.js
 * 蓝眼泪 · 动态荧光海浪与星空背景引擎 (Bioluminescent Ocean Waves Engine)
 * 特性：纯原生 HTML5 Canvas，零外部依赖，60FPS 高性能丝滑渲染，自适应 DPR，后台自动休眠
 */

(function () {
  'use strict';

  // 避免重复初始化
  if (window.__bioluminescentBgInitialized) return;
  window.__bioluminescentBgInitialized = true;

  // 1. 创建或获取 Canvas 元素
  let canvas = document.getElementById('bioluminescent-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'bioluminescent-canvas';
    canvas.className = 'bioluminescent-bg';
    canvas.setAttribute('aria-hidden', 'true');
    // 插入为 body 的第一个子节点
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 2. 状态与参数配置
  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;
  let isRunning = true;
  let time = 0;

  // 鼠标交互
  let mouse = { x: -1000, y: -1000, targetY: 0.7, speed: 0 };
  let ripples = [];

  // 预生成星空星星与远方岸边暖光
  let stars = [];
  let horizonLights = [];
  let bioParticles = [];

  function initElements() {
    // 星星
    stars = [];
    const starCount = Math.floor(Math.min(width, 1920) / 18);
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.55),
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.85 ? '#fed7aa' : (Math.random() > 0.6 ? '#93c5fd' : '#ffffff')
      });
    }

    // 远方地平线暖光倒影 (模拟岸边树影与微光)
    horizonLights = [];
    const lightCount = 7;
    for (let i = 0; i < lightCount; i++) {
      horizonLights.push({
        x: (width * 0.45) + (i * (width * 0.5) / lightCount) + (Math.random() * 40 - 20),
        y: height * 0.38,
        radius: Math.random() * 3 + 2,
        alpha: Math.random() * 0.5 + 0.4,
        flicker: Math.random() * 0.03 + 0.01
      });
    }

    // 蓝眼泪生物发光浮游微粒
    bioParticles = [];
    const pCount = Math.floor(Math.min(width, 1920) / 12);
    for (let i = 0; i < pCount; i++) {
      bioParticles.push({
        x: Math.random() * width,
        baseY: height * (0.65 + Math.random() * 0.32),
        y: 0,
        radius: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.8 + 0.2,
        speedX: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.3 ? 185 : 198 // 亮青色 ~ 宝石电光蓝
      });
    }
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);
    initElements();
  }

  window.addEventListener('resize', resize);
  resize();

  // 鼠标交互监听
  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.targetY = e.clientY / height;
  });

  window.addEventListener('click', function (e) {
    if (ripples.length < 8) {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: Math.random() * 80 + 60,
        alpha: 0.9,
        speed: 2.5
      });
    }
  });

  // 3. 核心绘制循环
  function render() {
    if (!isRunning) return;

    time += 0.015;

    // A. 基础夜空与深海渐变底色
    // 顶部深邃星空 -> 地平线暗夜微光 -> 远海深蓝 -> 近滩暗色礁石底
    const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
    bgGrad.addColorStop(0, '#030712');      // 极暗深夜星空
    bgGrad.addColorStop(0.35, '#071026');   // 地平线上方微光
    bgGrad.addColorStop(0.42, '#0c1a38');   // 海天交接处微光
    bgGrad.addColorStop(0.60, '#08142c');   // 远海水体
    bgGrad.addColorStop(0.80, '#061024');   // 中水域
    bgGrad.addColorStop(1, '#040916');      // 近岸湿润暗沙礁石
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // B. 远方岸边暗影 (类似照片左上角的森林剪影)
    ctx.fillStyle = 'rgba(2, 5, 12, 0.92)';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.28);
    ctx.bezierCurveTo(width * 0.15, height * 0.25, width * 0.35, height * 0.34, width * 0.52, height * 0.38);
    ctx.lineTo(0, height * 0.55);
    ctx.closePath();
    ctx.fill();

    // C. 绘制闪烁星空
    stars.forEach(function (star) {
      const alpha = star.alpha * (0.6 + 0.4 * Math.sin(time * 2 + star.twinklePhase));
      ctx.fillStyle = star.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    // D. 远方地平线暖光与水面金色倒影 (照应照片中远处的金色小灯)
    horizonLights.forEach(function (light) {
      const pulse = 0.8 + 0.2 * Math.sin(time * 3 + light.flicker * 100);
      
      // 灯光光点
      ctx.globalAlpha = light.alpha * pulse;
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
      ctx.fill();

      // 水面细长金色倒影
      const reflectGrad = ctx.createLinearGradient(light.x, light.y, light.x, light.y + 70);
      reflectGrad.addColorStop(0, 'rgba(253, 224, 71, 0.45)');
      reflectGrad.addColorStop(1, 'rgba(253, 224, 71, 0)');
      ctx.fillStyle = reflectGrad;
      ctx.fillRect(light.x - 1.5, light.y, 3, 65);
    });

    // E. 绘制多层动态荧光海浪 (蓝眼泪波纹算法)
    ctx.globalAlpha = 1;

    // 波浪 1：中远景深蓝水体起伏
    drawWave({
      baseY: height * 0.48,
      amplitude: 14,
      frequency: 0.0035,
      speed: 0.8,
      fillColor: 'rgba(5, 25, 60, 0.65)',
      crestColor: 'rgba(0, 160, 255, 0.25)',
      crestWidth: 2
    });

    // 波浪 2：中景电光蓝次级潮浪
    drawWave({
      baseY: height * 0.58,
      amplitude: 22,
      frequency: 0.0042,
      speed: 1.2,
      phaseOffset: 1.5,
      fillColor: 'rgba(4, 30, 75, 0.7)',
      crestColor: 'rgba(0, 210, 255, 0.5)',
      crestWidth: 3
    });

    // 波浪 3：近景主浪（蓝眼泪主潮涌，发光最强）
    drawWave({
      baseY: height * 0.70,
      amplitude: 34,
      frequency: 0.0048,
      speed: 1.6,
      phaseOffset: 3.2,
      fillColor: 'rgba(2, 20, 55, 0.82)',
      crestColor: 'rgba(0, 245, 255, 0.95)',
      glowColor: 'rgba(0, 235, 255, 0.45)',
      crestWidth: 6,
      isMainWave: true
    });

    // 波浪 4：岸边破碎浪花与荧光蕾丝泡沫 (照片中最耀眼的白色/亮青色细密泡沫纹路)
    drawLaceWave({
      baseY: height * 0.82,
      amplitude: 26,
      speed: 2.0,
      phaseOffset: 4.8
    });

    // F. 绘制蓝眼泪发光浮游生物粒子 (Bio-luminescent Sparkles)
    bioParticles.forEach(function (p) {
      const waveShift = Math.sin(p.x * 0.006 + time * 1.5 + p.phase) * 20;
      p.y = p.baseY + waveShift;
      p.x += p.speedX;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      const alpha = p.alpha * (0.5 + 0.5 * Math.sin(time * 3 + p.phase));
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = `hsl(${p.hue}, 100%, 75%)`;
      ctx.shadowColor = `hsl(${p.hue}, 100%, 55%)`;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0; // 重置阴影

    // G. 点击产生的交互发光光晕涟漪
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rip = ripples[i];
      rip.radius += rip.speed;
      rip.alpha -= 0.015;

      if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = rip.alpha;
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.85)';
      ctx.shadowColor = '#00f5ff';
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    ctx.globalAlpha = 1;
    animationFrameId = requestAnimationFrame(render);
  }

  // 绘制单条波浪函数
  function drawWave(cfg) {
    const { baseY, amplitude, frequency, speed, phaseOffset = 0, fillColor, crestColor, glowColor, crestWidth = 2, isMainWave = false } = cfg;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, height);

    const points = [];
    const step = 8;
    for (let x = 0; x <= width + step; x += step) {
      // 复合正弦波制造自然水体流动
      const y = baseY +
        Math.sin(x * frequency + time * speed + phaseOffset) * amplitude +
        Math.cos(x * frequency * 2.2 - time * speed * 0.7) * (amplitude * 0.35) +
        Math.sin(x * 0.001 + time * 0.4) * 8;
      
      points.push({ x, y });
      ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();

    // 浪尖高亮荧光发光带 (The Bioluminescent Crest)
    if (crestColor && points.length > 0) {
      if (glowColor) {
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 18;
      }
      ctx.strokeStyle = crestColor;
      ctx.lineWidth = crestWidth;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();

      // 主浪顶部增加白炽微光内芯
      if (isMainWave) {
        ctx.shadowBlur = 8;
        ctx.strokeStyle = 'rgba(235, 255, 255, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  // 绘制潮水漫上海滩的荧光泡沫蕾丝 (Lace Wave Effect)
  function drawLaceWave(cfg) {
    const { baseY, amplitude, speed, phaseOffset } = cfg;
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
    ctx.lineWidth = 1.2;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 10;

    ctx.beginPath();
    for (let x = 0; x <= width; x += 12) {
      const noise = Math.sin(x * 0.015 + time * speed + phaseOffset) * amplitude +
                    Math.cos(x * 0.035 - time * 1.8) * 10;
      const y = baseY + noise;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 第二条更薄更亮的微光细丝
    ctx.strokeStyle = 'rgba(186, 230, 253, 0.6)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    for (let x = 0; x <= width; x += 14) {
      const noise = Math.sin(x * 0.02 + time * (speed * 0.9) + phaseOffset + 0.8) * (amplitude * 0.8) +
                    Math.sin(x * 0.05 + time) * 6;
      const y = baseY + 12 + noise;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
  }

  // 4. 页面可见性管理 (省电与性能优化)
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      isRunning = false;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      if (!isRunning) {
        isRunning = true;
        render();
      }
    }
  });

  // 检查是否开启“减少动效”
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) {
    // 渲染一帧静态荧光夜景
    render();
    isRunning = false;
  } else {
    // 启动动画循环
    render();
  }
})();

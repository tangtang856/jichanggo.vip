// scripts/check-links.js
// 内部链接与相对路径死链自动化校验工具

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    if (file === 'node_modules' || file === '.git') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

function checkLinks() {
  console.log("==================================================");
  console.log("  执行全站链接可达性审计 (scripts/check-links.js)");
  console.log("==================================================");

  const htmlFiles = getAllHtmlFiles(ROOT_DIR);
  let totalLinksChecked = 0;
  const brokenLinks = [];
  const absolutePathViolations = [];

  htmlFiles.forEach(file => {
    const fileDir = path.dirname(file);
    const relFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // 匹配所有 href 属性
    const linkMatches = content.matchAll(/href=["']([^"']+)["']/g);

    for (const match of linkMatches) {
      let href = match[1].trim();
      totalLinksChecked++;

      // 忽略外部超链接、锚点、邮箱和协议链接
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('javascript:')
      ) {
        continue;
      }

      // 核心规范检查：严禁出现以 / 开头的站内跳转链接！
      if (href.startsWith('/')) {
        absolutePathViolations.push(`[${relFile}] 违规使用根绝对路径: "${href}"`);
        continue;
      }

      // 剥离可能存在的 URL 查询参数或哈希锚点
      const cleanHref = href.split('?')[0].split('#')[0];
      if (!cleanHref) continue; // 纯锚点

      // 本地文件可达性解析
      const targetFilePath = path.resolve(fileDir, cleanHref);

      if (!fs.existsSync(targetFilePath)) {
        // 尝试如果是目录看是否有 index.html
        if (cleanHref.endsWith('/') && fs.existsSync(path.join(targetFilePath, 'index.html'))) {
          // OK
        } else {
          brokenLinks.push(`[${relFile}] 死链错误: "${href}" -> 目标文件不存在: ${path.relative(ROOT_DIR, targetFilePath)}`);
        }
      }
    }
  });

  console.log(`[Link Check] 检查完成，共扫描 ${totalLinksChecked} 个链接。`);

  let passed = true;
  if (absolutePathViolations.length > 0) {
    passed = false;
    console.error(`\n✗ 发现 ${absolutePathViolations.length} 处绝对路径违规：`);
    absolutePathViolations.forEach(v => console.error("  - " + v));
  }

  if (brokenLinks.length > 0) {
    passed = false;
    console.error(`\n✗ 发现 ${brokenLinks.length} 个失效死链：`);
    brokenLinks.forEach(b => console.error("  - " + b));
  }

  if (passed) {
    console.log("✓ 恭喜！全站站内相对路径链接 100% 可达，零死链，零绝对路径违规！(PASS)");
  }
  return passed;
}

if (require.main === module) {
  const passed = checkLinks();
  process.exit(passed ? 0 : 1);
}

module.exports = { checkLinks };

// scripts/validate-content.js
// 内容完整度、未替换变量与主攻关键词合规性校验工具

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

const TARGET_KEYWORDS = [
  "机场推荐",
  "机场节点",
  "性价比机场",
  "梯子推荐",
  "vpn",
  "vpn机场",
  "vpn节点",
  "vpn推荐"
];

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

function validateContent() {
  console.log("==================================================");
  console.log("  执行内容质量与合规性校验 (scripts/validate-content.js)");
  console.log("==================================================");

  const htmlFiles = getAllHtmlFiles(ROOT_DIR);
  const errors = [];
  const warnings = [];

  // 1. 检查首页主关键词覆盖
  const homepagePath = path.join(ROOT_DIR, "index.html");
  if (fs.existsSync(homepagePath)) {
    const homeContent = fs.readFileSync(homepagePath, 'utf8');
    TARGET_KEYWORDS.forEach(kw => {
      if (!homeContent.includes(kw)) {
        errors.push(`[index.html] 首页未自然包含指定主攻关键词: "${kw}"`);
      } else {
        console.log(`✓ 首页关键词覆盖检验: "${kw}" 已正确部署`);
      }
    });
  } else {
    errors.push("未找到 index.html 首页！");
  }

  // 2. 检查全站未替换模板变量与异常占位符
  htmlFiles.forEach(file => {
    const relFile = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // 检查模板插值残留如 {{xxx}}
    const curlyMatches = content.match(/\{\{[^}]+\}\}/g);
    if (curlyMatches) {
      errors.push(`[${relFile}] 发现未替换的模板变量: ${curlyMatches.join(", ")}`);
    }

    // 检查 JS 异常残留
    if (content.includes("undefined") && !content.includes("typeof undefined")) {
      errors.push(`[${relFile}] 疑似发现 JS 未定义异常 "undefined" 文本`);
    }
    if (content.includes("[object Object]")) {
      errors.push(`[${relFile}] 发现对象渲染异常 "[object Object]"`);
    }

    // 检查正文字数（空页面排查）
    const plainText = content.replace(/<[^>]+>/g, '').replace(/\s+/g, '');
    if (plainText.length < 300 && relFile !== '404.html') {
      errors.push(`[${relFile}] 页面内容过短 (仅 ${plainText.length} 字符)，疑似空白页面`);
    }
  });

  console.log("--------------------------------------------------");
  if (errors.length === 0) {
    console.log(`✓ 恭喜！全站 ${htmlFiles.length} 个页面内容质量校验 100% 通过！(PASS)`);
    return true;
  } else {
    console.error(`✗ 发现 ${errors.length} 项内容问题：`);
    errors.forEach(e => console.error("  - " + e));
    return false;
  }
}

if (require.main === module) {
  const passed = validateContent();
  process.exit(passed ? 0 : 1);
}

module.exports = { validateContent };

// scripts/audit-seo.js
// SEO 技术审计与规范合规检查工具

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BASE_DOMAIN = "jichanggo.vip";

// 递归查找所有 HTML 文件（排除 node_modules 和 .git）
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

function auditSeo() {
  console.log("==================================================");
  console.log("  执行 SEO 全站技术审计 (scripts/audit-seo.js)");
  console.log("==================================================");

  const htmlFiles = getAllHtmlFiles(ROOT_DIR);
  console.log(`[Audit] 找到 ${htmlFiles.length} 个 HTML 页面待审计...\n`);

  const titles = new Map();
  const errors = [];
  const warnings = [];

  htmlFiles.forEach(file => {
    const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf8');

    // 1. 检查 Title
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      errors.push(`[${relPath}] 缺少 <title> 标签`);
    } else {
      const title = titleMatch[1].trim();
      if (titles.has(title)) {
        errors.push(`[${relPath}] 发现重复 Title: "${title}" (与 ${titles.get(title)} 重复)`);
      } else {
        titles.set(title, relPath);
      }
    }

    // 2. 检查 Meta Description
    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    if (!descMatch || !descMatch[1].trim()) {
      errors.push(`[${relPath}] 缺少 <meta name="description">`);
    }

    // 3. 检查 H1 唯一性
    const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
    if (!h1Matches || h1Matches.length === 0) {
      errors.push(`[${relPath}] 缺少 <h1> 标题`);
    } else if (h1Matches.length > 1) {
      errors.push(`[${relPath}] 存在多个 <h1> 标题 (找到 ${h1Matches.length} 个)`);
    }

    // 4. 检查 Canonical
    const canonicalMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    if (!canonicalMatch) {
      errors.push(`[${relPath}] 缺少 Canonical 标签`);
    } else {
      const canonical = canonicalMatch[1];
      if (!canonical.startsWith(`https://${BASE_DOMAIN}/`)) {
        errors.push(`[${relPath}] Canonical 格式错误: "${canonical}" (必须以 https://${BASE_DOMAIN}/ 开头)`);
      }
    }

    // 5. 检查 Robots Meta
    if (!content.includes('name="robots"')) {
      errors.push(`[${relPath}] 缺少 <meta name="robots"> 标签`);
    }

    // 6. 检查严格相对路径限制（link, script, img 严禁以 / 开头）
    const rootPathMatches = content.match(/(?:href|src)=["']\/[a-zA-Z0-9_\-]/g);
    if (rootPathMatches) {
      errors.push(`[${relPath}] 违规发现以 / 开头的根绝对路径资源引用: ${rootPathMatches.slice(0, 3).join(", ")}`);
    }

    // 7. 检查 JSON-LD 结构化数据语法
    const schemaMatches = content.match(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi);
    if (schemaMatches) {
      schemaMatches.forEach(sm => {
        const jsonStr = sm.replace(/<\/?script[^>]*>/gi, '').trim();
        try {
          JSON.parse(jsonStr);
        } catch (e) {
          errors.push(`[${relPath}] JSON-LD Schema 语法解析错误: ${e.message}`);
        }
      });
    }
  });

  console.log("--------------------------------------------------");
  if (errors.length === 0) {
    console.log(`✓ 恭喜！全部 ${htmlFiles.length} 个页面 SEO 技术审计 100% 通过！(PASS)`);
    return true;
  } else {
    console.error(`✗ 发现 ${errors.length} 项 SEO 问题：`);
    errors.forEach(err => console.error("  - " + err));
    return false;
  }
}

if (require.main === module) {
  const passed = auditSeo();
  process.exit(passed ? 0 : 1);
}

module.exports = { auditSeo };

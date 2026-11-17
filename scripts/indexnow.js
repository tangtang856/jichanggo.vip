// scripts/indexnow.js
// Bing IndexNow 智能自动化提交脚本
// 支持：单 URL 提交、批量提交、新增/变更 URL 增量提交、Key 文件验证、重试机制、HTTP 日志

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = "jichanggo.vip";
const KEY = "8f25e5a00ac14961bdbf4f2eff07a668";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const CACHE_FILE = path.join(__dirname, '..', '.indexnow-cache.json');
const SITEMAP_FILE = path.join(__dirname, '..', 'sitemap.xml');

// 发送 HTTPS POST 请求（支持超时与自动重试）
function postIndexNow(payload, maxRetries = 2) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'JichangGo-IndexNow-Client/1.0'
      },
      timeout: 10000
    };

    const attempt = (retryCount) => {
      console.log(`[IndexNow] 发起推送请求 (尝试次数: ${retryCount + 1}/${maxRetries + 1})...`);
      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          if (res.statusCode === 200 || res.statusCode === 202) {
            console.log(`[IndexNow] 响应成功！HTTP 状态码: ${res.statusCode} (URL 已成功推送至 IndexNow 队列)`);
            resolve({ status: res.statusCode, body });
          } else {
            console.warn(`[IndexNow] 响应状态码: ${res.statusCode}, 响应信息: ${body}`);
            if (retryCount < maxRetries) {
              console.log(`[IndexNow] 3 秒后重试...`);
              setTimeout(() => attempt(retryCount + 1), 3000);
            } else {
              resolve({ status: res.statusCode, body });
            }
          }
        });
      });

      req.on('error', (err) => {
        console.error(`[IndexNow] 网络请求错误: ${err.message}`);
        if (retryCount < maxRetries) {
          console.log(`[IndexNow] 3 秒后重试...`);
          setTimeout(() => attempt(retryCount + 1), 3000);
        } else {
          reject(err);
        }
      });

      req.on('timeout', () => {
        req.destroy();
        console.error(`[IndexNow] 请求超时`);
        if (retryCount < maxRetries) {
          setTimeout(() => attempt(retryCount + 1), 3000);
        } else {
          reject(new Error("IndexNow Request Timeout"));
        }
      });

      req.write(postData);
      req.end();
    };

    attempt(0);
  });
}

// 解析 sitemap.xml 获取全站有效 URL
function parseSitemapUrls() {
  if (!fs.existsSync(SITEMAP_FILE)) {
    console.error("[IndexNow] 错误: 未找到 sitemap.xml 文件，请先运行生成器生成网站！");
    return [];
  }
  const content = fs.readFileSync(SITEMAP_FILE, 'utf8');
  const urls = [];
  const regex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

// 缓存管理（避免无差别全量重复提交）
function getCachedUrls() {
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {};
}

function updateCache(submittedUrls) {
  const cache = getCachedUrls();
  const now = new Date().toISOString();
  submittedUrls.forEach(url => {
    cache[url] = now;
  });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}

async function main() {
  const args = process.argv.slice(2);
  const isForceAll = args.includes('--all');
  const singleUrlArg = args.find(a => a.startsWith('--url='));

  console.log("==================================================");
  console.log("  JichangGo.vip · Bing IndexNow 智能推送系统");
  console.log("==================================================");
  console.log(`- 目标域名: ${HOST}`);
  console.log(`- API Key: ${KEY}`);
  console.log(`- Key 验证路径: ${KEY_LOCATION}`);

  let urlsToSubmit = [];

  if (singleUrlArg) {
    const singleUrl = singleUrlArg.split('=')[1];
    if (singleUrl && singleUrl.startsWith('https://')) {
      urlsToSubmit = [singleUrl];
      console.log(`- 运行模式: 单 URL 提交模式 (${singleUrl})`);
    } else {
      console.error("[IndexNow] 错误: 单 URL 参数格式不正确，必须为完整的 https:// 开头网址");
      process.exit(1);
    }
  } else {
    const allUrls = parseSitemapUrls();
    const cache = getCachedUrls();

    if (isForceAll) {
      console.log("- 运行模式: 全量强制提交模式 (--all)");
      urlsToSubmit = allUrls;
    } else {
      console.log("- 运行模式: 增量检测模式 (仅提交新增或最近未推送的 URL)");
      urlsToSubmit = allUrls.filter(url => !cache[url]);
      if (urlsToSubmit.length === 0) {
        console.log("[IndexNow] 检测到当前所有 URL 均已于近期推送过，无需重复无差别提交。");
        console.log("[IndexNow] 如需强制重新推送全站，请运行: npm run indexnow -- --all");
        process.exit(0);
      }
    }
  }

  console.log(`- 本次准备推送的 URL 数量: ${urlsToSubmit.length} 条`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlsToSubmit
  };

  try {
    const result = await postIndexNow(payload);
    updateCache(urlsToSubmit);
    console.log("--------------------------------------------------");
    console.log("[IndexNow 提示]：");
    console.log("1. 提交成功代表 Bing/Yandex 的 IndexNow 接收服务器已受理 URL 变更通知。");
    console.log("2. 索引收录由 Bing 爬虫（Bingbot）根据网站内容质量、E-E-A-T 及规范性自主决定，并不代表瞬时收录。");
    console.log("3. 建议配合 Bing Webmaster Tools (站长工具) 进行持续收录监控。");
    console.log("==================================================");
  } catch (error) {
    console.error(`[IndexNow] 最终提交失败: ${error.message}`);
    process.exit(1);
  }
}

main();

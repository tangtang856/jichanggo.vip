// js/main.js - 站点通用纯原生交互脚本 (轻量、零依赖、无损本地离线运行)
document.addEventListener("DOMContentLoaded", function () {
  // 1. 移动端汉堡导航菜单展开与收起
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", !isExpanded);
      mobileNav.classList.toggle("open");
    });
  }

  // 2. 博客分类筛选交互 (Instant Client-side Category Filter)
  const filterTabs = document.querySelectorAll(".filter-tab-btn");
  const blogCards = document.querySelectorAll(".blog-card-item");

  if (filterTabs.length > 0 && blogCards.length > 0) {
    filterTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        filterTabs.forEach(function (t) { t.classList.remove("active"); });
        this.classList.add("active");

        const selectedCat = this.getAttribute("data-category");
        let visibleCount = 0;

        blogCards.forEach(function (card) {
          const cardCat = card.getAttribute("data-category");
          if (selectedCat === "all" || cardCat === selectedCat) {
            card.style.display = "flex";
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });

        // 提示当前筛选数量
        const countNotice = document.getElementById("filter-count-notice");
        if (countNotice) {
          countNotice.textContent = "当前展示 " + visibleCount + " 篇文章";
        }
      });
    });
  }

  // 3. 优惠码点击一键复制 (Clipboard API)
  const couponPills = document.querySelectorAll(".coupon-copy-btn");
  couponPills.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const code = this.getAttribute("data-coupon");
      if (code && navigator.clipboard) {
        navigator.clipboard.writeText(code).then(function () {
          const originalText = btn.textContent;
          btn.textContent = "✓ 已复制 " + code;
          btn.style.background = "#dcfce7";
          btn.style.color = "#15803d";
          setTimeout(function () {
            btn.textContent = originalText;
            btn.style.background = "";
            btn.style.color = "";
          }, 2000);
        });
      }
    });
  });

  // 4. 页面内部平滑滚动与锚点高亮
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});

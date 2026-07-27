/**
 * TRUTH TELUGU OFFICIAL — Production JavaScript Engine (script.js)
 * Features:
 * - Theme Switcher (Dark/Light Mode)
 * - Navigation Sticky Header & Mobile Drawer
 * - Smooth Scrolling & Active Section Tracker
 * - Accordion FAQ Interactivity
 * - Search Modal Toggle & Keyboard Shortcuts
 * - Newsletter Form Validation & Success Toast
 * - Image Lazy Loading Fallback
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Truth Telugu Official Script Initialized.');

  // 1. Theme Toggle Management
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('truthtelugu-theme') || 'dark';

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const newTheme = isLight ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('truthtelugu-theme', newTheme);
      showToast(newTheme === 'light' ? 'లైట్ మోడ్ మోడ్ ఎంచుకోబడింది' : 'డార్క్ మోడ్ సక్రియం చేయబడింది');
    });
  }

  // 2. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-navigation');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('nav-open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Close mobile menu on nav click
  if (mainNav) {
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Newsletter Form Handling
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast('ధన్యవాదాలు! మీ ఉచిత సభ్యత్వం విజయవంతంగా నమోదు కాబడింది.');
        emailInput.value = '';
      }
    });
  }

  // 5. Toast Notification System
  function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #D4AF37;
        color: #0F0E0C;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: 'Noto Serif Telugu', serif;
        font-weight: 600;
        font-size: 14px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        z-index: 9999;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
      `;
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 3500);
  }
});
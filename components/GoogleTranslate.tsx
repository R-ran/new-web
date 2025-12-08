'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (o: any, e: string) => void;
      };
    };
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // 始终加载 Google Translate 脚本，以便随时可以切换语言
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ru,es,fr',
            layout: 0,
            autoDisplay: false,
          },
          'google_translate_element'
        );

        // 检查是否有保存的语言设置
        const savedLang = localStorage.getItem('lang');
        const currentCookie = document.cookie.match(/googtrans=([^;]+)/);
        const currentLang = currentCookie ? currentCookie[1].split('/').pop() : 'en';
        
        if (savedLang && savedLang !== 'en' && currentLang !== savedLang) {
          // 设置 cookie 以确保翻译生效
          document.cookie = `googtrans=/en/${savedLang}; path=/`;
          
          // 延迟一下确保元素已创建，然后触发翻译
          setTimeout(() => {
            const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (select && select.value !== savedLang) {
              select.value = savedLang;
              select.dispatchEvent(new Event('change', { bubbles: true }));
              handleRTL(savedLang);
            }
          }, 500);
        } else if (savedLang === 'en' && currentLang !== 'en') {
          // 如果保存的是英文但当前是其他语言，清除翻译
          document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
          window.location.reload();
        }

        // Hide default Google Translate UI
        setTimeout(() => {
          const container = document.getElementById('google_translate_element');
          if (container) container.style.display = 'none';
          const banner = document.querySelector('.goog-te-banner-frame') as HTMLElement;
          if (banner) banner.style.display = 'none';
        }, 100);
      };
    }
  }, []);

  return <div id="google_translate_element" style={{ display: 'none' }} />;
}

export function restoreToEnglish() {
  if (typeof window === "undefined") return;

  // 清除所有与翻译相关的存储
  const cookieName = "googtrans";
  const cookiePath = "; path=/";
  const cookieDomain = "; domain=" + location.hostname.substring(location.hostname.indexOf("."));
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + cookiePath + cookieDomain;
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

  sessionStorage.removeItem("googtrans");
  localStorage.removeItem("googtrans");

  // 清空下拉框
  setTimeout(() => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = "";
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // 清除 goog-te-gadget 添加的 class
    document.documentElement.removeAttribute("class");

    // 最后 reload 一次
    location.reload();
  }, 100);
}

// Change Language Method
export function changeLanguage(langCode: string) {
  if (typeof window === 'undefined') return;

  // 保存语言选择
  localStorage.setItem('lang', langCode);

  // 如果选择英文，清除翻译并重新加载
  if (langCode === 'en') {
    // Clear `googtrans` cookie
    document.cookie =
      'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    document.cookie =
      'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + 
      location.hostname.substring(location.hostname.indexOf('.'));

    // 清除 HTML 元素上的翻译类
    document.documentElement.removeAttribute('class');
    document.body.removeAttribute('class');

    // 重新加载页面显示英文内容
    window.location.reload();
    return;
  }

  // 对于其他语言，设置 cookie 并触发翻译
  // 直接设置 cookie 并重新加载页面以确保翻译立即生效
  document.cookie = `googtrans=/en/${langCode}; path=/`;
  
  // 重新加载页面以应用翻译
  window.location.reload();
}

// RTL handling
export function handleRTL(langCode: string) {
  document.body.style.direction = langCode === 'ar' ? 'rtl' : 'ltr';
}

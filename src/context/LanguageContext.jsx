import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { LANDING_TRANSLATIONS } from '@/translations/landingTranslations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'ar';
    return localStorage.getItem('app_locale') || localStorage.getItem('mawthiq_landing_lang') || localStorage.getItem('lang') || 'ar';
  });

  const isRtl = lang === 'ar';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('app_locale', lang);
    localStorage.setItem('mawthiq_landing_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    const dict = LANDING_TRANSLATIONS[lang] || LANDING_TRANSLATIONS.ar;
    document.title = dict.site.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', dict.site.description);
    }
  }, [lang, isRtl]);

  const setLang = useCallback((nextLang) => {
    setLangState(nextLang === 'en' ? 'en' : 'ar');
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  const t = useCallback(
    (keyPath) => {
      const dict = LANDING_TRANSLATIONS[lang] || LANDING_TRANSLATIONS.ar;
      const parts = keyPath.split('.');
      let cur = dict;
      for (const part of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, part)) {
          cur = cur[part];
        } else {
          cur = undefined;
          break;
        }
      }
      if (cur !== undefined) return cur;

      // Fallback to Arabic dictionary if missing
      let fallback = LANDING_TRANSLATIONS.ar;
      for (const part of parts) {
        if (fallback && Object.prototype.hasOwnProperty.call(fallback, part)) {
          fallback = fallback[part];
        } else {
          return keyPath;
        }
      }
      return fallback;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, isRtl, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}

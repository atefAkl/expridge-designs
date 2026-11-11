import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUp, Send, Check } from 'lucide-react';
import { Container, BrandLogo } from '@/components/common';
import { SITE_CONFIG, FOOTER_LINKS } from '@/constants';
import { useLanguage } from '@/context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z" />
    </svg>
  );
}

function TwitterIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t, isRtl, lang } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  return (
    <footer
      id="contact"
      className="bg-[#0A1C38] text-slate-300 pt-16 pb-12 border-t border-[#1E3F73] relative select-none"
    >
      <Container>
        {/* Top Section: Brand + Newsletter + Contact Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10 items-center text-start font-cairo">

          {/* Brand Info & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="dark" size="lg" />
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md font-normal">
              {t('site.subTagline')}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-normal pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF7C]" />
                {t('site.address')}
              </span>
              <span className="flex items-center gap-1.5" dir="ltr">
                <Globe className="w-3.5 h-3.5 text-[#D4AF7C]" />
                {t('site.website')}
              </span>
            </div>
          </div>

          {/* Newsletter Subscription Box (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-7 rounded-2xl backdrop-blur-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-white font-bold text-base">
                  {t('footer.newsletterTitle')}
                </h4>
                <p className="text-xs text-[#94A3B8] mt-1">
                  {t('footer.newsletterSubtitle')}
                </p>
              </div>

              {/* Direct Contact Button */}
              <a
                href={`mailto:${SITE_CONFIG?.contactEmail || 'atef@exep-ridge.com'}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#D4AF7C] text-slate-200 hover:text-[#0A1C38] border border-white/15 text-xs font-bold transition-all shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t('footer.directContact')}</span>
              </a>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#081729] border border-white/15 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#D4AF7C] transition-colors"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-[#D4AF7C] hover:bg-[#B08850] text-[#0A1C38] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-md"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>{t('footer.subscribedBtn')}</span>
                  </>
                ) : (
                  <>
                    <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                    <span>{t('footer.subscribeBtn')}</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Middle Section: Single Row for Links + Social Media Icons */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-start font-cairo">

          {/* Streamlined Single Row of Links */}
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2.5 text-sm">
            {FOOTER_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-slate-300 hover:text-[#D4AF7C] transition-colors font-medium"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          {/* Social Media Channels */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={SITE_CONFIG?.socialLinks?.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.social.linkedinAria')}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={SITE_CONFIG?.socialLinks?.twitter || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('footer.social.twitterAria')}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${SITE_CONFIG?.contactEmail || 'atef@exep-ridge.com'}`}
              aria-label={t('footer.social.emailAria')}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${SITE_CONFIG?.phone || '+966501234567'}`}
              aria-label={t('footer.social.phoneAria')}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Section: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4 font-cairo">
          <p>© {CURRENT_YEAR} {t('site.fullName')}. {t('footer.copyrightSuffix')}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
            aria-label={t('footer.backToTopAria')}
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF7C]" />
          </button>
        </div>

        {/* Regulatory Note */}
        <div className="pt-6 mt-6 border-t border-white/5 text-[11px] text-slate-500 font-cairo leading-relaxed text-start">
          {t('footer.regulatoryNote')}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

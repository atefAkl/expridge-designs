import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowUp } from 'lucide-react';
import { Container, BrandLogo } from '@/components/common';
import { SITE_CONFIG, FOOTER_COLUMNS } from '@/constants';

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

/**
 * Structured Multi-Column Corporate Footer
 * Inspired by Multi Column Footer Layout reference (Halden Miller style)
 * 
 * Features:
 * - 4-Column responsive grid on desktop, 2-column on tablet, single column on mobile.
 * - Column 1: Brand identity, logo, description, and verified official social channels.
 * - Column 2: Quick navigation links to all main landing sections.
 * - Column 3: About Mawthiq strategic narrative anchors.
 * - Column 4: Verified additional & legal destinations.
 * - Bottom Bar: Dynamic copyright year, legal disclaimer, and smooth "Back to Top" action.
 * - Full Arabic RTL and keyboard accessibility support.
 */
export function Footer() {
  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="bg-[#0A1C38] text-slate-300 pt-16 pb-12 border-t border-[#1E3F73] relative select-none">
      <Container>
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10 text-right font-cairo">
          
          {/* Column 1: Brand Identity & Social Links (5 of 12 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-10 lg:border-l lg:border-white/10">
            <BrandLogo variant="dark" size="sm" showSubtitle={true} />

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-md font-normal">
              {SITE_CONFIG.subTagline}
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2 text-xs text-slate-400 font-normal pt-1">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG?.contactEmail || 'atef@exep-ridge.com'}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG?.contactEmail || 'atef@exep-ridge.com'}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
                <span dir="ltr">{SITE_CONFIG?.website || 'www.exep-ridge.com'}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
                <span>{SITE_CONFIG?.address || 'المملكة العربية السعودية، الرياض'}</span>
              </div>
            </div>

            {/* Verified Social Media Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG?.socialLinks?.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="حساب لينكد إن الرسمي"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG?.socialLinks?.twitter || '#'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="حساب تويتر الرسمي"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${SITE_CONFIG?.contactEmail || 'atef@exep-ridge.com'}`}
                aria-label="إرسال بريد إلكتروني"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${SITE_CONFIG?.phone || '+966501234567'}`}
                aria-label="الاتصال الهاتفي"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-[#D4AF7C]/50 text-slate-300 hover:text-[#D4AF7C] flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 of 12 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              {FOOTER_COLUMNS.quickLinks.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_COLUMNS.quickLinks.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#D4AF7C] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: About Mawthiq (2 of 12 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              {FOOTER_COLUMNS.about.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_COLUMNS.about.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#D4AF7C] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Additional / Legal Links (2 of 12 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              {FOOTER_COLUMNS.additional.title}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_COLUMNS.additional.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#D4AF7C] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Row: Dynamic Copyright + "Back to Top" Action */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4 font-cairo">
          <p>© {CURRENT_YEAR} {SITE_CONFIG.fullName}. جميع الحقوق محفوظة.</p>

          {/* Back to Top Smooth Scroll Action */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]"
            aria-label="العودة إلى أعلى الصفحة"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF7C]" />
          </button>
        </div>

        {/* Editorial Regulatory & Disclaimer Note (Inspired by reference footer note) */}
        <div className="pt-6 mt-6 border-t border-white/5 text-[11px] text-slate-500 font-cairo leading-relaxed text-right">
          هذه البوابة مخصصة لبرنامج استقطاب الشركاء الاستراتيجيين والتقنيين لمنظومة موثِق وجسر الخبرة للحلول البرمجية، وتهدف إلى بناء شراكات مؤسسية حقيقية وتحويل الأفكار والخبرات إلى أعمال مستدامة.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

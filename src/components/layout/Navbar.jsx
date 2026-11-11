import React, { useState } from 'react';
import { Menu, X, ArrowLeft, ArrowRight, Globe } from 'lucide-react';
import { Container, Button, BrandLogo } from '@/components/common';
import { NAV_LINKS } from '@/constants';
import { useScroll } from '@/hooks/useScroll';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll(20);
  const { t, isRtl, toggleLang } = useLanguage();
  const CtaArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E7E3D4] py-3'
          : 'bg-[#0A1C38]/70 backdrop-blur-md border-b border-white/10 py-4'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Official Brand Logo - Dynamic variant based on scroll */}
          <a href="#hero" className="flex items-center group focus:outline-none">
            <BrandLogo
              variant={isScrolled ? 'primary' : 'dark'}
              size="sm"
              showSubtitle={false}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  'px-3.5 py-2 text-sm font-bold font-cairo rounded-lg transition-colors',
                  isScrolled
                    ? 'text-[#0F2D5B] hover:text-[#D4AF7C]'
                    : 'text-slate-200 hover:text-[#D4AF7C]'
                )}
              >
                {t(link.labelKey)}
              </a>
            ))}
          </nav>

          {/* Language Switcher, CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t('nav.langSwitchAria')}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-cairo rounded-lg border transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C]',
                isScrolled
                  ? 'bg-[#F8F6EF] text-[#0F2D5B] border-[#E7E3D4] hover:border-[#D4AF7C]'
                  : 'bg-white/10 text-slate-100 border-white/20 hover:bg-white/20'
              )}
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF7C]" />
              <span>{t('nav.langSwitchLabel')}</span>
            </button>

            <a href="#final-cta" className="hidden sm:inline-flex">
              <Button variant="accent" size="sm" icon={CtaArrow} iconPosition="end">
                {t('nav.applyCta')}
              </Button>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg focus:outline-none transition-colors',
                isScrolled
                  ? 'text-[#0F2D5B] hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label={t('nav.toggleMenuAria')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-[#0A1C38] text-white rounded-2xl shadow-2xl border border-white/15 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-bold font-cairo text-slate-200 hover:text-[#D4AF7C] hover:bg-white/5 rounded-lg transition-colors"
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="#final-cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block"
                >
                  <Button variant="accent" size="sm" className="w-full" icon={CtaArrow} iconPosition="end">
                    {t('nav.applyCta')}
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;

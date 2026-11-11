import React from 'react';
import { Container, Button } from '@/components/common';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function FinalCtaSection() {
  const { t, isRtl } = useLanguage();
  const CtaArrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="final-cta"
      aria-label={t('finalCta.sectionAria')}
      className="py-24 lg:py-32 bg-gradient-to-br from-[#0F2D5B] via-[#0A1C38] to-[#071527] text-white relative overflow-hidden"
    >
      {/* Ambient Lighting & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#D4AF7C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6 font-cairo">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-200 text-xs font-bold backdrop-blur-sm border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C]" />
            <span>{t('finalCta.badge')}</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t('finalCta.headline')}
          </h2>

          <div className="w-16 h-1 bg-[#D4AF7C] rounded-full mx-auto my-4" />

          {/* Supporting Text */}
          <div className="space-y-4 max-w-2xl mx-auto text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            <p>{t('finalCta.textParagraph1')}</p>
            <p className="text-slate-300 text-sm sm:text-base">{t('finalCta.textParagraph2')}</p>
          </div>

          {/* Prominent CTA Button linking directly to application portal */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="/portal#/apply">
              <Button
                variant="accent"
                size="lg"
                icon={CtaArrow}
                iconPosition="end"
              >
                {t('finalCta.buttonLabel')}
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCtaSection;

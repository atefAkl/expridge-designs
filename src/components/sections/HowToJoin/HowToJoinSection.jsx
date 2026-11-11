import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '@/components/common';
import { HOW_TO_JOIN_DATA } from './howToJoinData';
import { Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function HowToJoinSection() {
  const { t, isRtl } = useLanguage();
  const translatedStages = t('howToJoin.stages');
  const stages = HOW_TO_JOIN_DATA.stages.map((stage, idx) => {
    const tr = Array.isArray(translatedStages) ? translatedStages[idx] : null;
    if (!tr) return stage;
    return {
      ...stage,
      shortTitle: tr.shortTitle,
      description: tr.description,
    };
  });

  const CtaArrow = isRtl ? ArrowLeft : ArrowRight;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      id="how-to-join"
      aria-label={t('howToJoin.sectionAria')}
      className="py-24 lg:py-32 bg-[#F8F6EF] relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4 font-cairo">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF7C]/40 text-[#0F2D5B] text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
            <span>{t('howToJoin.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5B] tracking-tight leading-[1.25]">
            {t('howToJoin.headline')}
          </h2>

          <div className="w-16 h-1 bg-[#D4AF7C] rounded-full mx-auto my-4" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t('howToJoin.subtitle')}
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal - Visible on lg screens) */}
        <div className="hidden lg:block relative mb-16">
          {/* Continuous Horizontal Connecting Line */}
          <div className="absolute top-10 right-12 left-12 h-0.5 bg-[#E7E3D4] z-0" />

          <div className="grid grid-cols-5 gap-6 relative z-10 text-start font-cairo">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: prefersReducedMotion ? 0 : idx * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  tabIndex={0}
                  className="group flex flex-col items-center text-center focus:outline-none"
                >
                  {/* Timeline Stage Node */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#E7E3D4] group-hover:border-[#D4AF7C] group-focus:border-[#D4AF7C] shadow-md flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                      <span className="font-mono text-xs font-black text-[#D4AF7C]">
                        {stage.number}
                      </span>
                      <Icon className="w-6 h-6 text-[#0F2D5B] mt-1 group-hover:text-[#B08850] transition-colors" />
                    </div>
                  </div>

                  {/* Stage Details */}
                  <h3 className="text-base font-bold text-[#0F2D5B] group-hover:text-[#0A1C38] transition-colors mb-2 leading-snug">
                    {stage.shortTitle}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET TIMELINE (Vertical - Visible below lg screens) */}
        <div className="block lg:hidden relative mb-14 max-w-xl mx-auto">
          {/* Continuous Vertical Line running through nodes */}
          <div className={`absolute top-6 bottom-6 ${isRtl ? 'right-8' : 'left-8'} w-0.5 bg-[#E7E3D4]`} />

          <div className="space-y-8 relative z-10 text-start font-cairo">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: isRtl ? -15 : 15 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  tabIndex={0}
                  className={`group flex items-start gap-5 ${isRtl ? 'pr-2' : 'pl-2'} focus:outline-none`}
                >
                  {/* Vertical Node */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-[#E7E3D4] group-hover:border-[#D4AF7C] shadow-md flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                    <Icon className="w-6 h-6 text-[#0F2D5B]" />
                  </div>

                  {/* Content Box */}
                  <div className="bg-white/80 border border-[#E7E3D4] rounded-2xl p-5 shadow-sm flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#D4AF7C]">
                        {stage.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0F2D5B]">
                        {stage.shortTitle}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Centered Action Button */}
        <div className="text-center pt-6">
          <a href={HOW_TO_JOIN_DATA.cta.href}>
            <Button
              variant="accent"
              size="lg"
              icon={CtaArrow}
              iconPosition="end"
            >
              {t('howToJoin.ctaLabel')}
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default HowToJoinSection;

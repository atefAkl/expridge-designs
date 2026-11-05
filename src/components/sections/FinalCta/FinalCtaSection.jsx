import React from 'react';
import { Container, Button } from '@/components/common';
import { FINAL_CTA_DATA } from './finalCtaData';
import { Sparkles, ArrowLeft } from 'lucide-react';

/**
 * Section 08: Final CTA (الدعوة الختامية)
 * Design Type: Immersive CTA Section
 * 
 * Features:
 * - Immersive dark brand atmosphere (#0A1C38 / #0F2D5B).
 * - Subtle ambient particle glow and geometric accents.
 * - Prominent headline and exact approved copy from DOC ID: MOS-CVS-001 (Page 8).
 * - Primary action button leading to the application destination.
 */
export function FinalCtaSection() {
  const { badge, headline, textParagraph1, textParagraph2, ctaButton } = FINAL_CTA_DATA;

  return (
    <section
      id="final-cta"
      aria-label="الدعوة الختامية"
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
            <span>{badge}</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {headline}
          </h2>

          <div className="w-16 h-1 bg-[#D4AF7C] rounded-full mx-auto my-4" />

          {/* Supporting Text */}
          <div className="space-y-4 max-w-2xl mx-auto text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            <p>{textParagraph1}</p>
            <p className="text-slate-300 text-sm sm:text-base">{textParagraph2}</p>
          </div>

          {/* Prominent CTA Button */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="accent"
              size="lg"
              icon={ArrowLeft}
              iconPosition="end"
              onClick={() => {
                alert('صفحة طلب الانضمام (Partner Application Page) سيتم تفعيلها في المرحلة القادمة وفقاً للوثيقة المعتمدة.');
              }}
            >
              {ctaButton.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCtaSection;

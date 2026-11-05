import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common';
import { PARTNERSHIP_MODEL_DATA } from './partnershipModelData';
import { Sparkles, Info } from 'lucide-react';

/**
 * Section 04: What Partnership Means (مفهوم الشراكة)
 * Design Type: Split Layout / Narrative Sections (Isla Porter style)
 * 
 * Explicit Directive: Zero images, zero stock photos, zero illustrations.
 * Pure typographic and geometric compositional craftsmanship using official brand tokens.
 * 
 * Features:
 * - Split composition: Narrative statement anchor on one side, 5 sequential numbered pillars on the other.
 * - Progressive scroll reveal animations with prefers-reduced-motion support.
 * - 100% strictly preserved content from official document DOC ID: MOS-CVS-001 (Page 5 & 6).
 */
export function PartnershipModelSection() {
  const { badge, headline, intro, subheading, pillars, note } = PARTNERSHIP_MODEL_DATA;
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
      id="partnership-model"
      aria-label="مفهوم الشراكة"
      className="py-24 lg:py-32 bg-white border-b border-[#E7E3D4]/80 relative overflow-hidden"
    >
      {/* Subtle Abstract Geometric Accents - No Images */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#F8F6EF] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF7C]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* SIDE 1: Headline & Narrative Anchor (5 of 12 cols) */}
          <div className="lg:col-span-5 space-y-8 text-right font-cairo lg:sticky lg:top-28">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F6EF] border border-[#D4AF7C]/40 text-[#0F2D5B] text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
              <span>{badge}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5B] tracking-tight leading-[1.25]">
              {headline}
            </h2>

            {/* Gold Divider Rule */}
            <div className="w-16 h-1 bg-[#D4AF7C] rounded-full" />

            {/* Narrative Intro Statement */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {intro.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Subheading Prompt */}
            <p className="text-lg font-bold text-[#0F2D5B] pt-2 border-t border-[#E7E3D4]">
              {subheading}
            </p>

            {/* Official Note Card (Abstract Text & Border only) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8F6EF] border border-[#D4AF7C]/40 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2D5B] uppercase tracking-wider">
                <Info className="w-4 h-4 text-[#D4AF7C] shrink-0" />
                <span>{note.title}:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {note.content}
              </p>
            </div>
          </div>

          {/* SIDE 2: The 5 Sequential Pillars (Isla Porter style - 7 of 12 cols) */}
          <div className="lg:col-span-7 space-y-2 text-right font-cairo">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group p-6 sm:p-8 rounded-2xl transition-all duration-300 border-b border-[#E7E3D4] hover:bg-[#F8F6EF]/70 hover:border-[#D4AF7C]/40 hover:shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
                  {/* Pillar Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D5B] group-hover:text-[#0A1C38] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Typographic Number Marker */}
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#D4AF7C] group-hover:scale-105 transition-transform shrink-0">
                    {pillar.number}
                  </span>
                </div>

                {/* Pillar Description */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl group-hover:text-slate-800 transition-colors">
                  {pillar.description}
                </p>

                {/* Subtle active indicator underline */}
                <div className="h-0.5 w-0 group-hover:w-16 bg-[#D4AF7C] rounded-full mt-4 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default PartnershipModelSection;

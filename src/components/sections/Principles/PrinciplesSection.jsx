import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common';
import { PRINCIPLES_DATA } from './principlesData';
import { Sparkles } from 'lucide-react';

/**
 * Section 05: Our Principles (المبادئ)
 * Design Type: Numbered Manifesto / Vertical List (Shadcn UI Blocks style)
 * 
 * Features:
 * - Minimal, editorial-style numbered manifesto with prominent 01–05 numbering.
 * - Clean horizontal separators and generous breathing room.
 * - Restrained hover & keyboard focus interactions.
 * - 100% strictly preserved content from official document DOC ID: MOS-CVS-001 (Page 6).
 * - Zero cards, zero decorative illustrations.
 */
export function PrinciplesSection() {
  const { badge, headline, subtitle, principles } = PRINCIPLES_DATA;

  return (
    <section
      id="principles"
      aria-label="المبادئ التي نبني عليها"
      className="py-24 lg:py-32 bg-white border-b border-[#E7E3D4]/80 relative overflow-hidden"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-right font-cairo space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F6EF] border border-[#D4AF7C]/40 text-[#0F2D5B] text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5B] tracking-tight leading-[1.25]">
            {headline}
          </h2>

          <div className="w-16 h-1 bg-[#D4AF7C] rounded-full my-4" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Numbered Manifesto Vertical List */}
        <div className="border-t border-[#E7E3D4]">
          {principles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              tabIndex={0}
              className="group py-8 sm:py-10 border-b border-[#E7E3D4] transition-all duration-300 focus:outline-none focus:bg-[#F8F6EF]/80 hover:bg-[#F8F6EF]/40 px-3 sm:px-6 rounded-2xl"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-16">
                {/* Prominent Number (01–05) */}
                <div className="shrink-0">
                  <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-[#D4AF7C] group-hover:text-[#B08850] transition-colors tracking-tight select-none inline-block">
                    {item.number}
                  </span>
                </div>

                {/* Principle Content: Title & Dedicated Description Area */}
                <div className="space-y-2 text-right font-cairo flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2D5B] group-hover:text-[#0A1C38] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PrinciplesSection;

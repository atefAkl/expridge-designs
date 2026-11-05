import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Sparkles } from 'lucide-react';
import { Container } from '@/components/common';
import { FAQ_DATA } from './faqData';

/**
 * Section 07: FAQ (الأسئلة الشائعة)
 * Design Type: Accordion Layout (FAQ Accordion IX3 GSAP x Webflow style)
 * 
 * Features:
 * - Clean vertical accordion with plus (+) and minus (−) indicators.
 * - Single-item open at a time for optimal reading experience.
 * - Smooth Framer Motion height transitions without content clipping.
 * - Full keyboard accessibility (Enter/Space, visible focus rings, ARIA).
 * - 100% strictly preserved content from official document DOC ID: MOS-CVS-001 (Page 7 & 8).
 */
export function FaqSection() {
  const { badge, headline, subtitle, faqs } = FAQ_DATA;
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="الأسئلة الشائعة"
      className="py-24 lg:py-32 bg-white border-b border-[#E7E3D4]/80 relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4 font-cairo">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F6EF] border border-[#D4AF7C]/40 text-[#0F2D5B] text-xs font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
            <span>{badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5B] tracking-tight leading-[1.25]">
            {headline}
          </h2>

          <div className="w-16 h-1 bg-[#D4AF7C] rounded-full mx-auto my-4" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="max-w-3xl mx-auto border-t border-[#E7E3D4] divide-y divide-[#E7E3D4]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="py-2 font-cairo text-right">
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-3 sm:px-4 flex items-center justify-between gap-4 text-right rounded-xl transition-colors hover:bg-[#F8F6EF]/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF7C] cursor-pointer group"
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0F2D5B] group-hover:text-[#0A1C38] leading-snug">
                    {faq.question}
                  </span>

                  {/* Plus / Minus Indicator */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#D4AF7C] text-[#0F2D5B]'
                        : 'bg-[#F8F6EF] text-[#0F2D5B] group-hover:bg-[#E7E3D4]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-4 pb-6 pt-1 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;

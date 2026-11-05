import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Container } from '@/components/common';
import { TARGET_PARTNERS_DATA } from './targetPartnersData';

/**
 * Section 03: Who We're Looking For (من نبحث عنهم)
 * Design Type: Interactive Expertise Grid (Services Block — Awwwards style)
 * 
 * Features:
 * - Architectural framed block container with rounded corners and high-contrast styling.
 * - Seamless 3x2 grid with clean borders between cells (matching Awwwards reference).
 * - Active cell highlights with brand accent (Gold #D4AF7C), white/dark contrast, and arrow indicator.
 * - Inactive cells display domain title, number, icon, and subtle preview.
 * - 100% strictly preserved text from official document DOC ID: MOS-CVS-001 (Page 4 & 5).
 * - Full touch-friendly and keyboard accessibility support.
 */
export function TargetPartnersSection() {
  const { badge, headline, intro, subheading, domains } = TARGET_PARTNERS_DATA;
  const [activeId, setActiveId] = useState(domains[0]?.id || null);

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="target-partners"
      aria-label="من نبحث عنهم"
      className="py-24 lg:py-32 bg-[#F8F6EF] relative overflow-hidden"
    >
      <Container>
        {/* Architectural Framed Container (Awwwards Services Block style) */}
        <div className="rounded-[2.5rem] bg-[#0A1C38] border-2 border-white/15 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Brand Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF7C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Editorial Header inside the frame */}
          <div className="max-w-3xl mb-12 sm:mb-16 space-y-5 text-right font-cairo relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4AF7C]/40 text-[#D4AF7C] text-xs font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.25]">
              {headline}
            </h2>

            <div className="w-16 h-1 bg-[#D4AF7C] rounded-full my-4" />

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              {intro}
            </p>

            <p className="text-base sm:text-lg font-bold text-amber-200/90 pt-1">
              {subheading}
            </p>
          </div>

          {/* Seamless Interactive Grid of 6 Cells */}
          <div className="rounded-2xl overflow-hidden border border-white/15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/15 relative z-10">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isActive = activeId === domain.id;

              return (
                <div
                  key={domain.id}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  onClick={() => toggleItem(domain.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleItem(domain.id);
                    }
                  }}
                  onMouseEnter={() => setActiveId(domain.id)}
                  className={`p-7 sm:p-8 transition-all duration-300 cursor-pointer select-none text-right font-cairo flex flex-col justify-between min-h-[260px] sm:min-h-[290px] relative ${
                    isActive
                      ? 'bg-[#D4AF7C] text-[#0F2D5B]'
                      : 'bg-[#0F2D5B] hover:bg-[#132F5C] text-white'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Number Index */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-[#0F2D5B] text-[#D4AF7C]'
                            : 'bg-white/10 text-[#D4AF7C]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span
                        className={`text-xs font-mono font-bold tracking-widest ${
                          isActive ? 'text-[#0F2D5B]/70' : 'text-slate-400'
                        }`}
                      >
                        {domain.number}
                      </span>
                    </div>

                    {/* Domain Title */}
                    <h3
                      className={`text-xl sm:text-2xl font-bold tracking-tight mb-4 transition-colors ${
                        isActive ? 'text-[#0F2D5B]' : 'text-white'
                      }`}
                    >
                      {domain.title}
                    </h3>

                    {/* Detailed Content */}
                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.div
                          key="active-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          {domain.points ? (
                            <ul className="space-y-2 pt-2 text-sm text-[#0F2D5B] font-medium border-t border-[#0F2D5B]/15">
                              {domain.points.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F2D5B] mt-2 shrink-0" />
                                  <span className="leading-relaxed">{pt}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="pt-2 text-sm text-[#0F2D5B] leading-relaxed font-medium border-t border-[#0F2D5B]/15">
                              {domain.text}
                            </p>
                          )}
                        </motion.div>
                      ) : (
                        <p className="text-xs text-slate-300 font-normal line-clamp-2 leading-relaxed">
                          {domain.points ? domain.points[0] : domain.text}
                        </p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Action Row with Arrow (Direct reference to Awwwards Services Block) */}
                  <div className="pt-6 mt-4 border-t border-black/10 flex items-center justify-between text-xs">
                    <span
                      className={`font-bold transition-colors ${
                        isActive ? 'text-[#0F2D5B]' : 'text-slate-400'
                      }`}
                    >
                      {isActive ? 'المجال المحدد' : 'انقر للاستكشاف'}
                    </span>
                    <ArrowLeft
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive
                          ? 'text-[#0F2D5B] -translate-x-1 scale-110'
                          : 'text-slate-400 group-hover:text-white'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default TargetPartnersSection;

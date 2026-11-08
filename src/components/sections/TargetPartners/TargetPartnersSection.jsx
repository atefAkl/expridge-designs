import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Container, SectionHeader } from '@/components/common';
import { TARGET_PARTNERS_DATA } from './targetPartnersData';

export function TargetPartnersSection() {
  const { badge, headline, intro, subheading, domains } = TARGET_PARTNERS_DATA;
  const [selectedId, setSelectedId] = useState(domains[0]?.id || null);

  return (
    <section
      id="target-partners"
      aria-label="من نبحث عنهم"
      className="py-20 lg:py-28 bg-[#0A1C38] text-white relative overflow-hidden border-b border-white/10"
    >
      {/* Ambient Brand Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF7C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Unified Centered Section Header with Lateral Lines */}
        <SectionHeader
          badge={badge}
          title={headline}
          subtitle={intro}
          centered={true}
          theme="dark"
          goldDivider={true}
          showSideLines={true}
          className="mb-10 sm:mb-14"
        />

        {subheading && (
          <p className="text-center text-sm sm:text-base font-bold text-[#D4AF7C] mb-8 font-cairo">
            {subheading}
          </p>
        )}

        {/* Stable 3x2 Grid - Zero Height Shifts / Zero Jitter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            const isSelected = selectedId === domain.id;

            return (
              <div
                key={domain.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedId(domain.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedId(domain.id);
                  }
                }}
                className={`p-7 rounded-2xl transition-all duration-300 cursor-pointer select-none text-right font-cairo flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#0F2D5B] border-[#D4AF7C] shadow-lg shadow-[#D4AF7C]/10 ring-1 ring-[#D4AF7C]'
                    : 'bg-[#0E2445]/80 hover:bg-[#0F2D5B] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Row: Icon + Number Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#D4AF7C] text-[#0A1C38]'
                          : 'bg-white/10 text-[#D4AF7C]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        isSelected ? 'text-[#D4AF7C]' : 'text-slate-400'
                      }`}
                    >
                      {domain.number}
                    </span>
                  </div>

                  {/* Domain Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold tracking-tight mb-4 transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-100'
                    }`}
                  >
                    {domain.title}
                  </h3>

                  {/* Bullet Points / Content - Stable Height and Visuals */}
                  {domain.points ? (
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-normal">
                      {domain.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D4AF7C] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {domain.text}
                    </p>
                  )}
                </div>

                {/* Bottom Row Accent */}
                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-[#D4AF7C] font-bold' : 'text-slate-400'}>
                    {isSelected ? 'المجال المحدد' : 'انقر للاختيار'}
                  </span>
                  <ArrowLeft
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected
                        ? 'text-[#D4AF7C] -translate-x-1'
                        : 'text-slate-500'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default TargetPartnersSection;

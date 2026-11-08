import React from 'react';
import { Container, SectionHeader } from '@/components/common';
import { PARTNERSHIP_MODEL_DATA } from './partnershipModelData';
import { Info, CheckCircle } from 'lucide-react';

export function PartnershipModelSection() {
  const { badge, headline, intro, subheading, pillars, note } = PARTNERSHIP_MODEL_DATA;

  return (
    <section
      id="partnership-model"
      aria-label="مفهوم الشراكة"
      className="py-20 lg:py-28 bg-white border-b border-[#E7E3D4]/80 relative overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#F8F6EF] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF7C]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Centered Header with Lateral Lines */}
        <SectionHeader
          badge={badge}
          title={headline}
          subtitle={intro[1] || intro[0]}
          centered={true}
          theme="light"
          goldDivider={true}
          showSideLines={true}
          className="mb-12"
        />

        {subheading && (
          <p className="text-center text-sm sm:text-base font-bold text-[#0F2D5B] mb-10 font-cairo">
            {subheading}
          </p>
        )}

        {/* Full-width Responsive 5-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`p-7 rounded-2xl bg-[#F8F6EF]/70 border border-[#E7E3D4] hover:border-[#D4AF7C]/60 hover:shadow-lg transition-all duration-300 text-right font-cairo flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#D4AF7C]">
                    {pillar.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E7E3D4] flex items-center justify-center text-[#0F2D5B]">
                    <CheckCircle className="w-4 h-4 text-[#D4AF7C]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2D5B] mb-2 leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E7E3D4]/60">
                <span className="text-[11px] font-bold text-[#0F2D5B]/70 tracking-wider">
                  ركيزة أساسية في الشراكة
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory Note Card */}
        {note && (
          <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#F8F6EF] border border-[#D4AF7C]/40 shadow-sm text-right font-cairo">
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F2D5B] uppercase tracking-wider mb-2">
              <Info className="w-4 h-4 text-[#D4AF7C] shrink-0" />
              <span>{note.title}:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {note.content}
            </p>
          </div>
        )}

      </Container>
    </section>
  );
}

export default PartnershipModelSection;

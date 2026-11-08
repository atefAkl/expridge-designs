import React from 'react';
import { Container, SectionHeader } from '@/components/common';
import { PRINCIPLES_DATA } from './principlesData';

export function PrinciplesSection() {
  const { badge, headline, subtitle, principles } = PRINCIPLES_DATA;

  return (
    <section
      id="principles"
      aria-label="المبادئ التي نبني عليها"
      className="py-20 lg:py-28 bg-[#F8F6EF] border-b border-[#E7E3D4]/80 relative overflow-hidden"
    >
      <Container>
        {/* Centered Section Header with Lateral Lines */}
        <SectionHeader
          badge={badge}
          title={headline}
          subtitle={subtitle}
          centered={true}
          theme="light"
          goldDivider={true}
          showSideLines={true}
          className="mb-14"
        />

        {/* Principles Grid in Elegant White Cards */}
        <div className="max-w-4xl mx-auto space-y-4 font-cairo">
          {principles.map((item) => (
            <div
              key={item.id}
              tabIndex={0}
              className="group p-6 sm:p-7 bg-white rounded-2xl border border-[#E7E3D4] hover:border-[#D4AF7C] hover:shadow-md transition-all duration-300 text-right flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8"
            >
              {/* Number (01–05) */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-[#F8F6EF] border border-[#E7E3D4] flex items-center justify-center group-hover:bg-[#0F2D5B] transition-colors">
                <span className="font-mono text-2xl font-black text-[#D4AF7C] group-hover:text-white transition-colors">
                  {item.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2D5B] group-hover:text-[#0A1C38] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default PrinciplesSection;

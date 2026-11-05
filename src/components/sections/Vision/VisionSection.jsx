import React from 'react';
import { Container } from '@/components/common';
import { VISION_DATA } from './visionData';
import { Sparkles, ShieldCheck } from 'lucide-react';

/**
 * Section: Our Vision (قسم الرؤية)
 * Design Type: Editorial / Statement Layout (Inspired by Gemic — Our Impact)
 * 
 * Features:
 * - Left side: Large editorial typography, comfortable line length, spacious composition.
 * - Right side: Art-directed two-image composition with deliberate proportions and gold accents.
 * - 100% strict content adherence to official document DOC ID: MOS-CVS-001 (Page 3 & 4).
 * - Zero cards, zero invented copy.
 */
export function VisionSection() {
  const { headline, lead, paragraphs, highlight, images, badge } = VISION_DATA;

  return (
    <section
      id="vision"
      aria-label="رؤية موثِق"
      className="py-24 lg:py-32 bg-[#F8F6EF] border-b border-[#E7E3D4]/80 overflow-hidden relative"
    >
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF7C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0F2D5B]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Editorial Statement & Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-8 text-right font-cairo">
            
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4AF7C]/40 text-[#0F2D5B] text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
              <span>{badge}</span>
            </div>

            {/* Large Statement Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5B] tracking-tight leading-[1.25]">
              {headline}
            </h2>

            {/* Gold Accent Rule */}
            <div className="w-16 h-1 bg-[#D4AF7C] rounded-full" />

            {/* Lead Narrative */}
            <p className="text-xl sm:text-2xl font-bold text-[#0F2D5B]/90 leading-snug">
              {lead}
            </p>

            {/* Body Narrative - Comfortable Line Length & Spacious Leading */}
            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Strategic Callout */}
            <div className="border-r-4 border-[#D4AF7C] pr-5 py-3 bg-white/70 rounded-l-2xl border border-r-4 border-slate-200/60 shadow-sm max-w-2xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#D4AF7C] shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-[#0F2D5B] font-bold leading-relaxed">
                  {highlight}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Art-Directed Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E7E3D4] bg-white group">
                <img
                  src={images.primary.src}
                  alt={images.primary.alt}
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle Image Vignette & Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C38]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Image Caption Label */}
                <div className="absolute bottom-4 right-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-sm">
                  <p className="text-xs font-bold text-[#0F2D5B] font-cairo">
                    {images.primary.caption}
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-3/5 sm:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group hidden sm:block">
                <img
                  src={images.secondary.src}
                  alt={images.secondary.alt}
                  className="w-full h-44 sm:h-52 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C38]/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Secondary Caption */}
                <div className="absolute bottom-2.5 right-2.5 left-2.5 p-2 rounded-lg bg-[#0F2D5B]/90 backdrop-blur-md border border-white/10">
                  <p className="text-[11px] font-bold text-white font-cairo truncate">
                    {images.secondary.caption}
                  </p>
                </div>
              </div>

              {/* Decorative Geometric Gold Corner Accents */}
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#D4AF7C] rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF7C] rounded-br-xl pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default VisionSection;

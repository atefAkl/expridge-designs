import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSlide - Renders the cinematic background image and dark gradient overlay
 * Supports smooth crossfade and subtle cinematic motion
 */
export function HeroSlide({ slide, isActive, prefersReducedMotion, isRtl = true }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
      aria-hidden={!isActive}
    >
      {/* Background Image with optional subtle slow pan/scale */}
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={
          isActive && !prefersReducedMotion
            ? { scale: [1, 1.05] }
            : { scale: 1 }
        }
        transition={{
          duration: 10,
          ease: 'linear',
        }}
      >
        <img
          src={slide.image}
          alt={slide.imageAlt}
          className="w-full h-full object-cover object-center select-none"
          loading={isActive ? 'eager' : 'lazy'}
        />
      </motion.div>

      {/* Primary Gradient Overlay for text contrast & cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C38] via-[#0F2D5B]/85 to-[#0A1C38]/80 mix-blend-multiply" />

      {/* Secondary Directional Gradient (adapts to RTL / LTR reading flow) */}
      <div
        className={`absolute inset-0 ${
          isRtl
            ? 'bg-gradient-to-l from-[#0A1C38]/95 via-[#0F2D5B]/75 to-transparent'
            : 'bg-gradient-to-r from-[#0A1C38]/95 via-[#0F2D5B]/75 to-transparent'
        }`}
      />

      {/* Subtle Brand Golden Glow Accent */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF7C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Tech Blue Depth Glow */}
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

export default HeroSlide;

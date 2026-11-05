import React from 'react';
import { HeroCarousel } from './HeroCarousel';

/**
 * Section: Hero Section
 * Design: Full-width Animated Hero Carousel
 * 
 * Cinematic, technology-oriented carousel featuring 3 distinct slides,
 * smooth Framer Motion transitions, zero layout shifts, pause-on-hover,
 * touch-swipe support, and strict brand identity alignment.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="القسم الرئيسي — بوابة الشركاء"
      className="relative w-full bg-[#0A1C38] overflow-hidden"
    >
      <HeroCarousel />
    </section>
  );
}

export default HeroSection;

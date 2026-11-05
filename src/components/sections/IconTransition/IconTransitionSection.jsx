import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, Cpu, Cloud, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';
import { Container } from '@/components/common';

/**
 * Animated Icon Transition Section
 * Positioned strictly between Final CTA and the Footer.
 * Design Reference: Page-Appear Animation — Awwwards style
 * 
 * Features:
 * - Independent structural component.
 * - Horizontal constellation of animated brand technology symbols.
 * - Subtle floating, pulsing, and staggered reveal animations.
 * - Respects prefers-reduced-motion.
 * - Seamlessly bridges the immersive dark CTA to the structured corporate Footer.
 */
export function IconTransitionSection() {
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

  const symbols = [
    { id: 'shield', icon: ShieldCheck, label: 'الموثوقية والأمان' },
    { id: 'layers', icon: Layers, label: 'حلول برمجية متكاملة' },
    { id: 'cube', icon: Box, label: 'تطوير المنتجات' },
    { id: 'sparkle', icon: Sparkles, label: 'الابتكار المستمر', isAccent: true },
    { id: 'cpu', icon: Cpu, label: 'هندسة الأنظمة' },
    { id: 'cloud', icon: Cloud, label: 'التحول الرقمي' },
    { id: 'growth', icon: TrendingUp, label: 'النمو والتوسع' },
  ];

  return (
    <section
      aria-label="الانتقال البصري للمنظومة"
      className="py-14 bg-[#081729] border-t border-b border-white/10 relative overflow-hidden select-none"
    >
      {/* Background Ambient Mesh Light */}
      <div className="absolute inset-0 bg-radial from-[#132F5C]/40 via-transparent to-transparent pointer-events-none" />

      <Container>
        {/* Horizontal Constellation of Animated Icons */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-14 flex-wrap relative z-10">
          {symbols.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, idx % 2 === 0 ? -6 : 6, 0],
                      }
                }
                transition={{
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.15,
                }}
                className="group relative flex flex-col items-center"
              >
                {/* Icon Wrapper */}
                <div
                  className={`w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                    item.isAccent
                      ? 'bg-[#D4AF7C] text-[#0F2D5B] border-[#E8CCA0] shadow-lg shadow-[#D4AF7C]/20 scale-110'
                      : 'bg-white/5 text-[#D4AF7C] border-white/10 group-hover:border-[#D4AF7C]/50 group-hover:bg-white/10 group-hover:scale-105'
                  }`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" />
                </div>

                {/* Subtle Hover Tooltip Label */}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -bottom-7 text-[10px] sm:text-xs font-cairo text-slate-300 whitespace-nowrap pointer-events-none bg-[#0F2D5B] px-2 py-0.5 rounded border border-white/10 shadow-md">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default IconTransitionSection;

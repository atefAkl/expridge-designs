import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, Cpu, Cloud, TrendingUp, ShieldCheck, Sparkles, Code2, Network, Workflow } from 'lucide-react';

/**
 * Animated Infinite Marquee / Carousel of Brand Technology Symbols
 * Clean, distinct white background as requested in video feedback
 */
export function IconTransitionSection() {
  const symbols = [
    { id: 'shield', icon: ShieldCheck, label: 'الموثوقية والأمان' },
    { id: 'layers', icon: Layers, label: 'حلول برمجية متكاملة' },
    { id: 'cube', icon: Box, label: 'تطوير المنتجات' },
    { id: 'sparkle', icon: Sparkles, label: 'الابتكار المستمر', isAccent: true },
    { id: 'cpu', icon: Cpu, label: 'هندسة الأنظمة' },
    { id: 'cloud', icon: Cloud, label: 'التحول الرقمي' },
    { id: 'growth', icon: TrendingUp, label: 'النمو والتوسع' },
    { id: 'code', icon: Code2, label: 'التميز البرمجي' },
    { id: 'network', icon: Network, label: 'الشراكات المتكاملة' },
    { id: 'workflow', icon: Workflow, label: 'إدارة العمليات' },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...symbols, ...symbols];

  return (
    <section
      aria-label="منظومة موثِق التقنية"
      className="py-12 bg-white border-t border-b border-[#E7E3D4] relative overflow-hidden select-none"
    >
      {/* Lateral Gradient Fades for Smooth Infinite Illusion */}
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-6 sm:gap-10 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.id}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F8F6EF] border border-[#E7E3D4] hover:border-[#D4AF7C] transition-all shadow-sm shrink-0 font-cairo"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    item.isAccent
                      ? 'bg-[#0F2D5B] text-[#D4AF7C]'
                      : 'bg-white text-[#0F2D5B] border border-[#E7E3D4]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0F2D5B] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default IconTransitionSection;

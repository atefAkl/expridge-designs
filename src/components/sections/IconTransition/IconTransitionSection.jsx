import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

import phpLogo from '@/assets/brands/php.jpg';
import laravelLogo from '@/assets/brands/laravel.jfif';
import jsLogo from '@/assets/brands/js.webp';
import nodejsLogo from '@/assets/brands/nodejs.png';
import expressLogo from '@/assets/brands/express.js.png';
import reactLogo from '@/assets/brands/react.webp';
import mysqlLogo from '@/assets/brands/MySQL.png';
import pgsqlLogo from '@/assets/brands/pgsql.jfif';
import mongodbLogo from '@/assets/brands/mongodb.svg';
import githubLogo from '@/assets/brands/github.webp';
import postmanLogo from '@/assets/brands/postman.png';
import vscodeLogo from '@/assets/brands/Visual_Studio_Code.png';
import jetbrainsLogo from '@/assets/brands/jetbrains.png';

const BRAND_LOGOS = [
  { id: 'php', logo: phpLogo, label: 'PHP' },
  { id: 'laravel', logo: laravelLogo, label: 'Laravel' },
  { id: 'js', logo: jsLogo, label: 'JavaScript' },
  { id: 'nodejs', logo: nodejsLogo, label: 'Node.js' },
  { id: 'express', logo: expressLogo, label: 'Express.js' },
  { id: 'react', logo: reactLogo, label: 'React' },
  { id: 'mysql', logo: mysqlLogo, label: 'MySQL' },
  { id: 'pgsql', logo: pgsqlLogo, label: 'PostgreSQL' },
  { id: 'mongodb', logo: mongodbLogo, label: 'MongoDB' },
  { id: 'github', logo: githubLogo, label: 'GitHub' },
  { id: 'postman', logo: postmanLogo, label: 'Postman' },
  { id: 'vscode', logo: vscodeLogo, label: 'VS Code' },
  { id: 'jetbrains', logo: jetbrainsLogo, label: 'JetBrains' },
];

/**
 * Animated Infinite Marquee / Carousel of Technology Brand Logos
 */
export function IconTransitionSection() {
  const { t } = useLanguage();

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section
      aria-label={t('brandsMarquee.sectionAria')}
      className="py-12 bg-white border-t border-b border-[#E7E3D4] relative overflow-hidden select-none"
    >
      {/* Lateral Gradient Fades for Smooth Infinite Illusion */}
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track (fixed LTR track for consistent continuous motion in RTL & LTR) */}
      <div className="flex w-full overflow-hidden" dir="ltr">
        <motion.div
          className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F8F6EF] border border-[#E7E3D4] hover:border-[#D4AF7C] transition-all shadow-sm shrink-0 font-cairo"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white border border-[#E7E3D4] p-1.5 overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.label}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0F2D5B] whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default IconTransitionSection;

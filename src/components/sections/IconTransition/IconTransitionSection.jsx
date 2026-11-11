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
      className="py-3 bg-white border-t border-b border-[#E7E3D4] relative overflow-hidden select-none"
    >
      {/* Lateral Gradient Fades for Smooth Infinite Illusion */}
      <div className="absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track (fixed LTR track for consistent continuous motion in RTL & LTR) */}
      <div className="flex w-full overflow-hidden py-10" dir="ltr">
        <motion.div
          className="flex items-center gap-10 sm:gap-14 shrink-0 pr-10 sm:pr-14"
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
              tabIndex={0}
              aria-label={item.label}
              className="group relative p-0 m-0 flex items-center justify-center shrink-0 font-cairo focus:outline-none"
            >
              <span
                role="tooltip"
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-200 z-20 px-2.5 py-1 rounded-md bg-[#0F2D5B] text-white text-xs font-semibold whitespace-nowrap shadow-md"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0F2D5B]"
                />
              </span>
              <img
                src={item.logo}
                alt={item.label}
                className="h-20 w-auto max-w-none object-contain rounded-xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:opacity-100 group-hover:scale-105 transition-all duration-300 drop-shadow-[0_8px_18px_rgba(15,45,91,0.18)] group-hover:drop-shadow-[0_12px_24px_rgba(15,45,91,0.28)]"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default IconTransitionSection;

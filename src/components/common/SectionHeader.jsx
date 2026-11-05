import React from 'react';
import { cn } from '@/utils/cn';

/**
 * SectionHeader component with official brand styling (Cairo typography, gold accent dividers)
 */
export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light', // 'light' | 'dark'
  goldDivider = true,
  className = '',
}) {
  const isDark = theme === 'dark';

  return (
    <div className={cn('mb-12 sm:mb-16', centered && 'text-center mx-auto max-w-3xl', className)}>
      {badge && (
        <span
          className={cn(
            'inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full border',
            isDark
              ? 'bg-[#132F5C] text-[#D4AF7C] border-[#D4AF7C]/30'
              : 'bg-[#F8F6EF] text-[#0F2D5B] border-[#D4AF7C]/40'
          )}
        >
          {badge}
        </span>
      )}

      {title && (
        <h2
          className={cn(
            'text-2xl sm:text-3xl lg:text-4xl font-extrabold font-cairo tracking-tight leading-snug',
            isDark ? 'text-white' : 'text-[#0F2D5B]'
          )}
        >
          {title}
        </h2>
      )}

      {goldDivider && (
        <div
          className={cn(
            'h-1 w-16 bg-[#D4AF7C] rounded-full my-4',
            centered ? 'mx-auto' : 'mr-0'
          )}
        />
      )}

      {subtitle && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed font-cairo',
            isDark ? 'text-[#94A3B8]' : 'text-[#475569]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;

import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/utils/cn';

/**
 * SectionHeader component with official brand styling
 * Features centered Cairo typography, lateral accent borders, and gold divider
 */
export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  theme = 'light', // 'light' | 'dark'
  goldDivider = true,
  showSideLines = true,
  className = '',
}) {
  const isDark = theme === 'dark';

  return (
    <div className={cn('mb-10 sm:mb-14', centered && 'text-center mx-auto max-w-3xl', className)}>
      {badge && (
        <div className={cn('flex items-center gap-3 mb-4', centered && 'justify-center')}>
          {showSideLines && centered && (
            <div className={cn('h-[1px] w-10 sm:w-16 rounded-full', isDark ? 'bg-white/20' : 'bg-[#D4AF7C]/40')} />
          )}

          <span
            className={cn(
              'inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold font-cairo tracking-wide rounded-full border shadow-sm',
              isDark
                ? 'bg-[#132F5C]/80 text-[#D4AF7C] border-[#D4AF7C]/40 backdrop-blur-md'
                : 'bg-white/90 text-[#0F2D5B] border-[#D4AF7C]/40'
            )}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
            <span>{badge}</span>
          </span>

          {showSideLines && centered && (
            <div className={cn('h-[1px] w-10 sm:w-16 rounded-full', isDark ? 'bg-white/20' : 'bg-[#D4AF7C]/40')} />
          )}
        </div>
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
            'text-base sm:text-lg leading-relaxed font-cairo font-normal',
            isDark ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;

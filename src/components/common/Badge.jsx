import React from 'react';
import { cn } from '@/utils/cn';

const VARIANTS = {
  gold: 'bg-[#F8F2E8] text-[#9A7336] border-[#D4AF7C]/40',
  navy: 'bg-[#F0F4FA] text-[#0F2D5B] border-[#0F2D5B]/20',
  tech: 'bg-[#EFF6FF] text-[#1D4ED8] border-[#2563EB]/30',
  darkGold: 'bg-[#132F5C] text-[#D4AF7C] border-[#D4AF7C]/40',
};

/**
 * Reusable Badge primitive following the brand's styling
 */
export function Badge({
  children,
  variant = 'gold',
  icon: Icon,
  className = '',
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-cairo border tracking-wide',
        VARIANTS[variant] || VARIANTS.gold,
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}

export default Badge;

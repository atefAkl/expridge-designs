import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

/**
 * Reusable Card component respecting the brand surface palette
 */
export function Card({
  children,
  variant = 'white', // 'white' | 'dark' | 'ivory'
  hoverEffect = true,
  goldAccent = false,
  className = '',
  ...props
}) {
  const isDark = variant === 'dark';
  const isIvory = variant === 'ivory';

  const baseStyles = isDark
    ? 'bg-[#132F5C] text-white border-[#1E3F73]'
    : isIvory
    ? 'bg-[#F8F6EF] text-[#0F2D5B] border-[#E7E3D4]'
    : 'bg-white text-[#0F2D5B] border-[#E7E3D4]/80';

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -4,
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      className={cn(
        'rounded-2xl border p-6 sm:p-7 shadow-sm transition-all relative overflow-hidden',
        baseStyles,
        goldAccent && 'border-t-4 border-t-[#D4AF7C]',
        hoverEffect && (isDark ? 'hover:border-[#D4AF7C]/40 hover:shadow-lg' : 'hover:border-[#D4AF7C]/60 hover:shadow-md'),
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;

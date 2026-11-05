import React from 'react';
import { cn } from '@/utils/cn';

/**
 * Brand Divider supporting gold metallic lines, subtle borders, or ornamental dots
 */
export function Divider({
  variant = 'subtle', // 'subtle' | 'gold' | 'ornamental'
  className = '',
}) {
  if (variant === 'gold') {
    return (
      <div className={cn('h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF7C] to-transparent my-6', className)} />
    );
  }

  if (variant === 'ornamental') {
    return (
      <div className={cn('flex items-center justify-center gap-2 my-6', className)}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF7C]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF7C]" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF7C]" />
      </div>
    );
  }

  return (
    <div className={cn('h-[1px] w-full bg-[#E7E3D4] my-6', className)} />
  );
}

export default Divider;

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const VARIANTS = {
  // Official Gold CTA button from brand application (الموقع الإلكتروني / منشورات التواصل)
  accent: 'bg-[#D4AF7C] text-[#0F2D5B] font-bold hover:bg-[#BF955A] shadow-sm hover:shadow-md hover:shadow-[#D4AF7C]/25 border border-[#D4AF7C]',
  
  // Primary Corporate Navy
  primary: 'bg-[#0F2D5B] text-white hover:bg-[#1A3F74] shadow-sm hover:shadow-md hover:shadow-[#0F2D5B]/20 border border-[#0F2D5B]',
  
  // Tech Blue Action
  tech: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-sm hover:shadow-md hover:shadow-[#2563EB]/25 border border-[#2563EB]',
  
  // Secondary White Surface
  secondary: 'bg-white text-[#0F2D5B] hover:bg-[#F8F6EF] border border-[#E2E8F0] shadow-sm',
  
  // Outline Corporate
  outline: 'bg-transparent text-[#0F2D5B] border border-[#0F2D5B] hover:bg-[#0F2D5B]/5',
  
  // Outline Gold (For Dark hero/banner sections)
  'outline-gold': 'bg-transparent text-[#D4AF7C] border border-[#D4AF7C] hover:bg-[#D4AF7C]/10',
  
  // Ghost
  ghost: 'bg-transparent text-[#0F2D5B] hover:bg-[#0F2D5B]/5 border border-transparent',
};

const SIZES = {
  sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
  lg: 'px-6 py-3.5 text-base font-bold rounded-xl gap-2.5',
};

/**
 * Reusable animated Button component supporting the official brand color tokens
 */
export function Button({
  children,
  variant = 'accent',
  size = 'md',
  icon: Icon,
  iconPosition = 'start',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const variantStyles = VARIANTS[variant] || VARIANTS.accent;
  const sizeStyles = SIZES[size] || SIZES.md;

  return (
    <motion.button
      type={type}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center font-cairo transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF7C] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles,
        sizeStyles,
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'start' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'end' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
}

export default Button;

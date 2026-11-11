import React from 'react';
import { cn } from '@/utils/cn';
import { useLanguage } from '@/context/LanguageContext';
import logoLight from '@/assets/images/brand/logo-light-official.png';
import logoDark from '@/assets/images/brand/logo-dark-official.png';
import emblemImg from '@/assets/images/brand/emblem.png';

/**
 * Official Brand Logo Component for Jisr Al-Khibra (EXEP-RIDGE)
 * Powered by Section 03 of the official Brand Guide (On Dark Background - Full Color)
 */
export function BrandLogo({
  variant = 'primary',
  size = 'md',
  className = '',
  _showSubtitle = true,
  ...props
}) {
  const { t } = useLanguage();
  const isDark = variant === 'dark';

  // Generous, readable heights for vertical-stacked brand mark & typography
  const SIZES = {
    sm: 'h-13 sm:h-14 md:h-15',
    md: 'h-16 sm:h-18 md:h-20',
    lg: 'h-20 sm:h-24 md:h-28',
    xl: 'h-28 sm:h-32 md:h-36',
  };

  const currentHeight = SIZES[size] || SIZES.md;

  if (variant === 'icon') {
    return (
      <img
        src={emblemImg}
        alt={t('site.emblemAlt')}
        className={cn('h-10 w-auto object-contain select-none', className)}
        {...props}
      />
    );
  }

  return (
    <div className={cn('inline-flex items-center select-none', className)} {...props}>
      <img
        src={isDark ? logoDark : logoLight}
        alt={t('site.logoAlt')}
        className={cn(currentHeight, 'w-auto object-contain drop-shadow-sm')}
        loading="eager"
      />
    </div>
  );
}

export default BrandLogo;

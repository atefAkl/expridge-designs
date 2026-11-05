import React from 'react';
import { cn } from '@/utils/cn';

/**
 * Official Brand Logo Component for Jisr Al-Khibra (EXEP-RIDGE) / Mawthiq Partner Portal
 * 
 * Supports 4 official brand versions:
 * - 'primary': Full color on light/ivory background
 * - 'dark': Full color on dark navy background with white text
 * - 'icon': Emblem only (useful for mobile, favicons, app icons)
 * - 'monochrome': Single color for print/minimal contexts
 */
export function BrandLogo({
  variant = 'primary',
  size = 'md',
  className = '',
  showSubtitle = true,
  ...props
}) {
  const isDark = variant === 'dark';
  const isMonochrome = variant === 'monochrome';

  // Sizing definitions
  const SIZES = {
    sm: { emblem: 'w-8 h-8', textTitle: 'text-base', textEn: 'text-[9px]', textSub: 'text-[7px]' },
    md: { emblem: 'w-11 h-11', textTitle: 'text-xl', textEn: 'text-[11px]', textSub: 'text-[8px]' },
    lg: { emblem: 'w-16 h-16', textTitle: 'text-2xl', textEn: 'text-[13px]', textSub: 'text-[10px]' },
    xl: { emblem: 'w-24 h-24', textTitle: 'text-4xl', textEn: 'text-base', textSub: 'text-xs' },
  };

  const currentSize = SIZES[size] || SIZES.md;

  // Colors based on variant
  const navyColor = isMonochrome ? 'currentColor' : '#0F2D5B';
  const goldColor = isMonochrome ? 'currentColor' : '#D4AF7C';
  const textColor = isDark ? '#FFFFFF' : (isMonochrome ? 'currentColor' : '#0F2D5B');
  const mutedText = isDark ? '#94A3B8' : (isMonochrome ? 'currentColor' : '#64748B');

  // SVG Emblem - Interlocking Bridge Ribbon with Digital Data Cubes
  const EmblemSvg = (
    <svg
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(currentSize.emblem, 'shrink-0')}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`navy-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isMonochrome ? 'currentColor' : '#1B3F74'} />
          <stop offset="100%" stopColor={navyColor} />
        </linearGradient>
        <linearGradient id={`gold-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isMonochrome ? 'currentColor' : '#E8CCA0'} />
          <stop offset="100%" stopColor={goldColor} />
        </linearGradient>
      </defs>

      {/* Ascending Pixel Data Dots (Top Right) */}
      <rect x="108" y="12" width="8" height="8" rx="1.5" fill={navyColor} />
      <rect x="122" y="12" width="8" height="8" rx="1.5" fill={navyColor} />
      <rect x="115" y="24" width="8" height="8" rx="1.5" fill={navyColor} />
      <rect x="102" y="32" width="7" height="7" rx="1.5" fill={navyColor} />

      {/* Gold Ribbon - Lower Bridge Arc */}
      <path
        d="M28 85 C38 95, 68 102, 92 84 C112 68, 122 42, 106 32 C92 22, 70 32, 54 52 L36 74 Z"
        fill={`url(#gold-grad-${variant})`}
        fillRule="evenodd"
      />

      {/* Navy Ribbon - Upper Bridge Arc (Looping & Intertwining) */}
      <path
        d="M20 54 C10 40, 26 22, 48 18 C74 14, 98 32, 88 56 C78 78, 52 92, 34 88 C20 84, 18 68, 20 54 Z"
        fill={`url(#navy-grad-${variant})`}
        fillRule="evenodd"
      />

      {/* Inner Bridge Connection / Negative Space Flow */}
      <path
        d="M48 38 C60 34, 76 46, 70 60 C64 74, 46 80, 38 72 C30 64, 38 42, 48 38 Z"
        fill={isDark ? '#0A1C38' : (variant === 'primary' ? '#F8F6EF' : '#FFFFFF')}
      />

      {/* Accent Pixel Dot (Left Origin) */}
      <rect x="14" y="50" width="6" height="6" rx="1.2" fill={goldColor} />
    </svg>
  );

  // If icon-only variant is requested
  if (variant === 'icon') {
    return (
      <div className={cn('inline-flex items-center justify-center', className)} {...props}>
        {EmblemSvg}
      </div>
    );
  }

  return (
    <div className={cn('inline-flex items-center gap-3 select-none', className)} {...props}>
      {EmblemSvg}

      <div className="flex flex-col text-right justify-center">
        {/* Arabic Brand Name */}
        <span
          className={cn(
            'font-bold tracking-tight font-cairo leading-none',
            currentSize.textTitle
          )}
          style={{ color: textColor }}
        >
          جسر الخبرة
        </span>

        {/* English Name with Gold Hyphen */}
        <div className="flex items-center gap-1.5 mt-1 font-inter font-semibold tracking-widest uppercase leading-none">
          <span style={{ color: textColor }} className={currentSize.textEn}>
            EXEP
          </span>
          <span style={{ color: goldColor }} className={currentSize.textEn}>
            -
          </span>
          <span style={{ color: textColor }} className={currentSize.textEn}>
            RIDGE
          </span>
        </div>

        {/* Subtitle with divider lines */}
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[0.5px] w-2.5" style={{ backgroundColor: goldColor }} />
            <span
              className={cn('font-inter tracking-wider uppercase font-medium', currentSize.textSub)}
              style={{ color: mutedText }}
            >
              SOFTWARE SOLUTIONS
            </span>
            <span className="h-[0.5px] w-2.5" style={{ backgroundColor: goldColor }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BrandLogo;

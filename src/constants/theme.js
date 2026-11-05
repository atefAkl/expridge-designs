/**
 * Brand Design Tokens for Jisr Al-Khibra (EXEP-RIDGE)
 * Derived directly from the official visual identity board.
 */

export const BRAND_COLORS = {
  // Official Palette
  primary: {
    DEFAULT: '#0F2D5B', // الكحلي الأساسي
    dark: '#0A1C38',
    light: '#1B3F74',
    surface: '#132F5C',
    50: '#F0F4FA',
    100: '#E1E9F5',
    500: '#0F2D5B',
    900: '#0A1C38',
  },
  techBlue: {
    DEFAULT: '#2563EB', // الأزرق التقني
    hover: '#1D4ED8',
    light: '#DBEAFE',
    glow: 'rgba(37, 99, 235, 0.25)',
  },
  accent: {
    DEFAULT: '#D4AF7C', // الذهبي المميز
    hover: '#BF955A',
    light: '#F8F2E8',
    dark: '#B08850',
    glow: 'rgba(212, 175, 124, 0.3)',
  },
  background: {
    DEFAULT: '#F8F6EF', // العاجي للخلفيات
    ivory: '#F8F6EF',
    white: '#FFFFFF',
    dark: '#0F2D5B',
    darkElevated: '#0A1C38',
  },
  neutral: {
    DEFAULT: '#94A3B8', // الرمادي المساعد
    slate: '#94A3B8',
    border: '#E2E8F0',
    borderIvory: '#E7E3D4',
    textPrimary: '#0F2D5B',
    textSecondary: '#475569',
    textMuted: '#64748B',
    textDarkPrimary: '#FFFFFF',
    textDarkSecondary: '#E2E8F0',
  },
};

export const TYPOGRAPHY = {
  arabicFont: 'Cairo, system-ui, sans-serif',
  englishFont: 'Inter, system-ui, sans-serif',
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  scale: {
    h1: 'text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight',
    h2: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug',
    h3: 'text-xl sm:text-2xl font-bold leading-normal',
    h4: 'text-lg sm:text-xl font-semibold leading-normal',
    bodyLg: 'text-base sm:text-lg leading-relaxed',
    body: 'text-sm sm:text-base leading-relaxed',
    bodySm: 'text-xs sm:text-sm leading-normal',
    caption: 'text-xs leading-tight',
  },
};

export const LAYOUT = {
  containerMaxWidth: 'max-w-7xl',
  containerPadding: 'px-4 sm:px-6 lg:px-8',
  sectionSpacing: 'py-16 md:py-24',
};

export const MOTION = {
  duration: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.4,
  },
  easing: [0.16, 1, 0.3, 1], // Custom cubic bezier for crisp corporate motion
};

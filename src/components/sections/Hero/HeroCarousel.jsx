import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowLeft, Sparkles, Pause, Play } from 'lucide-react';
import { Container, Button } from '@/components/common';
import { HeroSlide } from './HeroSlide';
import { HERO_SLIDES } from './heroData';

const AUTOPLAY_INTERVAL = 6000; // 6 seconds

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const totalSlides = HERO_SLIDES.length;

  // Listen for changes in user's reduced-motion preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Navigation handlers
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay timer with pause support
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion, nextSlide, currentSlide]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      // In RTL, ArrowLeft navigates to next logical slide
      nextSlide();
    } else if (e.key === 'ArrowRight') {
      prevSlide();
    }
  };

  // Touch swipe handlers for mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartXRef.current - touchEndXRef.current;
    const swipeThreshold = 50;

    // In RTL, swiping left moves to next slide
    if (deltaX > swipeThreshold) {
      nextSlide();
    } else if (deltaX < -swipeThreshold) {
      prevSlide();
    }
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  // Motion variants for text content transitions
  const textVariants = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -10, transition: { duration: 0.25 } },
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="معرض استقطاب الشركاء"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden focus:outline-none select-none"
    >
      {/* Background Slides Stack */}
      {HERO_SLIDES.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}

      {/* Foreground Content Container - Preserves consistent height & zero layout shift */}
      <Container className="relative z-20 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* AnimatePresence handles smooth transition of text while container stays static */}
          <div className="min-h-[360px] sm:min-h-[320px] md:min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlideData.id}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Badge Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#132F5C]/80 border border-[#D4AF7C]/30 text-amber-200 text-xs font-bold font-cairo shadow-inner backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF7C] shrink-0" />
                  <span>{activeSlideData.badge}</span>
                  <span className="w-1 h-1 rounded-full bg-[#D4AF7C] mx-1" />
                  <span className="text-[11px] text-[#94A3B8] font-normal">{activeSlideData.tag}</span>
                </div>

                {/* Primary Headline with Brand Golden Gradient */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-cairo text-white tracking-tight leading-[1.2] drop-shadow-md">
                  <span>{activeSlideData.titlePrefix} </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF7C] via-[#E8CCA0] to-[#D4AF7C]">
                    {activeSlideData.titleHighlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-cairo leading-relaxed max-w-2xl drop-shadow-sm">
                  {activeSlideData.subtitle}
                </p>

                {/* CTA Buttons Row - Kept firmly anchored */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a href={activeSlideData.primaryCta.href}>
                    <Button
                      variant="accent"
                      size="lg"
                      icon={ArrowLeft}
                      iconPosition="end"
                    >
                      {activeSlideData.primaryCta.label}
                    </Button>
                  </a>

                  <a href={activeSlideData.secondaryCta.href}>
                    <Button
                      variant="outline-gold"
                      size="lg"
                      className="bg-black/20 backdrop-blur-sm"
                    >
                      {activeSlideData.secondaryCta.label}
                    </Button>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Bottom Controls & Indicators */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Indicators with slide numbers and animated active state */}
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`group relative flex items-center gap-2 py-2 px-3 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/15 border border-[#D4AF7C]/50'
                      : 'hover:bg-white/10 border border-transparent'
                  }`}
                  aria-label={`الانتقال إلى الشريحة ${idx + 1}: ${slide.tag}`}
                  aria-current={isActive ? 'true' : 'false'}
                >
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#D4AF7C]' : 'text-slate-400 group-hover:text-white'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`hidden md:inline-block text-xs font-cairo transition-colors ${
                      isActive ? 'text-white font-semibold' : 'text-slate-400 group-hover:text-slate-300'
                    }`}
                  >
                    {slide.tag}
                  </span>
                  {/* Active progress indicator line */}
                  <span
                    className={`h-1 rounded-full transition-all duration-300 ${
                      isActive ? 'w-8 bg-[#D4AF7C]' : 'w-2 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Navigation Controls: Previous / Next & Pause Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="p-2.5 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer"
              aria-label={isPaused ? 'تشغيل العرض التلقائي' : 'إيقاف العرض التلقائي مؤقتاً'}
              title={isPaused ? 'تشغيل' : 'إيقاف مؤقت'}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            {/* In RTL, Next slide button points Left (visual flow), Prev points Right */}
            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer"
              aria-label="الشريحة السابقة"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-full text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors cursor-pointer"
              aria-label="الشريحة التالية"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroCarousel;

import { useState, useEffect } from 'react';

/**
 * Custom hook to detect scroll position and direction
 * @param {number} threshold - Scroll threshold in pixels (default: 20)
 * @returns {{ isScrolled: boolean, scrollY: number }}
 */
export function useScroll(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY };
}

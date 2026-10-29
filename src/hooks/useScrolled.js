import { useEffect, useState } from 'react';

/**
 * @param {number} threshold Pixels scrolled before returning true.
 * @returns {boolean}
 */
export function useScrolled(threshold = 8) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > threshold);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return isScrolled;
}

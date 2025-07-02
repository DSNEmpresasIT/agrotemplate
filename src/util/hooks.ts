import { useEffect, useState } from 'react';

/**
 * Custom React hook that returns the current window width.
 *
 * It sets up a `resize` event listener to update the width whenever the user resizes the browser window.
 * Useful for responsive layouts and conditional rendering based on screen size (e.g. mobile vs desktop).
 *
 * @returns {number} The current window width in pixels.
 *
 * @example
 * const width = useWindowWidth();
 * const isMobile = width < 768;
 */
export function useWindowWidth(): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

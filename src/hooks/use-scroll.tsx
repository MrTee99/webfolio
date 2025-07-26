import { useEffect, useState } from 'react';

export const useScroll = (options: { scrollThreshold: number }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(Boolean(window.scrollY >= options.scrollThreshold));
    window.addEventListener('scroll', handleScroll);
    return () => void window.removeEventListener('scroll', handleScroll);
  }, [options.scrollThreshold]);

  return { hasScrolled };
};

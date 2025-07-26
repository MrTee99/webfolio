import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

const Breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useResponsive(type: 'under' | 'over', breakpoint: keyof typeof Breakpoints) {
  const [matches, setMatches] = useState(false);

  const query = useMemo(() => `(min-width: ${Breakpoints[breakpoint]}px)`, [breakpoint]);

  const getMatches = (targetQuery: string) => window.matchMedia(targetQuery).matches;
  const handleChange = useCallback(() => setMatches(getMatches(query)), [query]);

  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    // Use deprecated `addListener` and `removeListener` to support Safari < 14 (#135)
    if (matchMedia.addListener) matchMedia.addListener(handleChange);
    else matchMedia.addEventListener('change', handleChange);

    return () => {
      if (matchMedia.removeListener) matchMedia.removeListener(handleChange);
      else matchMedia.removeEventListener('change', handleChange);
    };
  }, [handleChange, query]);

  return type === 'under' ? !matches : matches;
}

import { useCallback, useEffect, useState } from 'react';
import { ThemeProviderContext, type ResolvedTheme, type Theme } from './theme-context';

export const ThemeProvider: React.FC<{ defaultTheme?: Theme; storageKey?: string; children: React.ReactNode }> = ({ defaultTheme = 'system', storageKey = 'vite-ui-theme', children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  const getSystemTheme = (): ResolvedTheme => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const handleSetTheme = useCallback(
    (targetTheme: Theme) => {
      localStorage.setItem(storageKey, targetTheme);
      setTheme(targetTheme);
      setResolvedTheme(targetTheme === 'system' ? getSystemTheme() : targetTheme);
    },
    [storageKey],
  );

  // set default theme
  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    handleSetTheme(storedTheme || defaultTheme);
  }, [defaultTheme, handleSetTheme, storageKey]);

  // listen for system theme changes if theme is 'system'
  useEffect(() => {
    if (theme !== 'system') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);
    handleChange(); // Initialize immediately
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // update HTML root class
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme === 'system' ? getSystemTheme() : theme);
  }, [theme]);

  const value = { theme, resolvedTheme, setTheme: handleSetTheme };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
};

import { createContext } from "react";

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

type ThemeProviderState = { theme: Theme; resolvedTheme: ResolvedTheme; setTheme: (theme: Theme) => void }
const initialState: ThemeProviderState = {
  theme: 'system', 
  resolvedTheme: 'light', 
  setTheme: () => null
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

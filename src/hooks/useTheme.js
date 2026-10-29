import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

/** Initial value is set by the inline script in index.html to avoid a flash. */
const readTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

/** @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }} */
export function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
  }, [theme]);

  return { theme, toggleTheme };
}

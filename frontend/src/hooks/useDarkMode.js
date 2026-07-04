import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('aari-theme') || 'light'
  );

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('aari-theme', theme);
  }, [theme]);

  return [theme === 'dark', toggleTheme];
}

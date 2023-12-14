"use client"
import { useEffect, useState } from 'react';

function useDarkMode(storageKey = 'darkMode') {
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem(storageKey);
    return storedMode !== null ? storedMode : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(storageKey, mode);
  }, [mode, storageKey]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  return [mode, toggleMode] as const;
}

export default useDarkMode;

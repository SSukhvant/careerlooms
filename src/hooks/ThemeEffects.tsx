"use client"
// components/ThemeEffects.tsx
import { useEffect } from 'react';

export const useThemeEffects = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode') || 'light';
      document.documentElement.classList.add(savedMode);
    }
  }, []);
};

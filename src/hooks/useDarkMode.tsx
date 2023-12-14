import { useState, useEffect } from "react";

function useDarkMode(storageKey = "darkMode") {
  const [mode, setMode] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem(storageKey);
      return storedMode ? storedMode : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (mode === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem(storageKey, mode);
    }
  }, [mode, storageKey]);

  const toggleMode: () => void = () => {
    setMode((prevMode: any) => (prevMode === "dark" ? "light" : "dark"));
  };

  return [mode, toggleMode];
}

export default useDarkMode;

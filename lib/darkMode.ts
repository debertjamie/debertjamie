"use client";

import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(localStorage.theme === "dark");
  }, []);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    localStorage.theme = !isDarkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
  }

  return { isDarkMode, toggleDarkMode };
}

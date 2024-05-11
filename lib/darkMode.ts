"use client";

import React from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("theme", "dark");
    }

    const darkMode = localStorage.theme === "dark";
    setIsDarkMode(darkMode === true);
  }, []);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    localStorage.theme = !isDarkMode === true ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
  }

  return { isDarkMode, toggleDarkMode };
}

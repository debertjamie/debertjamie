"use client";

import React from "react";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    const darkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(darkMode === true);
  }, []);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    localStorage.theme = !isDarkMode === true ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
  }

  function toggleOSPreference() {
    localStorage.removeItem("theme");
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }

  return { isDarkMode, toggleDarkMode, toggleOSPreference };
}

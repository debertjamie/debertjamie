"use client";

import { useDarkMode } from "@/lib/darkMode";
import { LightTheme, DarkTheme } from "@/ui/icons";

export function ToggleTheme() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button className="flex items-center *:cursor-pointer" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <DarkTheme width={20} height={20} className="-mt-1" />
      ) : (
        <LightTheme width={20} height={20} className="-mt-1" />
      )}
    </button>
  );
}

export function MobileToggleTheme() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="w-full text-left"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <DarkTheme width={18} height={18} className="mr-2 -mt-1 inline" />
      ) : (
        <LightTheme width={18} height={18} className="mr-2 -mt-1 inline" />
      )}
      Switch Theme
    </button>
  );
}

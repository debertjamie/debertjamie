"use client";

import {useDarkMode} from "@/lib/darkMode";
import {LightTheme, DarkTheme} from "@/ui/icons";

export function ToggleTheme() {
  const {isDarkMode, toggleDarkMode} = useDarkMode();
  return (
    <button className="flex justify-center items-center hover:text-buttercup dark:hover:text-buttercup-dark duration-300" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <DarkTheme width={22} height={22}/>
      ) : (
        <LightTheme width={22} height={22}/>
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

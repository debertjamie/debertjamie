"use client";

import { useDarkMode } from "@/lib/darkMode";
import { LightTheme, DarkTheme } from "@/ui/icons";

export function ToggleTheme() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="*:cursor-pointer" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <DarkTheme width={18} height={18} />
      ) : (
        <LightTheme width={18} height={18} />
      )}
    </div>
  );
}

export function MobileToggleTheme() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <p
      className="*:cursor-pointer flex gap-x-2 items-center pt-2 border-t-2 border-t-zinc-950 dark:border-t-zinc-100"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <DarkTheme width={28} height={28} className="" />
      ) : (
        <LightTheme width={28} height={28} className="" />
      )}
      Switch Theme
    </p>
  );
}

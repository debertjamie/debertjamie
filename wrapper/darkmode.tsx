"use client";

import { useDarkMode } from "@/lib/darkMode";
import { LightTheme, DarkTheme } from "@/ui/icons";

export function ThemedHTML({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      {children}
    </html>
  );
}

export function ToggleTheme() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);

  return (
    <div className="*:cursor-pointer">
      {isDarkMode ? (
        <DarkTheme width={18} height={18} onClick={toggleDarkMode} />
      ) : (
        <LightTheme width={18} height={18} onClick={toggleDarkMode} />
      )}
    </div>
  );
}

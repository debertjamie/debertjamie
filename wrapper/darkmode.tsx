"use client";

import { useDarkMode } from "@/lib/darkMode";

export function ThemedHTML({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode();

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      {children}
    </html>
  );
}

export function ToggleTheme() {
  const { toggleDarkMode, toggleOSPreference } = useDarkMode();

  return (
    <div className="*:cursor-pointer">
      <span onClick={toggleDarkMode}>Switch Theme</span>
      <span
        onClick={toggleOSPreference}
        className="before:mx-2 before:content-['\00B7']"
      >
        Use OS Preference
      </span>
    </div>
  );
}

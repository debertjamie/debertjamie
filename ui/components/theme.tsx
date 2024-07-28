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

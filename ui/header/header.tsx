"use client";

import Link from "next/link";
import React from "react";
import { ToggleTheme } from ".";
import { HamburgerMenu, Menu } from ".";


export function Header() {
  const [isWide, setIsWide] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mediaWidth = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsWide(mediaWidth.matches);
    mediaWidth.addEventListener("change", onChange);
    setIsWide(mediaWidth.matches);
    return () => mediaWidth.removeEventListener("change", onChange);
  }, [setIsWide]);

  return (
    <header className="z-50 sticky top-8">
      {isWide ? (
        <div className="flex flex-wrap items-center justify-between gap-x-6 h-14 shadow-md dark:shadow-zinc-800 bg-zinc-100 dark:bg-zinc-950 border border-zinc-400 dark:border-zinc-600 rounded-lg py-2 px-4 text-xl">
          <p className="font-medium">Debert Jamie</p>
          <div className="flex items-center gap-x-6">
            <Menu name="Home" path="/" />
            <Menu name="About" path="/about" />
            <Menu name="Blog" path="/blog" />
            <Menu name="Projects" path="/projects" />
            <Menu name="Guestbook" path="/guestbook" />
            <Link href="mailto:debertjamiechanderson@mail.ugm.ac.id">Email</Link>
            <ToggleTheme />
          </div>
        </div>
      ) : (
        <HamburgerMenu />
      )}
    </header>
  );
}

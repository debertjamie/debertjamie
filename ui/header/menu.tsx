"use client";

import React from "react";
import Link from "next/link";
import { MobileToggleTheme } from ".";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div
        className="flex flex-col justify-between h-5 w-5 cursor-pointer *:h-1 *:bg-zinc-950 *:dark:bg-zinc-100 *:transition *:ease-in-out *:duration-100"
        onClick={toggleMenu}
      >
        <span
          className={
            isOpen
              ? "transition duration-500 ease-in-out rotate-45 translate-x-1 origin-top-left w-6"
              : ""
          }
        />
        <span
          className={
            isOpen
              ? "transition duration-500 ease-in-out origin-center w-0"
              : ""
          }
        />
        <span
          className={
            isOpen
              ? "transition duration-500 ease-in-out -rotate-45 translate-x-1 origin-bottom-left w-6"
              : ""
          }
        />
      </div>
      <div
        className={
          isOpen
            ? "absolute text-xl mt-4 w-36 space-y-2 bg-sky-700 rounded-xl bg-opacity-90 py-2 px-4 backdrop-blur-sm shadow-xl"
            : "hidden"
        }
      >
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/blog">Blog</Link>
        </p>
        <p>
          <Link href="/projects">Projects</Link>
        </p>
        <p>
          <Link href="/guestbook">Guestbook</Link>
        </p>
        <MobileToggleTheme />
      </div>
    </nav>
  );
}

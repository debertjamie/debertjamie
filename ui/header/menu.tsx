"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileToggleTheme } from ".";

export function Menu({ name, path, ...props }: { name: string; path: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname();
  const isActive = path === "/" ? path === pathname : pathname.startsWith(path);
  return (
    <Link
      href={path}
      className={`${isActive ? "font-semibold" : "text-zinc-700 dark:text-zinc-300"}`}
      {...props}
    >
      {name}
    </Link>
  );
}

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("dropdown-active");
  };

  const dropdownRef = React.useRef<HTMLElement>(null);
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Element)
    ) {
      setIsOpen(false);
      document.body.classList.remove("dropdown-active");
    }
  }

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={dropdownRef}
      className="relative dropdown flex w-fit rounded-xl py-2 px-4 shadow-md dark:shadow-zinc-800 bg-zinc-100 dark:bg-zinc-950 border border-zinc-400 dark:border-zinc-600"
    >
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
            ? "dropdown-content animate-fade-down absolute text-xl *:block -ml-4 mt-7 space-y-4 w-56 bg-zinc-200 dark:bg-zinc-900 rounded-xl py-2 px-4"
            : "hidden"
        }
      >
        <Menu name="Home" path="/" onClick={toggleMenu} />
        <Menu name="About" path="/about" onClick={toggleMenu} />
        <Menu name="Blog" path="/blog" onClick={toggleMenu} />
        <Menu name="Projects" path="/projects" onClick={toggleMenu} />
        <Menu name="Guestbook" path="/guestbook" onClick={toggleMenu} />
        <MobileToggleTheme />
      </div>
    </nav>
  );
}

"use client";

import {useState, useEffect, useRef, useCallback} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {ToggleTheme, HamburgerMenu} from ".";

export const routes = [
  {name: "About", href: "/about"},
  {name: "Writing", href: "/blog"},
  {name: "Projects", href: "/projects"},
  {name: "Resume", href: "/resume"},
  {name: "Connect", href: "/connect"},
];


export function Header() {
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [lowerThanHeader, setLowerThanHeader] = useState<boolean>(false);
  const [headerClass, setHeaderClass] = useState<string>("0");
  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos + 32) {
        setHeaderClass("0");
      } else if ((prevScrollPos + 40 < currentScrollPos) || (currentScrollPos !== 0 && currentScrollPos < window.innerHeight)) {
        setHeaderClass("-7.2rem");
      }
      setPrevScrollPos(currentScrollPos);
      setLowerThanHeader(currentScrollPos > window.innerHeight);
      setScrollPos(currentScrollPos);
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header
        style={{top: headerClass}} ref={headerRef}
        className={`z-50 hidden md:block sticky duration-500 ml-0 pt-4 pb-4 ${lowerThanHeader ? "bg-porcelain-dark dark:bg-steel-grey/90 backdrop-blur-md" : ""}`}>
        <div
          className="grid items-center justify-center gap-x-12 h-14 py-4 px-4 text-lg">
          <div className="flex gap-x-6 justify-end">
            {routes.map((r) => (
              <Link
                key={r.name}
                href={r.href}
                aria-current={pathname === r.href || pathname.startsWith(`${r.href}/`) ? "page" : undefined}
                className={`hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-steel-grey dark:before:bg-porcelain before:absolute before:left-0 before:bottom-0 ${pathname === r.href || pathname.startsWith(`${r.href}/`) ? "before:scale-x-100 before:origin-left" : ""}`}
              >
                {r.name}
              </Link>
            ))}
            <ToggleTheme/>
          </div>
        </div>
      </header>
      <header className="md:hidden sticky top-2 ml-4 pt-8 z-50">
        <HamburgerMenu/>
      </header>
    </>
  );
}

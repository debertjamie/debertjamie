"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type NavbarProps = {
  activeTab: "blogs" | "notes" | "tags" | "series";
};

const tabs = [
  { label: "Posts", value: "blogs" },
  { label: "Notes", value: "notes" },
  { label: "Search from Tags", value: "tags" },
  { label: "Search from Series", value: "series" },
] as const;

export function Navbar({ activeTab }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      // for phone give it horizontal scroll if overflow
      className={`flex whitespace-nowrap overflow-x-auto no-scrollbar md:overflow-x-hidden md:sticky md:top-0 md:z-10 md:transition-shadow md:duration-300 ${
        isScrolled ? "md:shadow-md md:bg-porcelain-dark/90 md:dark:bg-steel-grey-dark/90" : ""
      }`}
    >
      <div className="flex space-x-4 border-b border-steel-grey-dark dark:border-porcelain-dark">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={`/blog?tab=${tab.value}`}
            className={`px-2 py-1 font-medium ${
              activeTab === tab.value
                ? "text-olivine-dark dark:text-olivine border-b-4 border-olivine-dark dark:border-olivine"
                : "text-steel-grey/80 hover:text-steel-grey dark:text-porcelain/80 dark:hover:text-porcelain"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

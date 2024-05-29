import Link from "next/link";
import { ToggleTheme } from ".";
import { HamburgerMenu } from ".";

export function Header() {
  return (
    <>
      <header className="hidden xs:flex flex-wrap items-center gap-x-6 z-50 sticky max-w-3xl rounded-xl top-4 mx-auto bg-sky-700 bg-opacity-30 dark:bg-opacity-60 py-2 px-4 backdrop-blur-sm shadow-xl text-base font-semibold">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/guestbook">Guestbook</Link>
        <Link href="mailto:debertjamie+website@outlook.com">Email</Link>
        <ToggleTheme />
      </header>
      <header className="flex xs:hidden z-50 sticky w-fit max-w-3xl rounded-xl top-4 bg-sky-700 bg-opacity-30 dark:bg-opacity-60 py-2 px-4 backdrop-blur-sm shadow-xl">
        <HamburgerMenu />
      </header>
    </>
  );
}

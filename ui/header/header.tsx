import Link from "next/link";
import { ToggleTheme } from "@/wrapper";
import { HamburgerMenu } from ".";

export function Header() {
  return (
    <>
      <header className="hidden xs:flex flex-wrap items-center gap-x-6 z-50 sticky max-w-3xl rounded-xl top-4 mx-auto bg-brand-600 bg-opacity-20 py-2 px-4 backdrop-blur-sm shadow-xl text-base font-semibold">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/guestbook">Guestbook</Link>
        <Link href="mailto:debertjamie+website@outlook.com">Email</Link>
        <ToggleTheme />
      </header>
      <header className="flex xs:hidden z-50 sticky w-fit max-w-3xl rounded-xl top-4 bg-brand-600 bg-opacity-20 py-2 px-4 backdrop-blur-sm shadow-xl">
        <HamburgerMenu />
      </header>
    </>
  );
}

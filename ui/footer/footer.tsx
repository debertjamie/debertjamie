import { sha } from "@/app/env.mjs";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mb-1 lg:mb-4 pt-4 border-t-2 border-t-zinc-950 space-y-4 dark:border-t-zinc-100">
      <div className="text-base flex justify-center">
        <p className="md:after:content-['\00B7'] md:after:mx-2">&#169; 2024 Debert Jamie Chanderson</p>
        <Link 
          href={`https://github.com/debertjamie/debertjamie/commit/${sha}`}
          className="hidden md:inline text-sky-700 dark:text-sky-400"
        >{sha.slice(0, 7)}</Link>
      </div>
    </footer>
  );
}

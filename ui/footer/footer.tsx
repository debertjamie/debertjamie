import { sha } from "@/app/env.mjs";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mb-1 lg:mb-4 pt-4 border-t-2 border-t-zinc-950 space-y-4 dark:border-t-zinc-100">
      
      <div className="grid grid-cols-2 sm:grid-cols-3 items-start gap-2 text-base">
        <div className="flex flex-col justify-center gap-2 *:w-fit font-semibold">
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/guestbook">Guestbook</Link>
        </div>
        <div className="flex flex-col justify-center gap-2 *:w-fit font-semibold *:after:ml-1 *:after:content-['\2197']">
          <Link href="https://github.com/debertjamie" target="_blank" rel="norefferer noopener">GitHub</Link>
          <Link href="https://linkedin.com/in/debertjamie" target="_blank" rel="norefferer noopener">LinkedIn</Link>
          <Link href="https://g.dev/debert" target="_blank" rel="norefferer noopener">GDev</Link>
        </div>
        <div className="flex flex-col justify-center gap-2 *:w-fit font-semibold *:after:ml-1 *:after:content-['\2197']">
          <Link href="mailto:debertjamie+website@outlook.com" target="_blank" rel="norefferer noopener">Email</Link>
          <Link href="https://github.com/debertjamie/debertjamie" target="_blank" rel="norefferer noopener">Source Code</Link>
          <Link href="/sitemap.xml" target="_blank" rel="norefferer noopener">Sitemap</Link>
        </div>
      </div>
      <div className="text-base flex justify-center">
        <p className="after:content-['\00B7'] after:mx-2">&#169; 2024 Debert Jamie Chanderson</p>
        <Link 
          href={`https://github.com/debertjamie/debertjamie/commit/${sha}`}
          className="text-sky-700 dark:text-sky-400"
        >{sha.slice(0, 7)}</Link>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mb-1 lg:mb-4 pt-4 border-t-2 border-t-brand-950 space-y-4 dark:border-t-brand-50">
      
      <div className="grid grid-cols-2 sm:grid-cols-3 items-start gap-2 text-base">
        <div className="flex flex-col justify-center gap-2 *:w-fit font-semibold">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/guestbook">Guestbook</Link>
        </div>
        <div className="flex flex-col justify-center gap-2 *:w-fit font-semibold *:after:ml-1 *:after:content-['\2197']">
          <Link href="mailto:debertjamie@outlook.com" target="_blank" rel="norefferer noopener">Email</Link>
          <Link href="https://github.com/debertjamie" target="_blank" rel="norefferer noopener">GitHub</Link>
          <Link href="https://linkedin.com/in/debertjamie" target="_blank" rel="norefferer noopener">LinkedIn</Link>
        </div>
        <div className="flex flex-col justify-center gap-2 *:w-fit font-semibold *:after:ml-1 *:after:content-['\2197']">
          <Link href="https://github.com/debertjamie/debertjamie" target="_blank" rel="norefferer noopener">Source Code</Link>
          <Link href="/sitemap.xml" target="_blank" rel="norefferer noopener">Sitemap</Link>
        </div>
      </div>
      <div className="text-center text-base">
        <p>
          Created with{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="norefferer noopener"
            className="text-brand-600 dark:text-brand-200 font-semibold"
          >
            NextJS
          </Link>{" "}
          and styled with{" "}
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            rel="norefferer noopener"
            className="text-brand-600 dark:text-brand-200 font-semibold"
          >
            TailwindCSS
          </Link>
        </p>
        <p>&#169; 2024 Debert Jamie Chanderson</p>
      </div>
    </footer>
  );
}

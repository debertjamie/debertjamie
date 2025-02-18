import {sha} from "@/app/env.mjs";
import Link from "next/link";
import {DebertLogo} from "@/ui/icons";
import {ExternalLink} from "@/ui/components";

const general = [
  {name: "Home", path: "/"},
  {name: "About", path: "/about"},
  {name: "Blog", path: "/blog"},
  {name: "Projects", path: "/projects"},
];

const more = [
  {name: "Contact", path: "/contact"},
  {name: "Community Wall", path: "/community-wall"},
  {name: "Statistics", path: "/stats"},
];

const metadata = [
  {name: "Sitemap", path: "/sitemap.xml"},
  {name: "RSS Feed", path: "/feed.xml"},
];

const links = [
  {name: "GITHUB", href: "https://github.com/debertjamie"},
  {name: "LINKEDIN", href: "https://linkedin.com/in/debertjamie"},
  {name: "EMAIL", href: "mailto:debertchanderson@gmail.com"},
  {name: "INSTAGRAM", href: "https://instagram.com/debert.jc"},
];

export function Footer() {
  const routes = [general, more, metadata];
  return (
    <footer className="w-full h-60 flex items-center pb-1 md:pb-4 px-6 bg-zinc-300 dark:bg-zinc-800 space-y-4">
      <div className="mx-auto max-w-5xl overflow-hidden">
        <div className="flex justify-center md:justify-between gap-x-24">
          <div className="w-96 flex flex-col items-center md:items-start">
            <DebertLogo className="mb-3"/>
            <p className="hidden md:block">Debert Jamie Chanderson</p>
            <p className="hidden md:block">Made with Next.js and TailwindCSS</p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-1 text-zinc-600 font-semibold">
              {links.map((l) => (
                <ExternalLink key={l.name} href={l.href} arrowSize={0}
                              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100">
                  {l.name}
                </ExternalLink>
              ))}
              <Link href="/community-wall" className="md:hidden block text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100">
                COMMUNITY WALL
              </Link>
            </div>
          </div>
          <div className="hidden md:flex gap-x-32 pr-6 *:flex *:flex-col *:gap-y-2">
            {routes.map((group, i) => (
              <div key={i} data-key={i} className="data-[key='2']:hidden lg:data-[key='2']:flex">
                {group.map((r) => (
                  <Link key={r.name} href={r.path}
                        className="w-fit text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 duration-300">
                    {r.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="text-base text-center md:text-left mt-4 md:mt-0">
          <span className="md:after:content-['\00B7'] md:after:mx-2">&#169; 2025 Debert Jamie Chanderson</span>
          <Link
            href={`https://github.com/debertjamie/debertjamie/commit/${sha}`}
            className="hidden md:inline text-sky-700 dark:text-sky-400"
            target="_blank" rel="noreferrer noopener"
          >{sha.slice(0, 7)} Edition</Link>
        </p>
      </div>
    </footer>
  );
}

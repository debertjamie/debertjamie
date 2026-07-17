import Link from "next/link";
import { DebertLogo } from "@/ui/icons";

const general = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Writing", path: "/blog" },
  { name: "Projects", path: "/projects" },
];

const more = [
  { name: "Resume", path: "/resume" },
  { name: "Connect", path: "/connect" },
  { name: "Friends", path: "/friends" },
  { name: "Now", path: "/now" },
];

const metadata = [
  { name: "Sitemap", path: "/sitemap.xml" },
  { name: "RSS Feed", path: "/feed.xml" },
  { name: "humans.txt", path: "/humans.txt" },
];

export function Footer() {
  const routes = [general, more, metadata];
  const mobileRoutes = [general, more];
  return (
    <footer className="w-full h-72 md:h-60 flex items-center pb-1 md:pb-4 px-6 bg-porcelain-dark dark:bg-steel-grey space-y-4">
      <div className="mx-auto max-w-5xl overflow-hidden">
        <div className="flex justify-center flex-col md:flex-row md:justify-between gap-x-24 gap-y-6">
          <div className="w-96 flex flex-col items-start">
            <DebertLogo className=" mb-1 md:mb-3" />
            <p className="">debertjamie(dot)com</p>
            <p className="hidden md:block">Made with Next.js and TailwindCSS</p>
          </div>
          <div className="hidden md:flex gap-x-32 pr-6 *:flex *:flex-col *:gap-y-2">
            {routes.map((group, i) => (
              <div
                key={i}
                data-key={i}
                className="data-[key='2']:hidden lg:data-[key='2']:flex"
              >
                {group.map((r) => (
                  <Link
                    key={r.name}
                    href={r.path}
                    className="w-fit text-steel-grey/80 dark:text-porcelain/80 hover:text-zinc-950 dark:hover:text-porcelain duration-300"
                  >
                    {r.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex md:hidden gap-x-32 pr-6 *:flex *:flex-col *:gap-y-2">
            {mobileRoutes.map((group, i) => (
              <div
                key={i}
                data-key={i}
                className="data-[key='2']:hidden lg:data-[key='2']:flex"
              >
                {group.map((r) => (
                  <Link
                    key={r.name}
                    href={r.path}
                    className="w-fit text-steel-grey/80 dark:text-porcelain/80 hover:text-zinc-950 dark:hover:text-porcelain duration-300"
                  >
                    {r.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="text-base text-center md:text-left mt-4 md:mt-0">
          &#169; 2024-2026 Debert Jamie Chanderson
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Lanyard } from ".";

export function More() {
  return (
    <section className="pt-4 grid sm:grid-cols-2 gap-4">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Discord Profile</h3>
        <div>
          <Link
            href="https://discordapp.com/users/755773452756975646"
            target="_blank"
            rel="norefferer noopener"
          >
            <Lanyard />
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Skills and Tools</h3>
        <div className="flex flex-wrap gap-2 select-none text-base *:bg-zinc-400 dark:*:bg-cyan-800 *:font-semibold *:rounded-lg *:px-2 *:py-1">
          <p>TypeScript</p>
          <p>NodeJS</p>
          <p>Deno</p>
          <p>Astro</p>
          <p>React</p>
          <p>Remix</p>
          <p>NextJS</p>
          <p>Vite</p>
          <p>TailwindCSS</p>
          <p>PostgreSQL</p>
          <p>Drizzle</p>
          <p>Vercel</p>
          <p>VS Code</p>
        </div>
      </div>
    </section>
  );
}

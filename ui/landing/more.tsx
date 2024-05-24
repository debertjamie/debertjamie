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
        <div className="flex flex-wrap gap-2 select-none text-base *:text-cyan-50 *:rounded-lg *:px-2 *:py-1">
          <p className="bg-blue-800">TypeScript</p>
          <p className="bg-green-700">NodeJS</p>
          <p className="bg-neutral-800">Deno</p>
          <p className="bg-cyan-800">React</p>
          <p className="bg-neutral-800">Remix</p>
          <p className="bg-zinc-900">NextJS</p>
          <p className="bg-purple-800">Vite</p>
          <p className="bg-teal-700">TailwindCSS</p>
          <p className="bg-sky-800">PostgreSQL</p>
          <p className="bg-lime-700">Drizzle</p>
          <p className="bg-slate-900">Vercel</p>
          <p className="bg-indigo-800">VS Code</p>
        </div>
      </div>
    </section>
  );
}

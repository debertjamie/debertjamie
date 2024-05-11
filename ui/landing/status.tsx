import Link from "next/link";
import { Lanyard } from "@/wrapper";

export function Status() {
  return (
    <div className="border-t-2 border-t-brand-700 pt-4 grid sm:grid-cols-2 gap-4">
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
        <div className="flex flex-wrap gap-2 select-none text-base *:text-brand-50 *:rounded-lg *:px-2 *:py-1">
          <p className="bg-brand-500">TypeScript</p>
          <p className="bg-brand-700">NodeJS</p>
          <p className="bg-brand-700">Deno</p>
          <p className="bg-brand-600">React</p>
          <p className="bg-brand-600">Remix</p>
          <p className="bg-brand-600">NextJS</p>
          <p className="bg-brand-600">Vite</p>
          <p className="bg-brand-700">TailwindCSS</p>
          <p className="bg-brand-400">Vercel</p>
          <p className="bg-brand-400">VS Code</p>
        </div>
      </div>
    </div>
  );
}

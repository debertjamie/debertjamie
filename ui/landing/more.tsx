import Link from "next/link";
import { Lanyard, Spotify, Socials } from ".";
import { DownloadIcon, BooksIcon } from "../icons";

export function More() {
  return (
    <section className="pt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="flex flex-col gap-y-4">
        <Spotify />
        <Link
          href="https://discordapp.com/users/755773452756975646"
          target="_blank"
          rel="norefferer noopener"
          className="block"
        >
          <Lanyard />
        </Link>
        <div className="bg-neutral-800 text-zinc-100 rounded-2xl px-4 py-2 flex justify-center items-center *:inline">
          <p className="text-xl">Download Resume</p>
          <DownloadIcon className="w-5 ml-2" />
        </div>
        <Link href="/guestbook" className="bg-slate-800 border-slate-600 border-2 text-zinc-100 rounded-lg px-4 py-2 flex justify-center items-center *:inline hover:scale-95 duration-300">
          <BooksIcon className="w-8 ml-2" />
          <p className="text-2xl">Guestbook</p>
        </Link>
      </div>
      <div className="md:col-span-2">
        <Socials />
      </div>
    </section>
  );
}

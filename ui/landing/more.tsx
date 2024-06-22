import Link from "next/link";
import { Lanyard, Spotify, Socials } from ".";
import { DownloadIcon } from "../icons";

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
          <p className="text-lg">Download Resume</p>
          <DownloadIcon className="w-4 ml-2" />
        </div>
      </div>
      <div className="md:col-span-2">
        <Socials />
      </div>
    </section>
  );
}

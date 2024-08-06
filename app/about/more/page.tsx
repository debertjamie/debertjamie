import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Movies, Spotify, Wakatime } from "@/ui/about";
import { GameIcon, SteamIcon, XboxIcon } from "@/ui/icons";
import { Time } from "@/ui/components";

export default function More() {
  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-xl">
      <h1 className="text-5xl font-bold">Statistics And More</h1>
      <section className="bg-neutral-200 dark:bg-neutral-900 rounded-xl px-4 py-2 w-72 mx-auto space-y-2">
        <p className="text-xl flex justify-between">
          <span>Local Time</span>
          <span className="text-cyan-600 dark:text-cyan-500 font-semibold">
            Asia/Jakarta
          </span>
        </p>
        <div className="text-5xl font-bold text-center">
          <Time simple />
        </div>
      </section>
      <section className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
        <h2 className="font-semibold xs:col-span-2 md:col-span-3">
          Coding Data (Wakatime)
        </h2>
        <Suspense
          fallback={
            <div className="rounded-xl bg-neutral-300 dark:bg-neutral-800 px-4 py-2">
              <p className="text-xl">Loading Wakatime Data...</p>
            </div>
          }
        >
          <Wakatime />
          <p className="xs:col-span-2 md:col-span-3 -mt-2">
            *Per 26 April 2024
          </p>
        </Suspense>
      </section>
      <section className="grid sm:grid-cols-2 gap-4">
        <div className="text-xl sm:col-span-2">
          <h2 className="font-semibold">Music and Movies</h2>
        </div>
        <Movies />
        <Spotify />
      </section>
      <section className="text-xl space-y-4">
        <h2 className="font-semibold -mb-4">Games</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://steamcommunity.com/id/debertjamie/"
            target="_blank"
            rel="norefferer noopener"
            className="block text-2xl rounded-lg px-2 py-1 bg-blue-950 text-zinc-100 w-fit"
          >
            <SteamIcon className="inline w-8 mr-2 -mt-1" />
            Debert#6913
          </Link>
          <Link
            href="https://www.xbox.com/play/user/DebertJamie5386"
            target="_blank"
            rel="norefferer noopener"
            className="block text-2xl rounded-lg px-2 py-1 bg-green-900 text-zinc-100 w-fit"
          >
            <XboxIcon className="inline w-8 mr-2 -mt-1" />
            DebertJamie#5386
          </Link>
          <div className="block text-2xl rounded-lg px-2 py-1 bg-gray-800 text-zinc-100 w-fit">
            <GameIcon className="inline w-8 mr-2 -mt-1" />
            Soon?
          </div>
        </div>
      </section>
    </main>
  );
}

const title = "More About Me";
const description = "Some statistics and other things about me";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@debertjamie",
  },
};

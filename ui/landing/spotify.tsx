"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

interface NowPlaying {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function Spotify() {
  const {data} = useSWR<NowPlaying>("/api/now-playing", fetcher, {refreshInterval: 60000});
  return (
    <>
      {data?.isPlaying ? (
        <Link
          href={data.songUrl}
          target="_blank"
          rel="norefferer noopener"
          className="block mx-auto relative w-80 h-80 text-zinc-100 rounded-lg overflow-hidden px-2 py-1"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20"
          >
              <Image
                src={data.albumImageUrl}
                alt={data.album}
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-transparent to-zinc-900"
              />
            </span>
          <div className="m-3 relative h-full">
            <p className="text-base">Listening to</p>
            <p className="font-bold text-3xl">Spotify</p>
            <div className="absolute bottom-5 right-0 text-right">
              <p className="text-2xl font-semibold">{data.title}</p>
              <p className="text-lg">{data.artist}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="block mx-auto relative w-80 h-80 text-zinc-100 rounded-lg overflow-hidden px-2 py-1">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20"
          >
              <Image
                src="https://images.unsplash.com/photo-1570993492903-ba4c3088f100?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="No songs playing"
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-transparent to-zinc-900"
              />
            </span>
          <div className="m-3 relative h-full">
            <p className="text-base">Debert Jamie</p>
            <p className="font-bold text-3xl">Spotify</p>
            <div className="absolute bottom-12 right-0 text-right">
              <p className="text-2xl font-semibold">No Songs Playing</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

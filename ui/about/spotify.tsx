"use client";

import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { Suspense } from "react";
import { SpotifyIcon } from "../icons";

interface RecentlyPlayed {
  error: boolean;
  list: {
    track: {
      name: string;
      album: {
        name: string;
        image: string;
      };
      artists: string[];
      explicit: boolean;
      url: string;
    };
  }[];
}

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
  const { data } = useSWR<RecentlyPlayed>("/api/recently-played", fetcher);
  return (
    <div className="text-xl bg-slate-300 dark:bg-slate-800 px-4 py-2 space-y-4 rounded-xl">
      <p>Recently Played Songs</p>
      <Suspense fallback={<p>Loading Spotify Data...</p>}>
        {data?.error ? (
          <div>
            <p className="text-3xl">Error Fetching Data</p>
            <p>An error occured, try again later</p>
          </div>
        ) : (
          <div className="grid xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-2">
            {data?.list.map(({ track }) => (
              <Link
                href={track.url}
                key={track.name}
                target="_blank"
                rel="norefferer noopener"
                className="flex items-center gap-x-2 px-2 py-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 duration-200"
              >
                <Image
                  src={track.album.image}
                  height={0}
                  width={0}
                  alt={track.album.name}
                  sizes="100%"
                  className="w-10 h-10"
                />
                <div className="flex flex-col justify-center leading-tight text-sm">
                  <p className="font-semibold">{track.name}</p>
                  <p className="text-zinc-800 dark:text-zinc-300">
                    {track.artists.join(", ")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Suspense>
      <Link
        href="https://open.spotify.com/user/31cquejvozvwhwj6vv3snek5asfu"
        target="_blank"
        rel="norefferer noopener"
        className="flex items-center text-lg rounded-lg px-2 py-1 bg-green-700 text-zinc-100 w-fit"
      >
        <SpotifyIcon className="w-6 mr-2" />
        Spotify
      </Link>
      <div className="border-t pt-4 border-t-zinc-950 dark:border-t-zinc-100">
        <p>Now Playing</p>
        <Suspense fallback={<p>Loading Now Playing Data...</p>}>
          <NowPlaying />
        </Suspense>
      </div>
    </div>
  );
}

function NowPlaying() {
  const { data } = useSWR<NowPlaying>("/api/now-playing", fetcher);
  return (
    <div className="flex items-center mt-2">
      {data?.isPlaying ? (
        <Link
          href={data.songUrl}
          target="_blank"
          rel="norefferer noopener"
          className="grid grid-cols-[4rem_auto] items-center gap-x-4"
        >
          <Image
            src={data.albumImageUrl}
            alt={data.album}
            width={0}
            height={0}
            sizes="100%"
            priority={true}
            className="rounded-lg w-auto h-auto"
          />
          <div className="flex flex-col justify-center">
            <p className="font-semibold">{data.title}</p>
            <p className="text-base text-zinc-700 dark:text-zinc-400">
              {data.artist}
            </p>
          </div>
        </Link>
      ) : (
        <div className="text-lg lg:mt-2">
          <p>Not Playing Any Songs</p>
        </div>
      )}
    </div>
  );
}

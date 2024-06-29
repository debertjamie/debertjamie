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
  const { data } = useSWR<NowPlaying>("/api/now-playing", fetcher);
  return (
    <div className="text-lg bg-zinc-300 dark:bg-zinc-900 px-2 py-2 rounded-xl">
      {data?.isPlaying ? (
        <Link
          href={data.songUrl}
          target="_blank"
          rel="norefferer noopener"
          className="grid grid-cols-[auto_4rem] items-center gap-x-4"
        >
          <div>
            <p className="text-xl font-semibold">{data.title}</p>
            <p className="text-base text-zinc-700 dark:text-zinc-400">
              {data.artist}
            </p>
          </div>
          <Image
            src={data.albumImageUrl}
            alt={data.album}
            width={0}
            height={0}
            sizes="100%"
            priority={true}
            className="rounded-full w-auto h-auto animate-[spin_60s_linear_infinite]"
          />
        </Link>
      ) : (
        <div className="grid grid-cols-[auto_4rem] items-center gap-x-4">
          <div>
            <h3 className="font-semibold">Spotify</h3>
            <p>Not Playing Any Song</p>
          </div>
          <Link
            href="https://open.spotify.com/user/31cquejvozvwhwj6vv3snek5asfu"
            target="_blank"
            rel="norefferer noopener"
            className="block"
          >
            <Image
              src="https://i.scdn.co/image/ab6775700000ee853087460ae8b6c94f85cc5932"
              alt="Spotify profile picture"
              width={0}
              height={0}
              sizes="100%"
              priority={true}
              className="rounded-full w-12 h-12 md:w-16 md:h-16 ring ring-green-500"
            />
          </Link>
        </div>
      )}
      {data?.isPlaying && (
        <p className="text-base text-zinc-700 dark:text-zinc-400">
          Listening To Spotify
        </p>
      )}
    </div>
  );
}

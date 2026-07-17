"use client";

import Image from "next/image";
import Link from "next/link";
import { NowPlaying } from "@/ui/landing/activities";

export function Spotify({ data }: { data?: NowPlaying }) {
  return (
    <div className="p-4 rounded-xl bg-spicy-mix-dark/90 w-fit">
      {data?.isPlaying ? (
        <Link
          href={data.songUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="block mx-auto text-porcelain rounded-lg"
        >
          <span aria-hidden="true" className="pointer-events-none inset-0">
            <Image
              src={data.albumImageUrl}
              alt={data.album}
              width={0}
              height={0}
              sizes="100%"
              className="inset-0 h-64 w-64 md:h-80 md:w-80 rounded-lg object-cover object-center"
            />
          </span>
          <div className="mt-2 space-y-3 w-64 md:w-80">
            <div>
              <p className="text-3xl font-semibold">{data.title}</p>
              <p className="text-lg text-neutral-300">{data.artist}</p>
            </div>
            <p className="font-bold text-xl">Listening to Spotify</p>
          </div>
        </Link>
      ) : (
        <div className="block mx-auto text-neutral-100 rounded-lg">
          <span aria-hidden="true" className="pointer-events-none inset-0">
            <Image
              src="https://images.unsplash.com/photo-1570993492903-ba4c3088f100?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="No songs playing"
              width={0}
              height={0}
              sizes="100%"
              className="inset-0 h-64 w-64 md:h-80 md:w-80 rounded-lg object-cover object-center"
            />
          </span>
          <div className="mt-2 space-y-3 w-64 md:w-80">
            <div>
              <p className="text-3xl font-semibold">No Songs Playing</p>
              <p className="text-lg text-neutral-300"></p>
            </div>
            <p className="font-bold text-xl">Spotify</p>
          </div>
        </div>
      )}
    </div>
  );
}

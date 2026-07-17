"use client";

import useSWR from "swr";
import {useState, useEffect} from "react";
import {Spotify} from ".";

export interface NowPlaying {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function Activities() {
  const {data} = useSWR<NowPlaying>("/api/now-playing", fetcher, {refreshInterval: 10000});

  return (
    <section className="relative -mx-4 text-xl flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden">
        <Spotify data={data}/>
      </div>
      <div className="h-[150vh] w-screen bg-scroll lg:bg-fixed"
      style={{
        backgroundImage: `url('${data?.isPlaying ?
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover"
      }}/>
    </section>
  )
}
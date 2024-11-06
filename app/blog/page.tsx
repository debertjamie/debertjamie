import {Blogs, Pinned, Short} from "@/ui/blog";
import type {Metadata} from "next";
import {Suspense} from "react";

export default function Blog() {
  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-xl">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold">Debert Jamie's Blogpage</h1>
        <p className="text-xl">
          A collection of random thoughts and ideas that I have in my mind. I didn't really write a lot, but some of
          these are probably worth sharing.
        </p>
      </div>
      <div className="grid lg:grid-cols-[40rem_auto] gap-x-4">
        <Suspense fallback={<ListFallback/>}>
          <Blogs/>
        </Suspense>
        <div className="hidden lg:block space-y-4">
          <Suspense fallback={<FeaturedFallback/>}>
            <Short/>
            <Pinned/>
          </Suspense>
        </div>
      </div>
    </main>
  );
}

function FeaturedFallback() {
  return (
    <div className="space-y-4">
      <div className="h-fit border border-zinc-500 px-4 py-2 rounded-xl text-xl space-y-2">
        <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
        <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
        <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
      </div>
      <div className="h-fit border border-zinc-500 px-4 py-2 rounded-xl text-xl space-y-2">
        <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
        <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
        <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
      </div>
    </div>
  )
}

function ListFallback() {
  return (
    <div className="border h-fit border-zinc-500 px-4 py-2 rounded-xl text-xl space-y-4">
      <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
      <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
      <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
      <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
      <div className="h-8 bg-zinc-950 dark:bg-zinc-100 animate-pulse rounded-lg"/>
    </div>
  )
}

const title = "Blog";
const description =
  "A collection of random thoughts and ideas that I have in my mind. I didn't really write a lot, but some of these are probably worth sharing.";

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

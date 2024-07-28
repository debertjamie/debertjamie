import { Blogs, Pinned, Short } from "@/ui/blog";
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-xl">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold">Debert Jamie's Blogpage</h1>
        <p className="text-lg">
          A collection of thoughts poured into readable forms
        </p>
        <p className="flex flex-wrap gap-4">
          <Link
            href="/blog/column"
            className="block px-2 py-1 rounded-lg text-cyan-600 dark:text-cyan-500 bg-zinc-950/10 dark:bg-zinc-100/10 hover:font-semibold duration-300"
          >
            Article Column
          </Link>
          <Link
            href="/blog/shorts"
            className="block px-2 py-1 rounded-lg text-cyan-600 dark:text-cyan-500 bg-zinc-950/10 dark:bg-zinc-100/10 hover:font-semibold duration-300"
          >
            Shorter Articles
          </Link>
        </p>
      </div>
      <div className="grid lg:grid-cols-[40rem_auto] gap-x-4">
        <Suspense fallback={<p>Loading...</p>}>
          <Blogs />
        </Suspense>
        <div className="hidden lg:block space-y-4">
          <Suspense fallback={<p>Loading...</p>}>
            <Short />
            <Pinned />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

const title = "Blog";
const description =
  "Here is where the random thoughts inside my mind are poured into human language";

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

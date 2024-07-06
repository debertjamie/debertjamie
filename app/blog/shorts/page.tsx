import { Suspense } from "react";
import type { Metadata } from "next";
import { Shorts } from "@/ui/blog";

export default function Short() {
  return (
    <main className="space-y-16 mt-8 sm:mt-28 text-xl">
      <section>
        <h1 className="text-5xl font-bold">Shorts</h1>
        <h2>
          A home for shorter contents, TIL notes, and my other random thoughts
        </h2>
      </section>
      <Suspense fallback={<p>Loading...</p>}>
        <Shorts />
      </Suspense>
    </main>
  );
}

const title = "Blog Shorts";
const description =
  "A home for shorter contents, TIL notes, and my other random thoughts";

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

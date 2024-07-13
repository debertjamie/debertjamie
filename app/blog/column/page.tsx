import { Suspense } from "react";
import type { Metadata } from "next";
import { Columns } from "@/ui/blog";

export default function Column() {
  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-xl">
      <section>
        <h1 className="text-5xl font-bold">Article Column</h1>
        <h2>The column for my main posts</h2>
      </section>
      <Suspense fallback={<p>Loading...</p>}>
        <Columns />
      </Suspense>
    </main>
  );
}

const title = "Article Columns";
const description = "The column for my main posts";

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

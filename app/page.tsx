import type { Metadata } from "next";
import { Head, More } from "@/ui/landing";

export default function Home() {
  return (
    <>
      <main className="space-y-8">
        <Head />
        <More />
      </main>
    </>
  );
}

const title = "@Debert Jamie C";
const description =
  "Hey! I'm Debert, a Computer Science enthusiast who likes Maths and Tech ⌨️";

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
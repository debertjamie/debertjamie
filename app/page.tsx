import type { Metadata } from "next";
import { Head, Socials, Status } from "@/ui/landing";

export default function Home() {
  return (
    <>
      <main className="space-y-8">
        <Head />
        <Socials />
        <Status />
      </main>
    </>
  );
}

const title = "@Debert";
const description =
  "Hey! I'm Debert, a student from Indonesia who likes to tinker with code ⌨️";

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
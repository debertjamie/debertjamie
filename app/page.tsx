import type {Metadata} from "next";
import {Head, Intro, Details, Activities, Connect} from "@/ui/landing";

export default function Home() {
  return (
    <main className="space-y-16 mt-8 sm:mt-20">
      <Head/>
      <div className="sm:py-24"/>
      <Intro/>
      <Details/>
      <Activities/>
      <Connect/>
    </main>
  );
}

const title = "Debert Jamie C";
const description =
  "Debert Jamie Chanderson is an undergraduate student at Gadjah Mada University who is majoring in Information Engineering. As an IE student, Debert has a growing passion for software development and machine learning related technologies.";

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

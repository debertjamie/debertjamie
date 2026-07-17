import type { Metadata } from "next";
import { Head, Details, Extra, Activities } from "@/ui/landing";

export default function Home() {
  return (
    <main className="space-y-12">
      <Head />
      <Details />
      <Extra />
      <Activities/>
    </main>
  );
}

const title = "Debert Jamie";
const description =
  "Hi! I'm Debert, a third-year undergraduate student learning about life and technology. Welcome to my internet home where I share thoughts and showcase my projects.";

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

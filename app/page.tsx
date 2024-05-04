import { Metadata } from "next";
import { Summary, Extras, Photo, Contact } from "@/ui/landing";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-[60%_40%] gap-6">
      <div className="space-y-8">
        <Summary />
        <Extras />
      </div>
      <div className="space-y-4 md:flex md:gap-x-4 lg:block">
        <Photo />
        <Contact />
      </div>
    </main>
  );
}

const title = "Debert Jamie Chanderson";
const description =
  "Hey! I'm Debert Jamie, a student from Indonesia who likes to tinker with code. Brewing new creations line by line everyday ⌨️ A math fanboy at brain who likes to wrangle with x's and y's.";

export const metadata: Metadata = {
  title,
  description,
  keywords: "debert, debert jamie chanderson",
  openGraph: {
    type: "website",
    title,
    description,
    locale: "en_EN"
  },
  twitter: {
    title,
    description,
    card: "summary",
    creator: "@debertjamie",
  },
};

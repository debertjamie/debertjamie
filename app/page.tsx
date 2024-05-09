import { Metadata } from "next";
import { Summary, Extras, Photo, Time, Contact } from "@/ui/landing";

export default function Home() {
  return (
    <>
      <main className="hidden lg:grid grid-cols-[60%_40%] gap-6">
        <div className="space-y-8">
          <Summary />
          <Extras />
        </div>
        <div className="space-y-4 sm:flex sm:gap-x-4 lg:block">
          <div className="space-y-2">
            <Photo />
            <Time />
          </div>
          <Contact />
        </div>
      </main>
      <main className="hidden md:grid space-y-8 lg:hidden">
        <div className="grid gap-6 grid-cols-[60%_40%]">
          <div className="space-y-4">
            <Summary />
          </div>
          <div>
            <Photo />
          </div>
        </div>
        <Extras />
        <Contact />
      </main>
      <main className="space-y-4 md:hidden">
        <div className="space-y-4">
          <Summary />
        </div>
        <Extras />
        <Contact />
      </main>
    </>
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
    locale: "en_EN",
  },
  twitter: {
    title,
    description,
    card: "summary",
    creator: "@debertjamie",
  },
};

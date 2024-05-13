import { Metadata } from "next";
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
  keywords: "debert, debert jamie chanderson, 陈宥维",
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};

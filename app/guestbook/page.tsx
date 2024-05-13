import type { Metadata } from "next";
import Link from "next/link";

export default function Guestbook() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Guestbook is Currently Unavailable
        </h1>
      </div>
      <p className="text-lg">
        <span className="font-semibold">/guestbook</span> is still in
        development. Check back later.
      </p>
      <p className="text-lg">Target of Completion: June 2024</p>
      <div>
        <Link
          className="w-fit mt-12 px-4 py-2 bg-brand-600 text-brand-50 font-semibold text-lg rounded-lg"
          href="/"
        >
          Return Home -&gt;
        </Link>
      </div>
    </main>
  );
}

const title = "Guestbook";
const description =
  "Hi! You can sign your name in here if you want";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
  },
};

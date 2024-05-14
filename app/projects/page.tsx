import type { Metadata } from "next";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Where is everyone?</h1>
        <h2 className="text-2xl font-semibold">This place looks empty...</h2>
      </div>
      <p className="text-lg">
        <span className="font-semibold">/projects</span> is currently under
        development.
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

const title = "Projects";
const description =
  "Lists of projects I've made";

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
    card: "summary_large_image",
    creator: "@debertjamie",
  },
};
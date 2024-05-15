import type { Metadata } from "next";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Blog Unavailable
        </h1>
      </div>
      <p className="text-lg">
        <span className="font-semibold">/blog</span> is still in
        development. Check back later.
      </p>
      <p className="text-lg">Target of Completion: End of May &#39;24</p>
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

const title = "Blog";
const description =
  "Debert Jamie's blogpage.";

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

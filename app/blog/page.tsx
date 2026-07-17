import type { Metadata } from "next";
import { Navbar, Blogs, Notes } from "@/ui/blog";
import { ReturnHome } from "@/ui/components";

type BlogTab = "blogs" | "notes" | "tags" | "series";

function normalizeTab(tab: string | string[] | undefined): BlogTab {
  const value = Array.isArray(tab) ? tab[0] : tab;
  if (value === "notes" || value === "tags" || value === "series") {
    return value;
  }
  return "blogs";
}

function Tags() {
  return (
    <section className="rounded-xl border border-buttercup p-4">
      <p className="text-base">Coming soon.</p>
    </section>
  );
}

type PageProps = {
  searchParams?: Promise<{ tab?: string | string[] }>;
};

export default async function Blog({ searchParams }: PageProps) {
  const params = searchParams ? await searchParams : undefined;
  const activeTab = normalizeTab(params?.tab);

  return (
    <main className="space-y-8 mt-8 sm:mt-18 text-lg">
      <section className="space-y-2">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p>
          A collection of random thoughts and ideas I have in my mind. Also some
          short notes and T.I.L.s about programming, tech, and life.
        </p>
      </section>

      <div className="relative overflow-hidden">
        <Navbar activeTab={activeTab} />
      </div>
      {activeTab === "blogs" && <Blogs />}
      {activeTab === "notes" && <Notes />}
      {activeTab === "tags" && <Tags />}
      {activeTab === "series" && <Tags />}
      <div className="my-2" />
      <ReturnHome />
    </main>
  );
}

const title = "Blog";
const description =
  "A collection of random thoughts and ideas that I have in my mind. I didn't really write a lot, but some of these are probably worth sharing.";

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

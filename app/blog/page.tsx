import { getBlogs } from "@/lib/mdx";
import { Grid } from "@/ui/blog";
import type { Metadata } from "next";
import { Suspense } from "react";

export default function Blog({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const blogs = getBlogs();
  const selectedTag = decodeURIComponent(searchParams?.tag || "");
  const selectedBlogs = selectedTag
    ? blogs.filter(
        (data) => data.tags.indexOf(selectedTag.toUpperCase()) !== -1
      )
    : blogs;
  const pinnedBlogs = blogs.filter((data) => data.pinned === true);
  return (
    <main className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Debert Jamie&#39;s Blogpage</h1>
        <p className="text-lg">
          A collection of thoughts poured into readable forms
        </p>
      </div>
      <Suspense fallback={<p className="text-lg">Loading blogs... Please wait</p>}>
        <Grid
          blogs={selectedBlogs}
          selectedTag={selectedTag}
          pinnedBlogs={pinnedBlogs}
        />
      </Suspense>
    </main>
  );
}

const title = "Blog";
const description = "Debert Jamie's blogpage.";

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

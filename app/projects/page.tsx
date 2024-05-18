import { getProjects } from "@/lib/mdx";
import { Grid } from "@/ui/projects";
import type { Metadata } from "next";
import { Suspense } from "react";

export default function Projects() {
  let projects = getProjects();
  projects = [
    ...projects.filter((p) => p.pinned),
    ...projects.filter((p) => !p.pinned),
  ];
  return (
    <main className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-lg">
          List of projects I created, some are open source too :o
        </p>
      </div>
      <Suspense fallback={<p className="text-lg">Finding projects...</p>}>
        <Grid />
      </Suspense>
    </main>
  );
}

const title = "Projects";
const description = "List of projects I created, some are open source too :o";

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

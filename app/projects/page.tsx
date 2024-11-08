import {Featured, Grid} from "@/ui/projects";
import type {Metadata} from "next";
import {Suspense} from "react";

export default function Projects() {
  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-xl">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold">Projects</h1>
        <p className="text-xl">
          Some programming-related projects I created or contributed in, both private and open source.
        </p>
      </div>
      <Suspense fallback={<p className="text-2xl">Loading projects...</p>}>
        <Featured/>
        <Grid/>
      </Suspense>
    </main>
  );
}

const title = "Projects";
const description = "A list of projects I created";

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

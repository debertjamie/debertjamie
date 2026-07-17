import type { Metadata } from "next";
import { ProjectGrid } from "@/ui/projects";
import { ReturnHome } from "@/ui/components";

export default function Projects() {
  return (
    <main className="space-y-8 mt-8 sm:mt-18 text-lg">
      <section className="space-y-2">
        <h1 className="text-5xl font-bold">Projects</h1>
        <p>
          Some programming-related projects I created or contributed in, both
          private and open source.
        </p>
      </section>
      <ProjectGrid />
      <ReturnHome />
    </main>
  );
}

const title = "Projects";
const description =
  "Some programming-related projects I created or contributed in, both private and open source.";

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

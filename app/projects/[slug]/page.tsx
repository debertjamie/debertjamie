import Link from "next/link";
import { publicUrl } from "@/app/env.mjs";
import { getProjects, formatDate } from "@/lib/mdx";
import { Mdx } from "@/ui/projects";
import type { Metadata } from "next/types";

export function generateMetadata({
  params,
}: {
  readonly params: { slug: string };
}): Metadata {
  const project = getProjects().find((proj) => proj.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.excerpt,
    keywords: project.tags,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      type: "article",
      publishedTime: project.publishedDate,
      url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}project/${project.slug}`,
      locale: "en-US",
    },
    twitter: {
      title: project.title,
      description: project.excerpt,
      card: "summary_large_image",
      creator: "@debertjamie",
    },
  };
}

export default function Page({
  params,
}: {
  readonly params: { slug: string };
}) {
  const project = getProjects().find((project) => project.slug === params.slug);
  if (!project) return undefined;
  return (
    <main className="space-y-8 select-none">
      <script
        type="application/ld+json"
        suppressHydrationWarning={true}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "projectPosting",
            headline: project.title,
            datePublished: project.publishedDate,
            dateModified: project.lastUpdate,
            description: project.excerpt,
            url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}project/${project.slug}`,
            author: {
              "@type": "Person",
              name: "Debert Jamie Chanderson",
            },
          }),
        }}
      />
      <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
      <div className="space-y-4 border-b-2 border-b-zinc-950 dark:border-b-zinc-100 pb-2">
        <h2 className="text-2xl">{project.excerpt}</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-lg *:bg-emerald-900 *:text-zinc-100 *:px-2 *:py-1 *:rounded-lg *:font-semibold">
          {project.tags.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </div>
      <div>
        <div>
          <Mdx content={project.content} />
        </div>
        <div className="space-y-4 pt-12">
          <h2 className="text-3xl font-semibold">Project Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">History</h3>
              <p className="text-lg">
                Project published on {project.date}.
                {project.lastUpdate
                  ? ` Last updated ${formatDate(project.lastUpdate)}`
                  : ""}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Links</h3>
              <div className="flex flex-wrap gap-2 text-zinc-100">
                {project.openSource ? (
                  <Link
                    href={project.openSource}
                    target="_blank"
                    rel="norefferer noopener"
                    className="block px-2 py-1 rounded-lg text-lg font-semibold bg-purple-900 w-fit"
                  >
                    View Source
                  </Link>
                ) : (
                  <p className="text-lg">This project is not Open Source</p>
                )}
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="norefferer noopener"
                    className="block px-2 py-1 rounded-lg text-lg font-semibold bg-indigo-900 w-fit"
                  >
                    View Live Version
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

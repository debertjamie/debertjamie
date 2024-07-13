import Link from "next/link";
import { publicUrl } from "@/app/env.mjs";
import type { Metadata } from "next";
import { Column, formatDate, getBlogs, Shorts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Mdx } from "@/ui/blog";

export function generateMetadata({
  params,
}: {
  readonly params: { slug: string };
}): Metadata {
  const blog = (getBlogs() as (Column | Shorts)[]).find(
    (blog) => blog.slug === params.slug
  );
  if (!blog) return notFound();

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.published,
      url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${blog.slug}`,
    },
    twitter: {
      title: blog.title,
      description: blog.excerpt,
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
  const blog = (getBlogs() as (Column | Shorts)[]).find(
    (blog) => blog.slug === params.slug
  );
  if (!blog) return notFound();

  const wordlength = blog.content.trim().split(/\s+/).length;
  const ert = Math.ceil(wordlength / 200);

  return (
    <main className="space-y-16 -mt-12 sm:-mt-10 text-xl">
      <script
        type="application/ld+json"
        suppressHydrationWarning={true}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            datePublished: blog.published,
            dateModified:
              "updated" in blog && !!blog.updated
                ? blog.updated
                : blog.published,
            description: blog.excerpt,
            url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${blog.slug}`,
            author: {
              "@type": "Person",
              name: "Debert Jamie Chanderson",
            },
          }),
        }}
      />
      <div className="space-y-2 border-b-2 border-b-zinc-950 dark:border-b-zinc-100 pb-2">
        <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
        {"draft" in blog && blog.draft && (
          <h2 className="text-lg md:text-2xl font-semibold">
            ⚠️ This Column is a work in progress
          </h2>
        )}
        <h2 className="text-2xl">{blog.excerpt}</h2>
        <div
          className={`flex ${"updated" in blog && !!blog.updated ? "flex-col" : "flex-wrap justify-between"}`}
        >
          <p className="text-lg">Estimated Reading Time: {ert} min</p>
          <div className="flex justify-between flex-wrap gap-x-2 text-lg">
            <p>Published at {formatDate(blog.published)}</p>
            {"updated" in blog && !!blog.updated && (
              <p>Updated at {formatDate(blog.updated)}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 text-lg *:font-semibold">
          {"tags" in blog &&
            blog.tags.split(",").map((t) => (
              <Link href={`/blog/tag/${t}`} key={t} className="hover:underline">
                #{t}
              </Link>
            ))}
        </div>
      </div>
      <article className="tracking-wider">
        <Mdx content={blog.content} />
      </article>
    </main>
  );
}

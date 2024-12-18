import Link from "next/link";
import {publicUrl} from "@/app/env.mjs";
import type {Metadata} from "next";
import {Column, formatDate, getBlogs, Shorts} from "@/lib/blog";
import {notFound} from "next/navigation";
import {Mdx} from "@/ui/blog";
import {CalendarIcon, GlobeIcon} from "@/ui/icons";

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

  return (
    <main className="space-y-8 mt-16 text-xl">
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
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-lg">{blog.excerpt}</p>
        <div className="flex flex-wrap gap-x-4 text-lg *:font-semibold">
          {"tags" in blog &&
            blog.tags.split(",").map((t) => (
              <Link href={`/blog/tag/${t}`} key={t} className="hover:underline text-cyan-600 dark:text-cyan-500">
                #{t}
              </Link>
            ))}
        </div>
      </div>
      <div className="tracking-wider">
        <div className="flex flex-wrap gap-x-24 gap-y-2 text-lg">
          <p>
            <CalendarIcon className="inline mr-2 w-8"/>
            {formatDate(blog.published)}
            {"updated" in blog &&
              !!blog.updated &&
              ` (Updated at ${formatDate(blog.updated)})`}
          </p>
          {"language" in blog && (
            <p>
              <GlobeIcon className="inline mr-2 w-8"/>
              {blog.language}
            </p>
          )}
        </div>
        {"draft" in blog && blog.draft && (
          <div
            className="bg-zinc-300 mt-4 dark:bg-zinc-800 px-2 py-1 border-l-2 border-l-yellow-500 rounded-r-lg w-fit text-lg font-semibold">
            ⚠️ This article is a work in progress, information contained in here may not be valid
          </div>
        )}
        <article className="border-l mt-8 pl-8">
          <Mdx content={blog.content}/>
        </article>
      </div>
    </main>
  );
}

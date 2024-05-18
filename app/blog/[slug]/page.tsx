import Link from "next/link";
import { publicUrl } from "@/app/env.mjs";
import { getBlogs, formatDate } from "@/lib/mdx";
import { Card, Mdx } from "@/ui/blog";
import type { Metadata } from "next/types";
import type { Blog } from "@/lib/mdx";

const language: Record<Blog["language"], string> = {
  EN: "Written in English",
  ZH: "以简体中文书写",
};

const draft: Record<Blog["language"], string> = {
  EN: "This blog post is still a draft and may subject to change",
  ZH: "本博文仍是草稿，可能会有改动",
};

export function generateMetadata({
  params,
}: {
  readonly params: { slug: string };
}): Metadata {
  const blog = getBlogs().find((blog) => blog.slug === params.slug);
  if (!blog) return {};

  const locale: Record<Blog["language"], string> = {
    EN: "en-US",
    ZH: "zh-CN",
  };

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.publishedDate,
      url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${blog.slug}`,
      locale: locale[blog.language],
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
  const blog = getBlogs().find((blog) => blog.slug === params.slug);
  if (!blog) return undefined;

  const moreBlogs = getBlogs()
    .filter((blog) => blog.slug !== params.slug)
    .splice(0, 3);

  const wordlength = blog.content.trim().length;
  const ert = Math.ceil(wordlength / 200);

  return (
    <main className="space-y-8 select-none">
      <script
        type="application/ld+json"
        suppressHydrationWarning={true}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            datePublished: blog.publishedDate,
            dateModified: blog.publishedDate,
            description: blog.excerpt,
            url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${blog.slug}`,
            author: {
              "@type": "Person",
              name: "Debert Jamie Chanderson",
            },
          }),
        }}
      />
      <h1 className="text-3xl md:text-5xl font-bold">{blog.title}</h1>
      <div className="space-y-4 border-b-2 border-b-zinc-950 dark:border-b-cyan-50 pb-2">
        {blog.draft ? (
          <h2 className="text-lg md:text-2xl font-semibold">
            ⚠️ {draft[blog.language]}
          </h2>
        ) : (
          <></>
        )}
        <h2 className="text-2xl">{blog.excerpt}</h2>
        <div className="flex justify-between flex-wrap gap-x-2 text-lg">
          <span>{language[blog.language]}</span>
          <span>ERT: {ert} min</span>
          <span>
            {formatDate(
              blog.date,
              blog.language === "ZH" ? "zh-CN" : undefined
            )}
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 text-lg *:bg-emerald-900 *:text-cyan-50 *:px-2 *:py-1 *:rounded-lg *:font-semibold">
          {blog.tags.map((t) => (
            <Link
              href={`/blog?tag=${encodeURIComponent(t.toLowerCase())}`}
              key={t}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Mdx content={blog.content} />
      </div>
      <div className="space-y-4 md:ml-4">
        <h3 className="text-xl font-semibold">Recent blogs:</h3>
        <div className=" space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
          {moreBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className="block">
              <Card blog={blog} minimal />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

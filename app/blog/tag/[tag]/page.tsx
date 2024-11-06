import { publicUrl } from "@/app/env.mjs";
import { Column, formatDate, getBlogs } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export function generateMetadata({
  params,
}: {
  readonly params: { tag: string };
}): Metadata {
  const blog = (getBlogs("column") as Column[]).filter((c) =>
    c.tags.split(",").includes(decodeURI(params.tag).toLowerCase())
  );

  const title = blog.length
    ? `Articles tagged with with "#${decodeURI(params.tag).toLowerCase()}"`
    : `Unknown Tag: ${decodeURI(params.tag).toLowerCase()}`;
  const description = `List of Article(s) I wrote with the "${decodeURI(params.tag).toLowerCase()}" tag`;

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/tag/${params.tag.toLowerCase()}`,
    },
    twitter: {
      title: title,
      description: description,
      card: "summary_large_image",
      creator: "@debertjamie",
    },
  };
}

export default function Tags({ params }: { readonly params: { tag: string } }) {
  const blog = (getBlogs("column") as Column[]).filter((c) =>
    c.tags.split(",").includes(decodeURI(params.tag).toLowerCase())
  );
  const even = [];
  const odd = [];

  if (blog.length) {
    for (let i = 0; i < blog.length; i++) {
      if (i % 2 == 0) {
        even.push(blog[i]);
      } else {
        odd.push(blog[i]);
      }
    }
  }

  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-xl">
      {blog.length ? (
        <>
          <h1 className="text-5xl font-bold">
            #{decodeURI(params.tag)}
          </h1>
          <section>
            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                {even.map((c) => (
                  <Link
                    href={`/blog/${c.slug}`}
                    key={c.title}
                    className={`block group ${c.pinned ? "bg-slate-400 dark:bg-slate-800" : "bg-slate-300 dark:bg-slate-900"} px-4 py-2 rounded-xl hover:scale-95 duration-300`}
                  >
                    <p className="text-base">
                      {c.tags.split(",").map((t, i) => (
                        <span key={t}>
                          {i > 0 ? " " : ""}
                          #{t}
                        </span>
                      ))}
                    </p>
                    <p className="text-2xl font-medium group-hover:font-semibold duration-300">
                      {c.pinned && "📌 "}{c.title}
                    </p>
                    <p>{c.excerpt}</p>
                    <p className="text-base">{formatDate(c.published)}</p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {odd.map((c) => (
                  <Link
                    href={`/blog/${c.slug}`}
                    key={c.title}
                    className={`block group ${c.pinned ? "bg-slate-400 dark:bg-slate-800" : "bg-slate-300 dark:bg-slate-900"} px-4 py-2 rounded-xl hover:scale-95 duration-300`}
                  >
                    <p className="text-base">
                      {c.tags.split(",").map((t, i) => (
                        <span key={t}>
                          {i > 0 ? " " : ""}
                          <Link href={`/blog/tags-${t}`}>#{t}</Link>
                        </span>
                      ))}
                      {c.pinned && <span> #pinned</span>}
                    </p>
                    <p className="text-2xl font-medium group-hover:font-semibold duration-300">
                      {c.title}
                    </p>
                    <p>{c.excerpt}</p>
                    <p className="text-base">{formatDate(c.published)}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid md:hidden gap-4">
              {blog.map((c) => (
                <Link
                  href={`/blog/${c.slug}`}
                  key={c.title}
                  className={`block group ${c.pinned ? "bg-slate-400 dark:bg-slate-800" : "bg-slate-300 dark:bg-slate-900"} px-4 py-2 rounded-xl hover:scale-95 duration-300`}
                >
                  <p className="text-base">
                    {c.tags.split(",").map((t, i) => (
                      <span key={t}>
                        {i > 0 ? " " : ""}
                        <Link href={`/blog/tags-${t}`}>#{t}</Link>
                      </span>
                    ))}
                    {c.pinned && <span> #pinned</span>}
                  </p>
                  <p className="text-2xl font-medium group-hover:font-semibold duration-300">
                    {c.title}
                  </p>
                  <p>{c.excerpt}</p>
                  <p className="text-base">{formatDate(c.published)}</p>
                </Link>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <h1 className="text-5xl font-bold">
            Unknown Tag: <span className="font-medium">{decodeURI(params.tag)}</span>
          </h1>
          <div>
            <p className="text-2xl">The requested tag does not exist... yet</p>
            <p>
              There are no articles with this tag yet. Try checking back later.
            </p>
          </div>
        </>
      )}
    </main>
  );
}

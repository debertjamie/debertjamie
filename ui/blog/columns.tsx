import Link from "next/link";
import { Column, formatDate, getBlogs } from "@/lib/blog";

export function Columns() {
  const columns = getBlogs("column") as Column[];
  const even = [];
  const odd = [];

  for (let i = 0; i < columns.length; i++) {
    if (i % 2 == 0) {
      even.push(columns[i]);
    } else {
      odd.push(columns[i]);
    }
  }

  return (
    <>
      <section className="hidden md:grid grid-cols-2 gap-4">
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
                    <Link href={`/blog/tag/${t}`}>#{t}</Link>
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
      </section>
      <section className="grid md:hidden gap-4">
        {columns.map((c) => (
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
      </section>
    </>
  );
}

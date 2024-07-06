import Link from "next/link";
import { Column, getBlogs } from "@/lib/blog";

export function Pinned() {
  const columns = getBlogs("column") as Column[];
  const pinnedColumns = columns.filter((c) => c.pinned);
  return (
    <section className="h-fit border border-zinc-500 rounded-xl px-4 py-2 text-xl">
      <p className="font-semibold mb-2 text-3xl">Pinned Columns</p>
      <div className="flex flex-col gap-y-4">
        {pinnedColumns.map((c) => (
          <Link
            href={`/blog/${c.slug}`}
            key={c.title}
            className="group hover:bg-zinc-950/10 dark:hover:bg-zinc-100/10 duration-300 px-2 py-1 rounded-lg"
          >
            <div className="text-base flex text-zinc-700 dark:text-zinc-400 gap-x-2">
              {c.tags.split(",").map((t) => (
                <p key={t} className="before:content-['#']">
                  {t}
                </p>
              ))}
            </div>
            <p className="font-medium group-hover:font-semibold duration-300">
              {c.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

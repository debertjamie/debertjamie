import Link from "next/link";
import { formatDate, getBlogs, Shorts as ShortsType } from "@/lib/blog";

export function Shorts() {
  const shorts = (getBlogs("shorts") as ShortsType[]).filter(
    (s) => s.type === "Shorts"
  );
  return (
    <section className="max-w-2xl flex flex-col gap-y-8">
      {shorts.map((s, i) => (
        <div
          key={s.title}
          data-index={i}
          className="border-t data-[index='0']:border-t-0 border-t-zinc-500 pt-6 data-[index='0']:pt-0"
        >
          <p className="text-base text-zinc-800 dark:text-zinc-400">
            {formatDate(s.published)}
          </p>
          <Link
            href={`/blog/${s.slug}`}
            className="block text-3xl font-medium hover:underline"
          >
            {s.title}
          </Link>
          <p>{s.excerpt}</p>
        </div>
      ))}
    </section>
  );
}

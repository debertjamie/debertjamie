import Link from "next/link";
import { getBlogs, Shorts } from "@/lib/blog";

export function Short() {
  const shorts = (getBlogs("shorts") as Shorts[]).filter(
    (s) => s.type === "Shorts"
  )[0];
  return (
    <section className="h-fit border border-zinc-500 rounded-xl px-4 py-2 text-xl">
      <p className="font-semibold mb-2 text-3xl">Latest Shorts</p>
      <Link
        href={`/blog/${shorts.slug}`}
        className="block group hover:bg-zinc-950/10 dark:hover:bg-zinc-100/10 duration-300 px-2 py-1 rounded-lg"
      >
        <p className="text-base text-zinc-700 dark:text-zinc-400">
          {shorts.published}
        </p>
        <p className="font-medium group-hover:font-semibold duration-300">
          {shorts.title}
        </p>
      </Link>
      <Link
        href="/blog/shorts?type=shorts"
        className="block mt-2 text-base hover:underline w-fit"
      >
        Read All Shorts -&gt;
      </Link>
    </section>
  );
}

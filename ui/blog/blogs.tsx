import Link from "next/link";
import Image from "next/image";
import { getBlogs, formatDate } from "@/lib/blog";
import { DoubleArrowIcon } from "../icons";

export function Blogs() {
  const blogs = getBlogs();
  const sortedBlogs = blogs.sort((b1, b2) =>
    b1.published > b2.published ? -1 : 1
  );

  return (
    <section className="flex flex-col max-w-2xl gap-4 border border-zinc-500 py-2 rounded-xl">
      {sortedBlogs.map((b, index) => (
        <div
          key={b.published}
          data-index={index}
          className="border-t px-4 data-[index='0']:border-t-0 border-t-zinc-500 pt-2 data-[index='0']:pt-0"
        >
          {"tags" in b || ("type" in b && b.type === "Shorts") ? (
            <div className="flex flex-col gap-y-2">
              <div className="text-lg text-zinc-700 dark:text-zinc-400 font-semibold select-none">
                <DoubleArrowIcon className="w-6 h-6 -mt-[3px] -ml-3 inline-block" />
                <span>
                  Debert Jamie posted a new {"tags" in b ? "Column" : "Shorts"}
                </span>
              </div>
              <p>
                <span className="font-semibold after:content-['\00B7'] after:px-2">
                  @DebertJamie
                </span>
                <span className="text-zinc-700 dark:text-zinc-400">
                  {formatDate(b.published)}
                </span>
              </p>
              <div className="text-2xl">
                <p>
                  -&gt;{" "}
                  <Link
                    href={`/blog/${b.slug}`}
                    className="text-cyan-600 dark:text-cyan-500"
                  >
                    /blog/{b.slug}
                  </Link>
                </p>
                <div className="border border-zinc-500 px-2 py-1 rounded w-fit">
                  <Link
                    href={`/blog/${b.slug}`}
                    className="block text-xl font-medium hover:underline"
                  >
                    <p>{b.title}</p>
                  </Link>
                  <p className="text-base text-zinc-800 dark:text-zinc-300">
                    {b.excerpt}
                  </p>
                </div>
              </div>
              {"tags" in b && (
                <p className="text-base">
                  {b.tags.split(",").map((t, i) => (
                    <span key={t}>
                      {i > 0 ? " " : ""}
                      <Link
                        href={`/blog/tag/${t}`}
                        className="text-cyan-600 dark:text-cyan-500"
                      >
                        #{t}
                      </Link>
                    </span>
                  ))}
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-lg text-zinc-700 dark:text-zinc-400 font-semibold select-none">
                <DoubleArrowIcon className="w-6 h-6 -mt-[2px] -ml-3 inline-block" />
                <span>Debert Jamie posted a line</span>
              </div>
              <div>
                <p>
                  <span className="font-semibold after:content-['\00B7'] after:px-2">
                    @DebertJamie
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-400">
                    {formatDate(b.published)}
                  </span>
                </p>
                <p className="text-2xl">{b.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

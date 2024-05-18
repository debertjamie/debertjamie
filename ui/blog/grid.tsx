import { getBlogs } from "@/lib/mdx";
import type { Blog } from "@/lib/mdx";
import { Card, Tags, tag, Featured } from ".";
import Link from "next/link";

interface GridProps {
  blogs?: Blog[];
  selectedTag?: string;
  pinnedBlogs?: Blog[];
  searchParams?: { [key: string]: string | undefined };
}

export function Grid({ searchParams }: GridProps) {
  const blogs = getBlogs();

  const selectedTag = decodeURIComponent(searchParams?.tag || "");
  const selectedBlogs = selectedTag
    ? blogs.filter(
        (data) => data.tags.indexOf(selectedTag.toUpperCase()) !== -1
      )
    : blogs;

  const pinnedBlogs = blogs.filter((data) => data.pinned === true);
  const fulltag = selectedTag ? tag[selectedTag.toUpperCase()] : "";

  return (
    <div className="grid md:grid-cols-[55%_45%] md:gap-x-4 space-y-4">
      <div className="space-y-4">
        {fulltag ? (
          <h2 className="text-2xl font-semibold text-center">{fulltag}</h2>
        ) : (
          <></>
        )}
        {selectedBlogs.length ? (
          selectedBlogs.map((blog, index) => (
            <div
              key={blog.slug}
              className={
                "py-2 " +
                (index !== 0
                  ? "border-t-2 border-t-zinc-950 dark:border-t-cyan-50"
                  : "")
              }
            >
              <Link href={`/blog/${blog.slug}`} className="block">
                <Card blog={blog} />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-lg">There are no blogs with that tag</p>
        )}
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Blog Tags:</h2>
          <Tags />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Featured Blogs</h2>
          {pinnedBlogs.length ? (
            pinnedBlogs.map((blog) => (
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.slug}
                className="block w-fit"
              >
                <Featured blog={blog} />
              </Link>
            ))
          ) : (
            <p className="text-lg">There are currently no pinned blogs</p>
          )}
        </div>
      </div>
    </div>
  );
}

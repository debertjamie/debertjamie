import { Blog } from "@/lib/mdx";
import { Card, Tags, tag, Featured } from ".";
import Link from "next/link";

interface GridProps {
  blogs: Blog[];
  selectedTag?: string;
  pinnedBlogs: Blog[];
}

export function Grid({ blogs, selectedTag, pinnedBlogs }: GridProps) {
  const fulltag = selectedTag ? tag[selectedTag.toUpperCase()] : "";
  return (
    <div className="grid md:grid-cols-[55%_45%] md:gap-x-4 space-y-4">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {fulltag ? `${fulltag} Blogs` : "All Blogs"}
        </h2>
        {blogs.length ? (
          blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className="block">
              <Card blog={blog} />
            </Link>
          ))
        ) : (
          <p className="text-lg">
            There are currently no blogs with that tag 🙁
          </p>
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
                className="block pl-4"
              >
                <Featured blog={blog} />
              </Link>
            ))
          ) : (
            <p className="text-lg">
              There are currently no pinned blogs available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

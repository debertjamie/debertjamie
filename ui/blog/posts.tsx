import { postsQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import type { PostType } from "@/lib/blog";
import { maiyuan } from "@/ui/fonts/fonts";
import { PostCard } from ".";

export async function Blogs() {
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["posts"],
  });

  return (
    <section className={`flex flex-col gap-4 py-2 ${maiyuan.className}`}>
      {posts.length > 0 ? (
        <div className="grid gap-y-8">
          {posts.map((post) => post.isPublished && (
            <article key={post._id}>
              <PostCard post={post} />
            </article>
          ))}
        </div>
      ) : (
        <div className="flex">
          <p>
            No posts found.
          </p>
        </div>
      )}
    </section>
  );
}

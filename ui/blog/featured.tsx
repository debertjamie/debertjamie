import { Blog } from "@/lib/mdx";

interface FeaturedProps {
  blog: Blog;
}

export function Featured({ blog }: FeaturedProps) {
  return (
    <div className="leading-tight tracking-tight text-brand-700 dark:text-brand-300">
      <h3 className="text-2xl font-semibold">{blog.title}</h3>
    </div>
  );
}

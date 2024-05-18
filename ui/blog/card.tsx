import { Blog } from "@/lib/mdx";

const language: Record<Blog["language"], string> = {
  EN: "English",
  ZH: "中文",
};

interface CardProps {
  blog: Blog;
  minimal?: boolean;
}

export function Card({ blog, minimal = false }: CardProps) {
  return (
    <div
      className={
        "select-none rounded-lg hover:bg-cyan-100 dark:hover:bg-zinc-900 duration-200 " +
        (minimal ? "px-2 py-1" : "px-4 py-2 space-y-2")
      }
    >
      <div>
        <h3 className="text-2xl font-semibold">{blog.title}</h3>
        {minimal ? <></> : <p className="text-lg">{blog.excerpt}</p>}
      </div>
      {minimal ? (
        <></>
      ) : (
        <div className="flex flex-wrap justify-between gap-x-4 text-base">
          <span>{language[blog.language]}</span>
          <span>{blog.date}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-x-2 font-semibold *:bg-blue-900 *:px-1.5 *:py-0.5 *:rounded-sm">
        {blog.tags.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  );
}

export function Featured({ blog }: Omit<CardProps, "minimal">) {
  return (
    <div className="leading-tight tracking-tight text-sky-700 dark:text-sky-400">
      <h3 className="text-2xl font-semibold">&#11177; {blog.title}</h3>
    </div>
  );
}

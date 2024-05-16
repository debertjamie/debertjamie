import { Blog } from "@/lib/mdx";

const language: Record<string, string> = {
  EN: "English",
  ZH: "中文",
};

interface CardProps {
  blog: Blog;
  minimal?: boolean;
}

export function Card({ blog, minimal = false }: CardProps) {
  return (
    <div className={"select-none rounded-lg text-brand-50 " + (minimal? "px-2 py-1 bg-brand-500" : "bg-brand-800 px-4 py-2 space-y-2")}>
      <div>
        <h3 className="text-2xl font-semibold">{blog.title}</h3>
        {minimal ? <></> : <p className="text-lg">{blog.excerpt}</p>}
      </div>
      {minimal ? (
        <></>
      ) : (
        <div className="flex flex-wrap justify-between gap-x-4 text-base">
          <span>{language[blog.language]}</span>
          <span>{blog.publishedDate}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-x-2 font-semibold *:bg-brand-400 *:px-1.5 *:py-0.5 *:rounded-sm">
        {blog.tags.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  );
}

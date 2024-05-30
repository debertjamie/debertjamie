import { Projects } from "@/lib/mdx";

interface CardProps {
  project: Projects;
}

export function Card({ project }: CardProps) {
  return (
    <div
      className={
        "px-4 py-2 rounded-xl text-zinc-100 space-y-2 " +
        (project.pinned
          ? "bg-gradient-to-tr from-blue-800 to-cyan-800"
          : "bg-blue-800")
      }
    >
      <div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-lg">{project.excerpt}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-x-4 text-base font-semibold">
        <p>{project.pinned ? "FEATURED" : ""}</p>
        <p>{project.openSource ? "OPEN SOURCE" : ""}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-base font-semibold *:px-2 *:py-0.5 *:bg-sky-950 *:rounded-sm">
        {project.tags.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  );
}

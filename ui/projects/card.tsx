import Link from "next/link";
import type {Project} from "@/lib/project";

export function Card({project}: { project: Project }) {
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
        {project.link ? (<Link
          target="_blank"
          rel="noreferrer noopener"
          href={project.link}
          className="block text-2xl font-medium hover:font-semibold duration-300"
        >
          {project.title}
        </Link>) : (<h2
          className="block text-2xl font-medium hover:font-semibold duration-300"
        >
          {project.title}
        </h2>)}
        <p className="text-lg">{project.excerpt}</p>
      </div>
      {(project.pinned || project.oss) && (
        <div className="flex flex-wrap justify-between gap-x-4 text-base font-semibold">
          <p>{project.pinned ? "FEATURED" : ""}</p>
          {project.oss && (
            <Link
              href={project.oss}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline"
            >
              OPEN SOURCE -&gt;
            </Link>
          )}
        </div>
      )}
      <div className="flex flex-wrap gap-2 text-base font-medium *:px-2 *:py-0.5 *:bg-sky-950 *:rounded-sm">
        {project.tags.split(",").map((t) => (
          <p key={t}>#{t}</p>
        ))}
      </div>
    </div>
  );
}

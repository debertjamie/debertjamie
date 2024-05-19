import { getProjects } from "@/lib/mdx";
import { Card } from "@/ui/projects";
import Link from "next/link";

export function Grid() {
  let projects = getProjects();
  projects = [
    ...projects.filter((p) => p.pinned),
    ...projects.filter((p) => !p.pinned),
  ];
  return (
    <>
      {projects.length ? (
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.title}
              className="block"
            >
              <Card project={project} />
            </Link>
          ))}
        </div>
      ) : (
        <>
          <p className="text-lg">There are currently no projects</p>
          <div className="space-y-2">
            <p className="text-lg">
              Some projects may be showcased on my GitHub
            </p>
            <Link
              href="https://github.com/debertjamie"
              target="_blank"
              rel="norefferer noopener"
              className="text-lg block text-sky-700 dark:text-sky-400 w-fit after:ml-1 after:content-['\2197']"
            >Github Account</Link>
          </div>
        </>
      )}
    </>
  );
}

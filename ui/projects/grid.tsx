import { getProjects } from "@/lib/project";
import { Card } from "@/ui/projects";

export function Grid() {
  let projects = getProjects().filter((p) => !p.pinned);
  const even = [];
  const odd = [];

  for (let i = 0; i < projects.length; i++) {
    if (i % 2 === 0) {
      even.push(projects[i]);
    } else {
      odd.push(projects[i]);
    }
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Other Projects</h2>
      <section className="hidden md:grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          {even.map((project) => (
            <div key={project.title}>
              <Card project={project} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {odd.map((project) => (
            <div key={project.title}>
              <Card project={project} />
            </div>
          ))}
        </div>
      </section>
      <section className="grid md:hidden gap-4">
        {projects.map((project) => (
          <div key={project.title} className="block">
            <Card project={project} />
          </div>
        ))}
      </section>
    </div>
  );
}

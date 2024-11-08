import {getProjects} from "@/lib/project";
import {Card} from ".";

export function Featured() {
  const featuredProjects = getProjects().filter((p) => p.pinned);
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {featuredProjects.map((project) => (
          <div key={project.title}>
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
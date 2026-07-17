import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { projectsQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import type { ProjectType } from "@/lib/project";
import { GithubIcon, GlobeIcon } from "@/ui/icons";

export async function ProjectGrid() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["projects"],
  });
      
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden border border-steel-grey/30 dark:border-porcelain/30 rounded-lg hover:shadow-md p-4"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                className="object-cover scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={project.mainImage.image}
                alt={project.mainImage.alt || project.title}
              />
              <div className="absolute inset-0 opacity-100 bg-porcelain/90 dark:bg-steel-grey-dark/90 group-hover:bg-porcelain/60 dark:group-hover:bg-steel-grey-dark/60 transition-colors duration-200" />
            </div>
            <div className="relative z-10">
              <div className="flex justify-between mb-4">
                <h3 className="text-xl self-end font-semibold">
                  {project.title}
                </h3>
                <div className="p-1 border border-steel-grey/30 dark:border-porcelain/30 rounded-md">
                  <div className="relative w-10 h-10">
                    <Image
                      className="rounded-sm object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={project.mainImage.image}
                      alt={project.mainImage.alt || project.title}
                    />
                  </div>
                </div>
              </div>
              <div className="leading-tight">
                <PortableText value={project.description} />
              </div>
              <hr className="my-8 border-steel-grey/30 dark:border-porcelain/30" />
              <div className="flex gap-x-2">
                {project.repository && (
                  <Link
                    className="flex items-center gap-x-1 px-1 py-0.5 text-sm rounded-xl border-2 border-steel-grey/50 dark:border-porcelain/50 hover:bg-buttercup-dark/50 dark:hover:bg-buttercup/50 hover:border-buttercup-dark/70 dark:hover:border-buttercup/70 hover:scale-105 duration-200"
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span className="underline">Repository</span>
                  </Link>
                )}
                {project.projectUrl && (
                  <Link
                    className="flex items-center gap-x-1 px-1 py-0.5 text-sm rounded-xl border-2 border-steel-grey/50 dark:border-porcelain/50 hover:bg-buttercup-dark/50 dark:hover:bg-buttercup/50 hover:border-buttercup-dark/70 dark:hover:border-buttercup/70 hover:scale-105 duration-200"
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GlobeIcon className="w-3 h-3" />
                    <span className="underline">Project URL</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </section>
  );
}

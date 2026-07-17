import Link from "next/link";
import { education } from "@/lib/resume";

export function Education() {
  return (
    <section className="space-y-4">
      <div id="education" />
      <h2 className="text-3xl text-center font-semibold border-b-2 border-b-spicy-mix-dark dark:border-b-spicy-mix">
        Education
      </h2>
      <div className="space-y-2">
        {education.map((edu, index) => (
          <div
            key={index}
            className="block bg-porcelain-dark dark:bg-steel-grey p-4 rounded-lg space-y-1 hover:-translate-y-0.5 duration-200 hover:shadow-lg hover:shadow-steel-grey/10 dark:hover:shadow-porcelain/10"
          >
            <h3 className="text-xl font-bold">{edu.degree}</h3>
            <div className="flex flex-col gap-y-1 md:flex-row md:justify-between md:items-center text-base">
              <Link href={edu.link} target="_blank" rel="noopener noreferrer" className="w-fit hover:text-buttercup-dark dark:hover:text-buttercup duration-200 before:scale-x-100 before:origin-left relative before:w-full before:h-0.5 before:transition-transform before:duration-300 before:bg-buttercup-dark dark:before:bg-buttercup before:absolute before:left-0 before:bottom-0">
                {edu.institution}
              </Link>
              <p className="text-right">{edu.startDate} - {edu.endDate}</p>
            </div>
            <p className="text-sm text-steel-grey/80 dark:text-porcelain/80">
              {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

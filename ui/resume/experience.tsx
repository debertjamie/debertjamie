import Link from "next/link";
import { experiences } from "@/lib/resume";

export function Experience() {
  const sortedExperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  function convertDate(dateString: string) {
    const [year, month] = dateString.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  }

  return (
    <section className="space-y-4">
      <div id="experience" />
      <h2 className="text-3xl text-center font-semibold border-b-2 border-b-spicy-mix-dark dark:border-b-spicy-mix">
        Experience
      </h2>
      <div className="space-y-2">
        {sortedExperiences.map((exp, index) => (
          <div
            key={index}
            className="bg-porcelain-dark dark:bg-steel-grey p-4 rounded-lg space-y-2 hover:-translate-y-0.5 duration-200 hover:shadow-lg hover:shadow-steel-grey/10 dark:hover:shadow-porcelain/10"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-xl font-bold">
                <Link href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-buttercup-dark dark:hover:text-buttercup duration-200 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-buttercup-dark dark:before:bg-buttercup before:absolute before:left-0 before:bottom-0">
                  {exp.position}
                </Link>
              </h3>
              <p className="text-sm text-steel-grey/80 dark:text-porcelain/80">
                {convertDate(exp.startDate)} -{" "}
                {exp.endDate ? convertDate(exp.endDate) : "Present"}
              </p>
            </div>
            <div className="text-sm text-steel-grey/80 dark:text-porcelain/80">
              <p>{exp.company}</p>
              <p>{exp.location}</p>
            </div>
            <p className="text-base">{exp.description}</p>
            {exp.highlights && exp.highlights.length > 0 && (
              <div>
                <p className="text-sm font-semibold">Highlights:</p>
                <ul className="list-disc ml-5">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

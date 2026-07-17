import Link from "next/link";
import { courses } from "@/lib/resume";

export function Courses() {
  return (
    <section className="space-y-4">
      <div id="courses" />
      <h2 className="text-3xl text-center font-semibold border-b-2 border-b-spicy-mix-dark dark:border-b-spicy-mix">
        Highlighted Courses
      </h2>
      <div className="space-y-2">
        {courses.map((course, index) => (
          <Link
            key={index}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-porcelain-dark dark:bg-steel-grey p-4 rounded-lg border-x-2 border-x-spicy-mix dark:border-x-spicy-mix-dark space-y-2 hover:-translate-y-0.5 duration-200 hover:shadow-lg hover:shadow-steel-grey/10 dark:hover:shadow-porcelain/10"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center flex-wrap gap-x-2">
              <p className="text-sm text-steel-grey/80 dark:text-porcelain/80">
                {course.code}
              </p>
              <h3 className="text-xl font-bold">{course.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

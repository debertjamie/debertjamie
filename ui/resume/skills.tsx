import { skills, categories } from "@/lib/resume";

export function Skills() {
  return (
    <section className="space-y-4">
      <div id="skills" />
      <h2 className="text-3xl text-center font-semibold border-b-2 border-b-spicy-mix-dark dark:border-b-spicy-mix">
        Skills
      </h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category} className="space-y-2">
            <h3 className="text-lg font-semibold">{category}</h3>
            <div className="flex gap-2 flex-wrap text-base">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={index}
                    className="bg-porcelain-dark dark:bg-steel-grey pl-3 p-2 border-l-4 border-l-spicy-mix dark:border-l-spicy-mix-dark rounded-lg flex flex-col items-center gap-2 hover:border-l-2 duration-200"
                  >
                    <p>{skill.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/components";
import { skills } from ".";

export function Skills() {
  return (
    <div className="text-xl">
      <Accordion type="single" collapsible>
        {skills.map((skill) => {
          const skills1 = skill.skillset.filter((s) => s.tier === 1);
          const skills2 = skill.skillset.filter((s) => s.tier === 2);
          return (
            <AccordionItem value={skill.title} key={skill.title}>
              <AccordionTrigger>
                <p>{skill.title}</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-x-6 gap-y-4">
                  {[...skills1, ...skills2].map((skillset) => (
                    <div
                      key={skillset.name}
                      className="text-lg flex justify-center items-center gap-x-2 bg-zinc-200 dark:bg-zinc-900 px-2 py-1 rounded-lg"
                    >
                      <span>{skillset.icon({})}</span>
                      <span>{skillset.name}</span>
                      {skillset.tier === 2 && (
                        <span className="before:content-['\22BF']" />
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

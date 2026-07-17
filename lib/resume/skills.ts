export interface Skill {
  name: string;
  level: string;
  category: string;
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    level: "Advanced",
    category: "Web Development",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Web Development",
  },
  {
    name: "React",
    level: "Advanced",
    category: "Web Development",
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Web Development",
  },
  {
    name: "Astro",
    level: "Intermediate",
    category: "Web Development",
  },
  {
    name: "Node.js",
    level: "Intermediate",
    category: "Web Development",
  },
  {
    name: "Python",
    level: "Intermediate",
    category: "AI & Machine Learning",
  }, {
    name: "PyTorch",
    level: "Intermediate",
    category: "AI & Machine Learning",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "Git",
    level: "Intermediate",
    category: "Version Control",
  },
];

export const categories = Array.from(
  new Set(skills.map((skill) => skill.category)),
);

import { SVGProps } from "react";
import {
  Language,
  JavascriptIcon,
  TypescriptIcon,
  CPPIcon,
  PythonIcon,
  SQLIcon,
  HTMLIcon,
  CSSIcon,
  ReactIcon,
  RemixIcon,
  NextIcon,
  AstroIcon,
  TailwindIcon,
  NodeIcon,
  DenoIcon,
  DrizzleIcon,
  VercelIcon,
  HerokuIcon,
  ReplitIcon,
  MongodbIcon,
  PostgresIcon,
} from "../icons";

type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

interface Skillset {
  icon: IconType;
  name: string;
  tier: 1 | 2;
}

export const skills: { title: string; skillset: Skillset[] }[] = [
  {
    title: "The Human Lingo",
    skillset: [
      {
        name: "Bahasa Indonesia",
        tier: 1,
        icon: Language,
      },
      {
        name: "English",
        tier: 1,
        icon: Language,
      },
      {
        name: "简体中文",
        tier: 1,
        icon: Language,
      },
      {
        name: "繁体中文",
        tier: 2,
        icon: Language,
      },
      {
        name: "Deutsch",
        tier: 2,
        icon: Language,
      },
    ],
  },
  {
    title: "Programming",
    skillset: [
      {
        name: "Javascript",
        tier: 1,
        icon: JavascriptIcon,
      },
      {
        name: "Typescript",
        tier: 1,
        icon: TypescriptIcon,
      },
      {
        name: "C++",
        tier: 2,
        icon: CPPIcon,
      },
      {
        name: "Python",
        tier: 2,
        icon: PythonIcon,
      },
      {
        name: "SQL",
        tier: 2,
        icon: SQLIcon,
      },
    ],
  },
  {
    title: "Web Development",
    skillset: [
      {
        name: "HTML",
        tier: 1,
        icon: HTMLIcon,
      },
      {
        name: "CSS",
        tier: 1,
        icon: CSSIcon,
      },
      {
        name: "ReactJS",
        tier: 1,
        icon: ReactIcon,
      },
      {
        name: "Remix",
        tier: 1,
        icon: RemixIcon,
      },
      {
        name: "NextJS",
        tier: 1,
        icon: NextIcon,
      },
      {
        name: "Astro",
        tier: 2,
        icon: AstroIcon,
      },
      {
        name: "TailwindCSS",
        tier: 1,
        icon: TailwindIcon,
      },
    ],
  },
  {
    title: "Software Development",
    skillset: [
      {
        name: "Node.JS",
        tier: 1,
        icon: NodeIcon,
      },
      {
        name: "Deno",
        tier: 1,
        icon: DenoIcon,
      },
      {
        name: "Drizzle ORM",
        tier: 2,
        icon: DrizzleIcon,
      },
    ],
  },
  {
    title: "Cloud, Infrastructure, More",
    skillset: [
      {
        name: "Vercel",
        tier: 1,
        icon: VercelIcon,
      },
      {
        name: "Heroku",
        tier: 1,
        icon: HerokuIcon,
      },
      {
        name: "Replit",
        tier: 1,
        icon: ReplitIcon,
      },
      {
        name: "MongoDB",
        tier: 1,
        icon: MongodbIcon,
      },
      {
        name: "PostgreSQL",
        tier: 2,
        icon: PostgresIcon,
      },
    ],
  },
];

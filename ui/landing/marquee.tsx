import type { SVGProps } from "react";
import * as Icon from "../icons";

type IconItem = {
  title: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const items: IconItem[] = [
  { title: "Javascript", icon: Icon.JavascriptIcon },
  { title: "Typescript", icon: Icon.TypescriptIcon },
  { title: "React", icon: Icon.ReactIcon },
  { title: "Remix", icon: Icon.RemixIcon },
  { title: "NextJS", icon: Icon.NextIcon },
  { title: "TailwindCSS", icon: Icon.TailwindIcon },
  { title: "HTML", icon: Icon.HTMLIcon },
  { title: "CSS", icon: Icon.CSSIcon },
  { title: "NodeJS", icon: Icon.NodeIcon },
  { title: "Deno", icon: Icon.DenoIcon },
  { title: "Vercel", icon: Icon.VercelIcon },
  { title: "MongoDB", icon: Icon.MongodbIcon },
  { title: "PostgreSQL", icon: Icon.PostgresIcon },
];

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start);

function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="group flex gap-4 overflow-hidden flex-row"
      style={{
        maskImage:
          "linear-gradient('to right', transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient('to right', transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
      }}
    >
      {range(0, 2).map((i) => (
        <div
          key={i}
          className="flex shrink-0 justify-around gap-4 [--gap:1rem] animate-marquee-left flex-row group-hover:[animation-play-state:paused]"
        >
          {children}
        </div>
      ))}
    </div>
  );
}

function IconElement({ data }: { data: IconItem }) {
  return (
    <div
      key={data.title}
      title={data.title}
      className="flex items-center justify-center"
    >
      <data.icon className="w-8 h-8" />
    </div>
  );
}

export function Stack() {
  return (
    <div className="flex flex-col gap-3 overflow-hidden rounded-xl p-1">
      <Marquee>
        {items.map((i) => (
          <IconElement key={i.title} data={i}></IconElement>
        ))}
      </Marquee>
    </div>
  );
}

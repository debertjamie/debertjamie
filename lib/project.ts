import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

export interface Project {
  title: string;
  excerpt: string;
  date: string;
  tags: string;
  link: string;
  oss: string;
  pinned?: boolean
}

export function formatDate(date: string) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(new Date(date));
}

export function getProjects() {
  const rawData = readdirSync(join(process.cwd(), "contents/projects"));
  const data = rawData
    .map((d) => getProject(d))
    .sort((d1, d2) => (d1.date > d2.date ? -1 : 1));

  return data;
}

export function getProject(slug: string) {
  const path = join(process.cwd(), "contents/projects");
  const webSlug = slug.replace(/\.mdx$/, "");
  const file = readFileSync(join(path, `${webSlug}.mdx`), "utf-8");
  const { data } = matter(file);
  return { ...data } as Project;
}


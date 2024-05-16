import { readdirSync, readFileSync } from "fs";
import { extname, join } from "path";
import matter from "gray-matter";

export interface Blog {
  title: string;
  draft?: boolean;
  excerpt: string;
  publishedDate: string;
  language: string;
  tags: string[];
  pinned?: boolean;
  slug: string;
  content: string;
}

export interface Projects {
  title: string;
  excerpt: string;
  publishedDate: string;
  lastUpdate?: string;
  language: string;
  live?: string;
  openSource?: string;
  tags: string[];
  pinned?: boolean;
  slug: string;
  content: string;
}

type Mdx = Projects | Blog;

export function formatDate(date: string, locale?: string) {
  const formatDate = new Intl.DateTimeFormat(locale ?? "en-GB", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
  return formatDate.format(new Date(date));
}

function getMdx<T extends Mdx>(resourcePath: string) {
  const slugs = readdirSync(
    join(process.cwd(), "contents", resourcePath)
  ).filter((file) => extname(file) === ".mdx");
  const datas = slugs
    .map((slug) => getMdxData<T>(resourcePath, slug))
    .sort((data1, data2) =>
      data1.publishedDate > data2.publishedDate ? -1 : 1
    );
  return datas;
}

function getMdxData<T extends Mdx>(resourcePath: string, filepath: string) {
  const contents = readFileSync(
    join(process.cwd(), "contents", resourcePath, filepath),
    "utf-8"
  );
  const slug = filepath.replace(/\.mdx$/, "");
  const { data, content } = matter(contents);
  const formattedDate = formatDate(data.publishedDate as string);
  let { date: _, ...mdxData } = data;
  return { ...mdxData, publishedDate: formattedDate, slug, content } as T;
}

export function getBlogs() {
  return getMdx<Blog>("blog");
}

export function getProjects() {
  return getMdx<Projects>("projects");
}

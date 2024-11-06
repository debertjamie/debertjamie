import {readdirSync, readFileSync} from "fs";
import matter from "gray-matter";
import {join} from "path";

export interface Column {
  title: string;
  excerpt: string;
  tags: string;
  published: string;
  updated?: string;
  draft?: boolean;
  pinned?: boolean;
  slug: string;
  content: string;
}

export interface BaseShorts {
  type: "Shorts" | "Line";
  published: string;
  content: string;
}

export interface Line extends BaseShorts {
  type: "Line";
}

export interface Shorts extends BaseShorts {
  type: "Shorts";
  slug: string;
  title: string;
  excerpt: string;
}

export function formatDate(date: string) {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getBlogs(type?: "column" | "shorts") {
  const blogs = [];

  if (type !== "shorts") {
    const rawData = readdirSync(join(process.cwd(), "contents/column"));
    const data = rawData
      .map((d) => getColumn(d))
      .sort((d1, d2) => (d1.published > d2.published ? -1 : 1));
    blogs.push(...data);
  }
  if (type !== "column") {
    const rawData = readdirSync(join(process.cwd(), "contents/shorts"));
    const data = rawData
      .map((d) => getShorts(d))
      .sort((d1, d2) => (d1.published > d2.published ? -1 : 1));
    blogs.push(...data);
  }

  return blogs;
}

function getBlog(slug: string, folder: string) {
  const path = join(process.cwd(), folder);
  const webSlug = slug.replace(/\.mdx$/, "");
  const file = readFileSync(join(path, `${webSlug}.mdx`), "utf-8");
  return {file, webSlug};
}

export function getColumn(slug: string) {
  const {file, webSlug} = getBlog(slug, "contents/column");
  const {data, content} = matter(file);
  return {...data, slug: webSlug, content} as Column;
}

export function getShorts(slug: string) {
  const {file, webSlug} = getBlog(slug, "contents/shorts");
  const {data, content} = matter(file);
  if (data.type === "Shorts") {
    return {...data, content, slug: webSlug} as Shorts;
  } else {
    return {...data, content} as Line;
  }
}

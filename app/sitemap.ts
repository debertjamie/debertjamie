import { MetadataRoute } from "next";
import { postsQuery, notesQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import type { PostType, NoteType } from "@/lib/blog";
import { publicUrl } from "./env.mjs";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["posts"],
  });
  const notes: NoteType[] = await sanityFetch({
    query: notesQuery,
    tags: ["notes"],
  });

  const blogs: MetadataRoute.Sitemap = [
    ...posts.map((post): MetadataRoute.Sitemap[number] => ({
      url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${post.slug}`,
      lastModified: post._updatedAt || post._createdAt,
      changeFrequency: "never",
      priority: 0.7,
    })),
    ...notes.map((note): MetadataRoute.Sitemap[number] => ({
      url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/notes/${note.slug}`,
      lastModified: note._updatedAt || note._createdAt,
      changeFrequency: "never",
      priority: 0.5,
    })),
  ];

  const yearlyRoutes: MetadataRoute.Sitemap = [
    "",
    "about",
    "blog",
    "connect",
  ].map((route) => ({
    url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "yearly",
    priority: 1,
  }));

  const monthlyRoutes: MetadataRoute.Sitemap = [
    "projects",
    "resume",
    "friends",
    "now",
  ].map((route) => ({
    url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...yearlyRoutes, ...monthlyRoutes, ...blogs];
}

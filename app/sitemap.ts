import { Column, getBlogs, Shorts } from "@/lib/blog";
import { MetadataRoute } from "next";
import { publicUrl } from "./env.mjs";

export default function Sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = (getBlogs()
    .filter((blog) => "slug" in blog) as (Column | Shorts)[])
    .map((blog) => ({
      url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${blog.slug}`,
      lastModified: "updated" in blog ? blog.updated : blog.published,
      changeFrequency: "draft" in blog && blog.draft ? "weekly" : "never",
      priority: 0.8,
    }));

  const otherRoutes: MetadataRoute.Sitemap = [
    "",
    "blog",
    "projects",
    "guestbook",
  ].map((route) => ({
    url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 1,
  }));

  return [...otherRoutes, ...blogs];
}

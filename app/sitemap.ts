import { getBlogs, getProjects } from "@/lib/mdx";
import { MetadataRoute } from "next";
import { publicUrl } from "./env.mjs";

export default function Sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = getBlogs().map((blog) => ({
    url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${blog.slug}`,
    lastModified: blog.publishedDate,
    changeFrequency: blog.draft ? "weekly" : "never",
    priority: 0.8,
  }));

  const projects: MetadataRoute.Sitemap = getProjects().map((data) => ({
    url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}projects/${data.slug}`,
    lastModified: data.publishedDate,
    changeFrequency: "never",
    priority: 0.8,
  }));

  const otherRoutes: MetadataRoute.Sitemap = ["", "blog", "projects", "guestbook"].map((route) => ({
    url: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 1,
  }));

  return [...otherRoutes, ...blogs, ...projects];
}

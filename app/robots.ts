import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api", "/l"],
    },
    sitemap: "https://debertjamie.com/sitemap.xml",
    host: "https://debertjamie.com",
  };
}

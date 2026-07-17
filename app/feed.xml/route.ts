import { postsQuery, notesQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import type { PostType, NoteType } from "@/lib/blog";
import { publicUrl } from "@/app/env.mjs";

type FeedItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  locale: string;
};

export async function GET(request: Request): Promise<Response> {
  const posts: PostType[] = await sanityFetch({
    query: postsQuery,
    tags: ["posts"],
  });
  const notes: NoteType[] = await sanityFetch({
    query: notesQuery,
    tags: ["notes"],
  });

  const blogs: FeedItem[] = [
    ...posts.map((post): FeedItem => {
      return {
        title: post.title,
        link: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/${post.slug}`,
        description: post.description || "",
        pubDate: new Date(post._createdAt).toUTCString(),
        locale: post.locale || "en-GB",
      };
    }),
    ...notes.map((note): FeedItem => {
      return {
        title: note.title,
        link: `${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog/notes/${note.slug}`,
        description: `A short note about ${note.title}`,
        pubDate: new Date(note._createdAt).toUTCString(),
        locale: note.locale || "en-GB",
      };
    }),
  ];

  const lang = ["en-GB", "zh-CN", "zh-Hant"];
  const channelsXml = lang
    .map((l) => {
      const items = blogs.filter((blog) => blog.locale === l);
      return `
  <channel>
    <title>Blog (${l})</title>
    <link>${publicUrl}${publicUrl.endsWith("/") ? "" : "/"}blog</link>
    <language>${l.toLowerCase()}</language>
    ${items
      .map(
        (item) => `
      <item>
        <title><![CDATA[${item.title}]]></title>
        <description><![CDATA[${item.description}]]></description>
        <link>${item.link}</link>
        <pubDate>${new Date(item.pubDate).toUTCString()}</pubDate>
      </item>
    `,
      )
      .join("")}
  </channel>
  `;
    })
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        ${channelsXml}
    </rss>`;
  const encoder = new TextEncoder();

  return new Response(encoder.encode(feed), {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}

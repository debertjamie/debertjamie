import { getBlogs } from "@/lib/mdx";

export function GET() {
  const datas = getBlogs().map((data) => {
    const { content, draft, date, pinned, language, tags, ...rest } = data;
    return rest;
  });
  return new Response(JSON.stringify(datas), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

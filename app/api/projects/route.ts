import { getProjects } from "@/lib/mdx";

export function GET() {
  const datas = getProjects().map((data) => {
    const { content, date, pinned, lastUpdate, tags, openSource, slug, ...rest } = data;
    return rest;
  });
  return new Response(JSON.stringify(datas), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

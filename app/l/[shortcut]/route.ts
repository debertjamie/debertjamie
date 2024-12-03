import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { shortcut } from "@/lib/db/schema";
import {notFound} from "next/navigation";

export async function GET(req: Request) {
  const text = req.url.split("/").pop();
  if(!text) return notFound();

  const link = await db.select({
    url: shortcut.url,
    shortcut: shortcut.shortcut,
  }).from(shortcut).where(eq(shortcut.shortcut, text)).execute();
  if(!link[0]) return notFound();
  return Response.redirect(link[0].url, 301);
}
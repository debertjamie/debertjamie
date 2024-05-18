import { and, eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import { BadReq, Unauthorized } from "@/lib/apiResponse";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { guestbook } from "@/lib/db/schema";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.email || !session.user.name) {
    return Unauthorized();
  }

  const { email, name } = session.user;
  const { value } = (await req.json()) as { value: string };

  const id = uuidv4();

  if (typeof value !== "string" || value.trim().length === 0 || !value) {
    return BadReq("Invalid Body");
  }

  const newEntry = await db
    .insert(guestbook)
    .values({
      id,
      email,
      body: (value || "").slice(0, 500),
      created_by: name,
    })
    .returning();

  if (!newEntry[0]) {
    return BadReq("Error Inserting Data");
  }

  return new Response(
    JSON.stringify({
      id: newEntry[0].id,
      body: (value || "").slice(0, 500),
      created_by: name,
      updated_at: Date.now(),
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function DELETE(req: Request) {
  const session = await auth();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return BadReq("Invalid ID");
  }

  const entryResult = await db
    .select()
    .from(guestbook)
    .where(eq(guestbook.id, id))
    .execute();

  const entry = entryResult[0];

  if (!entry) {
    return BadReq("Error No Entry");
  }

  if (!session?.user?.email) {
    return Unauthorized();
  }

  if (session.user.email !== entry.email && !session.user.isAdmin) {
    return Unauthorized();
  }

  await db
    .delete(guestbook)
    .where(and(eq(guestbook.id, id), eq(guestbook.email, entry.email)))
    .execute();

  return new Response(JSON.stringify({ message: `Deleted entry ${id}` }), {
    status: 202,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

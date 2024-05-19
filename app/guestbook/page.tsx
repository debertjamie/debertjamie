import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { guestbook } from "@/lib/db/schema";
import { GuestbookEntry, GuestbookForm } from "@/ui/guestbook";
import { desc } from "drizzle-orm";
import type { Metadata } from "next";
import { Suspense } from "react";

async function getGuestbook() {
  const data = await db
    .select({
      id: guestbook.id,
      body: guestbook.body,
      email: guestbook.email,
      created_by: guestbook.created_by,
      updated_at: guestbook.updated_at,
    })
    .from(guestbook)
    .orderBy(desc(guestbook.updated_at))
    .limit(100)
    .execute();

  return data.map((entry) => {
    return { ...entry, updated_at: entry.updated_at.toISOString() };
  });
}

async function GuestbookFormWrapper() {
  const session = await auth();
  return <GuestbookForm session={session} />;
}

async function GuestbookEntries() {
  const [entries, session] = await Promise.all([getGuestbook(), auth()]);

  return (
    <div className="mt-4 space-y-8">
      {entries?.map((entry) => (
        <GuestbookEntry
          key={entry.id}
          entry={entry}
          session={session}
        />
      ))}
    </div>
  );
}

export default function Guestbook() {
  return (
    <main className="space-y-8">
      <div className="space-y-2">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Guestbook
        </h1>
        <p className="text-lg">
          Sign your name in here and get... your name in here?
        </p>
      </div>
      <Suspense>
        <GuestbookFormWrapper />
        <GuestbookEntries />
      </Suspense>
    </main>
  );
}

const title = "Guestbook";
const description = "Hi! You can sign your name";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@debertjamie",
  },
};

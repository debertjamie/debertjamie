"use client";

import { useRouter } from "next/navigation";
import type { Session } from "next-auth";

interface GuestBookEntryProps {
  entry: {
    id: string;
    email: string;
    body: string;
    created_by: string;
    updated_at: string;
  };
  session: Session | null;
  admin: boolean;
}

const time = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  timeZone: "Asia/Jakarta",
  timeZoneName: "shortGeneric",
});

export function GuestbookEntry({ entry, session, admin }: GuestBookEntryProps) {
  const router = useRouter();
  async function deleteEntry() {
    await fetch(`/api/guestbook?id=${entry.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <div>
      <div className="flex flex-wrap gap-x-2 text-base">
        <p className="font-medium">
          {entry.created_by}
          {admin ? " [ADMIN]" : ""}
        </p>
        <p className="text-zinc-800 dark:text-zinc-400">
          {time.format(new Date(entry.updated_at))}
        </p>
        <div className="select-none">
          {session?.user &&
            (entry.email === session.user.email || session.user.isAdmin) && (
              <button
                className="text-sm font-bold text-red-800 dark:text-red-500"
                onClick={deleteEntry}
              >
                Delete
                {session.user.isAdmin &&
                  entry.email !== session.user.email &&
                  " as Admin"}
              </button>
            )}
        </div>
      </div>
      <div className="bg-zinc-300 dark:bg-zinc-800 w-fit px-2 py-1 rounded-b-lg rounded-r-lg">
        <div className="w-full text-lg break-words">{entry.body}</div>
      </div>
    </div>
  );
}

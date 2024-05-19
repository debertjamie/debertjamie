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
}

export function GuestbookEntry({ entry, session }: GuestBookEntryProps) {
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
    <div className="bg-cyan-200 dark:bg-zinc-800 w-fit px-4 py-1 rounded-lg">
      <p className="text-base text-zinc-800 dark:text-cyan-200 font-semibold">
        {entry.created_by}
      </p>
      <div className="w-full text-lg break-words">{entry.body}</div>
      <div className="flex flex-wrap items-center gap-x-3 select-none">
        <p className="text-sm dark:text-neutral-300 font-semibold">
          {new Date(entry.updated_at)
            .toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              timeZone: "Asia/Jakarta",
              hour12: true,
            })
            .replace("am", "AM")
            .replace("pm", "PM")}{" "}
          Jakarta Time
        </p>
        {session?.user &&
          (entry.email === session.user.email || session.user.isAdmin) && (
            <button
              className="text-sm text-red-800 dark:text-red-500"
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
  );
}

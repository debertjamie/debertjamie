import Link from "next/link";
import { notesQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import type { NoteType } from "@/lib/blog";
import { maiyuan } from "@/ui/fonts/fonts";
import { formatDate } from "@/lib/blog";

export const series = {
  inspiration: "Inspiration 灵感",
  "daily-life": "Daily Life 日常",
  college: "College 大学",
  programming: "Programming 编程",
  technology: "Technology 科技",
  til: "Today I Learned 今天学到了",
  other: "Other 其他",
};

export async function Notes() {
  const notes: NoteType[] = await sanityFetch({
    query: notesQuery,
    tags: ["notes"],
  });

  const groupNotes = notes.reduce<{ series: string; notes: NoteType[] }[]>(
    (groups, note) => {
      const existingGroup = groups.find(
        (group) => group.series === note.series,
      );

      if (existingGroup) {
        existingGroup.notes.push(note);
        return groups;
      }

      groups.push({ series: note.series, notes: [note] });
      return groups;
    },
    [],
  );

  return (
    <section className={maiyuan.className}>
      {groupNotes.length > 0 ? (
        <div className="grid gap-y-8">
          {groupNotes.map((group, i) => (
            <div key={i} className="relative pt-6">
              <div className="absolute pointer-events-none select-none -top-2">
                <span className="text-5xl sm:text-6xl text-steel-grey/10 dark:text-porcelain/10 -z-10">
                  {series[group.series as keyof typeof series] || group.series}
                </span>
              </div>
              <div className="space-y-3">
                {group.notes.map((note, j) => (
                  <div key={j} className="flex gap-x-6">
                    <span className="text-steel-grey/90 dark:text-porcelain/90 font-semibold">
                      {formatDate(note.date)}
                    </span>
                    <Link
                      href={`/blog/notes/${note.slug}`}
                      className="hover:text-olivine-dark dark:hover:text-olivine duration-200"
                    >
                      {note.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex">
          <p>No Notes Found.</p>
        </div>
      )}
    </section>
  );
}

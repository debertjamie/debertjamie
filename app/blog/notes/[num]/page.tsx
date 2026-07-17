import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { singleNoteQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import type { NoteType } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import { CalendarIcon } from "@/ui/icons";
import { CustomPortableTextComponents, series } from "@/ui/blog";
import { jetbrainsMono, maiyuan } from "@/ui/fonts/fonts";

type Params = {
  params: Promise<{ num: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { num } = await params;
  const slug = Number(num);

  const note: NoteType = await sanityFetch({
    query: singleNoteQuery,
    qParams: { slug },
    tags: ["notes"],
  });

  if (!note) {
    notFound();
  }

  return {
    title: note.title,
    description: "A short note about " + note.title,
    metadataBase: new URL(`https://debertjamie.com/blog/notes/${note.slug}`),
    keywords: note.series ? [note.series] : [],
    openGraph: {
      title: note.title,
      description: "A short note about " + note.title,
      url: `https://debertjamie.com/blog/notes/${note.slug}`,
      siteName: "debertjamie.com",
      authors: "Debert Jamie",
      tags: note.series ? [note.series] : [],
      publishedTime: note._createdAt,
      modifiedTime: note._updatedAt || "",
      locale: note.locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: "A short note about " + note.title,
      creator: "@debertjamie",
      site: "@debertjamie",
    },
  };
}

export default async function NotePage({ params }: Params) {
  const { num } = await params;
  const slug = Number(num);

  const note: NoteType = await sanityFetch({
    query: singleNoteQuery,
    qParams: { slug },
    tags: ["notes"],
  });

  if (!note) {
    notFound();
  }

  return (
    <main
      className={`space-y-8 w-full mt-8 sm:mt-18 text-xl ${maiyuan.className}`}
    >
      <section className="relative space-y-4">
        <h1 className="text-4xl font-bold text-center">{note.title}</h1>
        <div className="absolute pointer-events-none select-none right-0 -top-14">
          <span className="text-6xl text-steel-grey/10 dark:text-porcelain/10 -z-10">
            {series[note.series as keyof typeof series] || note.series}
          </span>
        </div>
        <div className="flex justify-center text-sm text-steel-grey/80 dark:text-porcelain/80">
          <CalendarIcon className="w-4 h-4" />
          <span className="ml-2">
            {formatDate(note._createdAt, note.locale)}
          </span>
        </div>
        <hr className="border-steel-grey/20 dark:border-porcelain/20" />
      </section>
      <article className="text-lg">
        <PortableText
          value={note.content}
          components={CustomPortableTextComponents}
        />
      </article>
      <section className="flex pb-6">
        <p className={`${jetbrainsMono.className} text-lg`}>
          &gt;{" "}
          <Link
            href="/blog?tab=notes"
            className="text-olivine-dark dark:text-olivine border-b border-b-olivine/30 dark:border-b-olivine-dark/30 hover:border-b-olivine-dark dark:hover:border-b-olivine duration-300"
          >
            cd ..
          </Link>
        </p>
      </section>
    </main>
  );
}

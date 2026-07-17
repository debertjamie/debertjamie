import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { singlePostQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import { urlFor } from "@/lib/sanity/lib/image";
import type { PostType } from "@/lib/blog";
import { formatDate, readTime, toPlainText } from "@/lib/blog";
import { CalendarIcon, TimeIcon, AuthorIcon } from "@/ui/icons";
import { CustomPortableTextComponents } from "@/ui/blog";
import { maiyuan, jetbrainsMono } from "@/ui/fonts/fonts";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  const post: PostType = await sanityFetch({
    query: singlePostQuery,
    qParams: { slug },
    tags: ["post"],
  });

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description,
    metadataBase: new URL(`https://debertjamie.com/blog/${post.slug}`),
    keywords: post.tags.map((t) => t.tag),
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://debertjamie.com/blog/${post.slug}`,
      siteName: "debertjamie.com",
      authors: post.author.name,
      tags: post.tags.map((t) => t.tag),
      publishedTime: post._createdAt,
      modifiedTime: post._updatedAt || "",
      images: urlFor(post.mainImage.image).width(1200).height(630).url(),
      locale: post.locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: urlFor(post.mainImage.image).width(1200).height(630).url(),
      creator: `@${post.author.twitterUrl.split(".com/")[1]}`,
      site: `@${post.author.twitterUrl.split(".com/")[1]}`,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;

  const post: PostType = await sanityFetch({
    query: singlePostQuery,
    qParams: { slug },
    tags: ["post"],
  });

  if (!post) {
    notFound();
  }

  return (
    <main
      className={`space-y-8 w-full mt-8 sm:mt-18 text-xl ${maiyuan.className}`}
    >
      <section className="space-y-4">
        <h1 className="text-4xl text-center font-bold">{post.title}</h1>
        <div className="flex gap-x-6 text-sm text-steel-grey/80 dark:text-porcelain/80">
          <span className="flex items-center gap-x-1">
            <CalendarIcon className="w-4 h-4" />
            {formatDate(post._createdAt, post.locale)}
          </span>
          <span className="flex items-center gap-x-1">
            <TimeIcon className="w-4 h-4" />
            {readTime(toPlainText(post.body))}
          </span>
          <span className="flex items-center gap-x-1">
            <AuthorIcon className="w-4 h-4" />
            {post.author.name}
          </span>
        </div>
        <hr className="border-steel-grey/20 dark:border-porcelain/20" />
      </section>
      <article className="text-lg">
        <Image
          className="rounded-sm object-cover"
          src={post.mainImage.image}
          alt={post.mainImage.alt || post.title}
          quality={100}
          width={1024}
          height={768}
          placeholder={post.mainImage.lqip ? "blur" : "empty"}
          blurDataURL={post.mainImage.lqip || ""}
        />
        <PortableText
          value={post.body}
          components={CustomPortableTextComponents}
        />
      </article>
      <section className="flex pb-6">
        <p className={`${jetbrainsMono.className} text-lg`}>
          &gt;{" "}
          <Link
            href="/blog"
            className="text-olivine-dark dark:text-olivine border-b border-b-olivine/30 dark:border-b-olivine-dark/30 hover:border-b-olivine-dark dark:hover:border-b-olivine duration-300"
          >
            cd ..
          </Link>
        </p>
      </section>
    </main>
  );
}

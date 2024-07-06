import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { ImageProps } from "next/image";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

function slugify(str: ReactNode) {
  return str!
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/\-\-+/g, "-");
}

function Heading2({ children }: { children: ReactNode }) {
  const h2slug = slugify(children);
  return (
    <Link
      href={`#${h2slug}`}
      className="block text-2xl font-semibold pt-6 w-fit before:content-['#'] before:-ml-6 before:mr-2 before:opacity-0 hover:before:opacity-70 before:duration-200"
    >
      <h2 id={h2slug} className="inline">
        {children}
      </h2>
    </Link>
  );
}

function Heading3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold pt-4">{children}</h3>;
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-lg py-2">{children}</p>;
}

function Anchor(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href!;
  if (href?.startsWith("/") || href?.startsWith("#")) {
    return (
      <Link href={href} {...props} className="text-sky-700 dark:text-sky-400">
        {props.children}
      </Link>
    );
  } else {
    return (
      <Link
        href={href}
        target="_blank"
        rel="norefferer noopener"
        className="text-sky-700 dark:text-sky-400"
        {...props}
      >
        {props.children}
      </Link>
    );
  }
}

function OrderedList({ ...props }) {
  return <ol className="text-lg ol-counter" {...props} />;
}

function UnorderedList({ ...props }) {
  return <ul className="text-lg" {...props} />;
}

function Blockquote({ ...props }) {
  return <blockquote className="my-4 pl-2 *:py-1 border-l-4 border-l-zinc-500" {...props} />
}

function Callout({
  emoji,
  message,
  type = "message",
}: {
  emoji: ReactNode;
  message: ReactNode;
  type?: "message" | "warn" | "danger";
}) {
  const colours = {
    message: "border-l-cyan-700",
    warn: "border-l-amber-500",
    danger: "border-l-red-700",
  };
  return (
    <div
      className={
        "my-4 rounded-r-lg bg-zinc-300 dark:bg-zinc-900 py-2 pr-2 pl-4 flex items-center border-l-4 " +
        colours[type]
      }
    >
      <div className="flex w-4 mr-4 items-center">{emoji}</div>
      <p className="text-xl">{message}</p>
    </div>
  );
}

function HorizontalLine() {
  return <hr className="my-4" />;
}

function CustomImage(props: ImageProps) {
  const { alt, ...rest } = props;
  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        sizes="100%"
        alt={alt}
        className="w-full h-full rounded-xl my-4"
        {...rest}
      />
    </div>
  );
}

const components = {
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  a: Anchor,
  ol: OrderedList,
  ul: UnorderedList,
  blockquote: Blockquote,
  Callout: Callout,
  hr: HorizontalLine,
  Image: CustomImage,
} as MDXRemoteProps["components"];

export async function Mdx({ content }: { content: string }) {
  const mdxOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeHighlight, rehypeKatex],
    },
  };

  // @ts-expect-error
  return <MDXRemote source={content} components={components} options={mdxOptions} />;
}

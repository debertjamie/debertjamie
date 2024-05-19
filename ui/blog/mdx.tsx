import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { ImageProps } from "next/image";

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
      className="block text-2xl font-semibold pt-4 pb-2 w-fit before:content-['#'] before:-ml-6 before:mr-2 before:opacity-0 hover:before:opacity-70 before:duration-200"
    >
      <h2 id={h2slug} className="inline">
        {children}
      </h2>
    </Link>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-lg pb-2">{children}</p>;
}

function Anchor(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href!;
  if (href?.startsWith("/") || href?.startsWith("#")) {
    return (
      <Link
        href={href}
        {...props}
        className="text-sky-700 dark:text-sky-400"
      >
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
  p: Paragraph,
  a: Anchor,
  hr: HorizontalLine,
  Image: CustomImage,
} as MDXRemoteProps["components"];

export function Mdx({ content }: { content: string }) {
  return <MDXRemote source={content} components={components} />;
}

import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { ImageProps } from "next/image";

function Heading2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-semibold pt-4 pb-2">{children}</h2>;
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-lg pb-2">{children}</p>;
}

function Anchor(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const href = props.href!;
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

function CustomImage(props: ImageProps) {
  const { alt, ...rest } = props;
  return (
    <div className="relative">
      <Image alt={alt} className="rounded-xl my-4 mx-auto" {...rest} />
    </div>
  );
}

const components = {
  h2: Heading2,
  p: Paragraph,
  a: Anchor,
  Image: CustomImage,
} as MDXRemoteProps["components"];

export function Mdx({ content }: { content: string }) {
  return <MDXRemote source={content} components={components} />;
}

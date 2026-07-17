import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { LinkArrow } from "@/ui/icons";

export function ExternalLink({
  className,
  children,
  arrowSize,
  ...props
}: {
  className?: string;
  children: ReactNode;
  arrowSize?: number;
} & LinkProps) {
  return (
    <Link
      target="_blank"
      rel="noreferrer noopener"
      className={`text-buttercup-dark dark:text-buttercup border-b border-b-buttercup-dark/30 dark:border-b-buttercup/30 hover:border-b-buttercup-dark dark:hover:border-b-buttercup duration-300 pr-${arrowSize ?? 6} ${className}`}
      {...props}
    >
      {children}
      <LinkArrow
        aria-hidden="true"
        className={`inline w-${arrowSize ?? 6} h-${arrowSize ?? 6}`}
      />
    </Link>
  );
}

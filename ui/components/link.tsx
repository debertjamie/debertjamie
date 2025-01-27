import Link, {LinkProps} from "next/link";
import {ReactNode} from "react";
import {LinkArrow} from "@/ui/icons";

export function ExternalLink({className, children, ...props}: { className: string, children: ReactNode } & LinkProps) {
  return (
    <Link target="_blank" rel="noreferrer noopener"
          className={`relative text-cyan-600 dark:text-cyan-500 font-semibold ${className}`} {...props}>
      {children}
      <LinkArrow aria-hidden="true" className="inline absolute h-6 w-6"/>
    </Link>
  )
}
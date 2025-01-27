import Link, {LinkProps} from "next/link";
import {ReactNode} from "react";
import {LinkArrow} from "@/ui/icons";

export function ExternalLink({className, children, arrowSize, ...props}: { className?: string, children: ReactNode, arrowSize?: number } & LinkProps) {
  return (
    <Link target="_blank" rel="noreferrer noopener"
          className={`text-cyan-600 dark:text-cyan-500 pr-${arrowSize ?? 6} ${className}`} {...props}>
      {children}
      <LinkArrow aria-hidden="true" className={`inline w-${arrowSize ?? 6} h-${arrowSize ?? 6}`}/>
    </Link>
  )
}
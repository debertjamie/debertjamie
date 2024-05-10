import Link from "next/link";
import { GitHub, LinkedIn, Twitter, Code } from "../icons";

export function Socials() {
  return (
    <div className="flex flex-wrap gap-4 text-lg *:bg-brand-600 text-brand-50 *:px-4 *:py-2 *:rounded-lg">
      <Link href="https://github.com/debertjamie" className="flex items-center">
        <GitHub width={28} height={28} className="inline-block" />
        &nbsp; GitHub
      </Link>
      <Link
        href="https://linkedin.com/in/debertjamie"
        className="flex items-center"
      >
        <LinkedIn width={28} height={28} className="inline-block" />
        &nbsp;LinkedIn
      </Link>
      <Link
        href="https://twitter.com/debertjamie"
        className="flex items-center"
      >
        <Twitter width={28} height={28} className="inline-block" />
        &nbsp;Twitter (X)
      </Link>
      <Link href="https://g.dev/debert" className="flex items-center">
        <Code width={28} height={28} className="inline-block" />
        &nbsp;Google Developers
      </Link>
    </div>
  );
}

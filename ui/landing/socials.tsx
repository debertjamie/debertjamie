import Link from "next/link";
import { GitHub, LinkedIn, Twitter, Code } from "../icons";

export function Socials() {
  return (
    <section className="flex flex-wrap xs:justify-between gap-y-4 gap-x-2 text-lg text-brand-50 *:px-4 *:py-2 *:rounded-lg">
      <Link
        href="https://github.com/debertjamie"
        target="_blank"
        rel="norefferer noopener"
        className="flex items-center bg-neutral-800"
      >
        <GitHub width={28} height={28} className="inline-block" />
        &nbsp; GitHub
      </Link>
      <Link
        href="https://linkedin.com/in/debertjamie"
        target="_blank"
        rel="norefferer noopener"
        className="flex items-center bg-blue-800"
      >
        <LinkedIn width={28} height={28} className="inline-block" />
        &nbsp;LinkedIn
      </Link>
      <Link
        href="https://twitter.com/debertjamie"
        target="_blank"
        rel="norefferer noopener"
        className="flex items-center bg-sky-700"
      >
        <Twitter width={28} height={28} className="inline-block" />
        &nbsp;Twitter (X)
      </Link>
      <Link
        href="https://g.dev/debert"
        target="_blank"
        rel="norefferer noopener"
        className="flex items-center bg-green-700"
      >
        <Code width={28} height={28} className="inline-block" />
        &nbsp;Google Developers
      </Link>
    </section>
  );
}

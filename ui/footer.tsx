import Link from "next/link";
import { ToggleTheme } from "@/wrapper";

export default function Footer() {
  return (
    <div className="text-center mb-1 lg:mb-4 mt-auto w-full">
      <ToggleTheme />
      <p>
        <span className="after:mx-2 after:content-['\00B7']">
          (C) 2024 Debert Jamie Chanderson
        </span>{" "}
        <Link
          href="https://github.com/debertjamie/debertjamie"
          target="_blank"
          rel="noreferrer noopener"
          className="text-brand-700 dark:text-brand-200"
        >
          View source on GitHub
        </Link>
      </p>
      <p>
        Created with{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer noopener"
          className="text-brand-700 dark:text-brand-200"
        >
          NextJS
        </Link>{" "}
        and styled with{" "}
        <Link
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-brand-700 dark:text-brand-200"
        >
          TailwindCSS
        </Link>
      </p>
    </div>
  );
}

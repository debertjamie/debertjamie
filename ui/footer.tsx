import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center mb-1 lg:mb-4 mt-auto w-full">
      <p>Copyright (C) 2024 Debert Jamie Chanderson</p>
      <p>
        Created with{" "}
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary"
        >
          NextJS
        </Link>{" "}
        and styled by{" "}
        <Link
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-primary"
        >
          TailwindCSS
        </Link>
      </p>
    </div>
  );
}

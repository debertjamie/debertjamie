import Link from "next/link";

export function Extra() {
  return (
    <section className="text-xl space-y-2">
      <div className="flex gap-x-4 sm:gap-x-8 justify-center text-xl">
        <p>
          <Link
            href="/projects"
            className="hover:text-olivine-dark dark:hover:text-olivine duration-200 underline md:no-underline"
          >
            Projects
          </Link>
        </p>
        <p className="before:content-['·'] before:font-extrabold before:text-3xl before:leading-[0] before:align-middle before:mr-4 sm:before:mr-8">
          <Link
            href="/blog"
            className="hover:text-olivine-dark dark:hover:text-olivine duration-200 underline md:no-underline"
          >
            Blog
          </Link>
        </p>
        <p className="before:content-['·'] before:font-extrabold before:text-3xl before:leading-[0] before:align-middle before:mr-4 sm:before:mr-8">
          <Link
            href="/connect"
            className="hover:text-olivine-dark dark:hover:text-olivine duration-200 underline md:no-underline"
          >
            Connect
          </Link>
        </p>
      </div>
    </section>
  );
}

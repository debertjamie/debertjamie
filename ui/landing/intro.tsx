import Link from "next/link";

export function Intro() {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">A Little Intro About Me</h2>
      <p className="text-justify">
        Hi! I'm Debert, a high school graduate from Indonesia. I currently live
        in North Sumatra and enjoys my free time coding or just listening to
        music. I started learning code during the 2020 pandemic, with
        documentation pages and StackOverflow being my main teacher. Currently
        preparing for my next step of life: university.
      </p>
      <Link
        href="/about"
        className="inline-block text-cyan-600 dark:text-cyan-500 font-semibold pt-8"
      >
        Read More About Me -&gt;
      </Link>
    </section>
  );
}

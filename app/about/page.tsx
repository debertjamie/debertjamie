import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Contacts, Email, Skills } from "@/ui/about";
import { QuoteIcon } from "@/ui/icons";

export default function About() {
  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-lg">
      <h1 className="text-5xl font-bold">About Me</h1>
      <section className="lg:flex lg:flex-row-reverse lg:gap-x-8">
        <Image
          src="/static/debert-45.jpg"
          alt="Me"
          width={0}
          height={0}
          sizes="100%"
          priority={true}
          className="rounded-xl w-96 h-[480px] mx-auto sm:float-right lg:float-none mb-10 sm:mb-4 sm:ml-4 lg:m-0"
        />
        <article className="space-y-8 text-justify">
          <p className="text-xl">
            Hello! I'm Debert Jamie Chanderson, also known as{" "}
            <span className="font-thin">陈宥维</span> /{" "}
            <span className="font-thin">陳宥維</span> (chen2 you4 wei2). I'm a
            high school graduate from Indonesia currently living in North
            Sumatra. I learn about coding during the pandemic, where I study
            JavaScript and also Pascal. I'm currently preparing for the start of
            university by autumn.
          </p>
          <p>
            I mainly code in TypeScript, but I also use other languages like
            Python and C++. Mostly using React for frontend web development but
            currently learning Astro and Svelte. Right now I'm mostly focused on
            honing my web development skills.
          </p>
          <p>
            I mostly spend my free time coding and learning about new stuff in
            tech, though I paused coding a while due to exam preparations at the
            start of 2024. Other than coding I also listen to music (mostly
            Chinese/Taiwanese songs and English), like{" "}
            <span className="font-medium">We Are Young</span>,{" "}
            <span className="font-thin">若月亮没来</span> and{" "}
            <span className="font-thin">如果可以</span>.
          </p>
          <p>
            Other than tech-related bits and bobs, I find photography and human
            psychology interesting. I also enjoy gardening, hiking and cycling
            from time to time. Sometimes I like to watch food shows in TV
            channels or sitcoms like South Park*
            <br />
            <span className="text-base bg-yellow-500 text-zinc-950 font-semibold px-1">
              *Viewer discretion adviced - I warned you
            </span>
          </p>
          <Link
            href="/about/more"
            className="block font-semibold text-xl w-fit text-cyan-600 dark:text-cyan-500"
          >
            Statistics and More About Me -&gt;
          </Link>
        </article>
      </section>
      <section className="flex items-center rounded-r-xl border-l-4 border-l-zinc-400 dark:border-l-zinc-600 bg-zinc-300 dark:bg-zinc-800 px-4 py-2 max-w-[30rem]">
        <QuoteIcon className="pointer-events-none w-12 h-12" />
        <p className="pl-2 font-medium z-10">
          Impermanence is elegance, it's what makes life worth to live.
        </p>
      </section>
      <section className="space-y-8 text-left">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <Skills />
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Socials</h2>
        <Contacts />
        <Email />
      </section>
    </main>
  );
}

const title = "About Me";
const description = "About Debert Jamie";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@debertjamie",
  },
};

import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import {Movies, Games, Timeline, Random, Wakatime} from "@/ui/about";
import {QuoteIcon} from "@/ui/icons";

export default function About() {
  return (
    <main className="space-y-16 mt-8 sm:mt-18 text-lg">
      <h1 className="text-5xl font-bold">About Me</h1>
      <section className="lg:flex lg:flex-row-reverse lg:gap-x-8">
        <Image
          src="/static/debertjamie.jpg"
          alt="Me"
          width={0}
          height={0}
          sizes="100%"
          priority={true}
          className="rounded-xl w-72 h-96 xs:w-96 xs:h-[32rem] mx-auto sm:float-right lg:float-none mb-10 sm:mb-4 sm:ml-4 lg:m-0"
        />
        <article className="space-y-8 text-justify">
          <p className="text-xl">
            Hello! I'm Debert Jamie Chanderson, also known as{" "}
            <span className="font-thin">陳宥維</span> (chen2 you4 wei2). I'm an undergraduate freshman student at{" "}
            <Link
              href="https://ugm.ac.id"
              target="_blank"
              rel="noreferrer noopener"
              className="text-cyan-600 dark:text-cyan-500 font-semibold"
            >
              Gadjah Mada University
            </Link>
            , Yogyakarta where I major in Information Engineering. I have a passion for web development and software
            engineering, where I aspire towards a career that allows me to create technologies to solve mankind
            problems. I'm also a self-taught programmer and a hobbyist photographer. Other than that, I'm a casual gamer
            and a public speaking enthusiast.
          </p>
          <p>
            I mainly code in TypeScript, but I'm also familiar with other languages like Python and C++. I mostly use
            React-based frameworks like Next.js for web development, and currently I'm learning more about Astro.
          </p>
          <p>
            Other than tech-related bits and bobs, I usually spend my free time listening to music, watching movies or
            read some books. I'm also interested in photography and human psychology. Some of my favourite artists/bands
            are{" "}
            <span className="font-semibold">One Direction</span>, <span className="font-semibold">Lauv</span>,{" "}
            <span className="font-semibold">Jason Derulo</span> and{" "}
            <span className="font-semibold">Owl City</span>.
          </p>
        </article>
      </section>
      <section
        className="flex items-center rounded-r-xl border-l-4 border-l-zinc-400 dark:border-l-zinc-600 bg-zinc-300 dark:bg-zinc-800 px-4 py-2 w-fit">
        <QuoteIcon className="pointer-events-none w-12 h-12"/>
        <p className="pl-2 font-medium z-10">
          Impermanence is elegance, it's what makes life worth to live.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Movies and Stuff</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Movies/>
          <Games/>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Random Facts About Me</h2>
        <Random/>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">WakaTime Statistics</h2>
        <Wakatime/>
      </section>
      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold">Timeline of My Life</h2>
        <Timeline/>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Wall of Appreciation</h2>
        <div className="grid md:grid-cols-2 gap-2">
          <p>Elvin F Ciang - Interface Evaluator</p>
          <p>Fernando P Wijaya - Interface Evaluator</p>
        </div>
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

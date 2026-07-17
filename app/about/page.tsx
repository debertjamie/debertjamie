import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Random, Site, Wakatime } from "@/ui/about";
import { maiyuan } from "@/ui/fonts/fonts";
import { ExternalLink, ReturnHome } from "@/ui/components";

export default function About() {
  return (
    <main className="space-y-8 mt-8 sm:mt-20 text-lg">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">About The Author</h1>
        <h2 className={`text-2xl font-bold ${maiyuan.className}`}>Ta̍k-ke-hó! Guá sī Debert</h2>
      </section>
      <section className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-8">
        <Image
          src="/static/debertjamie.jpg"
          alt="Me"
          width={0}
          height={0}
          sizes="100%"
          priority={true}
          className="rounded-xl select-none w-full mx-auto sm:float-right lg:float-none mb-10 sm:mb-4 sm:ml-4 lg:m-0"
        />
        <article className="space-y-4 text-justify">
          <p>
            I'm Debert, also known as Tan Youwei, a third-year undergraduate
            student at{" "}
            <ExternalLink href="https://ugm.ac.id/" arrowSize={5}>
              Universitas Gadjah Mada
            </ExternalLink>{" "}
            where I major in Information Engineering. I have a strong interest
            in technology, particularly in software development, machine
            learning, and cybersecurity.
          </p>
          <p>
            In my free time, I like to read books, listen to music, or going out
            for a walk. Sometimes, I also enjoy watching movies. Currently I am
            learning to write more blog posts to share my thoughts with others
            and to improve my writing skills. I'm also aiming to create more
            small projects and contribute to open-source projects to enhance my
            programming skills and gain more experience in the field.
          </p>
          <p>
            Feel free to reach out to me! I'm open to meeting new people and
            learning from their experiences!
          </p>
        </article>
      </section>
      <section className="border-l-4 border-l-olivine dark:border-l-olivine-dark">
        <p className="pl-4 font-medium z-10 text-justify">
          "You are the star of your own show, and the world is your stage.
          Embrace what you have, enjoy what you do, love who you are, make the
          most of every moment. Be the best version of yourself, because you are
          the only you that can be. Good luck with your journey, friend!"
        </p>
      </section>
      <section>
        <Wakatime />
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Random Facts About Me</h2>
        <Random />
      </section>
      <Site />
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Let's Chat!</h2>
        <p className="text-justify">
          If you want to reach out to me to discuss about anything, just want to
          say hi, or want a friend to talk to, feel free to check out my{" "}
          <Link
            href="/connect"
            className="border-b border-b-olivine/30 dark:border-b-olivine-dark/30 text-olivine-dark dark:text-olivine hover:border-b-olivine-dark dark:hover:border-b-olivine duration-300"
          >
            socials here
          </Link>
          . I'm up for a coffee chat (or a tea chat!) anytime!
        </p>
      </section>
      <ReturnHome />
    </main>
  );
}

const title = "About Me";
const description =
  "I'm Debert Jamie, a third-year undergraduate student at Universitas Gadjah Mada majoring in Information Engineering. I have a strong interest in technology, particularly in software development, machine learning, and cybersecurity.";

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

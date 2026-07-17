"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { Time } from "@/ui/components";
import { maiyuan } from "@/ui/fonts/fonts";

const greetings = ["Hello,", "Hi,", "逐家好 ta̍k-ke-hó!", "大家好!"];

export function Head() {
  const [randomGreeting, setRandomGreeting] = useState(greetings[0]);

  useEffect(() => {
    setRandomGreeting(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <section className="pt-8 pb-8 sm:pb-4 md:pt-16 border-b-2 border-b-olivine">
      <div className="space-y-2">
        <h1 className={`text-2xl sm:text-3xl font-semibold text-buttercup dark:text-buttercup-dark ${maiyuan.className}`}>
          <span className="text-steel-grey dark:text-porcelain">
            <span>{randomGreeting}</span> I'm{" "}
          </span>
          <Typewriter cursor words={["@DebertJamie"]} />
        </h1>
        <h2 className="text-lg sm:text-xl">
          Third year information engineering undergraduate student at{" "}
          <span className="font-semibold">
            Universitas Gadjah Mada
          </span>
        </h2>
        <div className="pt-4 text-xl">
          <Time />
        </div>
      </div>
      <div className="flex gap-x-2 sm:gap-x-4 mt-6 text-lg">
        <Link href="/about" className="bg-olivine dark:bg-olivine-dark duration-300 hover:-translate-y-1 font-semibold border-2 border-olivine-dark dark:border-olivine px-4 py-2 rounded-lg">
          <p>About Me</p>
        </Link>
        <Link href="/resume" className="bg-spicy-mix dark:bg-spicy-mix-dark text-porcelain duration-300 hover:-translate-y-1 font-semibold border-2 border-spicy-mix-dark dark:border-spicy-mix px-4 py-2 rounded-lg">
          <p>Resume</p>
        </Link>
      </div>
    </section>
  );
}

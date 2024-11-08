"use client";

import { Typewriter } from 'react-simple-typewriter'
import { Time } from "../components";

export function Head() {
  return (
    <section className="space-y-16">
      <div className="space-y-6 sm:space-y-14">
        <h1 className="text-4xl sm:text-6xl font-bold">
          <p className="text-lg font-normal">Hello, I'm</p>
          <Typewriter cursor words={["Debert Jamie Chanderson"]} />
        </h1>
        <h2 className="text-lg sm:text-3xl">
          Information engineering undergraduate at Gadjah Mada University
        </h2>
      </div>
      <div className="text-xl">
        <Time />
      </div>
    </section>
  );
}

"use client";

import { Typewriter } from 'react-simple-typewriter'
import { Time } from "../components";

export function Head() {
  return (
    <section className="space-y-16">
      <div className="space-y-14">
        <h1 className="text-6xl font-bold">
          <Typewriter cursor words={["Debert Jamie Chanderson 陈宥维"]} />
        </h1>
        <h2 className="text-3xl">
          Tech enthusiast, Math worm, Nature admirer
        </h2>
      </div>
      <div className="text-xl">
        <Time />
      </div>
    </section>
  );
}

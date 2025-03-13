import Link from "next/link";

export function Intro() {
  return (
    <section className="text-xl">
      <p className="text-justify mb-8">
        Hi! I'm Debert Jamie Chanderson, a student at Universitas Gadjah Mada with a passion in software engineering
        and public speaking. I'm also interested in music and photography. I mostly spend my free time working on
        school projects or personal side projects. I'm pretty active on social media and I love to connect with new
        people. You can also find me studying or hanging out on campus :D
      </p>
      <Link
        href="/about"
        className="inline-block text-cyan-600 dark:text-cyan-500 font-semibold group"
      >
        Read More About Me <span className="duration-300 delay-100 group-hover:ml-2">-&gt;</span>
      </Link>
    </section>
  );
}

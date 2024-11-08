import Link from "next/link";

export function Intro() {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">A Little Intro</h2>
      <p className="text-justify mb-8">
        Hi! I'm Debert Jamie Chanderson, a student at Gadjah Mada University who
        has a passion in software development and machine learning. I'm also
        interested in music and public speaking. I mostly spend my free time
        working on school projects, personal side projects or organization
        projects. You can check out my socials and feel free to connect with me
        on LinkedIn 😄
      </p>
      <div className="flex flex-wrap gap-y-4 gap-x-20">
        <Link
          href="/about"
          className="inline-block text-cyan-600 dark:text-cyan-500 font-semibold group"
        >
          Read More About Me <span className="duration-300 delay-100 group-hover:ml-2">-&gt;</span>
        </Link>
        <Link
          href="/static/Resume_Debert%20Jamie%20C.pdf"
          className="inline-block text-cyan-600 dark:text-cyan-500 font-semibold group"
        >
          View My Resume <span className="duration-300 delay-100 group-hover:ml-2">-&gt;</span>
        </Link>
      </div>
    </section>
  );
}

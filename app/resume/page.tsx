import type { Metadata } from "next";
import { ReturnHome } from "@/ui/components";
import { Education, Experience, Skills, Courses } from "@/ui/resume";

export default function Resume() {
  return (
    <main className="space-y-8 mt-8 sm:mt-20 text-lg">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold text-center">Resume</h1>
        <div>
          <p>Last updated: 13 July 2026</p>
        </div>
      </section>
      <Education />
      <Experience />
      <Skills />
      <Courses />
      <ReturnHome />
    </main>
  );
}

const title = "Debert's Resume";
const description =
  "This is Debert's resume, which includes his work experience, education, and skills.";

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

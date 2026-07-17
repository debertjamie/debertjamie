import Link from "next/link";
import type { Metadata } from "next";
import { ReturnHome, Connect, ExternalLink } from "@/ui/components";

export default function ConnectPage() {
  return (
    <main className="space-y-8 mt-8 sm:mt-20 text-lg">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">Let's Get In Touch</h1>
      </section>
      <section className="space-y-2 flex flex-col items-center">
        <Link href="mailto:hi@debertjamie.com" className="block text-2xl font-semibold px-6 py-4 rounded-lg bg-olivine dark:bg-olivine-dark hover:scale-105 duration-300" target="_blank" rel="norefferer noopener">
          hi@debertjamie.com
        </Link>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg text-center">or find me on</h2>
        <ul className="list-disc ml-5">
          <li>GitHub: <ExternalLink href="https://github.com/debertjamie" arrowSize={4}>debertjamie</ExternalLink></li>
          <li>LinkedIn: <ExternalLink href="https://linkedin.com/in/debertjamie" arrowSize={4}>in/debertjamie</ExternalLink></li>
          <li>Twitter: <ExternalLink href="https://x.com/debertjamie" arrowSize={4}>@DebertJamie</ExternalLink></li>
          <li>微信: debertjamie</li>
        </ul>
      </section>
      <Connect />
      <ReturnHome />
    </main>
  )
}


const title = "Let's Connect";
const description =
  "Let's connect! Reach out to me via email, social media, or through the contact form. I'm always open to new opportunities, collaborations, and conversations. Let's get in touch and explore how we can work together!";

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
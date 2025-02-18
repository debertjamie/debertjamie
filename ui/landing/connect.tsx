import {Lanyard, EmailForm, Line} from ".";
import Link from "next/link";

export function Connect() {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">Let's Connect</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="space-y-4">
          <Link className="block h-fit select-none" href="https://discordapp.com/users/755773452756975646" target="_blank" rel="noreferrer noopener">
            <Lanyard/>
          </Link>
          <Link className="block h-fit select-none" href="https://line.me/ti/p/V5cfA3UHrU" target="_blank" rel="noreferrer noopener">
            <Line/>
          </Link>
        </div>
        <div className="md:col-span-2">
          <p>
            Feel free to reach out to me in my{" "}
            <Link href="/contact" className="text-cyan-600 dark:text-cyan-500">socials</Link>
            , or send me an email through the form below 📩
          </p>
          <EmailForm/>
        </div>
      </div>
    </section>
  )
}
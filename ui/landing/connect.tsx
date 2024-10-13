import {Lanyard, EmailForm} from ".";
import Link from "next/link";

export function Connect() {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">Let's Connect</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4">
        <Lanyard/>
        <div className="md:col-span-2">
          <p>
            Feel free to reach out to me in my socials, I'll gladly help as much as I can 😄. Currently I'm mostly
            active on Discord but you can look up my other socials in{" "}
            <Link href="/socials" className="font-semibold text-cyan-600 dark:text-cyan-500">here</Link> or
            write me an email below.
          </p>
          <EmailForm/>
        </div>
      </div>
    </section>
  )
}
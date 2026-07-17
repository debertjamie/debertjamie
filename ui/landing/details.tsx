import Link from "next/link";
import Image from "next/image";
import {TwitterIcon, GithubIcon, LinkedinIcon} from "../icons";

export function Details() {
  return (
    <section className="space-y-2">
      <p className="text-center font-semibold text-xl">Find Me On</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col sm:col-span-2 md:col-span-1">
          <Link
            href="https://x.com/debertjamie"
            target="_blank"
            rel="noreferrer noopener"
            className="block relative h-40 text-zinc-100 rounded-lg overflow-hidden px-2 py-1 hover:scale-95 duration-300"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1600783245998-945baf9626bc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Twitter/X"
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-neutral-900/60"/>
            </span>
            <div className="relative h-full">
              <TwitterIcon className="w-6 pt-2"/>
              <div className="pt-16 text-right">
                <p>Twitter/X</p>
                <p className="text-base">@DebertJamie</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            href="https://github.com/debertjamie"
            target="_blank"
            rel="noreferrer noopener"
            className="block relative h-40 text-zinc-100 rounded-lg overflow-hidden px-2 py-1 hover:scale-95 duration-300"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Astronaut"
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-neutral-900/60"/>
            </span>
            <div className="relative h-full">
              <GithubIcon className="w-6 pt-2"/>
              <div className="pt-16 text-right">
                <p>GitHub</p>
                <p className="text-base">@debertjamie</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            href="https://linkedin.com/in/debertjamie"
            target="_blank"
            rel="noreferrer noopener"
            className="block relative h-40 text-zinc-100 rounded-lg overflow-hidden px-2 py-1 hover:scale-95 duration-300"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Work"
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-neutral-900/60"/>
            </span>
            <div className="relative h-full">
              <LinkedinIcon className="w-6 pt-2"/>
              <div className="pt-16 text-right">
                <p>LinkedIn</p>
                <p className="text-base">in/debertjamie</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
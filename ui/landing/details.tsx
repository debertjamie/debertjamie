import Link from "next/link";
import {Lanyard} from ".";
import Image from "next/image";
import {CameraIcon, GithubIcon, LinkedinIcon} from "../icons";

export function Details() {
  return (
    <section className="space-y-4" id="menu">
      <div className="pt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col sm:col-span-2 md:col-span-1">
          <Link
            href="#menu"
            className="block relative h-40 text-zinc-100 rounded-lg overflow-hidden px-2 py-1 hover:scale-95 duration-300"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1628839955995-7cd40e729232?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Scenery"
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-neutral-900/60"
              ></span>
            </span>
            <CameraIcon className="w-6 pt-2"/>
            <div className="pt-16 text-right">
              <p>Photo Album</p>
              <p className="text-base">Coming Soon...</p>
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
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 -z-20"
                        >
                            <Image
                              src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Astronaut"
                              width={0}
                              height={0}
                              sizes="100%"
                              className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
                            />
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-neutral-900/60"
                            ></span>
                        </span>
            <GithubIcon className="w-6 pt-2"/>
            <div className="pt-16 text-right">
              <p>Github Profile</p>
              <p className="text-base">@debertjamie</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            href="https://linked.com/in/debertjamie"
            target="_blank"
            rel="noreferrer noopener"
            className="block relative h-40 text-zinc-100 rounded-lg overflow-hidden px-2 py-1 hover:scale-95 duration-300"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Work"
                width={0}
                height={0}
                sizes="100%"
                className="absolute inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.7]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-neutral-900/60"
              />
            </span>
            <LinkedinIcon className="w-6 pt-2"/>
            <div className="pt-16 text-right">
              <p>in/debertjamie</p>
              <p className="text-base">Connect with me</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
import Link from "next/link";
import Image from "next/image";
import {
  XIcon,
  SkypeIcon,
  RedditIcon,
  MailIcon,
  GithubIcon,
  SquareArrow,
  LinkedinIcon,
} from "../icons";
import { Stack } from ".";

export function Socials() {
  return (
    <div className="text-lg md:grid md:grid-cols-2 md:gap-x-4">
      <div className="flex flex-col gap-y-4">
        <div className="grid grid-cols-2 text-center text-base gap-2">
          <Link
            href="https://x.com/debertjamie"
            target="_blank"
            rel="norefferer noopener"
            className="block bg-stone-900 text-zinc-100 rounded-lg px-2 py-1 hover:scale-95 duration-300"
          >
            <XIcon className="w-6 mx-auto" />
            <p>Random tweets</p>
          </Link>
          <Link
            href="skype:live:.cid.76da57c421a6126f?chat"
            target="_blank"
            rel="norefferer noopener"
            className="block bg-sky-700 text-zinc-100 rounded-lg px-2 py-1 hover:scale-95 duration-300"
          >
            <SkypeIcon className="w-6 mx-auto" />
            <p>Chat on Skype</p>
          </Link>
          <Link
            href="https://reddit.com/user/Glitched6913"
            target="_blank"
            rel="norefferer noopener"
            className="block bg-orange-600 text-zinc-100 rounded-lg px-2 py-1 hover:scale-95 duration-300"
          >
            <RedditIcon className="w-6 mx-auto" />
            <p>Reddit profile</p>
          </Link>
          <Link
            href="mailto:debertjamie@outlook.com"
            target="_blank"
            rel="norefferer noopener"
            className="block bg-indigo-800 text-zinc-100 rounded-lg px-2 py-1 hover:scale-95 duration-300"
          >
            <MailIcon className="w-6 mx-auto" />
            <p>Fancy a mail?</p>
          </Link>
        </div>
        <Link
          href="https://github.com/debertjamie"
          target="_blank"
          rel="norefferer noopener"
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
          <GithubIcon className="w-6 pt-2" />
          <div className="pt-16 text-right">
            <p>Github Profile</p>
            <p className="text-base">@debertjamie</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 mt-4 md:mt-0">
        <Link
          href="https://linked.com/in/debertjamie"
          target="_blank"
          rel="norefferer noopener"
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
            ></span>
          </span>
          <LinkedinIcon className="w-6 pt-2" />
          <div className="pt-16 text-right">
            <p>in/debertjamie</p>
            <p className="text-base">Connect with me</p>
          </div>
        </Link>
        <Link
          href="https://links.debertjamie.com"
          target="_blank"
          rel="norefferer noopener"
          className="block *:inline bg-gray-600 text-zinc-100 rounded-lg px-2 py-1 hover:scale-95 duration-300"
        >
          <p>Quicklinks</p>
          <SquareArrow className="ml-1 -mt-1 w-4" />
        </Link>
        <div className="hidden md:block">
          <p>Skill Stacks</p>
          <Stack />
        </div>
      </div>
    </div>
  );
}

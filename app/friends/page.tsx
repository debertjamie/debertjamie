import Link from "next/link";
import Image from "next/image";
import { friendLinks } from "@/ui/friends";
import { LinkArrow } from "@/ui/icons";
import { ReturnHome } from "@/ui/components";
import { maiyuan } from "@/ui/fonts/fonts";
import { ExternalLink } from "@/ui/components";

export default function Friends() {
  return (
    <main className="space-y-8 mt-8 sm:mt-18 text-lg">
      <section className="space-y-2">
        <h1 className="text-5xl font-semibold">Friends</h1>
        <p>Friends from all over the world makes this place special</p>
      </section>
      <section
        className={`grid sm:grid-cols-2 gap-x-8 gap-y-2 ${maiyuan.className}`}
      >
        {friendLinks.map((friend, i) => (
          <Link
            href={friend.url}
            key={i}
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex items-center gap-x-2 border border-steel-grey/30 dark:border-porcelain/30 rounded-lg hover:shadow-md py-1 px-4"
          >
            <div className="w-20 h-20 flex items-center">
              <Image
                src={friend.avatar || "https://placehold.co/600x400"}
                alt={friend.name}
                width={40}
                height={40}
                unoptimized
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-x-1">
                <p className="text-lg font-semibold group-hover:text-buttercup-dark dark:group-hover:text-buttercup duration-200">
                  {friend.name}
                </p>
                <LinkArrow className="w-6 h-6" />
              </div>
              <p className="text-sm">{friend.description}</p>
            </div>
          </Link>
        ))}
      </section>
      <section>
        <p>
          Feel free to{" "}
          <ExternalLink arrowSize={4} href="https://github.com/debertjamie/debertjamie/issues/new">
            contact me
          </ExternalLink>{" "}
          if you want to add your link here!
        </p>
      </section>
      <ReturnHome />
    </main>
  );
}

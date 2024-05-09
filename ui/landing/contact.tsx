import Link from "next/link";
import {
  LinkedIn,
  GitHub,
  Code,
  Twitter,
  Discord,
  XiaoHongShu,
} from "../icons";

export function Contact() {
  return (
    <div className="space-y-1">
      <h3 className="text-xl font-semibold">Let&#39;s Talk 🎈</h3>
      <div className="space-y-1 sm:grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-[40%_30%_30%] lg:block">
        <section>
          <p className="text-lg">Email Me 📧</p>
          <Link
            href="mailto:debertjamie@outlook.com"
            className="text-brand-700 dark:text-brand-200 duration-300 text-base"
            target="_blank"
            rel="norefferer noopener"
          >
            debertjamie(at)outlook[dot]com
          </Link>
        </section>
        <section className="sm:row-span-3">
          <p className="text-lg">Connections 🤝</p>
          <div className="text-base text-brand-700 dark:text-brand-200">
            <p>
              <LinkedIn width={16} height={16} className="inline-block" />{" "}
              <Link
                href="https://linkedin.com/in/debertjamie"
                target="_blank"
                rel="norefferer noopener"
              >
                in/debertjamie
              </Link>
            </p>
            <p>
              <GitHub width={16} height={16} className="inline-block" />{" "}
              <Link
                href="https://github.com/debertjamie"
                target="_blank"
                rel="norefferer noopener"
              >
                @debertjamie
              </Link>
            </p>
            <p>
              <Code width={16} height={16} className="inline-block" />{" "}
              <Link
                href="https://g.dev/debert"
                target="_blank"
                rel="norefferer noopener"
              >
                g.dev/debert
              </Link>
            </p>
            <p>
              <Twitter width={16} height={16} className="inline-block" />{" "}
              <Link
                href="https://twitter.com/debertjamie"
                target="_blank"
                rel="norefferer noopener"
              >
                Debert Jamie
              </Link>
            </p>
          </div>
        </section>
        <section className="sm:row-span-2">
          <p className="text-lg">More Socials 🎏</p>
          <div className="text-base text-brand-700 dark:text-brand-200">
            <p>
              <Discord width={16} height={16} className="inline-block" />{" "}
              <Link
                href="https://discordapp.com/users/755773452756975646"
                target="_blank"
                rel="norefferer noopener"
              >
                @debert_6913
              </Link>
            </p>
            <p>
              <XiaoHongShu width={16} height={16} className="inline-block" />{" "}
              <Link
                href="https://www.xiaohongshu.com/user/profile/65a6b06e000000000803046f"
                target="_blank"
                rel="norefferer noopener"
              >
                Debert Jamie Chanderson
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

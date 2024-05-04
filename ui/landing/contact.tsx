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
      <section>
        <p className="text-lg">Email Me 📧</p>
        <Link
          href="mailto:debertjamie@outlook.com"
          className="text-primary duration-300 text-base"
          target="_blank"
          rel="norefferer noopener"
        >
          debertjamie(at)outlook[dot]com
        </Link>
      </section>
      <section>
        <p className="text-lg">Connections 🤝</p>
        <div className="text-base text-primary">
          <p>
            <LinkedIn width={16} height={16} className="inline-block svgIcon" />{" "}
            <Link
              href="https://linkedin.com/in/debertjamie"
              target="_blank"
              rel="norefferer noopener"
            >
              in/debertjamie
            </Link>
          </p>
          <p>
            <GitHub width={16} height={16} className="inline-block svgIcon" />{" "}
            <Link
              href="https://github.com/debertjamie"
              target="_blank"
              rel="norefferer noopener"
            >
              @debertjamie
            </Link>
          </p>
          <p>
            <Code width={16} height={16} className="inline-block svgIcon" />{" "}
            <Link
              href="https://g.dev/debert"
              target="_blank"
              rel="norefferer noopener"
            >
              g.dev/debert
            </Link>
          </p>
          <p>
            <Twitter width={16} height={16} className="inline-block svgIcon" />{" "}
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
      <section>
        <p className="text-lg">More Socials 🎏</p>
        <div className="text-base text-primary">
          <p>
            <Discord width={16} height={16} className="inline-block svgIcon" />{" "}
            <Link
              href="https://discordapp.com/users/755773452756975646"
              target="_blank"
              rel="norefferer noopener"
            >
              @debert_6913
            </Link>
          </p>
          <p>
            <XiaoHongShu width={16} height={16} className="inline-block svgIcon" />{" "}
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
  );
}

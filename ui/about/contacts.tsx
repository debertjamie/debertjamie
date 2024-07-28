import Link from "next/link";

function SocialLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="norefferer noopener"
      className="text-cyan-600 dark:text-cyan-500"
    >
      {children}
    </Link>
  );
}

export function Contacts() {
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-3 mt-6 gap-2 text-xl *:grid *:gap-y-2 *:h-fit">
      <div>
        <p>
          LinkedIn:{" "}
          <SocialLink href="https://linkedin.com/in/debertjamie">
            in/debertjamie
          </SocialLink>
        </p>
        <p>
          Github:{" "}
          <SocialLink href="https://github.com/debertjamie">
            debertjamie
          </SocialLink>
        </p>
        <p>
          Twitter (X):{" "}
          <SocialLink href="https://x.com/DebertJamie">DebertJamie</SocialLink>
        </p>
      </div>
      <div>
        <p>Discord: debert_6913</p>
        <p>Instagram: @debert.jc</p>
        <p>
          Reddit:{" "}
          <SocialLink href="https://reddit.com/user/Glitched6913/">
            u/Gitched6913
          </SocialLink>
        </p>
      </div>
      <div>
        <p>微信: debertjamie</p>
        <p>
          小红书:{" "}
          <SocialLink href="https://xiaohongshu.com/user/profile/65a6b06e000000000803046f">
            Debert Jamie
          </SocialLink>
        </p>
      </div>
    </div>
  );
}

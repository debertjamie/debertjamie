import { PortableText } from "@portabletext/react";
import { nowQuery } from "@/lib/sanity/lib/query";
import { sanityFetch } from "@/lib/sanity/lib/client";
import { CustomPortableTextComponents } from "@/ui/blog";
import { ExternalLink } from "@/ui/components";
import { ReturnHome } from "@/ui/components";
import { maiyuan } from "@/ui/fonts/fonts";

type NowData = {
  _updatedAt: string;
  content: any;
};

function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return new Date(date).toLocaleDateString("en-GB", options);
}

export default async function Now() {
  const nowData: NowData = await sanityFetch({
    query: nowQuery,
    tags: ["now"],
  });

  return (
    <main className="space-y-8 mt-8 sm:mt-18 text-lg">
      <section className="space-y-2">
        <h1 className="text-5xl font-semibold">Now</h1>
        <p>
          A{" "}
          <ExternalLink href="https://nownownow.com/" arrowSize={4}>
            now page
          </ExternalLink>
          , showing what I'm currently working on (updated periodically)
        </p>
      </section>
      <section className={`space-y-8 border-t border-t-steel-grey/30 dark:border-t-porcelain/30 ${maiyuan.className}`}>
        <PortableText
          value={nowData.content}
          components={CustomPortableTextComponents}
        />
        <p className="text-base text-steel-grey/80 dark:text-porcelain/80">
          Last updated: {formatDate(nowData._updatedAt)}
        </p>
      </section>
      <ReturnHome />
    </main>
  );
}

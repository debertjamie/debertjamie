import { PortableTextBlock } from "sanity";

export type ProjectType = {
  _id: string;
  name: string;
  title: string;
  projectUrl: string;
  repository: string;
  logo: string;
  mainImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  description: PortableTextBlock[];
};

export type PostType = {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  description: string;
  date?: string;
  mainImage: {
    image: string;
    lqip: string;
    alt: string | null;
  };
  tags: { tag: string; slug: string }[];
  locale: string;
  author: {
    name: string;
    twitterUrl: string;
  };
  body: PortableTextBlock[];
  isPublished: boolean;
};

export type NowType = {
  _id: string;
  content: PortableTextBlock[];
  date: string;
};

export type NoteType = {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  content: PortableTextBlock[];
  title: string;
  date: string;
  slug: number;
  locale: string;
  series: string;
};

export function formatDate(date: string, locale: string = "en-GB") {
  const parsedDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const targetLocale = locale === "en-US" ? "en-GB" : locale;
  return parsedDate.toLocaleDateString(targetLocale, options);
}

export function readTime(content: string) {
  const trimmed = content.trim();
  if (!trimmed) return "0 min";

  const charRegex = /[\u4e00-\u9fa5]/g;
  const cMatches = trimmed.match(charRegex);
  const cCount = cMatches ? cMatches.length : 0;

  const alphabetText = trimmed.replace(charRegex, " ");
  const aWordsArray = alphabetText.split(/\s+/).filter(Boolean);
  const aWordCount = aWordsArray.length;

  const AVG_WPM = 225;
  const AVG_CPM = 250;

  const aTime = aWordCount / AVG_WPM;
  const cTime = cCount / AVG_CPM;
  const totalMinutes = Math.ceil(aTime + cTime);

  return `${totalMinutes} min`;
}

export function toPlainText(blocks: PortableTextBlock[] = []) {
  return blocks
    .map((block: any) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child: any) => child.text).join("");
    })
    .join("\n\n");
}

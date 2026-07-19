import type { PortableTextComponents } from "@portabletext/react";
import { ExternalLink } from "@/ui/components";
import { ImageComponent, CodeBlock, GalleryComponent, BlockQuoteComponent, CalloutComponent } from ".";
import { jetbrainsMono } from "../fonts/fonts";

function toSlug(text: any) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\p{Script=Han}]+/gu, "-")
    .replace(/(^-|-$)+/g, "");
}

export const CustomPortableTextComponents: PortableTextComponents = {
  types: {
    image: ImageComponent,
    code: CodeBlock,
    blockquote: BlockQuoteComponent,
    callout: CalloutComponent,
    gallery: GalleryComponent,
  },
  marks: {
    link: ({ value, children }) => <ExternalLink href={value} arrowSize={4}>{children}</ExternalLink>,
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    "strike-through": ({ children }) => <span className="line-through">{children}</span>,
    code: ({ children }) => <code className={`${jetbrainsMono.className} bg-porcelain-dark dark:bg-steel-grey px-1 py-0.5 text-olivine-dark dark:text-olivine rounded-sm`}>{children}</code>,
    spoiler: ({ children }) => <span className="bg-porcelain dark:bg-steel-grey-dark blur-md hover:bg-transparent hover:blur-none transition-all duration-200 select-none">{children}</span>
  },
  block: {
    normal: ({ children }) => <p className="text-lg leading-relaxed tracking-wide mt-4 mb-6">{children}</p>,
    h2: ({ children }) => <h2 className="text-2xl tracking-wider font-bold mt-10 -mb-2" id={toSlug(children)}>{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl tracking-wider font-semibold mt-6 -mb-2" id={toSlug(children)}>{children}</h3>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc -mt-3 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-5">{children}</li>,
    number: ({ children }) => <li className="ml-5">{children}</li>,
  },
}


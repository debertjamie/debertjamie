import type { SanityImageSource } from "@sanity/image-url";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/lib/image";

export function ImageComponent({ value }: { value: { caption: string; alt: string; src: SanityImageSource } }) {
  return (
    <figure className="my-4">
      <Image
        className="rounded-sm object-cover object-left-top aspect-auto duration-300"
        src={urlFor(value.src).url()}
        alt={value.alt}
        loading="lazy"
        width={1600}
        height={1200}
        placeholder="blur"
        quality={100}
        sizes="100vw"
        blurDataURL={urlFor(value.src).blur(10).quality(20).url()}
      />
      {value.caption && (
        <figcaption className="text-sm text-steel-grey/80 dark:text-porcelain/80 mt-2">
          {value.caption}
        </figcaption>
      )}
    </figure>
  )
}
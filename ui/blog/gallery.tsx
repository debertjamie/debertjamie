import type { SanityImageSource } from "@sanity/image-url";
import { ImageComponent } from ".";

type GalleryValue = {
  title: string;
  images: {
    caption: string;
    alt: string;
    asset: { _ref: SanityImageSource; _type: string };
  }[];
};

export function GalleryComponent({ value }: { value: GalleryValue }) {
  return (
    <div className="px-4 pb-1 pt-4 bg-porcelain-dark dark:bg-steel-grey rounded-lg">
      <span className="font-semibold">{value.title}</span>
      <div className="px-4 flex flex-nowrap gap-x-4 overflow-auto no-scrollbar">
        {value.images.map((image, index) => (
          <div key={index} className="flex-shrink-0">
            <ImageComponent
              value={{
                caption: image.caption,
                alt: image.alt,
                src: image.asset._ref,
                openImage: true,
              }}
            />
          </div>
        ))}
      </div>
      <span className="text-sm">Pro tip: Click on an image to view it in full size</span>
    </div>
  );
}

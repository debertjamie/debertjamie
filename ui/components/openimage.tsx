"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type OpenImageProps = ImageProps & {
  caption?: string;
};

export function OpenImage({
  caption,
  onClick,
  alt,
  style,
  ...props
}: OpenImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        {...props}
        alt={alt}
        onClick={(event) => {
          onClick?.(event);
          setOpen(true);
        }}
        className={["cursor-pointer", props.className]
          .filter(Boolean)
          .join(" ")}
        style={style}
      />

      {open ? (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-steel-grey/75 backdrop-blur-lg p-6"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-3"
          >
            <Image
              {...props}
              alt={alt}
              className="h-auto w-auto max-h-[80vh] max-w-[90vw] object-contain"
            />

            {caption ? (
              <div className="text-center text-sm leading-6 text-porcelain/80">
                {caption}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

type OpenTextImageProps = ImageProps & {
  caption?: string;
  children: React.ReactNode;
};

export function OpenTextImage({
  caption,
  children,
  alt,
  style,
  ...props
}: OpenTextImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </span>

      {open ? (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-6"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-3"
          >
            <Image
              {...props}
              alt={alt}
              className="h-auto w-auto max-h-[80vh] max-w-[90vw] object-contain"
            />

            {caption ? (
              <div className="text-center text-sm leading-6 text-white">
                {caption}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

"use client";

import React from "react";
import { useCopyToClipboard } from "@/lib/useCopy";

export function Email() {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [copy] = useCopyToClipboard();
  return (
    <div className="mt-6 text-xl">
      <p>
        <span>Email:{" "}</span>
        <span
          className="overflow-x-scroll no-scrollbar cursor-pointer font-mono"
          onClick={() => {
            copy("debertjamiechanderson@mail.ugm.ac.id").then(() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 2500);
            });
          }}
        >
          {isCopied ? "Copied!" : "Click to Copy"}
        </span>
      </p>
    </div>
  );
}

function Base64Email({ email }: { email: string }) {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  // const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [copy] = useCopyToClipboard();
  <div className="relative group max-w-fit rounded-lg bg-gray-400 dark:bg-gray-800 px-2 py-1 cursor-pointer">
    <pre
      className="overflow-x-scroll no-scrollbar"
      onClick={() => {
        copy(email).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500);
        });
      }}
    >
      {isCopied ? "Copied!" : "Click to Copy"}
    </pre>
    <div className="absolute flex opacity-0 group-hover:opacity-100 ease-linear delay-75 duration-100 transition-opacity left-0 right-0 justify-center">
      <span className="px-1 text-base rounded bg-zinc-300 dark:bg-zinc-200 text-zinc-950">
        {isCopied ? "Copied!" : "Click to Copy"}
      </span>
    </div>
  </div>;
}

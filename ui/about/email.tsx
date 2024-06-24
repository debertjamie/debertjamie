"use client";

import React from "react";
import { useCopyToClipboard } from "@/lib/useCopy";

export function Email() {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [copy] = useCopyToClipboard();
  return (
    <div className="mt-6 text-xl">
      <p>Email:</p>
      <div className="relative group max-w-fit rounded-lg bg-gray-400 dark:bg-gray-800 px-2 py-1 cursor-pointer">
        <pre
          className="overflow-x-scroll no-scrollbar"
          onClick={() => {
            copy("debertjamie@outlook.com").then(() => {
              setIsCopied(true);
              setTimeout(() => setIsCopied(false), 1500);
            });
          }}
        >
          echo ZGViZXJ0amFtaWVAb3V0bG9vay5jb20 | base64 --decode
        </pre>
        <div className="absolute flex opacity-0 group-hover:opacity-100 ease-linear delay-75 duration-100 transition-opacity left-0 right-0 justify-center">
          <span className="px-1 text-base rounded bg-zinc-300 dark:bg-zinc-200 text-zinc-950">
            {isCopied ? "Copied!" : "Click to Copy"}
          </span>
        </div>
      </div>
    </div>
  );
}

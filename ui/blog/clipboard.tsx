"use client";

import { useState } from "react";
import { useCopyToClipboard } from "@/lib/useCopy";
import { CopyIcon } from "@/ui/icons";

export function CopyToClipboard({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const [copy] = useCopyToClipboard();

  const handleCopy = async () => {
    const success = await copy(text);
    setCopied(success);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className="relative">
      <CopyIcon className="w-4 h-4 text-steel-grey/80 dark:text-porcelain/80 hover:text-steel-grey dark:hover:text-porcelain duration-300" />
      {!copied ? null : (
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 dark:bg-steel-grey bg-porcelain-dark text-xs px-2 py-1 rounded-md shadow-md">
          Copied!
        </span>
      )}
    </button>
  );
}

"use client";

import React from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

/** @see https://usehooks-ts.com/react-hook/use-copy-to-clipboard */
export function useCopyToClipboard(): [CopyFn, CopiedValue] {
  const [copiedText, setCopiedText] = React.useState<CopiedValue>(null);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      setCopiedText(null);
      return false;
    }
  };

  return [copy, copiedText];
}

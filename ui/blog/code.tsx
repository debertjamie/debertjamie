import { Refractor, registerLanguage } from "react-refractor";
import js from "refractor/javascript";
import ts from "refractor/typescript";
import python from "refractor/python";
import cpp from "refractor/cpp";
import go from "refractor/go";
import gomod from "refractor/go-module";
import bash from "refractor/bash";
import sql from "refractor/sql";
import tsx from "refractor/tsx";
import jsx from "refractor/jsx";
import markdown from "refractor/markdown";
import html from "refractor/markup";
import css from "refractor/css";
import yaml from "refractor/yaml";
import graphql from "refractor/graphql";
import json from "refractor/json";
import ino from "refractor/arduino";
import { CopyToClipboard } from ".";

registerLanguage(js);
registerLanguage(ts);
registerLanguage(python);
registerLanguage(cpp);
registerLanguage(go);
registerLanguage(gomod);
registerLanguage(bash);
registerLanguage(sql);
registerLanguage(tsx);
registerLanguage(jsx);
registerLanguage(markdown);
registerLanguage(html);
registerLanguage(css);
registerLanguage(yaml);
registerLanguage(graphql);
registerLanguage(json);
registerLanguage(ino);

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-zinc-50 dark:bg-[#141414] border dark:border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 translate-y-2">
        <p className="text-sm">{value.filename ?? "Code snippet"}</p>
        <CopyToClipboard text={value.code} />
      </div>
      <Refractor
        language={value.language ?? "tsx"}
        value={value.code}
        className="text-sm border-x border-b dark:border-zinc-800 border-zinc-200 rounded-b-lg tracking-normal"
      />
    </div>
  );
}
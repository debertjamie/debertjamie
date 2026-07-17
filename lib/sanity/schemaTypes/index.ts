import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { tagType } from "./tagType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { projectType } from "./projectType";
import { nowType } from "./nowType";
import { notesType } from "./notesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    tagType,
    postType,
    authorType,
    projectType,
    nowType,
    notesType,
  ],
};

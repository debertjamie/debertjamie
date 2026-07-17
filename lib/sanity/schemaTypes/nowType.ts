import { defineType, defineField } from "sanity";

export const nowType = defineType({
  name: "now",
  title: "Now",
  type: "document",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
  ]
});

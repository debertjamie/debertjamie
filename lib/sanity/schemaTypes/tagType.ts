import { defineField, defineType } from "sanity";
import { TagIcon } from "@/ui/icons";

export const tagType = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "tag",
      },
    }),
  ],
});

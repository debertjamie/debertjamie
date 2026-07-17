import { defineField, defineType } from "sanity";
import { AuthorIcon } from "@/ui/icons";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: AuthorIcon,
  fields: [
    defineField({
      name: "name",
      title: "Author Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
});

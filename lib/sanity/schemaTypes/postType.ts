import { defineArrayMember, defineField, defineType } from "sanity";
import { BookIcon } from "@/ui/icons";

export const postType = defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required().max(150),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Cover/Main Image",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "tag" } })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "locale",
      title: "Locale",
      type: "string",
      options: {
        list: [
          { title: "English (United Kingdom)", value: "en-GB" },
          { title: "Simplified Chinese (简体中文)", value: "zh-CN" },
          { title: "Traditional Chinese (繁體中文)", value: "zh-Hant" },
        ],
      },
      initialValue: "en-GB",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "isPublished",
      title: "Publish Post",
      type: "boolean",
      description: "Tick this if you want to publish this post",
    }),
  ],
  preview: {
    select: {
      title: "title",
      isPublished: "isPublished",
      date: "date",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author, isPublished } = selection;
      return {
        ...selection,
        ...author,
        subtitle:
          author && `by ${author} (${isPublished ? "Published" : "Draft"})`,
      };
    },
  },
});

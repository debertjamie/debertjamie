import { defineType, defineField } from "sanity";

export const notesType = defineType({
  name: "notes",
  title: "Notes",
  type: "document",
  description: "Short notes and T.I.L.s",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
    }),
    defineField({
      name: "date",
      title: "Last Updated Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "slug",
      title: "Slug (Unique Number)",
      type: "number",
      validation: (Rule) => Rule.required().integer().positive(),
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
      name: "series",
      title: "Series",
      type: "string",
      options: {
        list: [
          { title: "Inspiration 灵感", value: "inspiration" },
          { title: "Daily Life 日常", value: "daily-life" },
          { title: "College 大学", value: "college" },
          { title: "Programming 编程", value: "programming" },
          { title: "Technology 科技", value: "technology" },
          { title: "T.I.L. 今天学到了", value: "til" },
          { title: "Other 其他", value: "other" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title: title || "No title",
        subtitle: date
          ? `Last updated: ${new Date(date).toLocaleDateString()}`
          : "No date",
      };
    },
  },
});

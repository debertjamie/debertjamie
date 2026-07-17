import { defineField, defineType } from "sanity";
import { PackageIcon } from "@/ui/icons";

export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (rule) => rule.required().max(200),
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
      name: "repository",
      title: "Repository URL",
      type: "url",
    }),
  ],
});

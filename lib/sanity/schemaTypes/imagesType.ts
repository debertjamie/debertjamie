import { defineType } from "sanity";

export const galleryType = defineType({
  title: "Image Gallery",
  name: "gallery",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Gallery Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true, metadata: ["lqip"] },
          fields: [
            {
              name: "caption",
              title: "Image Caption",
              type: "string",
              options: { isHighlighted: true },
            },
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
              validation: (rule) => rule.required().min(5),
            },
          ],
        },
      ],
    },
  ],
});

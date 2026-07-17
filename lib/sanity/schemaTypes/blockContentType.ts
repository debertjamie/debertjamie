import { defineType, defineArrayMember } from "sanity";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: "Post Body",
  name: "blockContent",
  type: "array",
  description: "Write your post content here",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbering", value: "number" },
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Strike through", value: "strike-through" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "caption",
          title: "Image Caption",
          type: "string",
          description: "Text displayed below the image",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineArrayMember({
      type: "code",
      options: {
        language: "typescript",
        withFilename: true,
        languageAlternatives: [
          { title: "Bash", value: "bash" },
          { title: "JavaScript", value: "js" },
          { title: "TypeScript", value: "ts" },
          { title: "TSX", value: "tsx" },
          { title: "JSX", value: "jsx" },
          { title: "CSS", value: "css" },
          { title: "Groq/GraphQL", value: "graphql" },
          { title: "HTML", value: "html" },
          { title: "JSON", value: "json" },
          { title: "Markdown", value: "md" },
          { title: "Python", value: "py" },
          { title: "C++", value: "cpp" },
          { title: "Go", value: "go" },
          { title: "Go Module", value: "go-mod" },
          { title: "SQL", value: "sql" },
          { title: "YAML", value: "yaml" },
          { title: "Arduino", value: "ino" },
        ],
      },
    }),
  ],
});

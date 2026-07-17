import { groq } from "next-sanity";

// Reusable post fields
const postField = groq`
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description,
  mainImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  isPublished
`;

const noteField = groq`
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  description
`;

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  _id, 
  title,
  projectUrl,
  repository,
  description,
  mainImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
}`;

export const postsQuery = groq`*[_type == "post"] | order(_createdAt desc){
  ${postField},
  date,
  tags[]-> {
    tag,
    "slug": slug.current,
  },
  "author": author-> {
    name,
    twitterUrl,
  },
  locale,
  body,
}`;

export const notesQuery = groq`*[_type == "notes" && defined(series) && series != ""] | order(series asc, date desc) {
  _id,
  title,
  date,
  slug,
  locale,
  series
}`;

export const singlePostQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ${postField},
  _updatedAt,
  date,
  tags[]-> {
    tag,
    "slug": slug.current,
  },
  "author": author-> {
    name,
    twitterUrl,
  },
  locale,
  body,
}`;

export const singleNoteQuery = groq`*[_type == "notes" && slug == $slug][0]{
  ${noteField},
  date,
  locale,
  series,
  content
}`;

export const nowQuery = groq`*[_id == "now"][0] {
  _updatedAt,
  content
}`;
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    isFeatured: z.boolean().optional(),
  }),
});

const snippets = defineCollection({
  schema: z.object({
    Name: z.string(),
    description: z.string(),
    Snippet: z.object({
      code: z.string(),
      lang: z.string().optional(),
    }),
  }),
});

export const collections = { blog, snippets };

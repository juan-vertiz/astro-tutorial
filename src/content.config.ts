import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };

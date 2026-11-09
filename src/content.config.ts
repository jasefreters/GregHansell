import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Artworks. One Markdown file per work in src/content/works/.
 * Put the photo in the same folder and reference it as `image: ./my-photo.jpg`.
 */
const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int().optional(),
      medium: z.string().default('Pastel'),
      dimensions: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Show on the home page. */
      featured: z.boolean().default(false),
      /** Lower numbers appear first on the Works page. */
      order: z.number().default(100),
      /** true = details came from public sources and still need checking. */
      needsChecking: z.boolean().default(false),
    }),
});

/**
 * Exhibitions, prizes and events. One Markdown file each in src/content/exhibitions/.
 * Listed newest first by `year` (and `date` if given).
 */
const exhibitions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/exhibitions' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['Exhibition', 'Prize', 'Event', 'Collection']).default('Exhibition'),
    venue: z.string().optional(),
    year: z.number().int().optional(),
    date: z.coerce.date().optional(),
    link: z.url().optional(),
    needsChecking: z.boolean().default(false),
  }),
});

export const collections = { works, exhibitions };

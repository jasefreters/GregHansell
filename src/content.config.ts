import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Artworks. One Markdown file per work in src/content/works/.
 * Put the photo in the same folder and reference it as `image: ./my-photo.jpg`.
 * Files starting with "_" (like _example.md) are ignored.
 */
const works = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number().int().optional(),
      medium: z.string().optional(),
      dimensions: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Who supplied the photograph, e.g. a gallery. */
      credit: z.string().optional(),
      creditUrl: z.url().optional(),
      /** Show on the home page. */
      featured: z.boolean().default(false),
      /** Lower numbers appear first on the Works page. */
      order: z.number().default(100),
    }),
});

/**
 * Exhibitions, prizes, awards and events. One Markdown file each in
 * src/content/exhibitions/. Listed newest first.
 */
const exhibitions = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/exhibitions' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['Exhibition', 'Event', 'Prize', 'Award']).default('Exhibition'),
    venue: z.string().optional(),
    year: z.number().int().optional(),
    date: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    link: z.url().optional(),
  }),
});

export const collections = { works, exhibitions };

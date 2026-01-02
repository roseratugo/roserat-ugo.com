import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts collection
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      lang: z.enum(['fr', 'en']),
      translationKey: z.string().optional(),
    }),
});

// Projects collection
const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      thumbnail: image(),
      technologies: z.array(z.string()),
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      lang: z.enum(['fr', 'en']),
      translationKey: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
    }),
});

// Distinctions collection (JSON-based for simpler data)
const distinctions = defineCollection({
  loader: file('./src/content/distinctions/distinctions.json'),
  schema: z.object({
    id: z.string(),
    type: z.enum(['winner', 'participant', 'mentor', 'organizer']),
    event: z.object({
      fr: z.string(),
      en: z.string(),
    }),
    description: z.object({
      fr: z.string(),
      en: z.string(),
    }),
    date: z.coerce.date(),
    location: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = { blog, projects, distinctions };

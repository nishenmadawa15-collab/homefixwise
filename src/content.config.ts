import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['HVAC','Plumbing','Basement','Roofing','Electrical','Insulation','Cost Guides']),
    intent: z.enum(['troubleshooting','cost','comparison','location']),
    country: z.enum(['US','Canada','Both']).default('Both'),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
	loader: glob({
		base: './src/content/writing',
		pattern: '**/*.md',
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishedDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		image: z.string(),
		imageAlt: z.string(),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	writing,
};
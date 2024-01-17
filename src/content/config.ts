import { defineCollection, z } from 'astro:content';

const news = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

const author = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		avatar: z.string(),
	}),
});

export const collections = { news, author };

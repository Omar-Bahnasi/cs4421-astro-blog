import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.{md,mdx}',
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const authors = defineCollection({
	loader: glob({
		base: './src/content/authors',
		pattern: '**/*.{md,mdx}',
	}),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			avatar: image(),
			bio: z.string(),
			socialLinks: z
				.array(
					z.object({
						label: z.string(),
						url: z.url(),
					}),
				)
				.default([]),
		}),
});

export const collections = { blog, authors };
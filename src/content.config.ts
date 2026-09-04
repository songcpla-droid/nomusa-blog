import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().default(''),
			// 사업편 / 직원편 / 시스템편 / 개인편
			category: z.enum(['business', 'staff', 'system', 'personal']),
			// 목록 순서 (1~38)
			number: z.number(),
			// true면 아직 비공개(초안). 글을 완성하면 false로 바꾸세요.
			draft: z.boolean().default(true),
			// Transform string to Date object. 공개할 때 채워도 됨.
			pubDate: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };

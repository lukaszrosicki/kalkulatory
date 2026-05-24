import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const calculatorsCollection = defineCollection({
  // W Astro 6 używamy 'loader' zamiast 'type' do pobierania zawartości:
  loader: glob({ pattern: "**/*.md", base: "./src/content/calculators" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Enum to świetny wybór, zabezpieczy przed literówkami w nazwach kategorii:
    category: z.enum(['finanse', 'marketing', 'logistyka']),
    icon: z.string(),
    excelLink: z.string().url().optional(), // Sprawdzamy, czy to poprawny adres URL
  }),
});

// Definiujemy nową kolekcję dla statycznych podstron
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    email: z.string().email().optional(),
    linkedin: z.string().url().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  'calculators': calculatorsCollection,
  'pages': pagesCollection,
};
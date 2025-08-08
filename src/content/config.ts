import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Integrations collection schema
const integrationsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    excerpt: z.string(),
    image: z.string(),
    categories: z.array(z.string()).default([]),
    url: z.string(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  patrocinadores: integrationsCollection,
  colaboradores: integrationsCollection,
  "patrocinadores-nuevos": integrationsCollection,
  agenda: pagesCollection,
  careers: pagesCollection,
  contacto: pagesCollection,
  homepage: pagesCollection,
  impacto: pagesCollection,
  pricing: pagesCollection,
  "quienes-somos": pagesCollection,
  testimonios: pagesCollection,
};

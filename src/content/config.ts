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

// Homepage collection schema
const homepageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string(),
        enable: z.boolean(),
      }),
    }).optional(),
    key_features: z.object({
      title: z.string(),
      description: z.string(),
      feature_list: z.array(z.any()),
    }).optional(),
    service: z.object({
      homepage_tab: z.any().optional(),
      our_service: z.array(z.any()),
    }).optional(),
    testimonial: z.object({
      title: z.string(),
      description: z.string().nullable().optional(),
      testimonial_list: z.array(z.any()),
    }).optional(),
  }),
});

// Impacto collection schema - more flexible
const impactoCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    page_title: z.string().optional(),
    counter: z.any().optional(),
    gallery: z.any().optional(),
    features: z.any().optional(),
    members: z.any().optional(),
  }),
});

// Quienes Somos collection schema - more flexible
const quienesSomosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    banner: z.any().optional(),
    members: z.any().optional(), 
    project_management: z.any().optional(),
    testimonial: z.any().optional(),
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
  homepage: homepageCollection,
  impacto: impactoCollection,
  pricing: pagesCollection,
  "quienes-somos": quienesSomosCollection,
  testimonios: pagesCollection,
};

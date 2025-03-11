import { cache } from "react";

import { payload } from "@/lib/payload";

export const querySubcategories = cache(async ({ slug }: { slug: string }) => {
  const result = await payload.find({
    collection: "sub-categories",
    depth: 3,
    limit: 10000,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs || null;
});

export const queryCategories = cache(async ({ slug }: { slug: string }) => {
  const result = await payload.find({
    collection: "categories",
    depth: 3,
    limit: 10000,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs || null;
});

export const queryAllCategories = cache(async () => {
  const result = await payload.find({
    collection: "categories",
    depth: 3,
    limit: 10000,
  });

  return result.docs || null;
});

export const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const result = await payload.find({
    collection: "products",
    limit: 1,
    depth: 3,

    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export const queryProducts = cache(async (category: number) => {
  const products = await payload.find({
    collection: "products",
    depth: 1,
    sort: "-createdAt",
    pagination: false,
    where: {
      _status: {
        equals: "published",
      },
      subcategories: {
        contains: category,
      },
    },
  });

  if (products.docs.length === 0) return null;
});

export const queryAllProducts = cache(async () => {
  const products = await payload.find({
    collection: "products",
    depth: 1,
    sort: "-createdAt",
    pagination: false,
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return products.docs || null;
});

export const queryFeaturedProducts = cache(async () => {
  const result = await payload.find({
    collection: "products",
    limit: 10000,
    depth: 1,
    sort: "-createdAt",
    where: {
      _status: {
        equals: "published",
      },
      featured: {
        equals: true,
      },
    },
  });

  return result.docs || null;
});

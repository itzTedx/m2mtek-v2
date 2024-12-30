import { cache } from "react";

import { payload } from "@/lib/payload";

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

export const queryProducts = cache(async () => {
  const result = await payload.find({
    collection: "products",
    limit: 10000,
    depth: 1,
    sort: "-createdAt",
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return result.docs || null;
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

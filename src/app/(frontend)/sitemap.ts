import type { MetadataRoute } from "next";

import { queryProducts } from "@/server/actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || "";

  const products = await queryProducts();

  const productsEntries: MetadataRoute.Sitemap = products.map(({ slug }) => ({
    url: `${baseURL}/products/${slug}`,
    priority: 0.9,
  }));

  return [
    {
      url: baseURL,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseURL}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseURL}/products`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseURL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...productsEntries,
  ];
}

import type { MetadataRoute } from "next";

import { SubCategory } from "@/payload-types";
import { queryAllCategories, queryAllProducts } from "@/server/actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || "";

  const products = await queryAllProducts();
  const categories = await queryAllCategories();

  const productsEntries: MetadataRoute.Sitemap = products.map(({ slug }) => ({
    url: `${baseURL}/product/${slug}`,
    priority: 0.9,
  }));
  const categoriesEntries: MetadataRoute.Sitemap = categories.map(
    ({ slug }) => ({
      url: `${baseURL}/${slug}`,
      priority: 0.9,
    })
  );
  const categoriesSubEntries = categories
    .map(
      ({ slug, subcategories }) =>
        subcategories
          ?.filter(
            (sub): sub is SubCategory =>
              typeof sub === "object" && sub !== null && "slug" in sub
          )
          .map((sub) => ({
            url: `${baseURL}/${slug}/${sub.slug}`,
            priority: 0.9,
          })) ?? []
    )
    .flat();

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
      url: `${baseURL}/contact`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    ...productsEntries,
    ...categoriesEntries,
    ...categoriesSubEntries,
  ];
}

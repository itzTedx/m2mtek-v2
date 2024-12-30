import { Suspense } from "react";

import { payload } from "@/lib/payload";

import { ProductCard } from "../products/_components/product-card";
import SearchResults from "./results";

type Args = {
  searchParams: Promise<{
    q: string;
  }>;
};

export default async function SearchPage({
  searchParams: searchParamsPromise,
}: Args) {
  const { q: query } = await searchParamsPromise;

  const products = await payload.find({
    collection: "products",
    depth: 1,
    limit: 12,

    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                "meta.description": {
                  like: query,
                },
              },
              {
                "meta.title": {
                  like: query,
                },
              },
              {
                sku: {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {
          where: {
            _status: {
              equals: "published",
            },
          },
        }),
  });

  if (!query) {
    return (
      <div className="container min-h-dvh py-28 text-center text-2xl font-semibold">
        No Results found
      </div>
    );
  }

  return (
    <main className="container min-h-dvh py-28">
      {query ? (
        <Suspense fallback={"Loading..."}>
          <SearchResults results={products.docs.length} />
        </Suspense>
      ) : (
        "Search to find the product"
      )}

      <div className="grid grid-cols-4 gap-6 py-12">
        {products.docs && products.docs.length > 0
          ? products.docs.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))
          : "No Result Found"}{" "}
      </div>
    </main>
  );
}

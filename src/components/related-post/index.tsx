import clsx from "clsx";

import { ProductCard } from "@/app/(frontend)/product/_components/product-card";
import { payload } from "@/lib/payload";
import { Product } from "@/payload-types";

export type RelatedPostsProps = {
  className?: string;
  docs: Product[];
};

export const RelatedPosts = async ({ className, docs }: RelatedPostsProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8",
        className
      )}
    >
      {docs?.map(async (doc, index) => {
        if (typeof doc === "string") return null;
        const result = await payload.find({
          collection: "products",
          limit: 1,
          select: {
            title: true,
            images: true,
            sku: true,
            description: true,
            overview: true,
            updatedAt: true,
            createdAt: true,
            slug: true,
          },
          pagination: false,
          where: {
            slug: {
              equals: doc.slug,
            },
          },
        });

        return <ProductCard product={result.docs[0]} key={index} />;
      })}
    </div>
  );
};

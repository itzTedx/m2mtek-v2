import clsx from "clsx";

import { ProductCard } from "@/app/(frontend)/products/_components/product-card";
import { payload } from "@/lib/payload";
import { Product } from "@/payload-types";

export type RelatedPostsProps = {
  className?: string;
  docs: Product[];
};

export const RelatedPosts = async ({ className, docs }: RelatedPostsProps) => {
  return (
    <div className={clsx("container", className)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
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
    </div>
  );
};

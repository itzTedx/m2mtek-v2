import { payload } from "@/lib/payload";

import { ProductCard } from "./_components/product-card";

// export const dynamic = "force-static";
// export const revalidate = 600;

export default async function Products() {
  const products = await payload.find({
    collection: "products",
    depth: 1,
    sort: "createdAt",
    pagination: false,
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return (
    <div className="container py-24">
      <div className="grid grid-cols-4 gap-6">
        {products.docs.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

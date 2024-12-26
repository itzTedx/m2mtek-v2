import Link from "next/link";

import { payload } from "@/lib/payload";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function Products() {
  const products = await payload.find({
    collection: "products",
    limit: 20,
    depth: 1,
    sort: "createdAt",
    pagination: false,
  });

  return (
    <div className="container py-24">
      <div className="grid grid-cols-4 gap-6">
        {products.docs.map((product) => {
          const href = `/products/${product.slug}`;

          return (
            <Link href={href} key={product.id}>
              {product.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

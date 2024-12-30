import { payload } from "@/lib/payload";

import { Banner } from "./_components/banner";
import { ProductCard } from "./_components/product-card";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function Products() {
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

  return (
    <main>
      <Banner />
      <section className="container py-14">
        <h2 className="text-2xl font-semibold">
          Adjustable Workstations & Accessories
        </h2>
        <p>
          Smart desks, ergonomic chairs, and versatile accessories to create the
          perfect workspace for productivity and comfort.
        </p>
        <div className="grid grid-cols-4 gap-6 pt-9">
          {products.docs.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

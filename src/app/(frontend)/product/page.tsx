import { payload } from "@/lib/payload";

import { Banner } from "./_components/banner";
import { ProductCard } from "./_components/product-card";

export default async function Products() {
  const categories = await payload.find({
    collection: "categories",
    depth: 1,
    sort: "createdAt",
    pagination: false,
  });

  return (
    <main>
      <Banner />
      <section className="container space-y-12 py-14">
        {categories.docs.map(async (cat) => {
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
                contains: cat.id,
              },
            },
          });

          if (products.docs.length === 0) return null;

          return (
            <div key={cat.id}>
              <h2 className="text-2xl font-semibold">{cat.title}</h2>
              <p>{cat.description}</p>
              <div className="grid grid-cols-4 gap-6 pt-6">
                {products.docs.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

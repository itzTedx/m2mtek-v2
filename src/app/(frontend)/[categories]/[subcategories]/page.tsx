import { payload } from "@/lib/payload";
import { querySubcategories } from "@/server/actions";

import { ProductCard } from "../../product/_components/product-card";

type Params = Promise<{ subcategories: string }>;

export default async function SubcategoriesPage({
  params,
}: {
  params: Params;
}) {
  const { subcategories } = await params;

  const [data] = await querySubcategories({ slug: subcategories });
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
        equals: data.id,
      },
    },
  });

  if (products.docs.length === 0) return null;

  console.log(products);
  return (
    <main className="py-24">
      <header className="container">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </header>
      <section className="container grid grid-cols-4 gap-6">
        {products.docs.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

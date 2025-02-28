import { queryFeaturedProducts } from "@/server/actions";

import { ProductCard } from "../product/_components/product-card";

export const Products = async () => {
  const products = await queryFeaturedProducts();

  if (!products) return null;
  return (
    <section className="container space-y-4 py-12 md:space-y-9">
      <h3 className="font-aloevera text-4xl font-bold md:text-5xl">
        Some of our <span className="text-orange-600">top</span> sellers
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

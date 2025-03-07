import { queryProducts, querySubcategories } from "@/server/actions";

type Params = Promise<{ subcategories: string }>;

export default async function SubcategoriesPage({
  params,
}: {
  params: Params;
}) {
  const { subcategories } = await params;

  const [data] = await querySubcategories({ slug: subcategories });
  const products = await queryProducts(data.id);

  console.log(products);
  return (
    <main className="py-24">
      <header className="container">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </header>
      <section className="container grid grid-cols-4 gap-6"></section>
    </main>
  );
}

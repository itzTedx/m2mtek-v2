type Params = Promise<{ subcategories: string }>;

export default async function SubcategoriesPage({
  params,
}: {
  params: Params;
}) {
  const { subcategories } = await params;
  return <div className="py-24">{subcategories}</div>;
}

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { SubCategory } from "@/payload-types";
import { queryCategories } from "@/server/actions";

type Params = Promise<{ categories: string }>;

export default async function CategoriesPage({ params }: { params: Params }) {
  const { categories } = await params;
  const [data] = await queryCategories({ slug: categories });
  console.log(data);
  return (
    <section>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <div>
        {data.subcategories
          ?.filter(
            (sub): sub is SubCategory =>
              typeof sub === "object" && sub !== null && "id" in sub
          )
          .map((sub) => (
            <Card key={sub.id}>
              <CardContent>
                <Link
                  href={`/${data.slug}/${sub.slug}`}
                  className="block p-1 text-sm font-medium transition-colors hover:bg-gray-100"
                >
                  <span>{sub.title}</span>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
}

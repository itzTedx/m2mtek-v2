import Link from "next/link";

import { Media } from "@/components/Media";
import { Separator } from "@/components/ui/separator";
import { SubCategory } from "@/payload-types";
import { queryCategories } from "@/server/actions";

type Params = Promise<{ categories: string }>;

export default async function CategoriesPage({ params }: { params: Params }) {
  const { categories } = await params;
  const [data] = await queryCategories({ slug: categories });
  return (
    <main>
      <header className="relative flex h-[40rem] items-end p-28">
        <div className="relative z-10 max-w-lg rounded-lg bg-white/30 p-6 backdrop-blur-xl">
          <h1 className="font-aloevera text-2xl font-semibold">{data.title}</h1>
          <p className="font-medium">{data.description}</p>
        </div>
        {data.banner && (
          <Media resource={data.banner} fill imgClassName="object-cover" />
        )}
      </header>

      <section className="container grid grid-cols-3 gap-6 py-24">
        {data.subcategories
          ?.filter(
            (sub): sub is SubCategory =>
              typeof sub === "object" && sub !== null && "id" in sub
          )
          .map((sub) => (
            <Link
              key={sub.id}
              href={`/${data.slug}/${sub.slug}`}
              className="group rounded-md bg-white transition-colors hover:bg-gray-50"
            >
              {/* <div className="relative m-4 aspect-square">
                {sub.banner?.[0]?.image ? (
                  <Media
                    fill
                    resource={sub.images[0].image}
                    imgClassName={cn(
                      "object-cover group-hover:brightness-90 transition"
                    )}
                  />
                ) : (
                  "No Image"
                )}
              </div> */}
              <Separator />
              <div className="p-4">
                <h3 className="text-lg font-bold text-brand-600">
                  {sub.title}
                </h3>
              </div>
            </Link>
          ))}
      </section>
    </main>
  );
}

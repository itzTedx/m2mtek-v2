import { cache } from "react";

import RichText from "@/components/rich-text";
import { payload } from "@/lib/payload";

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function ProductPage({ params: paramsPromise }: Args) {
  const { slug = "" } = await paramsPromise;
  const post = await queryPostBySlug({ slug });

  return (
    <main className="container pt-16">
      <header className="grid grid-cols-3 py-12">
        <div className="col-span-2"></div>
        <div className="">
          <div className="">
            <h1 className="text-3xl font-semibold">{post.title}</h1>
            <p className="text-gray-700">{post.sku}</p>
          </div>
          <p>{post.description}</p>
        </div>
      </header>
      <section></section>
      <section className="container">
        <RichText data={post.overview} enableGutter={false} />
      </section>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </main>
  );
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const result = await payload.find({
    collection: "products",
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

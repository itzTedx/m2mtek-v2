import { cache } from "react";

import RichText from "@/components/rich-text";
import { payload } from "@/lib/payload";

import { ImagePreview } from "./_components/image-preview";

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
      <header className="grid grid-cols-3 gap-4 py-12">
        <div className="col-span-2">
          <ImagePreview data={post} />
        </div>
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
      <pre className="text-wrap">{JSON.stringify(post, null, 2)}</pre>
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

import { Metadata } from "next";
import Link from "next/link";

import ExpandableCard from "@/components/expandable-card";
import { RelatedPosts } from "@/components/related-post";
import RichText from "@/components/rich-text";
import { payload } from "@/lib/payload";
import { queryPostBySlug } from "@/server/actions";
import { generateMeta } from "@/utils/generate-meta";

import { FeaturesSection } from "./_components/features-section";
import { Heading } from "./_components/heading";
import { ImagePreview } from "./_components/image-preview";
import { ResourcesSection } from "./_components/resources-section";
import { SpecificationsSection } from "./_components/spec-section";

export async function generateStaticParams() {
  const posts = await payload.find({
    collection: "products",
    draft: false,
    limit: 1000,
    overrideAccess: false,
  });

  const params = posts.docs.map(({ slug }) => {
    return { slug };
  });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function ProductPage({ params: paramsPromise }: Args) {
  const { slug = "" } = await paramsPromise;
  const product = await queryPostBySlug({ slug });

  return (
    <main className="container space-y-12 pb-12 pt-16">
      <header className="grid gap-6 pt-12 md:grid-cols-2 md:gap-12">
        <ImagePreview data={product} />
        <div className="space-y-6">
          <div className="">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            {product.sku && <p className="text-gray-700">{product.sku}</p>}
          </div>
          <ul className="grid grid-cols-2 gap-6">
            <li>
              <h3 className="text-xs text-gray-500">Screen TV Sizes</h3>
              <p className="font-semibold">50”-105”</p>
            </li>
            <li>
              <h3 className="text-xs text-gray-500">Screen TV Sizes</h3>
              <p className="font-semibold">50”-105”</p>
            </li>
            <li>
              <h3 className="text-xs text-gray-500">Screen TV Sizes</h3>
              <p className="font-semibold">50”-105”</p>
            </li>
            <li>
              <h3 className="text-xs text-gray-500">Screen TV Sizes</h3>
              <p className="font-semibold">50”-105”</p>
            </li>
          </ul>

          <ExpandableCard>{product.description}</ExpandableCard>
        </div>
      </header>
      <div className="relative space-y-12">
        <ul className="container sticky top-16 z-10 flex w-full items-center gap-6 border-b border-black/50 bg-background py-3">
          {product.overview.root.children && (
            <li>
              <Link href="#overview">Overview</Link>
            </li>
          )}
          {product.features && product.features.length > 0 && (
            <li>
              <Link href="#features">Features</Link>
            </li>
          )}
          {product.specifications && product.specifications.length > 0 && (
            <li>
              <Link href="#specifications">Specifications</Link>
            </li>
          )}
          {product.resources && product.resources.length > 0 && (
            <li>
              <Link href="#resources">Resources</Link>
            </li>
          )}
        </ul>
        <section id="overview" className="container scroll-mt-12">
          <Heading>Overview</Heading>
          <RichText data={product.overview} enableGutter={false} />
        </section>
        {product.features?.length !== 0 && <FeaturesSection data={product} />}
        {product.specifications?.length !== 0 && (
          <SpecificationsSection data={product} />
        )}
        {product.resources?.length !== 0 && <ResourcesSection data={product} />}
      </div>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section id="related" className="container scroll-mt-12">
          <Heading>Products related to this</Heading>

          <RelatedPosts
            docs={product.relatedProducts.filter(
              (product) => typeof product === "object"
            )}
          />
        </section>
      )}
    </main>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;
  const post = await queryPostBySlug({ slug });

  return generateMeta({ doc: post });
}

import { Metadata } from "next";
import Link from "next/link";
import { cache } from "react";

import { RelatedPosts } from "@/components/related-post";
import RichText from "@/components/rich-text";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { getClientSideURL } from "@/lib/get-url";
import { payload } from "@/lib/payload";
import { generateMeta } from "@/utils/generate-meta";

import { ImagePreview } from "./_components/image-preview";

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
      <header className="grid grid-cols-3 gap-6 pt-12">
        <div className="col-span-2">
          <ImagePreview data={product} />
        </div>
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
          <p>{product.description}</p>
        </div>
      </header>
      <div className="relative space-y-12">
        <ul className="container sticky top-16 z-10 flex w-full items-center gap-6 border-b border-black/50 bg-background py-3">
          {product.overview && (
            <li>
              <Link href="#overview">Overview</Link>
            </li>
          )}
          {product.features && (
            <li>
              <Link href="#features">Features</Link>
            </li>
          )}
          {product.specifications && (
            <li>
              <Link href="#specifications">Specifications</Link>
            </li>
          )}
          {product.resources && (
            <li>
              <Link href="#resources">Resources</Link>
            </li>
          )}
        </ul>
        <section id="overview" className="container scroll-mt-12">
          <Heading>Overview</Heading>
          <RichText data={product.overview} enableGutter={false} />
        </section>
        {product.features && (
          <section id="features" className="container scroll-mt-12">
            <Heading>Features</Heading>
            <ul className="grid list-inside list-disc grid-cols-2 gap-4">
              {product.features.map((feature) => (
                <li key={feature.id}>{feature.title}</li>
              ))}
            </ul>
          </section>
        )}
        {product.specifications && (
          <section id="specifications" className="container scroll-mt-12">
            <Heading>Specifications</Heading>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Table>
                <TableBody>
                  {product.specifications
                    .slice(0, Math.ceil(product.specifications.length / 2))
                    .map((spec) => (
                      <TableRow key={spec.id}>
                        <TableCell className="w-48">{spec.title}</TableCell>
                        <TableCell className="bg-white/20 font-medium">
                          {spec.value}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <Table>
                <TableBody>
                  {product.specifications
                    .slice(Math.ceil(product.specifications.length / 2))
                    .map((spec) => (
                      <TableRow key={spec.id}>
                        <TableCell className="w-48">{spec.title}</TableCell>
                        <TableCell className="bg-white/20 font-medium">
                          {spec.value}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </section>
        )}
        {product.resources && (
          <section id="resources" className="container scroll-mt-12">
            <Heading>Resources</Heading>
            <div>
              {product.resources.map((res) => {
                const resourceUrl =
                  typeof res.document === "object" && res.document !== null
                    ? res.document.url
                    : "";

                return (
                  <div key={res.id}>
                    <Link
                      href={`${getClientSideURL()}${resourceUrl}`}
                      target="_blank"
                    >
                      {typeof res.document === "object" && res.document !== null
                        ? res.document.filename
                        : ""}
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {product.relatedProducts && (
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

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mb-2 font-aloevera text-2xl font-semibold text-brand-600">
      {children}
    </h2>
  );
};

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const result = await payload.find({
    collection: "products",
    limit: 1,
    depth: 3,

    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;
  const post = await queryPostBySlug({ slug });

  return generateMeta({ doc: post });
}

import Link from "next/link";
import { cache } from "react";

import RichText from "@/components/rich-text";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { payload } from "@/lib/payload";

import { ImagePreview } from "./_components/image-preview";

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
      <header className="grid grid-cols-3 gap-6 py-12">
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
      <ul className="flex w-full items-center gap-3 border-b border-black">
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
      <section id="overview" className="container">
        <Heading>Overview</Heading>
        <RichText data={product.overview} enableGutter={false} />
      </section>
      {product.features && (
        <section id="features" className="container">
          <Heading>Features</Heading>
          <ul className="grid grid-cols-2 gap-4">
            {product.features.map((feature) => (
              <li key={feature.id}>{feature.title}</li>
            ))}
          </ul>
        </section>
      )}
      {product.specifications && (
        <section id="specifications" className="container">
          <Heading>Specifications</Heading>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Table>
              <TableBody>
                {product.specifications
                  .slice(0, Math.ceil(product.specifications.length / 2))
                  .map((spec) => (
                    <TableRow key={spec.id}>
                      <TableCell className="w-48">{spec.title}</TableCell>
                      <TableCell className="font-medium">
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
                      <TableCell className="font-medium">
                        {spec.value}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}
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

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="font-aloevera text-2xl font-semibold">{children}</h2>;
};

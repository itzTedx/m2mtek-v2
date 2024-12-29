import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { slugify } from "@/utils/slugify";

export const Products = () => {
  return (
    <section className="container space-y-9 py-12">
      <h3 className="font-aloevera text-5xl font-bold">
        Some of our <span className="text-orange-600">top</span> sellers
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PRODUCTS.map((product, index) => (
          <Link key={index} href={`/products/${slugify(product.model)}`}>
            <Card>
              <CardContent>
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt=""
                    className="object-contain"
                    fill
                  />
                </div>
                <CardTitle className="text-lg text-brand-600">
                  {product.model}
                </CardTitle>
                <CardDescription>{product.title}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

const PRODUCTS = [
  {
    image: "/images/products/wall-1.jpg",
    model: "MT 6040F",
    title: "Large Screen Fixed TV wall mount",
  },
  {
    image: "/images/products/wall-2.jpg",
    model: "MEA01-3",
    title: "Large Screen Fixed TV wall mount",
  },
  {
    image: "/images/products/wall-3.jpg",
    model: "MT 4040F",
    title: "Large Screen Fixed TV wall mount",
  },
  {
    image: "/images/products/wall-4.jpg",
    model: "MT 8060F",
    title: "Large Screen Fixed TV wall mount",
  },
  {
    image: "/images/products/wall-2.jpg",
    model: "MEA01-3",
    title: "Large Screen Fixed TV wall mount",
  },
  {
    image: "/images/products/wall-3.jpg",
    model: "MT 4040F",
    title: "Large Screen Fixed TV wall mount",
  },
  {
    image: "/images/products/wall-4.jpg",
    model: "MT 8060F",
    title: "Large Screen Fixed TV wall mount",
  },
  {
    image: "/images/products/wall-1.jpg",
    model: "MT 6040F",
    title: "Large Screen Fixed TV wall mount",
  },
];

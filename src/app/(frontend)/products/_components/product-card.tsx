import Link from "next/link";

import { Media } from "@/components/Media";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Product } from "@/payload-types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const href = `/products/${product.slug}`;

  return (
    <Link
      href={href}
      className="group rounded-md bg-white transition-colors hover:bg-gray-50"
    >
      <div className="relative m-4 aspect-square">
        {product.images?.[0]?.image ? (
          <Media
            fill
            resource={product.images[0].image}
            imgClassName={cn("object-cover group-hover:brightness-90")}
          />
        ) : (
          "No Image"
        )}
      </div>
      <Separator />
      <div className="p-4">
        <p className="text-sm font-medium text-brand-600">{product.sku}</p>
        <h3 className="text-lg font-bold">{product.title}</h3>
      </div>
    </Link>
  );
};

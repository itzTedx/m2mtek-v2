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
    <Link href={href}>
      <div className="relative aspect-square">
        {product.images?.[0]?.image ? (
          <Media
            fill
            resource={product.images[0].image}
            imgClassName={cn("object-cover")}
          />
        ) : (
          "No Image"
        )}
      </div>
      <Separator />
      <h3 className="text-lg text-brand-600">{product.sku}</h3>
      <p>{product.title}</p>
    </Link>
  );
};

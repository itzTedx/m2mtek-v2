"use client";

import Link from "next/link";
import React, { Fragment } from "react";

import { Media } from "@/components/Media";
import useClickableCard from "@/features/hooks/use-clickable-card";
import { cn } from "@/lib/utils";
import type { Product } from "@/payload-types";

export type CardPostData = Pick<
  Product,
  "slug" | "categories" | "meta" | "title" | "images"
>;

export const Card: React.FC<{
  alignItems?: "center";
  className?: string;
  doc?: CardPostData;
  relationTo?: "product";
  showCategories?: boolean;
  title?: string;
}> = (props) => {
  const { card, link } = useClickableCard({});
  const {
    className,
    doc,
    relationTo,
    showCategories,
    title: titleFromProps,
  } = props;

  const { slug, categories, meta, title, images } = doc || {};
  const { description, image: metaImage } = meta || {};

  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0;
  const titleToUse = titleFromProps || title;

  const href = `/${relationTo}/${slug}`;

  return (
    <article
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card hover:cursor-pointer",
        className
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {!images && (
          <div className="flex aspect-square items-center justify-center">
            No image
          </div>
        )}
        {images && typeof images !== "string" && images[0]?.image && (
          <Media resource={images[0].image} />
        )}
      </div>
      <div className="p-4">
        {showCategories && hasCategories && (
          <div className="mb-4 text-sm uppercase">
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === "object") {
                    const { title: titleFromCategory } = category;

                    const categoryTitle =
                      titleFromCategory || "Untitled category";

                    const isLast = index === categories.length - 1;

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <h3>
            <Link className="not-prose" href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h3>
        )}
      </div>
    </article>
  );
};

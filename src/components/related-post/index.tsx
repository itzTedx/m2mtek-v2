import React from "react";

import clsx from "clsx";

import { Product } from "@/payload-types";

import { Card } from "../card";

export type RelatedPostsProps = {
  className?: string;
  docs?: Product[];
};

export const RelatedPosts: React.FC<RelatedPostsProps> = async (props) => {
  const { className, docs } = props;

  return (
    <div className={clsx("container", className)}>
      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8">
        {docs?.map((doc, index) => {
          if (typeof doc === "string") return null;

          return (
            <Card key={index} doc={doc} relationTo="product" showCategories />
          );
        })}
      </div>
    </div>
  );
};

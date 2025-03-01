import React from "react";

import clsx from "clsx";

import { Card } from "@/components/card";
import RichText from "@/components/rich-text";
import type { Product } from "@/payload-types";

export type RelatedPostsProps = {
  className?: string;
  docs?: Product[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  introContent?: any;
};

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props;

  return (
    <div className={clsx("lg:container", className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8">
        {docs?.map((doc, index) => {
          if (typeof doc === "string") return null;

          return (
            <Card key={index} doc={doc} relationTo="posts" showCategories />
          );
        })}
      </div>
    </div>
  );
};

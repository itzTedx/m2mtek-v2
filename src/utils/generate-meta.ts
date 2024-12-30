import type { Metadata } from "next";

import { getServerSideURL } from "@/lib/get-url";
import { Product } from "@/payload-types";

import { mergeOpenGraph } from "./merge-open-graph";

export const generateMeta = async (args: {
  doc: Product;
}): Promise<Metadata> => {
  const { doc } = args || {};

  const ogImage =
    typeof doc?.meta?.image === "object" &&
    doc.meta.image !== null &&
    "url" in doc.meta.image &&
    `${getServerSideURL()}`;

  const title = doc?.meta?.title
    ? doc?.meta?.title
    : "M2MTEK - Bridging Technologies";

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || "",
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join("/") : "/",
    }),
    title,
  };
};

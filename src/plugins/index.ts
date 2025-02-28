import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { searchPlugin } from "@payloadcms/plugin-search";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import { Plugin } from "payload";

import { beforeSyncWithSearch } from "@/app/(frontend)/search/before-sync-with-search";
import { searchFields } from "@/app/(frontend)/search/field-overrides";
import { getServerSideURL } from "@/lib/get-url";
import { Category, Product } from "@/payload-types";

const generateTitle: GenerateTitle<Product | Category> = ({ doc }) => {
  return doc?.title ? `${doc.title} | M2MTek` : "M2MTek";
};

const generateURL: GenerateURL<Product> = ({ doc }) => {
  const url = getServerSideURL();

  return doc?.slug ? `${url}/${doc.slug}` : url;
};

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,

    fields: ({ defaultFields }) => [
      ...defaultFields,
      {
        name: "keyword",
        type: "text",
      },
    ],
  }),
  uploadthingStorage({
    collections: {
      media: true,
      documents: true,
    },
    options: {
      token: process.env.UPLOADTHING_TOKEN,
      acl: "public-read",
    },
  }),
  searchPlugin({
    collections: ["products"],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields];
      },
    },
  }),
  payloadCloudPlugin(),
];

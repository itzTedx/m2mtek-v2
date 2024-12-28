import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { Plugin } from "payload";

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
  }),
  // uploadthingStorage({
  //   collections: {
  //     media: true,
  //     documents: true,
  //   },
  //   options: {
  //     token: process.env.UPLOADTHING_TOKEN,
  //     acl: "public-read",
  //   },
  // }),
  payloadCloudPlugin(),
];

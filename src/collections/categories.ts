import type { CollectionConfig } from "payload";

import { anyone } from "@/features/access/anyone";
import { authenticated } from "@/features/access/authenticated";
import { slugField } from "@/features/fields/slug";

export const Categories: CollectionConfig = {
  slug: "categories",

  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    ...slugField(),
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      admin: {
        hidden: true,
      },
    },
  ],
};

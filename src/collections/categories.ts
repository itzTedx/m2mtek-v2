import { anyone } from "@/features/access/anyone";
import { authenticated } from "@/features/access/authenticated";
import { slugField } from "@/features/fields/slug";
import type { CollectionConfig } from "payload";


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
  },
  
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    ...slugField()
  ],
};

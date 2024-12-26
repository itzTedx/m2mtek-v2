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
    defaultColumns: ['title', 'slug']
  
  },
  
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    ...slugField(),
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      admin: {
        hidden: true
      }
    }
  ],
};

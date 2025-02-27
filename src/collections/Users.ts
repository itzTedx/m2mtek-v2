import type { CollectionConfig } from "payload";

import { authenticated } from "@/features/access/authenticated";

export const Users: CollectionConfig = {
  slug: "users",
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "email"],
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    // {
    //   name: "avatar",
    //   type: "relationship",
    //   relationTo: "media",
    //   admin: {
    //     components: {
    //       Cell: "/src/collections/users/avatar",
    //     },
    //   },
    // },
  ],
  timestamps: true,
};

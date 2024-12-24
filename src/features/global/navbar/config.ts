import type { GlobalConfig } from "payload";

import { revalidateNavbar } from "./hooks/revalidateHeader";

export const Navbar: GlobalConfig = {
  slug: "navbar",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        {
          name: "Label",
          type: "text",
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateNavbar],
  },
};

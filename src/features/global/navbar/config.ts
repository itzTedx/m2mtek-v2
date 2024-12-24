import type { GlobalConfig } from "payload";

import { revalidateNavbar } from "./hooks/revalidate-navbar";

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
          name: "label",
          label: "Label",
          type: "text",
        
        },
        {
          name: "url",
          label: "Link",
          type: "text",
    
        },
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        isSortable: true
      },
    },
  ],
  hooks: {
    afterChange: [revalidateNavbar],
  },
};

import type { GlobalConfig } from "payload";

import { revalidateFooter } from "./hooks/revalidateFooter";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    { name: "description", type: "textarea" },
    {
      type: "collapsible",
      label: "Contact Details",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "email",
          label: "Email",
          type: "email",
        },
        {
          name: "phone",
          label: "Phone",
          type: "text",
        },
        {
          name: "address",
          label: "Address",
          type: "text",
        },
      ],
    },
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
    {
      type: "collapsible",
      label: "Socials",
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: "facebook",
          label: "Facebook",
          type: "text",
        },
        {
          name: "instagram",
          label: "Instagram",
          type: "text",
        },
        {
          name: "linkedin",
          label: "Linkedin",
          type: "text",
        },
        {
          name: "x",
          label: "X (Twitter)",
          type: "text",
        },
        {
          name: "youtube",
          label: "Youtube",
          type: "text",
        },
        {
          name: "tiktok",
          label: "Tiktok",
          type: "text",
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
};

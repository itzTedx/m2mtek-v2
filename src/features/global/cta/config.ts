import type { GlobalConfig } from "payload";

import { revalidateCta } from "./hooks/revalidateCta";

export const Cta: GlobalConfig = {
  slug: "cta",
  access: {
    read: () => true,
  },
  fields: [
    { name: "title", type: "text" },
    { name: "description", type: "textarea" },
    { name: "buttonText", type: "text" },
  ],
  hooks: {
    afterChange: [revalidateCta],
  },
};

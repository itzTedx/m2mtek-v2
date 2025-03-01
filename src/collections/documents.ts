import path from "path";
import type { CollectionConfig } from "payload";
import { fileURLToPath } from "url";

import { anyone } from "@/features/access/anyone";
import { authenticated } from "@/features/access/authenticated";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Documents: CollectionConfig = {
  slug: "documents",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      //required: true,
    },
  ],
  upload: {
    // Upload to the public/media directory in Next.js making them publicly accessible even outside of Payload
    staticDir: path.resolve(dirname, "../../public/documents"),
    adminThumbnail: "thumbnail",
    mimeTypes: ["application/pdf"],
  },
};

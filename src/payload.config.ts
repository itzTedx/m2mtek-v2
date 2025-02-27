// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { resendAdapter } from "@payloadcms/email-resend";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Categories } from "./collections/categories";
import { Documents } from "./collections/documents";
import { Products } from "./collections/products";
import { Subcategories } from "./collections/sub-categories";
import { Cta } from "./features/global/cta/config";
import { Footer } from "./features/global/footer/config";
import { plugins } from "./plugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    avatar: "gravatar",
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Products, Categories, Subcategories, Media, Users, Documents],
  globals: [Cta, Footer],
  // globals: [Navbar, Cta, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  email: resendAdapter({
    defaultFromAddress: "info@zironmedia.com",
    defaultFromName: "M2MTEK",
    apiKey: process.env.RESEND_API_KEY || "",
  }),
});

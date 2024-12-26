// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Categories } from "./collections/categories";
import { Documents } from "./collections/documents";
import { Media } from "./collections/Media";
import { Products } from "./collections/products";
import { Users } from "./collections/Users";
import { Cta } from "./features/global/cta/config";
import { Footer } from "./features/global/footer/config";
import { Navbar } from "./features/global/navbar/config";
import { plugins } from "./plugins";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Products, Categories, Media, Users, Documents ],
  globals: [Navbar, Cta, Footer],
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
    ...plugins
    // storage-adapter-placeholder
  ],
});

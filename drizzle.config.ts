import { type Config } from "drizzle-kit";
import { dbUrl } from "./app/env.mjs";

export default {
  schema: './lib/db/schema.ts',
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: dbUrl!,
  },
} satisfies Config;

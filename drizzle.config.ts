import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: [".env.local", ".env"] });

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.SUPABSE_DB_URL as string,
  },
  migrations: {
    prefix: "supabase",
    schema: "public",
  },
  out: "./src/db/migrations",
});

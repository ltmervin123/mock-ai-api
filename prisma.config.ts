
import { loadEnv } from "./src/helpers/env.js";
import { defineConfig } from "prisma/config";
const env = loadEnv();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env.DATABASE_URL,
  },
});

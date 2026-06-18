import "dotenv/config";
import { z } from "zod";

export const envSchema = z.object({
  DATABASE_USERNAME: z.string().min(1, "DATABASE_USERNAME is required"),
  DATABASE_PASSWORD: z.string().min(1, "DATABASE_PASSWORD is required"),
  DATABASE_HOST: z.string().min(1, "DATABASE_HOST is required"),
  DATABASE_PORT: z.string().min(1, "DATABASE_PORT is required"),
  DATABASE_NAME: z.string().min(1, "DATABASE_NAME is required"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  PORT: z.string().min(1, "PORT is required"),
});

export type Env = z.infer<typeof envSchema>;

export const loadEnv = () => {
  const env = envSchema.safeParse(process.env);

  if (!env.success) {
    throw new Error(
      `Invalid environment variables: ${env.error.message}`,
    );
  }

  return env.data;
};

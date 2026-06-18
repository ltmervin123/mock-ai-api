import { checkDatabaseConnection } from "./db-connection-check";
import { loadEnv } from "./env";
import CustomLogger from "./logger";

export default async function start() {
  const env = loadEnv();

  await checkDatabaseConnection();

  const logInfo = {
    level: "info",
    message: `Server is running on http://localhost:${env.PORT}`,
    port: env.PORT,
  };
  CustomLogger(JSON.stringify(logInfo));
}

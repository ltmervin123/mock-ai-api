import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { loadEnv } from "./helpers/env";
import { errorHandlerMiddleware } from "./middlewares/error-handler";
import CustomLogger from "./helpers/logger";

const app = new Hono();
const env = loadEnv();

app.use(logger());

app.onError(errorHandlerMiddleware);

app.use("*", (c) => {
  throw new Error(`Route ${c.req.url} not found`);
});



serve(
  {
    fetch: app.fetch,
    port: env.PORT as unknown as number,
  },
  (info) => {
    const logInfo = {
      level: "info",
      message: `Server is running on http://localhost:${info.port}`,
      port: info.port,
    };
    CustomLogger(JSON.stringify(logInfo));
  },
);

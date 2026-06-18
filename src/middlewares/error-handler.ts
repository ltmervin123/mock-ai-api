import { type Context } from "hono";
import { makeError } from "../helpers/error.js";
import CustomLogger from "../helpers/logger.js";
import { getConnInfo } from "@hono/node-server/conninfo";

export async function errorHandlerMiddleware(err: Error, c: Context) {
  const { error, statusCode } = makeError(err);
  const info = getConnInfo(c);
  const clientIp = info.remote.address;
  const jsonError = {
    level: "error",
    message: error.message,
    URL: c.req.url,
    statusCode,
    IP: clientIp,
    stack: err.stack,
    method: c.req.method,
  };
  CustomLogger(JSON.stringify(jsonError));

  return c.json(error, { status: statusCode } as any);
}

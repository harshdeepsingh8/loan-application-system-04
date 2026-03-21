import { Request, Response, NextFunction } from "express";
import { writeAccessLog } from "../utils/logger";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.url}`;

  writeAccessLog(log);

  next();
};
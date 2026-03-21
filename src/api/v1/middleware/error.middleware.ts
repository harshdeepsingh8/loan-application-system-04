import { Request, Response, NextFunction } from "express";
import { formatErrorResponse } from "../utils/errorResponse";
import { HTTP_STATUS } from "../../../constants/httpStatus";
import { writeErrorLog } from "../utils/logger";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log error (for dev)
  console.error("ERROR:", err);

  writeErrorLog(
  `${new Date().toISOString()} | ${req.method} ${req.url} | ${err.message}`
);

  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json(formatErrorResponse(err));
};  
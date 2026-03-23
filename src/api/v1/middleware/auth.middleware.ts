import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/app.error";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new UnauthorizedError("No token provided"));
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return next(new UnauthorizedError("No token provided"));
    }

    const decoded = jwt.verify(token, "secretkey");

    (req as any).user = decoded;

    next();
  } catch (error) {
    return next(new UnauthorizedError("Invalid or expired token"));
  }
};
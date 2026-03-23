import { Request, Response, NextFunction } from "express";
import { ForbiddenError } from "../errors/app.error";

export const authorizeRoles = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = (req as any).user;

      if (!user || !user.role) {
        throw new ForbiddenError("Access denied: No role found");
      }

      if (!allowedRoles.includes(user.role)) {
        throw new ForbiddenError("Access denied: Insufficient permissions");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
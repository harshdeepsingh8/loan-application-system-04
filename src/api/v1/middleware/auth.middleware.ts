import { Request, Response, NextFunction } from "express";
import { auth } from "../../../config/firebase";
import { UnauthorizedError } from "../errors/app.error";

// Extend Request type (temporary casting approach)
export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("No token provided");
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    const decodedToken = await auth.verifyIdToken(token);

    // Attach user to request
    (req as any).user = decodedToken;

    next();
  } catch (error) {
    next(new UnauthorizedError("Invalid or expired token"));
  }
};
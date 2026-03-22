import { Request, Response } from "express";
import { auth } from "../../../config/firebase";

// Set role using custom claims
export const setUserRole = async (req: Request, res: Response) => {
  const { uid, role } = req.body;

  try {
    await auth.setCustomUserClaims(uid, { role });

    res.json({ message: `Role ${role} assigned successfully` });
  } catch (error) {
    res.status(500).json({ message: "Error setting user role" });
  }
};
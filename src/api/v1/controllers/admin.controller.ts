import { Request, Response } from "express";
import { auth } from "../../../config/firebase";

// Allowed roles
const validRoles = ["admin", "analyst", "user"];

export const setUserRole = async (req: Request, res: Response) => {
  const { uid, role } = req.body;

  try {
    // Validate role
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role. Must be admin, analyst, or user",
      });
    }

    // Set custom claim
    await auth.setCustomUserClaims(uid, { role });

    res.json({
      message: `Role '${role}' assigned successfully`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error setting user role",
    });
  }
};
import { Request, Response } from "express";
import { auth } from "../../../config/firebase";

// Get user by UID
export const getUser = async (req: Request, res: Response) => {
  const { uid } = req.params as { uid: string };

  try {
    const userRecord = await auth.getUser(uid);
    res.json(userRecord);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user" });
  }
};
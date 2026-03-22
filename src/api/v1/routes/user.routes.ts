import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const router = Router();

router.get("/:uid", getUser);

export default router;
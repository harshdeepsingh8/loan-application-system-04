import { Router } from "express";
import { setUserRole } from "../controllers/admin.controller";

const router = Router();

router.post("/set-role", setUserRole);

export default router;
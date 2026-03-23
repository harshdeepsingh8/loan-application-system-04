import { Router } from "express";
import {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan,
} from "../controllers/loan.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/authorize.middleware";

const router = Router();


router.get(
  "/",
  authenticate,
  authorizeRoles("officer", "manager", "admin"),
  getLoans
);

router.get(
  "/:id",
  authenticate,
  authorizeRoles("officer", "manager", "admin"),
  getLoanById
);

router.post(
  "/",
  authenticate,
  authorizeRoles("manager", "admin"),
  createLoan
);

router.put(
  "/:id",
  authenticate,
  authorizeRoles("manager", "admin"),
  updateLoan
);

router.delete(
  "/:id",
  authenticate,
  authorizeRoles("admin"),
  deleteLoan
);

export default router;
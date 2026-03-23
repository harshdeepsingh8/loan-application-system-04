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

router.get("/", getLoans);
router.get("/:id", getLoanById);
router.post("/", createLoan);
router.put("/:id", updateLoan);
router.delete("/:id", deleteLoan);
router.get("/", authenticate, getLoans);
router.post("/", authenticate, createLoan);
router.put("/:id", authenticate, updateLoan);
router.delete("/:id", authenticate, deleteLoan);
// Everyone authenticated can view
router.get("/", authenticate, authorizeRoles("admin", "analyst"), getLoans);

// Only admin can create
router.post("/", authenticate, authorizeRoles("admin"), createLoan);

// Only admin can update
router.put("/:id", authenticate, authorizeRoles("admin"), updateLoan);

// Only admin can delete
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteLoan);

export default router;
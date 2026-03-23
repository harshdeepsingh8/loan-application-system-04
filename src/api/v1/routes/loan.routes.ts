import { Router } from "express";
import {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan,
} from "../controllers/loan.controller";
import { authenticate } from "../middleware/auth.middleware";

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

export default router;
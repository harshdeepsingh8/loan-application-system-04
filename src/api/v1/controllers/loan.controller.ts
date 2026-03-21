import { Request, Response } from "express";
import { loans } from "../utils/data";
import { NotFoundError } from "../errors/app.error";

// GET all loans
export const getLoans = (req: Request, res: Response) => {
  res.json(loans);
};

// GET single loan
export const getLoanById = (req: Request, res: Response) => {
  const loan = loans.find(l => l.id === Number(req.params.id));

if (!loan) {
  throw new NotFoundError("Loan not found");
}

  res.json(loan);
};

// CREATE loan
export const createLoan = (req: Request, res: Response) => {
  const newLoan = { id: loans.length + 1, ...req.body };
  loans.push(newLoan);
  res.status(201).json(newLoan);
};

// UPDATE loan
export const updateLoan = (req: Request, res: Response) => {
  const loan = loans.find(l => l.id === Number(req.params.id));
  if (!loan) return res.status(404).json({ message: "Loan not found" });

  Object.assign(loan, req.body);
  res.json(loan);
};

// DELETE loan
export const deleteLoan = (req: Request, res: Response) => {
  const index = loans.findIndex(l => l.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Loan not found" });

  loans.splice(index, 1);
  res.json({ message: "Loan deleted" });
};
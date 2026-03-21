import { LoanApplication } from "../models/loan.model";

export const loans: LoanApplication[] = [
  {
    id: 1,
    applicant: "John Smith",
    amount: 50000,
    status: "pending",
    createdAt: new Date().toISOString(),
  },
];
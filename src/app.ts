import express from "express";
import morgan from "morgan";
import loanRoutes from "./api/v1/routes/loan.routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/v1/loans", loanRoutes);

export default app;
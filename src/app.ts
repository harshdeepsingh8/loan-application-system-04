import express from "express";
import morgan from "morgan";
import loanRoutes from "./api/v1/routes/loan.routes";
import { errorHandler } from "./api/v1/middleware/error.middleware";
import { loggerMiddleware } from "./api/v1/middleware/logger.middleware";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/v1/loans", loanRoutes);

app.use(errorHandler);

export default app;
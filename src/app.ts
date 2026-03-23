import express from "express";
import morgan from "morgan";
import loanRoutes from "./api/v1/routes/loan.routes";
import { errorHandler } from "./api/v1/middleware/error.middleware";
import { loggerMiddleware } from "./api/v1/middleware/logger.middleware";
import userRoutes from "./api/v1/routes/user.routes";
import adminRoutes from "./api/v1/routes/admin.routes";
import authRoutes from "./api/v1/routes/auth.routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleware);


app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/loans", loanRoutes);
app.use("/api/v1/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/v1/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use(errorHandler);

export default app;
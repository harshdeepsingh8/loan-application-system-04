import fs from "fs";
import path from "path";

const logDir = path.join(__dirname, "../../../logs");

// Create logs folder if not exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Log file paths
const accessLogPath = path.join(logDir, "access.log");
const errorLogPath = path.join(logDir, "error.log");

// Write logs
export const writeAccessLog = (message: string) => {
  fs.appendFileSync(accessLogPath, message + "\n");
};

export const writeErrorLog = (message: string) => {
  fs.appendFileSync(errorLogPath, message + "\n");
};
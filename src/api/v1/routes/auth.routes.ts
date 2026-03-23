import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// ✅ YOUR ACTUAL USERS
const users = [
  { email: "user_music@pixell-river.com", password: "123456", role: "officer" },
  { email: "analyst_harsh@pixell-river.com", password: "123456", role: "manager" },
  { email: "admin_derek@pixell-river.com", password: "Derek123", role: "admin" },
];

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { role: user.role, email: user.email },
    "secretkey",
    { expiresIn: "1h" }
  );

  return res.status(200).json({
    success: true,
    token,
  });
});

export default router;
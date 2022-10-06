import { Router } from "express";
import { createUser, sendOtp, verifyOtp } from "../Controllers/LoginSignup.js";
const router = Router();

// router.get("/", getAllUsers);
router.post("/register", createUser);
router.post("/sendOTP", sendOtp);
router.post("/verifyOtp", verifyOtp);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);
// router.get("/:id", getUserById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);
export default router;

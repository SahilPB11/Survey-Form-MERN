import express from "express";
import { login, logout, signUp } from "../controllers/adminController.js";

const router = express.Router();

// for admin to signup
router.post("/signup", signUp);

// for admin to login
router.post("/login", login);

// for admin logout
router.get("/logout", logout);

export default router;

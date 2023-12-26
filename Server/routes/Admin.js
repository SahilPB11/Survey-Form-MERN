import express from "express";
import { signUp } from "../controllers/adminController";

const router = express.Router();

// for admin to signup
router.post("/signup", signUp);

// for admin to login
router.post("/login", )

export default router;

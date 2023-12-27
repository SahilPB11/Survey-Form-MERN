import express from "express";
import { fillSurveyForm } from "../controllers/SurveyForm.js";
const router = express.Router();

router.post("/", fillSurveyForm);
export default router;

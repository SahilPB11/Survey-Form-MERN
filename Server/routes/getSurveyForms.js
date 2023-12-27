import express from "express";
import { getAllSurveyForms } from "../controllers/getSurveyForm.js";

const router = express.Router();

router.get("/", getAllSurveyForms)


export default router;
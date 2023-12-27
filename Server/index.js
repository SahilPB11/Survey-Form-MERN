import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import adminRouter from "./routes/Admin.js";
import surveyFormRegister from "./routes/Survey.js";
import getSurveyForms from "./routes/getSurveyForms.js";
import isAuthenticated from "./middlewares/Authenticated.js";
import cors from "cors";

// here i am exporting app to server.js file
export const app = express();
config({
  path: "./.env",
});
// const link = process.env.Cors_Link;
app.use(
  cors({
    credentials: true,
    origin: "https://survey-form-mern.vercel.app/",
  })
);

// middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/admin", adminRouter);
app.use("/survey", surveyFormRegister);
app.use("/admin/forms", isAuthenticated, getSurveyForms);
// error handler middleware
app.use(errorMiddleware);

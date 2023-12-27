import Survey from "../model/SurveyForm.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// Function to check if survey already exists based on email, name, and phone number
const checkExistingSurvey = async (email, name, phoneNumber) => {
  const existingSurvey = await Survey.findOne({
    email: email,
    name: name,
    phoneNumber: phoneNumber,
  });

  return existingSurvey;
};

// POST endpoint to handle survey submission
export const fillSurveyForm = async (req, res, next) => {
  const { name, gender, nationality, email, phoneNumber, address, message } =
    req.body;

  try {
    // Check if survey with same email, name, and phone number already exists
    const existingSurvey = await checkExistingSurvey(email, name, phoneNumber);
    if (existingSurvey) {
      return next(new ErrorHandler("You are already registered.", 409));
    }

    // If no existing survey found, save the new survey
    const survey = new Survey({
      name,
      gender,
      nationality,
      email,
      phoneNumber,
      address,
      message,
    });
    const saved = await survey.save();
    res
      .status(201)
      .send({ success: true, message: "Successfully registered." });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

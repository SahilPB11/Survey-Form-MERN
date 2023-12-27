import Survey from "../model/SurveyForm.js";

// Route to get all survey forms
export const getAllSurveyForms = async (req, res) => {
  try {
    // Fetch all survey forms from the database
    const surveys = await Survey.find();

    // Check if surveys exist
    if (!surveys || surveys.length === 0) {
      return res.status(404).json({ message: "No surveys found" });
    }

    // Return the survey forms
    res.status(200).json(surveys);
  } catch (error) {
    console.error("Error fetching surveys:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

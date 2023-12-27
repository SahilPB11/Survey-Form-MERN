// SurveyPage.jsx
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SurveyForm from "../component/SurveyForm.jsx"; // Adjust the path based on your folder structure
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";
const SurveyPage = () => {
  const [surveys, setSurveys] = useState([]);
  const { isAuthenticated } = useContext(AdminContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axios.get("/admin/forms"); // Adjust the API endpoint URL
        setSurveys(response.data);
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchSurveys();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login"); // Navigate to the login page
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">All Survey Forms</h1>
      {surveys.map((survey) => (
        <SurveyForm key={survey._id} survey={survey} />
      ))}
    </div>
  );
};

export default SurveyPage;

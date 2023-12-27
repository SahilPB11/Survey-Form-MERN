import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SurveyForm from "../component/SurveyForm.jsx";
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";

const SurveyPage = () => {
  const [surveys, setSurveys] = useState([]);
  const { isAuthenticated } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axios.get("/admin/forms");
        setSurveys(response.data);
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchSurveys();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">All Survey Forms</h1>
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {surveys.map((survey) => (
          <SurveyForm key={survey._id} survey={survey} />
        ))}
      </div>
    </div>
  );
};

export default SurveyPage;

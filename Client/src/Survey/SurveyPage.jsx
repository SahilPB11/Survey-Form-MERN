import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SurveyForm from "../component/SurveyForm.jsx";
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const SurveyPage = () => {
  const [surveys, setSurveys] = useState([]);
  const { isAuthenticated, logoutUser } = useContext(AdminContext);
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

  const handleLogout = async () => {
    try {
      const { data } = await axios.get("/admin/logout");

      if (data?.success == true) {
        toast.success(data?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/login");
        logoutUser();
      } else {
        toast.error(data?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Redirect logic based on isAuthenticated state
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="flex justify-end p-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <h1 className="text-4xl mb-8 text-center">All Survey Forms</h1>
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {surveys.map((survey) => (
          <SurveyForm key={survey._id} survey={survey} />
        ))}
      </div>
    </div>
  );
};

export default SurveyPage;

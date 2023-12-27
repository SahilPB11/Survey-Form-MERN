import axios from "axios";
import React from "react";
import AdminLoginRegister from "./Admin/AdminLoginRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SurveyPage from "./Survey/SurveyPage";
import HomePage from "./HomePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_URL;
  axios.defaults.withCredentials = true;
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AdminLoginRegister />} />
          <Route path="/login/survey" element={<SurveyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

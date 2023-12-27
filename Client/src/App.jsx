import axios from "axios";
import React from "react";
import AdminLoginRegister from "./Admin/AdminLoginRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SurveyPage from "./Survey/SurveyPage";
import HomePage from "./HomePage";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_APP_SERVER_URL;
  axios.defaults.withCredentials = true;
  return (
    <div>
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

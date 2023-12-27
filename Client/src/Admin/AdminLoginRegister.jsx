import axios from "axios";
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";

const AdminLoginRegister = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");
  const { loginUser } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLoginOrRegister === "register" ? "signup" : "login";
    const { data } = await axios.post(`/admin/${url}`, {
      username: userName,
      password,
    });
    const isIt = loginUser(data);
    if (isIt) {
      navigate("/login/survey");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "rgb(196, 186, 174)" }}
    >
      <div className=" p-8 rounded-lg shadow-md w-full max-w-screen-lg flex flex-col lg:flex-row" style={{ backgroundColor: "rgb(196, 186, 174)" }}>
        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12">
          <h2 className="text-3xl mb-6 text-center lg:text-left">
            {isLoginOrRegister === "register" ? "Register" : "Login"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              {isLoginOrRegister === "register" ? "Register" : "Login"}
            </button>
          </form>
          <div className="text-center mt-4">
            {isLoginOrRegister === "register" ? (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLoginOrRegister("login")}
                  className="text-blue-500"
                >
                  Login here
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLoginOrRegister("register")}
                  className="text-blue-500"
                >
                  Register here
                </button>
              </p>
            )}
          </div>
        </div>
        {/* Image Section */}
        <div className="hidden lg:flex flex-1">
          <img
            src="/img/log.jpeg" // Replace with your image path
            alt="Login or Register"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLoginRegister;

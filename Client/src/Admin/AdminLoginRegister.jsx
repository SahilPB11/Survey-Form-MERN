import axios from "axios";
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
    if (data?.success == true) {
      toast.success(data?.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login/survey");
    } else {
      toast.error(data?.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-12 rounded-lg shadow-md w-full max-w-screen-2xl flex flex-col lg:flex-row bg-gray-800">
        {/* Form Section */}
        <div className="flex-1 flex flex-col justify-center px-12 py-16">
          <h2 className="text-5xl mb-10 text-white text-center lg:text-left">
            {isLoginOrRegister === "register" ? "Register" : "Login"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-4 mb-6 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 mb-6 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600"
            >
              {isLoginOrRegister === "register" ? "Register" : "Login"}
            </button>
          </form>
          <div className="text-center mt-6">
            {isLoginOrRegister === "register" ? (
              <p className="text-white">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLoginOrRegister("login")}
                  className="text-blue-500"
                >
                  Login here
                </button>
              </p>
            ) : (
              <p className="text-white">
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

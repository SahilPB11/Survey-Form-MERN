import axios from "axios";
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext.jsx";
import { useNavigate } from "react-router-dom";
const AdminLoginRegister = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");
  const { loginUser } = useContext(AdminContext); // Changed to loginUser from context
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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl mb-4 text-center">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 mb-4 border rounded-sm focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded-sm focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600"
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
    </div>
  );
};

export default AdminLoginRegister;

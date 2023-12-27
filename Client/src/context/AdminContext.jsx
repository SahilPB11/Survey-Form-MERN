import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [adminName, setAdminName] = useState("");
  const [id, setId] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Set Axios headers for authorization
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsAuthenticated(true);
    } 
  }, []);

  const loginUser = (adminData) => {
    setAdminName(adminData.username); // Corrected from setUserName
    setId(adminData._id);
    setIsAuthenticated(true);
    // Store token in local storage
    localStorage.setItem("token", adminData.token); // Corrected from userData.token
    return true;
  };

  const logoutUser = () => {
    setUserName("");
    setId("");
    setIsAuthenticated(false);
    // Remove token from local storage
    localStorage.removeItem("token");
    // Remove Axios authorization header
    delete axios.defaults.headers.common["Authorization"];
    // navigate("/surveyPage");
  };

  return (
    <AdminContext.Provider
      value={{
        adminName,
        id,
        isAuthenticated,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};

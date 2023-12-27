import React, { useState } from "react";
import axios from "axios";
import filteredNations from "./data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const HomePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/survey", formData);
      if (response?.data?.success == true) {
        toast.success(response?.data?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error(response?.data?.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      setFormData({
        name: "",
        gender: "",
        nationality: "",
        email: "",
        phoneNumber: "",
        address: "",
        message: "",
      });
      // Handle success
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };
  const handleAdminClick = () => {
    // Redirect to the login page when admin button is clicked
    navigate("/login"); // Replace '/login' with your login route path
  };

  return (
    <div className="bg-cover min-h-screen flex items-center justify-center bg-black overflow-y-auto">
      {/* Admin Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleAdminClick}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
        >
          Admin Login
        </button>
      </div>
      <div className="flex flex-col lg:flex-row h-full w-full m-auto items-center justify-center rounded-md shadow-lg bg-black bg-opacity-85">
        {/* Form Section */}
        <div className="flex-1 p-12 flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-4 font-semibold text-white">
            Survey Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            {/* Your form fields here with black theme styling and hover effect */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md bg-black text-white hover:border-blue-500 focus:border-blue-500 transition-all"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md bg-black text-white hover:border-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            {/* Nationality */}
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md bg-black text-white hover:border-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="" disabled>
                Select Nationality
              </option>
              {filteredNations?.map((nation, index) => (
                <option key={index} value={nation.toLowerCase()}>
                  {nation}
                </option>
              ))}
            </select>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md bg-black text-white hover:border-blue-500 focus:border-blue-500 transition-all"
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md bg-black text-white hover:border-blue-500 focus:border-blue-500 transition-all"
            />

            {/* Address */}
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="4"
              className="border p-2 w-full rounded-md bg-black text-white hover:border-blue-500 focus:border-blue-500 transition-all"
            ></textarea>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="border p-2 w-full rounded-md bg-black text-white hover:border-blue-500 focus:border-blue-500 transition-all"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full transition-all"
            >
              Submit
            </button>
            {/* Continue for other form fields */}
          </form>
        </div>
        <div className="hidden lg:block flex-1 overflow-hidden shadow-md">
          <img
            src={"./img/sur.jpeg"}
            alt="Survey"
            className="object-cover w-4/5 h-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

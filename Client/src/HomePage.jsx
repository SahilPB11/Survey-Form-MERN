import React, { useState } from "react";
import axios from "axios";
import filteredNations from "./data";

const HomePage = () => {
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
      console.log("Form data after submission:", formData); // Add this line
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

  return (
    <div
      className="min-h-screen min-w-screen flex justify-center items-center"
      style={{ backgroundColor: "rgb(196, 186, 174)" }}
    >
      <div
        className="flex flex-col lg:flex-row p-8 rounded-md shadow-sm w-full max-w-screen-xl"
        style={{ background: "transparent" }}
      >
        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl mb-4 font-semibold text-center lg:text-left">
            Survey Form
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md"
            />

            {/* Gender */}
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md"
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
              className="border p-2 w-full rounded-md"
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
              className="border p-2 w-full rounded-md"
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded-md"
            />

            {/* Address */}
            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="4"
              className="border p-2 w-full rounded-md"
            ></textarea>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="border p-2 w-full rounded-md"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 p-4">
          <img
            src={"./img/sur.jpeg"}
            alt="Survey"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

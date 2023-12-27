// components/SurveyForm.jsx
import React from "react";

const SurveyForm = ({ survey }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl mb-2">Survey Form by {survey.name}</h2>
      <p>
        <strong>Gender:</strong> {survey.gender}
      </p>
      <p>
        <strong>Nationality:</strong> {survey.nationality}
      </p>
      <p>
        <strong>Email:</strong> {survey.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {survey.phoneNumber}
      </p>
      <p>
        <strong>Address:</strong> {survey.address}
      </p>
      <p>
        <strong>Message:</strong> {survey.message}
      </p>
      <p>
        <strong>Created At:</strong>{" "}
        {new Date(survey.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default SurveyForm;

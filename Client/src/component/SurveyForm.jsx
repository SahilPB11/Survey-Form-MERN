import React from "react";

const SurveyForm = ({ survey }) => {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-6 transition-all hover:scale-110 hover:bg-gray-700">
      <h2 className="text-2xl mb-6 text-center font-bold">
        Survey Form by {survey.name}
      </h2>
      <p className="text-lg mb-2">
        <strong>Gender:</strong> {survey.gender}
      </p>
      <p className="text-lg mb-2">
        <strong>Nationality:</strong> {survey.nationality}
      </p>
      <p className="text-lg mb-2">
        <strong>Email:</strong> {survey.email}
      </p>
      <p className="text-lg mb-2">
        <strong>Phone Number:</strong> {survey.phoneNumber}
      </p>
      <p className="text-lg mb-2">
        <strong>Address:</strong> {survey.address}
      </p>
      <p className="text-lg mb-2">
        <strong>Message:</strong> {survey.message}
      </p>
      <p className="text-lg mb-2">
        <strong>Created At:</strong>{" "}
        {new Date(survey.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default SurveyForm;

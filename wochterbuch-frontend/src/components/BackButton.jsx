import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="p-2 border rounded bg-gray-300" onClick={() => navigate("/")}>
      Back
    </button>
  );
};

export default BackButton;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Главная</h1>
      <button className="p-2 border rounded bg-blue-500 text-white" onClick={() => navigate("/add")}>
        Add
      </button>
      <button className="p-2 border rounded bg-green-500 text-white ml-2" onClick={() => navigate("/list")}>
        List
      </button>
    </div>
  );
};

export default Home;

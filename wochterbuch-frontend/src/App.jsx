import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddWord from "./pages/AddWord";
import ListWords from "./pages/ListWords";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddWord />} />
        <Route path="/list" element={<ListWords />} />
      </Routes>
    </Router>
  );
};

export default App;

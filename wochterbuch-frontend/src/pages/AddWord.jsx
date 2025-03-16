import React, { useState } from "react";
import BackButton from "../components/BackButton";
import {backendUrl} from '../constants/AppConstants';
import "../styles/App.css";
import Title from "../components/Title";
import "../styles/AddWord.css";
import tick from "../images/tick.svg";

const AddWord = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [word, setWord] = useState("");

  const handleAddWord = async () => {
    if (!selectedArticle || !word) {
      alert("Choose an article and enter a word!");
      return;
    }

    const response = await fetch(`${backendUrl}/dictionary/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ article: selectedArticle, word }),
    });

    if (response.ok) {
      alert("The word was added");
      setSelectedArticle(null);
      setWord("");
    } else {
      alert("Error while adding the word");
    }
  };

  return (
      <div className="page-container">
          <div className="page-frame">
              <Title/>
              <div className="page-subtitle">
                  <h2>Добавить слово</h2>
              </div>
              <div className="new-word">
                  <select onChange={(e) => setSelectedArticle(e.target.value)}>
                      <option value="der">der</option>
                      <option value="die">die</option>
                      <option value="das">das</option>
                  </select>
                  <input
                      type="text"
                      onChange={(e) => setWord(e.target.value)}
                      placeholder="Введите слово"
                  />
                  <button className="wb-button save-button" onClick={handleAddWord}>
                      <img src={tick} alt={"Добавить"}/>
                  </button>
                  <BackButton/>
              </div>
          </div>
      </div>
  );
};

export default AddWord;

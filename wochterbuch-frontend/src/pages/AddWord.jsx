import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleButtons from "../components/ArticleButtons";
import BackButton from "../components/BackButton";
import {backendUrl} from '../constants/AppConstants';

const AddWord = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  const handleAddWord = async () => {
    if (!selectedArticle || !word) {
      alert("Выберите артикль и введите слово!");
      return;
    }

    const response = await fetch(`${backendUrl}/dictionary/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ article: selectedArticle, word }),
    });

    if (response.ok) {
      alert("Слово добавлено!");
      setSelectedArticle(null);
      setWord("");
    } else {
      alert("Ошибка при добавлении слова.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Добавить слово</h1>
      <ArticleButtons selectedArticle={selectedArticle} setSelectedArticle={setSelectedArticle} />
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Введите слово"
        className="border p-2 mt-2"
      />
      <button className="p-2 border rounded bg-green-500 text-white ml-2" onClick={handleAddWord}>
        Add
      </button>
      <BackButton />
    </div>
  );
};

export default AddWord;

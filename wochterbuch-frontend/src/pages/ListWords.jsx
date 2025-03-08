import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import {backendUrl} from '../constants/AppConstants';

const ListWords = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/dictionary/list`)
      .then((res) => res.json())
      .then((data) => setWords(data))
      .catch(() => alert("Ошибка загрузки списка слов"));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Список слов</h1>
      <ul className="list-disc pl-5">
        {words.map((item, index) => (
          <li key={index}>
            {item.article} {item.word}
          </li>
        ))}
      </ul>
      <BackButton />
    </div>
  );
};

export default ListWords;

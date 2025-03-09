import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ArticleChooseButton.css";
import "../styles/App.css";
import {articles, backendUrl} from "../constants/AppConstants";

const Train = () => {
    const navigate = useNavigate();
    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [correctCount, setCorrectCount] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [feedback, setFeedback] = useState("");

    useEffect(() => {
        fetchWords();
    }, []);

    const fetchWords = async () => {
        try {
            const response = await fetch(`${backendUrl}/dictionary/getRandom`);
            const data = await response.json();
            setWords(data);
            setCurrentIndex(0);
            setCorrectCount(0);
            setSelectedArticle(null);
            setIsDisabled(false);
            setFeedback("");
        } catch (error) {
            console.error("Ошибка при загрузке слов:", error);
        }
    };

    const handleArticleClick = (article) => {
        if (!words.length) return;

        const correctArticle = words[currentIndex].article;
        if (article === correctArticle) {
            setFeedback("Correct!");
            setCorrectCount(correctCount + 1);
            setTimeout(() => {
                if (currentIndex + 1 < words.length) {
                    setCurrentIndex(currentIndex + 1);
                    setSelectedArticle(null);
                    setIsDisabled(false);
                    setFeedback("");
                } else {
                    fetchWords();
                }
            }, 1000);
        } else {
            setFeedback("Try again");
            setIsDisabled(true);
            setCorrectCount(0);
        }
    };

    return (
        <div className="page-container">
            <div className="train-container">
                <h1>Train</h1>
                <p>Correct answers in a row: {correctCount}</p>
                {words.length > 0 && (
                    <div>
                        <h2>{words[currentIndex].word}</h2>
                        <div className="article-buttons">
                            {articles.map((article) => (
                                <button
                                    key={article}
                                    className={`button-80 ${selectedArticle === article ? "active-button" : ""}`}
                                    onClick={() => handleArticleClick(article)}
                                    disabled={isDisabled && selectedArticle === article}
                                >
                                    {article}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <button className="button-80" onClick={() => navigate("/")}>
                    Back
                </button>
                <p>{feedback}</p>
            </div>
        </div>
    );
};

export default Train;
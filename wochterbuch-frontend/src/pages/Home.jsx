import React from "react";
import "../styles/App.css";
import "../styles/Button.css";
import "../styles/Home.css";
import "../styles/Common.css";
import WochterbuchPicture from "../images/wochterbuch.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div className="page-frame">
                <div className="page-title">
                    <h1>Wöchterbuch</h1>
                </div>
                <div className="main-menu-image">
                    <img src={WochterbuchPicture} alt="logo" style={{width: "100%", height: "100%"}}/>
                </div>
                <div className="main-menu-buttons">
                    <div className="vocabulary-actions">
                    <span className="add-button">
                        <button className="wb-button main-menu-button" onClick={() => navigate("/add")}>
                            Добавить слово
                        </button>
                    </span>
                    <span className="list-button">
                        <button className="wb-button main-menu-button" onClick={() => navigate("/list")}>
                            Список слов
                        </button>
                    </span>
                    </div>
                    <div className="train-button">
                        <button className="wb-button main-menu-button" onClick={() => navigate("/train")}>
                            Режим тренировки
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
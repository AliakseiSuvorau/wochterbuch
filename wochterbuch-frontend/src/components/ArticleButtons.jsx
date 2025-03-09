import React from "react";
import {articles} from "../constants/AppConstants";

const ArticleButtons = ({ selectedArticle, setSelectedArticle }) => {
  return (
    <div className="flex gap-2">
      {articles.map((article) => (
        <button
          key={article}
          className={`p-2 border rounded ${selectedArticle === article ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setSelectedArticle(article)}
        >
          {article}
        </button>
      ))}
    </div>
  );
};

export default ArticleButtons;

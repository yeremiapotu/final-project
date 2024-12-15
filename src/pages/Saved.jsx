import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NewsCardSaved from "../components/NewsCardSaved";

const Saved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const savedNews = useSelector((state) => state.savedNews);

  if (savedNews.length === 0) return <p className="h-screen text-center mt-5 text-lg text-gray-600">No news saved!</p>;

  return (
    <div className="container m-auto px-4">
      <h1 className="text-lg sm:text-xl md:text-2xl text-center md:text-left font-bold py-5">Saved News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {savedNews.map((article, index) => (
          <NewsCardSaved key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Saved;

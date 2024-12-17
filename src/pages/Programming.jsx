import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import Banner from "../components/Banner";

const Programming = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "AINews - Home";
    window.scrollTo(0, 0);

    const fetchNews = async () => {
      try {
        const response = await axios.get("https://gnews.io/api/v4/search", {
          params: {
            q: "programming",
            lang: "en",
            country: "id",
            token: "e2d3af6ddc3ff939873f51e33bec9d25",
          },
        });

        const validNews = response.data.articles.filter((article) => article.title && article.description && article.url && article.image);

        setNews(validNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="h-screen text-center mt-5 text-lg text-gray-600">Loading...</p>;

  return (
    <div className="container m-auto px-4">
      <Banner />
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold py-5 text-center md:text-left">Latest - News In Indonesia</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Programming;

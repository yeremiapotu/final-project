import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const SearchResults = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("q");
    setKeyword(query);

    const fetchNews = async () => {
      try {
        const response = await axios.get("https://gnews.io/api/v4/search", {
          params: {
            q: query,
            token: "e2d3af6ddc3ff939873f51e33bec9d25",
            lang: "en",
            max: 20,
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

    if (query) {
      fetchNews();
    }
  }, [window.location.search]);

  if (loading) return <p className="h-screen text-center mt-5 text-lg text-gray-600">Loading...</p>;

  return (
    <div className="container m-auto px-4">
      <h1 className="text-lg sm:text-xl md:text-2xl text-center font-bold py-5">Search Results for "{keyword}"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      {news.length === 0 && <p className="text-center text-lg text-gray-600 mt-5">No results found for "{keyword}".</p>}
    </div>
  );
};

export default SearchResults;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (searchKeyword) => {
    setLoading(true);
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        params: {
          q: searchKeyword,
          apiKey: "c816eee74fb34114aeb582eccfb172ef",
        },
      });
      const validNews = response.data.articles.filter((article) => article.title && article.description && article.url && article.urlToImage);
      setNews(validNews);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newKeyword) => {
    setKeyword(newKeyword);
    fetchNews(newKeyword);
  };

  useEffect(() => {
    if (keyword) {
      fetchNews(keyword);
    }
  }, [keyword]);

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/search" element={<Search news={news} loading={loading} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

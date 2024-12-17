import { useDispatch, useSelector } from "react-redux";
import { addNews, removeNews } from "../redux/savedNewsSlice";

const NewsCard = ({ article }) => {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.savedNews);

  const isSaved = savedNews.some((savedArticle) => savedArticle.url === article.url);

  const handleSaveOrRemove = () => {
    if (isSaved) {
      dispatch(removeNews(article.url));
    } else {
      dispatch(addNews(article));
    }
  };

  return (
    <div>
      <img src={article.image || "https://via.placeholder.com/300x200?text=No+Image"} alt={article.title || "No Title"} className="w-full h-48 object-cover rounded-xl border-2" />
      <h1 className="mt-3 text-lg font-bold">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
          {article.title || "No Title Available"}
        </a>
      </h1>
      <p className="text-gray-600 mt-3 text-sm">{article.description || "No description available."}</p>
      <div className="flex text-center justify-between gap-5 mt-3">
        <p className="text-gray-600 text-sm">Published {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "No date available."}</p>
        <button onClick={handleSaveOrRemove} className="text-red-600 font-medium">
          {isSaved ? (
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          ) : (
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;

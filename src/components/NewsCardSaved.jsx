import { useDispatch } from "react-redux";
import { removeNews } from "../redux/savedNewsSlice";

const NewsCardSaved = ({ article }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeNews(article.url));
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
      <div className="flex justify-between gap-5 mt-3 text-gray-600">
        <p>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "No date available."}</p>
        <button onClick={handleRemove} className="text-red-600 font-medium">
          Remove
        </button>
      </div>
    </div>
  );
};

export default NewsCardSaved;

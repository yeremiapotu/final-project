import { useDispatch } from "react-redux";
import { removeNews } from "../redux/savedNewsSlice";

const NewsCardSaved = ({ article }) => {
  const dispatch = useDispatch();

  const handleRemove = (url) => {
    dispatch(removeNews(url));
  };

  return (
    <div>
      <img src={article.urlToImage} alt={article.title || "No Title"} className="w-full h-48 object-cover rounded-xl border-2" />
      <h1 className="mt-3 text-lg font-bold">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
          {article.title || "No Title Available"}
        </a>
      </h1>
      <p className=" text-gray-600 mt-3 text-sm">{article.description || "No description available."}</p>
      <div className="flex text-center justify-between gap-5 mt-3">
        <p className="text-gray-600">{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "No date available."}</p>
        <button onClick={() => handleRemove(article.url)} className="font-medium text-red-600">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsCardSaved;

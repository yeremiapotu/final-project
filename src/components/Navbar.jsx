import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ainews-logo.png";

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.search.value.trim();
    if (keyword) {
      onSearch(keyword);
      navigate(`/search?q=${keyword}`);
    }
  };

  return (
    <div className="bg-white sticky top-0 shadow z-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
        <div className="flex space-x-5 items-center justify-between w-full sm:w-auto mb-4 sm:mb-0">
          {/* <h1 className="text-red-600 text-2xl font-bold">AINews</h1> */}
          <img src={logo} alt="Logo" className="h-12" />
          <div className="flex space-x-5 text-sm sm:text-base">
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
            <Link to="/programming" className="hover:text-red-600">
              Programming
            </Link>
            <Link to="/saved" className="hover:text-red-600">
              Saved
            </Link>
          </div>
        </div>
        <form onSubmit={handleSearch} className="flex w-full sm:w-auto space-x-2">
          <input type="text" name="search" placeholder="Search news..." className="flex-1 border border-red-600 rounded-lg p-2 outline-none sm:w-auto" />
          <button type="submit" className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;

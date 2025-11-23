import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WatchListContext } from "../context/WatchListContext";

const NavBar = () => {
  const { watchlist } = useContext(WatchListContext);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md p-4 text-white flex justify-between items-center w-full fixed top-0 z-50 shadow-lg border-b border-gray-700">
      <Link to="/" className="text-xl font-bold hover:text-purple-400 transition">
        Movie App
      </Link>

      <Link to="/watchlist" className="text-xl hover:text-purple-400 transition">
        WatchList ({watchlist.length})
      </Link>
    </nav>
  );
};

export default NavBar;

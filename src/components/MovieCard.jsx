import React, { useContext } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchListContext";

const MovieCard = ({ movie }) => {
  const { toggleWatchlist, watchlist } = useContext(WatchListContext);
  const inWatchList = watchlist.some((m) => m.id == movie.id);

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md text-white relative 
    hover:scale-105 transition-all duration-300 hover:shadow-purple-500/20">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-lg"
      />

      <button
        className="text-red-500 text-2xl absolute top-3 right-3 hover:scale-125 transition"
        onClick={() => toggleWatchlist(movie)}
      >
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>

      <h3 className="mt-4 font-bold text-lg">{movie.title}</h3>
      <p className="text-gray-400 text-sm">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;

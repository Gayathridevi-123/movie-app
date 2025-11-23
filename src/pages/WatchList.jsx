import React, { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import { WatchListContext } from "../context/WatchListContext";
import MovieCard from "../components/MovieCard";

const WatchList = () => {
  const { watchlist, genreList } = useContext(WatchListContext);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filterMovies = watchlist
    .filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.overview.toLowerCase().includes(search.toLowerCase())
    )
    .filter((movie) => {
      return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre));
    });

  return (
    <div className="p-4 pt-24">
      <input
        type="text"
        placeholder="Search Movies..."
        className="p-3 w-3/4 md:w-1/2 border rounded-xl border-gray-700 bg-gray-800/70 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10
        focus:ring-2 focus:ring-purple-500 outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="mt-16 flex justify-center">
        <GenreFilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
      </div>

      <div className="movies-container p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-20">
        {filterMovies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default WatchList;

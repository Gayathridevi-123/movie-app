import React from "react";

const GenreFilter = ({ genreList, setSelectedGenre }) => {
  return (
    <select
      className="p-2 bg-gray-800/70 text-white border border-gray-700 rounded-xl 
      focus:ring-2 focus:ring-purple-500 outline-none"
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      <option value="">All Genres</option>
      {genreList.map((genre) => {
        return (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </select>
  );
};

export default GenreFilter;

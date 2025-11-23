import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=a258eefe6d6df1be0802d48b2259e42a`;

    if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=a258eefe6d6df1be0802d48b2259e42a`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, [page, search]);

  return (
    <div className="p-4 pt-24">
      <input
        type="text"
        placeholder="Search Movies..."
        className="p-3 w-3/4 md:w-1/2 border rounded-xl border-gray-700 bg-gray-800/70 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10
        focus:ring-2 focus:ring-purple-500 outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movies-container p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-20">
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}

        <div className="col-span-full">
          <div className="pagination-container flex justify-between mt-5">
            <button
              disabled={page == 1}
              className="p-2 bg-gray-700 text-white rounded-lg hover:bg-purple-600 hover:shadow-lg transition disabled:opacity-40"
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
            >
              PREV
            </button>

            <button
              className="p-2 bg-gray-700 text-white rounded-lg hover:bg-purple-600 hover:shadow-lg transition"
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

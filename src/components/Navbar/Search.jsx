import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=cd45e063417d7854ad7fef896e88dcfc&query=${searchTerm}`
      );
      setMovies(response.data.results);
      setShowResults(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchRef} className="relative text-white">
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input className="border-2 border-gray-300 bg-transparent h-10 px-12 rounded-full text-sm "
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-3">
          <FontAwesomeIcon icon={faSearch} className="text-white h-4 w-4 fill-current" />
        </button>
      </form>
      
      {/* Search resultları render edirik*/}
      {showResults && movies.length > 0 && (
        <div className="absolute bg-gray-900 my-2 ml-7 text-white p-2 rounded-xl shadow-md overflow-y-auto max-h-80">
          <ul className="flex flex-col">
            {movies.map((movie) => (
              <li className="flex items-center cursor-pointer p-2 rounded-xl hover:text-black hover:bg-white" key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} className="w-12 h-auto mr-2" />
                )}
                <div>
                  <p className="text-sm">{movie.title}</p>
                  <p className="text-xs">{movie.release_date && movie.release_date.substring(0, 4)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;

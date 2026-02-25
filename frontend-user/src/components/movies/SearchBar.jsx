import { useEffect, useMemo, useState } from "react";

function SearchBar({ movies = [], onSearch = () => {}, onSelectMovie = () => {} }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredResults = useMemo(() => {
    if (searchTerm.length < 2) {
      return [];
    }

    const normalizedSearch = searchTerm.toLowerCase();
    return movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(normalizedSearch) ||
        movie.description.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [searchTerm, movies]);

  const suggestions = filteredResults.slice(0, 5);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      onSearch(filteredResults);
    } else {
      onSearch(movies);
    }
  }, [searchTerm, filteredResults, movies, onSearch]);

  const handleSelect = (movie) => {
    setSearchTerm(movie.title);
    setIsOpen(false);
    onSelectMovie(movie);
    onSearch([movie]);
  };

  const handleFocus = () => {
    if (searchTerm.length >= 2 && suggestions.length > 0) {
      setIsOpen(true);
    }
  };

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setSearchTerm(nextValue);

    if (nextValue.length >= 2) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Rechercher un film..."
          className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
        />
        <svg
          className="absolute left-3 top-3 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 z-50 w-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
          {suggestions.map((movie) => (
            <li key={movie.id}>
              <button
                type="button"
                onClick={() => handleSelect(movie)}
                className="w-full text-left px-3 py-3 hover:bg-gray-800 transition-colors flex items-center gap-3"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-12 h-16 rounded object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-semibold text-white truncate">{movie.title}</p>
                  <p className="text-sm text-gray-400 truncate">
                    {movie.year ? `${movie.year} • ` : ""}
                    {movie.genre}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
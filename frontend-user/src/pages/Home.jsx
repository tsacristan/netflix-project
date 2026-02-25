import { useMemo, useState } from "react";
import Navbar from "../components/common/Navbar";
import MovieHero from "../components/movies/MovieHero";
import MovieCarousel from "../components/movies/MovieCarousel";
import MovieFilter from "../components/movies/MovieFilter";
import MovieList from "../components/movies/MovieList";
import Footer from "../components/layout/Footer";
import moviesData from "../../../data/movies.json";

function Home() {
  const [allMovies] = useState(moviesData);
  const [genreFilteredMovies, setGenreFilteredMovies] = useState(allMovies);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [cartItems, setCartItems] = useState([]);
  const featuredMovie = allMovies[0];

  const handleGenreFilter = (movies) => {
    setGenreFilteredMovies(movies);
    setFilteredMovies(movies);
  };

  const addToCart = (movie) => {
    setCartItems((previousItems) => {
      const alreadyInCart = previousItems.some((item) => item.id === movie.id);
      if (alreadyInCart) {
        return previousItems;
      }

      return [...previousItems, movie];
    });
  };

  const removeFromCart = (movieId) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== movieId)
    );
  };
  
  // 5 films au hasard pour les films populaires
  const getRandomMovies = (movies, count) => {
    const shuffled = [...movies].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  
  const popularMovies = useMemo(() => getRandomMovies(allMovies, 5), [allMovies]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        movies={genreFilteredMovies}
        onSearch={setFilteredMovies}
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
      />
      
      <MovieHero movie={featuredMovie} />

      <div className="container mx-auto">
        <MovieFilter movies={allMovies} onFilter={handleGenreFilter} />
        <MovieList
          title="Films disponibles"
          movies={filteredMovies}
          onAddToCart={addToCart}
        />
      </div>

      <MovieCarousel
        title="Films populaires"
        movies={popularMovies}
        onAddToCart={addToCart}
      />

      <Footer />
    </div>
  );
}

export default Home;
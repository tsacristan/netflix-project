import Navbar from "../components/common/Navbar";
import MovieHero from "../components/movies/MovieHero";
import MovieList from "../components/movies/MovieList";
import Footer from "../components/layout/Footer";
import moviesData from "../../../data/movies.json";

function Home() {
  // Film principal pour le hero
  const featuredMovie = moviesData[0];
  
  // 5 films au hasard pour les films populaires
  const getRandomMovies = (movies, count) => {
    const shuffled = [...movies].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  
  const popularMovies = getRandomMovies(moviesData, 5);
  
  // Films de Science-Fiction (5 films)
  const sciFiMovies = moviesData
    .filter(movie => movie.genre === "Science-Fiction")
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <MovieHero movie={featuredMovie} />
      
      <MovieList title="Films populaires" movies={popularMovies} />
      
      <MovieList title="Science-Fiction" movies={sciFiMovies} />

      <Footer />
    </div>
  );
}

export default Home;
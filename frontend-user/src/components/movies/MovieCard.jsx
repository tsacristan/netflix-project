import { useState } from "react";
import Button from "../common/Button";
import MovieDescription from "./MovieDescription";
// Couleurs par genre
 const genreColors = {
 'Action': 'bg-red-500',
 'Comédie': 'bg-yellow-500',
 'Drame': 'bg-blue-500',
 'Science-Fiction': 'bg-purple-500',
 'Horreur': 'bg-orange-500',
 'Thriller': 'bg-gray-500'
 };

function MovieCard({ movie, onAddToCart = () => {} }) {
  // Créez les variables d'état nécessaires et initialisez-les
  const [likes, setLikes] = useState(movie.likes ?? 0);
  const [isLiked, setIsLiked] = useState(false);
  
  // Créez la fonction qui permet au clic sur le bouton de liker une seule fois, sinon on enlève le like
  const handleLike = () => {
    setIsLiked((previousIsLiked) => {
      setLikes((previousLikes) => previousIsLiked ? previousLikes - 1 : previousLikes + 1);
      return !previousIsLiked;
    });
  };
  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer
transition-transform duration-300 hover:scale-105"
    >
      {/* Image principale */}
      <div className="relative aspect-2/3">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Badge de note */}
        <div
          className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2
py-1 rounded"
        >
          <span className="text-yellow-400 font-bold text-sm">
            ⭐ {movie.rating}
          </span>
        </div>
        
        {/* Badge de genre */}
        <div className="absolute bottom-2 left-2">
          <span className={`${genreColors[movie.genre] || 'bg-gray-500'} px-3 py-1 rounded text-xs font-semibold text-white`}>
            {movie.genre}
          </span>
        </div>
      </div>
      {/* Overlay au hover */}{" "}
      <div
        className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent
opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3"
      >
        <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
        
        {/* Badge de genre dans l'overlay */}
        <div className="mb-1">
          <span className={`${genreColors[movie.genre] || 'bg-gray-500'} px-2 py-1 rounded text-xs font-semibold text-white`}>
            {movie.genre}
          </span>
        </div>

        <div className="flex items-center space-x-3 mb-2 text-sm">
          <span className="text-green-400 fontsemibold">{movie.rating}/10</span>
          <span className="text-gray-400">{movie.year}</span>
          <span className="text-gray-400">{movie.duration}min</span>
        </div>

        <MovieDescription description={movie.description}></MovieDescription>
        
        {/* Bouton de likes */}
        <button 
          onClick={handleLike}
          className={`px-3 py-1 text-sm rounded mb-2 transition-colors ${isLiked ? 'bg-red-500' : 'bg-gray-500'}`}
        >
          {isLiked ? '❤' : '🤍'} {likes} likes
        </button>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button size="sm" className="sm:w-auto" onClick={() => onAddToCart(movie)}>
            ▶ Louer {movie.price}€
          </Button>
          <Button variant="outline" size="sm" className="sm:w-auto">
            + Info
          </Button>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;

import { useState } from "react";
function SearchBar() {
  // Créez les variables d'état nécessaires et initialisez-les
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Créez et codez les fonctions déclenchées à la modification de la zone de texte et à la soumission du formulaire
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recherche:", searchTerm);
  };
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      {/* Input de recherche (apparaît au clic) */}
      {isOpen && (
        <div className="mr-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Rechercher un film..."
            className="w-64 px-4 py-2 bg-gray-900 border border-gray-700
rounded-lg focus:outline-none focus:border-primary text-white"
            autoFocus
          />
        </div>
      )}
      {/* Bouton de recherche */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-gray-300 transition-colors"
      >
        <svg
          className="w-6 h-6"
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
      </button>
    </form>
  );
}
export default SearchBar;

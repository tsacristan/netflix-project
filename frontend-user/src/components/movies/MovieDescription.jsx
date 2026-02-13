import { useState } from "react";

function MovieDescription({ description }) {
  /* Todo : Créez les variables d'état nécessaires et initialisez-les */
  const [isExpanded, setIsExpanded] = useState(false);
  
 /* Créez la fonction qui permet de changer l'état en cliquant sur le bouton */
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div>
      <p className={isExpanded ? '' : 'line-clamp-2'}>{description}</p>
      <button 
        onClick={toggleExpanded}
        className="text-sm text-gray-400 hover:text-white transition-colors mt-1"
      >
        {isExpanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </div>
  );
}

export default MovieDescription;

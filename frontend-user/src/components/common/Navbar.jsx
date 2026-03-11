import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../movies/SearchBar";
import CartButton from "./CartButton";
function Navbar({
  movies = [],
  onSearch = () => {},
  onSelectMovie = () => {},
  cartItems = [],
  onRemoveFromCart = () => {},
}) {
  const [isScrolled] = useState(false);
  // Note : useEffect sera vu au TP 03
  // Pour l'instant, version statique
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-linear-to-b from-black/80 to-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="no-underline">
              <h1 className="text-primary text-3xl font-bold tracking-tight">
                NETFLIX
              </h1>
            </Link>

            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold"
                      : "text-gray-300 hover:text-white transition-colors"
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-rentals"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold"
                      : "text-gray-300 hover:text-white transition-colors"
                  }
                >
                  Mes locations
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <SearchBar movies={movies} onSearch={onSearch} onSelectMovie={onSelectMovie} />
            <CartButton cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} />
            <Link
              to="/login"
              className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:bg-primary-dark transition-colors"
            >
              <span className="text-sm font-bold">U</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

// Les pages MovieDetail, MyRentals, Login, Register et NotFound ne sont pas
// encore créées : leurs routes sont retirées pour que le build passe.
// Toute URL inconnue renvoie vers l'accueil en attendant.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

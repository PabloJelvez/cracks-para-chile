import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import DetailsCart from "./views/DetailsCart";
import Favorites from "./views/Favorites"; // Asegúrate de importar el componente Favorites

function App() {
  return (
    <div>
      <Routes>
        <Route path="products/">
          <Route path=":id" element={<Details />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<DetailsCart />} />
        <Route path="/favorites" element={<Favorites />} /> {/* Añade la ruta a la página de favoritos */}
      </Routes>
    </div>
  );
};

export default App;


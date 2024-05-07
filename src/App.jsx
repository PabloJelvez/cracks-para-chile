import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Details from "./views/Details";
import DetailsCart from "./views/DetailsCart";
import Favorites from "./views/Favorites";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import Login from "./views/Login";
import AboutUs from "./views/AboutUs";
import Profile from "./views/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <NavigationBar />
          <Routes>
            <Route path="products/">
              <Route path=":id" element={<Details />} />
            </Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="iniciar_sesion" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Quienes-somos" element={<AboutUs />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/carrito"
              element={
                <ProtectedRoute>
                  <DetailsCart />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

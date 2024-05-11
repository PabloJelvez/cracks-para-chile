import { Link } from "react-router-dom";
import imgLanding1 from "../assets/img/fondo-campo-futbol-degradado_52683-65681.jpg";
import logoImage from "../assets/img/logo-cracks-para-chile.png";
import Marquee from "./Marquee";

const LandingPage = () => {
  return (
    <div className="divLandingPage">
      <div className="marquee-container">
        <Marquee />
      </div>
      <div className="divInfoContainer row">
        <div className="logoContainer col-12 col-md-6 col-lg-6">
          <img
            className="logoImage text-center ps-5"
            src={logoImage}
            alt="Logo"
          />
        </div>
        <div className="textContainer col-12 col-md-6 col-lg-6">
          <h2 className="textParagraphLanding text-center p-2">
            Visita nuestra <br />
            tienda
            <br />y conviertete
            <br />
            en un crack
            <br />
            dentro de la cancha
          </h2>
        </div>
        <div className="buttonContainer col-12 col-md-6 col-lg-6 text-center mt-5">
          <Link to="/registrarse" className="landingButton landingButton-reg">
            Registrarse
          </Link>
          <Link
            to="/iniciar_sesion"
            className="landingButton landingButton-log"
          >
            Iniciar sesión
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;

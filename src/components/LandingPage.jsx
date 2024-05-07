import { Link } from "react-router-dom";
import imgLanding1 from "../assets/img/fondo-campo-futbol-degradado_52683-65681.jpg";
import logoImage from "../assets/img/logo-cracks-para-chile.png"

const LandingPage = () => {
    return (
        <div className="divLandingPage">
            <img className="imgLanding" src={imgLanding1} alt="" />
            <div className="logoContainer">
                <img className="logoImage" src={logoImage} alt="Logo" />
            </div>
            <div className="textContainer">
                <h2 className="textParagraphLanding">Visita nuestra <br/>tienda<br/>y conviertete<br/>en un crack<br/>dentro de la cancha</h2>
            </div>
            <div className="buttonContainer">
                <Link to="/registrarse" className="landingButton landingButton-reg">Registrarse</Link>
                <Link to="/iniciar_sesion" className="landingButton landingButton-log">Iniciar sesión</Link>
            </div>
        </div>
    );
};

export default LandingPage;


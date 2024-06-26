import imgCracksParaChile from "../assets/img/logo-cracks-para-chile.png";
import Header from "../components/Header";
import Marquee from "../components/Marquee";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="marquee-container">
        <Marquee />
      </div>
      <div className="containerAboutUs">
        <div className="divContentAboutUs">
          <h2>¿Quienes somos?</h2>
          <div className="imgContainer">
            <img src={imgCracksParaChile} alt="" />
            <p>
              Somos una tienda dedicada 100% al deporte rey, con la misión de
              entregarte los mejores productos, para que tú solo te preocupes de
              ser un crack.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

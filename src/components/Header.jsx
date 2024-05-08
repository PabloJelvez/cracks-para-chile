import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/img/carousel1.jpg";
import ExampleCarouselImage2 from "../assets/img/carousel2.jpg";
import ExampleCarouselImage3 from "../assets/img/carousel3.jpg";

function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={ExampleCarouselImage3}
          className="imgCarousel"
          text="Third slide"
        />

        <Carousel.Caption>
          <h3>Conviertete en un Crack</h3>
          <p>Aquí comienza tu partido mas importante</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={ExampleCarouselImage2}
          className="imgCarousel"
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>Sé la figura del partido</h3>
          <p>Tenemos los mejores implementos para tí</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={ExampleCarouselImage}
          className="imgCarousel"
          text="First slide"
        />
        <Carousel.Caption>
          <h3>Siente la emoción</h3>
          <p>Nunca el fútbol fue tan entretenido</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;

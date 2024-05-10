import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoCracks from "../assets/img/logo-cracks-para-chile.png"

const NavigationBar = () => {

  return (
    <Navbar className="navBar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img className="logoNav" src={logoCracks} alt="logo" />
            Cracks para Chile
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" >Inicio</Nav.Link> 
          <Nav.Link as={Link} to="/Quienes-somos" >¿Quienes somos?</Nav.Link>  
          <Nav.Link as={Link} to="/Home" >Tienda</Nav.Link>
          <Nav.Link as={Link} to="/profile" >Perfil</Nav.Link>
          <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

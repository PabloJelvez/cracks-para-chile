import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
<>
<Navbar className='navBar'>
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo' src="./src/assets/img/logo-cracks-para-chile.png" alt="" />
            Cracks para Chile</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Tienda</Nav.Link>
            <Nav.Link href="#features">Quiénes somos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</>
     
    
  );
};

export default Navigation;
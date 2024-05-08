import React, { useState, useContext } from "react";
import { Container, Form, Button, Card, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

const SignUp = () => {
  const { updateUserData } = useContext(ProductsContext);
  const [campos, setCampos] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setError(false);
    setPasswordError(false);
    setPasswordMatchError(false);

    setCampos({ ...campos, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, username, email, address, password, confirmPassword } = campos;

    if (!firstName || !lastName || !username || !email || !address || !password || !confirmPassword) {
      setError(true);
      return;
    }
    if (password.length < 6 || !/\d/.test(password)) {
      setPasswordError(true);
      return;
    }
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    try {
      updateUserData(campos);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate("/perfil");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <div className="containerSignUp " >

 <div className="divContentSignUp" >
          <Container className="signup-container">
      <Card className="signup-card mt-5">
        <Card.Body>
          <h1>Crear mi cuenta</h1>
          <Form className="form-sign-up" onSubmit={handleSubmit}>
            <Form.Group controlId="firstName" className="signup-input">
              <Form.Control required type="text" placeholder="Nombre *" value={campos.firstName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="lastName" className="signup-input">
              <Form.Control required type="text" placeholder="Apellidos *" value={campos.lastName} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="username" className="signup-input">
              <Form.Control required type="text" placeholder="Usuario *" value={campos.username} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="email" className="signup-input">
              <Form.Control required type="email" placeholder="Correo electrónico *" value={campos.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="address" className="signup-input">
              <Form.Control required type="text" placeholder="Dirección *" value={campos.address} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="password" className="signup-input">
              <Form.Control required type="password" placeholder="Contraseña *" value={campos.password} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="signup-input">
              <Form.Control required type="password" placeholder="Confirmar Contraseña *" value={campos.confirmPassword} onChange={handleChange} />
            </Form.Group>

            {error && <p className="text-danger">Por favor completa todos los campos obligatorios.</p>}
            {passwordError && <p className="text-danger">La contraseña debe tener al menos 6 caracteres y contener al menos un número.</p>}
            {passwordMatchError && <p className="text-danger">Las contraseñas no coinciden. Por favor verifica que las contraseñas sean iguales.</p>}

            <div className="container-btn">
              <Button className="signup-submit" type="submit">
                Crear mi cuenta
              </Button>
            </div>
            <Toast
              show={showSuccessMessage}
              onClose={() => setShowSuccessMessage(false)}
              autohide
              delay={3000}
              style={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
            >
              <Toast.Header>
                <strong className="me-auto">Éxito</strong>
              </Toast.Header>
              <Toast.Body>Cuenta creada exitosamente. ¡Bienvenido/a!</Toast.Body>
            </Toast>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </div>   </div>
    
  
  );
};

export default SignUp;

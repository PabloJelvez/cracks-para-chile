import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(ProductsContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedIn = loginUser(user, password);
    if (loggedIn) {
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="containerLogin">
      <div className="divContentLogin">
        <h1>Iniciar Sesión</h1>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formFirstName" className="login-input">
            <Form.Control type="text" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formLastName" className="login-input password-input">
            <div className="password-container">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                {/* Aquí va tu icono */}
              </div>
            </div>
          </Form.Group>

          <div className="container-btn">
            <Button className="sesion-submit" type="submit">
              Iniciar Sesión
            </Button>
            <Button className="login-submit" type="submit" onClick={() => navigate("/registrarse")}>
              Crear cuenta
            </Button>
          </div>
          {error && <small className="d-flex justify-content-center mt-3">* Usuario o contraseña incorrecto(s)</small>}
        </Form>
      </div>
    </div>
  );
};

export default Login;


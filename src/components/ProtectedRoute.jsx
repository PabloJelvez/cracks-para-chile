import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  } else {
    return <Navigate to="/iniciar_sesion"></Navigate>;
  }
};

export default ProtectedRoute;
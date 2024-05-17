import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="error">
      <h1>Error 404</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link className="back" to="/">
        Volver &lt;-
      </Link>
    </div>
  );
};

export default Notfound;
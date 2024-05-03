import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";
import { formatNumber } from "../helpers/formatNumber";

const Card = () => {
    const {products, addToCart} = useContext(ProductsContext);

    const navigate = useNavigate();

    return(
        <>
      {products.map((product) => (
        <div
          key={product.id}
          className="col"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={product.img}
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title text-capitalize">{product.name}</h4>
              <hr />
              <p className="card-text">
                <b>Caracteristicas:</b>
              </p>

              <ul>
                {product.features.map((feature, i) => (
                  <li key={i}>&#127829; {feature}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-center text-dark pb-3">
              Precio: ${formatNumber(product.price)}
            </h2>

            <div className="d-flex justify-content-around mb-4">
              <button
                to={`product/${product.id}`}
                className="btn btn-info text-white"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                Ver Más &#128064;
              </button>

              <button
                className="btn btn-danger"
                onClick={() => addToCart(product)}
               
              >
                Añadir &#128722;
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
    );
};

export default Card;
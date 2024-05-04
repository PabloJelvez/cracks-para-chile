import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { formatNumber } from "../helpers/formatNumber";
import IconHeart from "../components/IconHeart.jsx"; 

const Favorites = () => {
    const {products, toggleFavorite} = useContext(ProductsContext);
    const favorites = products.filter(product => product.liked);

    return(
        <>
      {favorites.map((product) => (
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
                  <li key={i}>⚽ {feature}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-center text-dark pb-3">
              Precio: ${formatNumber(product.price)}
            </h2>

            <div className="d-flex justify-content-around mb-4">
             

              <IconHeart filled={true} onClick={() => toggleFavorite(product.id)} /> {/* Permite hacer clic en el corazón para quitar un producto de los favoritos */}

            </div>
          </div>
        </div>
      ))}
    </>
    );
};

export default Favorites;




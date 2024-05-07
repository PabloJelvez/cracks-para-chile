import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { formatNumber } from "../helpers/formatNumber";
import IconHeart from "../components/IconHeart.jsx"; 

const Favorites = () => {
    const {products,addToCart, toggleFavorite} = useContext(ProductsContext);
    const favorites = products.filter(product => product.liked);

    return(
        <div className="favorites-container">
     {favorites.map((product) => (
  <div key={product.id} className="favorite-card">
    <div className="image-container">
      <img src={product.img} alt="" className="favorite-card-img" />
      <div className="icon-heart">
      <IconHeart
        className="icon-heart"
        filled={true}
        onClick={() => toggleFavorite(product.id)}
      />
      </div>
   
    </div>
    <div className="favorite-card-body">
      <h4 className="favorite-card-title">{product.name}</h4>
      <p className="favorite-card-text">
        <b>Caracteristicas:</b>
      </p>
      <ul>
        {product.features.map((feature, i) => (
          <li className="li-favorites" key={i}>⚽ {feature}</li>
        ))}
      </ul>
      <h2 className="favorite-card-price">
        Precio: ${formatNumber(product.price)}
      </h2>
      <button
                className="btn btn-favorites"
                onClick={() => addToCart(product)}
              >
                Añadir al carrito
              </button>
    </div>
  </div>
))}

        </div>
    );
};

export default Favorites;




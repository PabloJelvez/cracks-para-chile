import { useContext } from "react";
import Navbar from "../components/NavigationBar";
import { ProductsContext } from "../context/ProductsProvider";
import { formatNumber } from "../helpers/formatNumber";

const DetailsCart = () => {
    const {cart, increment, decrement} = useContext(ProductsContext);
    const total = cart.reduce((a, {count, price}) => a + price * count, 0);


    return(
        <>
        <div className="carrito p-5">
          <div className="carritoContent  w-75 m-auto p-5">
            <h5>Detalles del pedido:</h5>
            <div className="p3">
              {cart.map((producto, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between py-2"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <img
                      src={producto.img}
                      width="50"
                      alt=""
                    />
                    <h6 className="mb-0 text-capitalize p-2">{producto.name}</h6>
                  </div>
  
                  <div className="d-flex justify-content-end align-items-center">
                    <h6 className="mb-0 p-2 text-success">
                      ${formatNumber(producto.price * producto.count)}
                    </h6>
                    <button
                      className="btn btn-danger"
                      onClick={() => decrement(i)}
                    >
                      -
                    </button>
                    <b className="mx-2">{producto.count}</b>
                    <button
                      className="btn btn-primary"
                      onClick={() => increment(i)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <h2 className="my-4">Total: ${formatNumber(total)}</h2>
              <button className="btn btn-pay">Ir a Pagar</button>
            </div>
          </div>
        </div>
      </>
    );
};

export default DetailsCart;
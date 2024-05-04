 
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ProductsContext } from "../context/ProductsProvider";

const Details = () => {
    const [productDetail, setProductDetail] = useState({});
    const {products, addToCart} = useContext(ProductsContext);
    const {id} = useParams();

    const getDatos = () => {
        const datosProduct = products.find((product) => product.id === id);
        setProductDetail(datosProduct || {});
    };

    useEffect(() => {
        getDatos();
    }, [products]);

    return(
        <>
        <Navbar />
        <div className="container mt-5">
          <div className="card mb-3 estilos">
            <div className="row g-0">
              <div className="col-md-6 image-container">
                <img
                  src={productDetail.img}
                  className="img-fluid estilos rounded-start"
                  alt={productDetail.name}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title text-capitalize">
                    {productDetail.name}
                  </h5>
                  <p className="card-text">{productDetail.desc}</p>
                  <ul>
                    {productDetail.features?.map((feature, i) => (
                      <li key={i}>⚽ {feature}</li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-around">
                    <h4>Precio: ${productDetail.price}</h4>
                    <button
                      className="btn btn-danger"
                      onClick={() => addToCart(productDetail)}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Details;

import { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import ProductsRender from "../components/ProductsRender";
import Buscador from "../components/Buscador";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sortProducts, setSortProducts] = useState("ascendente");

  return(
    <>
      <Header />
      <Buscador updateSearch={setSearch} />
      <div className="containerBtnSort" >
        <button className='btn btn-sort' onClick={() => setSortProducts(sortProducts === "ascendente" ? "descendente" : "ascendente")}>Ordenar por precios</button>
      </div>
      
      <ProductsRender>
        <Card search={search} sortProducts={sortProducts} />
      </ProductsRender>
    </>
  );
};

export default Home;

import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsRender from "../components/ProductsRender";

const Home = () => {
    return(
        <>
        <Navbar />
        <Header />
        <ProductsRender>
            <Card />
        </ProductsRender>
        </>
    );
};

export default Home;
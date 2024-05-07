import Card from "../components/Card";
import Header from "../components/Header";
import ProductsRender from "../components/ProductsRender";


const Home = () => {
    return(
        <>
        <Header />
        <ProductsRender>
            <Card />
        </ProductsRender>
        </>
    );
};

export default Home;
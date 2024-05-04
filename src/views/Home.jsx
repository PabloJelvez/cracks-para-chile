import Card from "../components/Card";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductsRender from "../components/ProductsRender";
import Footer from "../components/Footer"

const Home = () => {
    return(
        <>
        <Navbar />
        <Header />
        <ProductsRender>
            <Card />
        </ProductsRender>
        <Footer />
        </>
    );
};

export default Home;
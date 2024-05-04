import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsProvider";
import { formatNumber } from "../helpers/formatNumber";

const Navbar = () =>{
    const {cart} = useContext(ProductsContext);
    const total = cart.reduce((a, {count, price}) => a + price * count, 0);

    return(
        <div className="navbar text-white py-3">
            <div className="container d-block">
                <div className="d-flex justify-content-between">
                    <Link
                    to="/"
                    className="logo-principal mx-1 mb-0"
                    >
                    <h4 className="mb-0"> ⚽ Cracks para Chile</h4>
                    </Link>
                    <Link
                    to="/favorites"
                    className="logo-principal mx-1 mb-0"
                    >
                    <h4 className="mb-0">
                    &#128149; Favoritos
                     </h4>
                    </Link>
                    <Link
                    to="/carrito"
                    className="logo-principal mx-1 mb-0"
                    >
                    <h4 className="mb-0">
                    &#128722; {""} Total: ${formatNumber(total)}
                     </h4>
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Navbar;
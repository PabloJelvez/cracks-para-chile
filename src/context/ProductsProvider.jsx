import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch("/dbproductos.json");
        const productsData = await res.json();
        // Asegúrate de que cada producto tenga una propiedad 'liked'
        const productsWithLiked = productsData.map(product => ({ ...product, liked: false }));
        setProducts(productsWithLiked);
    };

    const addToCart = ({id, price, name, img}) => {
      const productFindIndex = cart.findIndex((p) => p.id === id);
      const producto = {id, price, name, img, count: 1};
      if(productFindIndex >= 0){
        cart[productFindIndex].count++;
        setCart([...cart]);
      } else {
        setCart([...cart, producto]);
      };
    };

    const increment = (i) => {
      cart[i].count++;
      setCart([...cart]);
    };

    const decrement = (i) => {
      const {count} = cart[i];
      if(count === 1){
        cart.splice(i, 1);
      } else {
        cart[i].count--;
      };
      setCart([...cart]);
    };

    const toggleFavorite = (productId) => {
      setProducts(products.map(product => 
        product.id === productId ? { ...product, liked: !product.liked } : product
      ));
    };

    return(
      <ProductsContext.Provider
      value={{products, cart, setCart, addToCart, increment, decrement, toggleFavorite}}
      >
        {children}
      </ProductsContext.Provider>
    );
};
export default ProductsProvider;

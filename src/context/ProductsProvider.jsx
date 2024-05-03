import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch("/dbproductos.json");
        const products = await res.json();
        setProducts(products);
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

    const toggleFavorite = (product) => {
      // Encuentra el producto en la lista de productos
      const productIndex = products.findIndex((p) => p.id === product.id);
      
      if (productIndex >= 0) {
        // Si el producto ya está en favoritos, lo eliminamos
        if (products[productIndex].liked) {
          setFavorites(favorites.filter((_, index) => index !== productIndex));
        } else {
          // Si el producto no está en favoritos, lo añadimos
          setFavorites([...favorites, products[productIndex]]);
        }
        
        // Actualiza el atributo 'liked' del producto
        products[productIndex].liked = !products[productIndex].liked;
      }
    };

    return(
      <ProductsContext.Provider
      value={{products, cart, setCart, addToCart, increment, decrement, favorites, toggleFavorite}}
      >
        {children}
      </ProductsContext.Provider>
    );
};
export default ProductsProvider;

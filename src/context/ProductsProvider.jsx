import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginData, setLoginData] = useState([
    {
        user: "usuario1",
        password: "contraseña1",
    },
    {
        user: "usuario2",
        password: "contraseña2",
    },
    {
        user: "usuario3",
        password: "contraseña3",
    },
    {
        user: "usuario4",
        password: "contraseña4",
    },
  ]);
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    localStorage.setItem("token", "test_token_123456789");
    setIsLoggedIn(true);
    setLoginData((prevLoginData) => [
      ...prevLoginData,
      {
        user: newUserData.username,
        password: newUserData.password,
      },
    ]);
  };

  const loginUser = (user, pass) => {
    const usuarioFiltrado = loginData.find((usuario) => usuario.user === user);
    if (usuarioFiltrado && pass === usuarioFiltrado.password) {
        localStorage.setItem("token", "test_token_123456789");
        setIsLoggedIn(true); // Actualiza el estado aquí
        setUsername(user);
        setPassword(pass);
        return true;
    }
    return false;
  };

  const logoutUser = () => {
    localStorage.removeItem("token"); // Elimina el token aquí
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("/dbproductos.json");
    const productsData = await res.json();
    const productsWithLiked = productsData.map(product => ({ ...product, liked: false }));
    setProducts(productsWithLiked);
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

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
      value={{
        products,
        cart,
        setCart,
        addToCart,
        increment,
        decrement,
        toggleFavorite,
        isLoggedIn,
        loginUser,
        logoutUser,
        userData,
        updateUserData,
        profileImage,
        setProfileImage
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;



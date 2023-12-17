import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({name: "dedrick", email: "dedrick@gmail.com"});

  function addProductToCart(prod) {
    console.log('global add');
    let copy = [...prod];
    copy.push(prod);
    setCart(copy);
  }

  function removeProductFromCart() {
    console.log('global remove');
  }

  return (
    <GlobalContext.Provider value={{
      cart: cart,
      user: user,
      addProductToCart: addProductToCart,
      removeProductFromCart: removeProductFromCart
    }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;


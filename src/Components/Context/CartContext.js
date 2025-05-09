import axios from "axios";
import { createContext } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const headers = {
    token: localStorage.getItem("userToken"),
  };
  
  function addToCart(productId) {
    return axios
      .post("https://ecommerce.routemisr.com/api/v1/cart", { productId }, { headers })
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  return (
    <cartContext.Provider value={{ addToCart }}>{children}</cartContext.Provider>
  );
}

export default CartContextProvider;

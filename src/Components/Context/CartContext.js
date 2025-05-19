import axios from "axios";
import { createContext } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const headers = {
    token: localStorage.getItem("userToken"),
  };

  function addToCart(productId) {
    return axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        { headers }
      )
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  async function getLoggedUserCart() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers,
    });
  }

  async function updateProductQuantity(productId, count) {
    return await axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  async function clearUserCart() {
    return await axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/`, { headers })
      .then((response) => response)
      .catch((error) => error);
  }

  async function removeCartItem(productId) {
    return await axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  return (
    <cartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        removeCartItem,
        clearUserCart,
        updateProductQuantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;

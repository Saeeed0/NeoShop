import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

function CartContextProvider({ children }) {
  const [cartId, setCartId] = useState(null);
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

  function updateProductQuantity(productId, count) {
    return axios
      .put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  function clearUserCart() {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/`, { headers })
      .then((response) => response)
      .catch((error) => error);
  }

  function removeCartItem(productId) {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
        headers,
      })
      .then((response) => response)
      .catch((error) => error);
  }

  function onlinePayment(url, cartId, values) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
        { shippingAddress: values },
        { headers }
      )
      .then((response) => response)
      .catch((error) => error);
  }

  async function getCartId() {
    const { data } = await getLoggedUserCart();
    setCartId(data?.cartId);
  }
  useEffect(() => {
    getCartId();
  }, []);
  return (
    <cartContext.Provider
      value={{
        addToCart,
        getLoggedUserCart,
        removeCartItem,
        clearUserCart,
        updateProductQuantity,
        onlinePayment,
        cartId,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;

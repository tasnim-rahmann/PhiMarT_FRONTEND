import { useState } from "react";
import apiClient from "../services/api-client";

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem("cartId"));

  const [authToken, setAuthToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens")).access
  );

  const createOrGetCart = async () => {
    try {
      const response = await apiClient.post(
        "/carts/",
        {},
        { headers: { Authorization: `JWT ${authToken}` } }
      );
      if (!cartId) {
        localStorage.setItem("cartId", response.data.id);
        setCartId(response.data.id);
      }
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCartItem = async (product_id, quantity) => {
    if (!cartId) await createOrGetCart();
    try {
      const response = await apiClient.post(
        `/carts/${cartId}/items/`,
        { product_id, quantity },
        { headers: { Authorization: `JWT ${authToken}` } }
      );
      return response.data;
    } catch (error) {
      console.log("Error adding product", error);
    }
  };

  return { cart, createOrGetCart, addCartItem };
};

export default useCart;

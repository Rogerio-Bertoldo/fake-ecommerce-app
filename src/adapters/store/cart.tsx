import React from "react";
// import { StoreContext } from ".";
import { Cart } from "../../domain/cart";
import { decreaseAmount, increaseAmount, Product } from "../../domain/product";
import { getData, storeData } from "../storage";

// export const useCartContext = () => {
//   const store = React.useContext(StoreContext);
//   return store.cart;
// };

export const __useCartData = () => {
  const [cart, setCart] = React.useState(new Cart([]));

  const addToCart = (userId: string, product: Product) => {
    cart.add(product);
    setCart(cart);
    storeData(userId, cart)
      .then(() => increaseAmount(product))
      .catch((error) => new Error(error));
  };

  const removeFromCart = async (userId: string, product: Product) => {
    cart.remove(product);
    setCart(cart);
    storeData(userId, cart)
      .then(() => decreaseAmount(product))
      .catch((error) => new Error(error));
  };

  const clearCart = (userId: string) => {
    cart.clear();
    setCart(new Cart([]));
    storeData(userId, cart);
  };

  const getFromCache = async (userId: string) => {
    return new Promise((resolve, reject) => {
      getData(userId).then(resolve).catch(reject);
    });
  };

  return {
    data: {
      cart,
    },
    actions: {
      addToCart,
      removeFromCart,
      clearCart,
      getFromCache,
    },
  };
};

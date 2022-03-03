import React from "react";
import { Cart } from "../../domain/cart";
import { decreaseAmount, increaseAmount, Product } from "../../domain/product";
import { getData, storeData } from "../storage";


export const __useCartData = () => {
  const [cart, setCart] = React.useState(new Cart([]));

  const keyStore = (key: string) => `cart-${key}`

  const addToCart = (userEmail: string, product: Product) => {
    cart.add(product);
    setCart(cart);
    storeData(keyStore(userEmail), cart)
      .then(() => increaseAmount(product))
      .catch((error) => new Error(error));
  };

  const removeFromCart = async (userEmail: string, product: Product) => {
    cart.remove(product);
    setCart(cart);
    storeData(keyStore(userEmail), cart)
      .then(() => decreaseAmount(product))
      .catch((error) => new Error(error));
  };

  const clearCart = (userEmail: string) => {
    cart.clear();
    setCart(new Cart([]));
    storeData(keyStore(userEmail), cart);
  };

  const getFromCache = async (userEmail: string) => {
    return new Promise((resolve, reject) => {
      getData(keyStore(userEmail)).then(resolve).catch(reject);
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

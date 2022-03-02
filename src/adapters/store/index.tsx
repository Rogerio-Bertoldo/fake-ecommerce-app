import React from "react";
import { __useCartData } from "./cart";

export const StoreContext = React.createContext<any>({});

export const useCartContext = () => {
  const store = React.useContext(StoreContext);
  return store.cart;
};

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={{ cart: __useCartData() }}>
      {children}
    </StoreContext.Provider>
  );
};

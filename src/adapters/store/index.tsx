import React from "react";
import { __useCartData } from "./cart";
import { __useUserData } from "./user";

export const StoreContext = React.createContext<any>({});

export const useCartContext = () => {
  const store = React.useContext(StoreContext);
  return store.cart;
};

export const useUserContext = () => {
  const store = React.useContext(StoreContext);
  return store.user;
};

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={{ cart: __useCartData(), user: __useUserData() }}>
      {children}
    </StoreContext.Provider>
  );
};

import React from "react";
import { Cart } from "../../domain/cart";
import { User } from "../../domain/user";


interface storeContextInterface {
  user: User | null,
  cart: Cart | null,
  updateUser(user: User): void,
  updateCart(cart: Cart): void,
  clearCart(): void
}

const StoreContext = React.createContext<storeContextInterface>(null);
export const useStoreContext = () => React.useContext(StoreContext);

export const ContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [cart, setCart] = React.useState<Cart | null>(null);

  return (
    <StoreContext.Provider
      value={{
        user,
        cart,
        updateUser: (user: User) => setUser(user),
        updateCart: (cart: Cart) => setCart(cart),
        clearCart: () => setCart(null),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

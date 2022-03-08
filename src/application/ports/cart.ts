import { Cart } from "../../domain/cart";

export interface CartContextService {
  cart: Cart | null;
  updateCart(cart: Cart): void;
  clearCart(): void;
}

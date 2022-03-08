import { storeData } from "../adapters/storage";
import { useCartContext } from "../adapters/store";
import { useStoreContext } from "../adapters/store/contextProvider";
import { AddtoCartCmd } from "./commands/addToCart";
import { CartContextService } from "./ports/cart";

export function useAddToCart() {
  const cartContext: CartContextService = useCartContext();

  function addToCart(command: AddtoCartCmd) {
    command.execute();
    cartContext.updateCart(command.cart);
		storeData(command.cart.userId, command.cart)
  }

  return { addToCart };
}

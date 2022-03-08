import { deleteData } from "../adapters/storage";
import { useCartContext } from "../adapters/store";
import { RemoveFromCartCmd } from "./commands/removeFromCart";
import { CartContextService } from "./ports/cart";

export function useRemoveFromCart() {
  function removeFromCart(command: RemoveFromCartCmd) {
		const cartContext: CartContextService = useCartContext()   
    command.execute();
		cartContext.updatecart(command.cart)
    deleteData(command.cart.userId)
  }

  return { removeFromCart };
}

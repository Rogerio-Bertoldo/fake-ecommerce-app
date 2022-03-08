import { Cart } from "../../domain/cart";
import { Product } from "../../domain/product";
import { Command } from "./command";

export class RemoveFromCartCmd implements Command {
  private _cart: Cart;
  private _product: Product;

  constructor(product: Product, cart: Cart) {
    this._product = product;
    this._cart = cart;
  }

  public get cart() {
    return this._cart;
  }

  execute(): void {
    this._cart.remove(this._product);
  }
}

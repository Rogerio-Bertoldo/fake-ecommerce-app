import { Cart } from "./cart";
import { User } from "./user";

export class Order {
  private _userId: string;
  private _cart: Cart;
  private _price: number;

  constructor(user: User, cart: Cart) {
    this._userId = user.id;
    this._cart = cart;
    this._price = cart.getTotalPrice();
  }

  public get userId() {
    return this._userId;
  }

  public get cart() {
    return this._cart;
  }

  public get price() {
    return this._price;
  }
}

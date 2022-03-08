import { Product } from "./product";
import { User } from "./user";

export class Cart {
  private _userId: string;
  private _products: Product[];

  constructor(user: User, products: Product[]) {
    this._products = products;
    this._userId = user.id
  }

  public get userId() {
    return this._userId;
  }

  public get products() {
    return this._products;
  }

  public getTotalPrice(): number {
    return this._products.reduce((total, { price }) => total + price, 0);
  }

  public add(product: Product) {
    this._products.push(product);
  }

  public remove(product: Product) {
    this._products = [...this._products.filter((p) => p.id !== product.id)];
  }

  public clear() {
    this._products = [];
  }
}

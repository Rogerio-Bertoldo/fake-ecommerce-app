import { Product } from "./product";

export class Cart {
  private _products: Product[];

  constructor(products: Product[]) {
    this._products = products;
  }

  public get products() {
    return this._products;
  }

  getTotalPrice(): number {
    return this._products.reduce((total, { price }) => total + price, 0);
  }

  add(product: Product) {
    this._products.push(product);
  }

  remove(product: Product) {
    this._products = [...this._products.filter((p) => p.id !== product.id)];
  }

  clear() {
    this._products = [];
  }
}

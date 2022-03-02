export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  amount?: number;
};

export function increaseAmount(product: Product, increment: number = 1): Product {
  product.amount = product.amount ? product.amount + increment : increment;
  return product
}

export function decreaseAmount(product: Product, decrement: number = 1): Product {
  product.amount = (product.amount && product.amount > 0) ? product.amount - decrement : 0;
  return product
}

export function resetAmount(product: Product): Product {
  product.amount = undefined
  return product
}

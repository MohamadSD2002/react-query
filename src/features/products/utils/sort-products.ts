import type { Product } from "../types/product";

export function sortProductsByPrice( products: Product[] ) {
  return [...products].sort(
    (a, b) => a.price - b.price,
  );
}
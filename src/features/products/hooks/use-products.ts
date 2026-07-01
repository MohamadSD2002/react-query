import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api/get-products";
import { sortProductsByPrice } from "../utils/sort-products";

export const productKeys = {
  all: ["products"] as const,
};

export function useProducts() {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: getProducts,

    select: (products) => sortProductsByPrice(products),

    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
}
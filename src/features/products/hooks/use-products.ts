import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api/get-products";

export const productKeys = {
  all: ["products"] as const,
};

export function useProducts() {
  return useQuery({
    queryKey: productKeys.all,
    queryFn: getProducts,
  });
}
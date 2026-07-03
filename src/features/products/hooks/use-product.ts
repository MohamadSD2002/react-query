import { useQuery } from "@tanstack/react-query";

import { getProduct } from "../api/get-product";
import { productKeys } from "../utils/product-keys";

export function useProduct(id: number) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProduct(id),

    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    
    enabled: id > 0
  });
}
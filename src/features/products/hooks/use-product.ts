import { useQuery } from "@tanstack/react-query";

import { getProduct } from "../api/get-product";

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),

    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    
    enabled: id > 0
  });
}
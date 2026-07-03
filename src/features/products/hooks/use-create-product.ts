import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProduct } from "../api/create-product";
import { productKeys } from "../utils/product-keys";
import type { Product } from "../types/product";
import { useNavigate } from "react-router-dom";
// import { productKeys } from "../utils/product-keys";

export function useCreateProduct() {
  const queryClient = useQueryClient();
  const navigation = useNavigate()

  return useMutation({
    mutationFn: createProduct,

    onSuccess: (newProduct) => {
        // for invalidate any query from cash 
        // queryClient.invalidateQueries({
        //     queryKey: productKeys.all,
        // });

        queryClient.setQueryData<Product[]>(
          productKeys.all,
          (oldData) => {
            if(!oldData) {
              return [newProduct]
            }
            
            return [newProduct, ...oldData]
          }
        );

        navigation("/")
    },
  });
}
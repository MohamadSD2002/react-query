import { axiosInstance } from "../../../app/lib/axios";
import type { CreateProductDto } from "../types/create-product";
import type { Product } from "../types/product";

export async function createProduct(data: CreateProductDto) {
  const response = await axiosInstance.post<Product>(
    "/products/add", 
    data
  );

  return response.data;
}
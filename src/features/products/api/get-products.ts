import { axiosInstance } from "../../../app/lib/axios";
import type { ProductsResponse } from "../types/products-response";


export async function getProducts() {
  const response = await axiosInstance.get<ProductsResponse>("/products");

  return response.data.products;
}
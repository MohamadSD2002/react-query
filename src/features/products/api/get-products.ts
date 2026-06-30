import { axiosInstance } from "../../../app/lib/axios";
import type { Product } from "../types/product";

interface ProductsResponse {
  products: Product[];
}

export async function getProducts() {
  const response = await axiosInstance.get<ProductsResponse>("/products");

  return response.data.products;
}
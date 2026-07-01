
import { axiosInstance } from "../../../app/lib/axios";
import type { Product } from "../types/product";

export async function getProduct(id: number): Promise<Product> {
  const response = await axiosInstance.get<Product>(`/products/${id}`);

  return response.data;
}
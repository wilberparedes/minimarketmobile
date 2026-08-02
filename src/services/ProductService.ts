import apiClient from "@/src/api/apiClient"
import { Product } from "@/src/types/Product"

class ProductService {
  async getProducts(): Promise<Product[]> {
    const response = await apiClient.get<Product[]>("/products")
    return response.data
  }

  async getProductById(id: number): Promise<Product> {
    const response = await apiClient.get<Product>(`/products/${id}`)
    return response.data
  }
}

export default new ProductService()

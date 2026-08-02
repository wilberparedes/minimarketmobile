import { useCallback, useEffect, useState } from "react"

import ProductService from "@/src/services/ProductService"

import { Product } from "@/src/types/Product"

export default function useProduct(productId: number) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadProduct = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await ProductService.getProductById(productId)
      setProduct(response)
    } catch (e) {
      console.error(e)
      setError("No fue posible cargar el producto.")
    } finally {
      setLoading(false)
    }
  }, [productId])

  useEffect(() => {
    loadProduct()
  }, [loadProduct])

  return {
    product,
    loading,
    error,
    loadProduct,
  }
}

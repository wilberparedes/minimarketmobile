import { useCallback, useEffect, useState } from "react"

import ProductService from "@/src/services/ProductService"

import { Product } from "@/src/types/Product"

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadProducts = useCallback(async () => {
    try {
      setError(null)
      const response = await ProductService.getProducts()
      setProducts(response)
    } catch (err) {
      console.error(err)
      setError("No fue posible cargar los productos.")
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  const refreshProducts = async () => {
    setRefreshing(true)
    setLoading(true)
    await loadProducts()
  }

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return {
    products,
    loading,
    refreshing,
    error,
    refreshProducts,
    loadProducts,
  }
}

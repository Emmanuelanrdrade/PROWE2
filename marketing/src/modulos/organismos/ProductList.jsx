"use client"

import { useState, useEffect } from "react"
import ProductCard from "../moleculas/ProductCard"
import Alert from "../atomos/Alert"

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        // In a real app, this would fetch from your API
        // const data = await fetchProducts();

        // Mock data for demonstration
        const mockData = [
          { id: 1, name: "Product A", category: "Electronics", description: "High-quality electronic device" },
          { id: 2, name: "Product B", category: "Clothing", description: "Fashionable clothing item" },
          { id: 3, name: "Product C", category: "Food", description: "Delicious food product" },
          { id: 4, name: "Product D", category: "Electronics", description: "Innovative electronic gadget" },
          { id: 5, name: "Product E", category: "Home", description: "Essential home item" },
          { id: 6, name: "Product F", category: "Beauty", description: "Premium beauty product" },
        ]

        await new Promise((resolve) => setTimeout(resolve, 800))
        setProducts(mockData)
      } catch (err) {
        setError("Failed to load products. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-3">
        {error}
      </Alert>
    )
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-6 col-lg-4">
          <ProductCard product={product} onSelect={onSelectProduct} showDetails={true} />
        </div>
      ))}
    </div>
  )
}

export default ProductList


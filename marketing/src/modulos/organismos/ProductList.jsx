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
        // Realiza la petición a tu API de backend
        const response = await fetch('http://localhost:5297/api/Producto')
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        
        const data = await response.json()
        setProducts(data)
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
        <div key={product.id || product.idProducto} className="col-md-6 col-lg-4">
          <ProductCard 
            product={{
              id: product.id || product.idProducto,
              name: product.name || product.nombre,
              category: product.category || product.categoria,
              description: product.description || product.descripcion
            }} 
            onSelect={onSelectProduct} 
            showDetails={true} 
          />
        </div>
      ))}
    </div>
  )
}

export default ProductList

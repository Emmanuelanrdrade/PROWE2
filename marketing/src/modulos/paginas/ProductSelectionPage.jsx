"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Card from "../atomos/Card"
import Alert from "../atomos/Alert"
import ProductList from "../organismos/ProductList"
import { useNotifications } from "../organismos/NotificationContext"

const ProductSelectionPage = () => {
  const { requestId } = useParams()
  const navigate = useNavigate()
  const { addNotification } = useNotifications()
  const [request, setRequest] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getRequest = async () => {
      try {
        // In a real app, this would fetch from your API
        // const data = await fetchMarketingRequest(requestId);

        // Mock data for demonstration
        const mockData = {
          id: requestId,
          title: "Summer Campaign",
          description: "Promote summer products with special discounts",
          budget: 5000,
          startDate: "2023-07-01",
          endDate: "2023-08-31",
          targetAudience: "Young adults, 18-35",
        }

        await new Promise((resolve) => setTimeout(resolve, 800))
        setRequest(mockData)
      } catch (err) {
        setError("Failed to load request details. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getRequest()
  }, [requestId])

  const handleSelectProduct = (product) => {
    // Add notification
    addNotification({
      title: "Product Selected",
      message: `You've selected ${product.name} for marketing.`,
    })

    // Navigate to assign task
    navigate(`/assign-task/${product.id}?requestId=${requestId}`)
  }

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
    <div>
      <h1 className="mb-4">Select Product for Marketing</h1>

      <div className="row mb-4">
        <div className="col-12">
          <Card>
            <h5>Request Details</h5>
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Title:</strong> {request.title}
                </p>
                <p>
                  <strong>Description:</strong> {request.description}
                </p>
                <p>
                  <strong>Target Audience:</strong> {request.targetAudience}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Budget:</strong> ${request.budget}
                </p>
                <p>
                  <strong>Start Date:</strong> {request.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {request.endDate}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <h2 className="mb-3">Available Products</h2>
      <p className="text-muted mb-4">Select a product to create a marketing campaign for:</p>

      <ProductList onSelectProduct={handleSelectProduct} />
    </div>
  )
}

export default ProductSelectionPage


"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import Card from "../atomos/Card"
import Alert from "../atomos/Alert"
import EmployeeList from "../organismos/EmployeeList"
import { useNotifications } from "../organismos/NotificationContext"

const AssignTaskPage = () => {
  const { productId } = useParams()
  const [searchParams] = useSearchParams()
  const requestId = searchParams.get("requestId")
  const navigate = useNavigate()
  const { addNotification } = useNotifications()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      try {
        // In a real app, this would fetch from your API
        // const data = await fetchProduct(productId);

        // Mock data for demonstration
        const mockData = {
          id: productId,
          name: "Product A",
          category: "Electronics",
          description: "High-quality electronic device",
          features: ["Feature 1: High performance", "Feature 2: Long battery life", "Feature 3: Compact design"],
          price: 299.99,
          inStock: true,
        }

        await new Promise((resolve) => setTimeout(resolve, 800))
        setProduct(mockData)
      } catch (err) {
        setError("Failed to load product details. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getProduct()
  }, [productId])

  const handleAssignEmployee = async (employee) => {
    try {
      // In a real app, this would send to your API
      // await assignTask({ productId, requestId, employeeId: employee.id });

      // Mock successful assignment
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Add notification
      addNotification({
        title: "Task Assigned",
        message: `Marketing task for ${product.name} assigned to ${employee.name}.`,
      })

      setSuccess(true)

      // Navigate back to dashboard after a delay
      setTimeout(() => {
        navigate("/")
      }, 2000)
    } catch (err) {
      setError("Failed to assign task. Please try again.")
      console.error(err)
    }
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

  if (success) {
    return (
      <div className="text-center py-5">
        <Alert variant="success" className="mb-4">
          Task assigned successfully! Redirecting to dashboard...
        </Alert>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-4">Assign Marketing Task</h1>

      <div className="row mb-4">
        <div className="col-12">
          <Card>
            <h5>Product Details</h5>
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Name:</strong> {product.name}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <p>
                  <strong>In Stock:</strong> {product.inStock ? "Yes" : "No"}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Features:</strong>
                </p>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <h2 className="mb-3">Available Employees</h2>
      <p className="text-muted mb-4">Select an employee to assign this marketing task:</p>

      <EmployeeList onAssignEmployee={handleAssignEmployee} />
    </div>
  )
}

export default AssignTaskPage


"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../atomos/Card"
import Button from "../atomos/Button"
import Alert from "../atomos/Alert"
import Badge from "../atomos/Badge"
import { useNotifications } from "../organismos/NotificationContext"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const DashboardPage = () => {
  const navigate = useNavigate()
  const { notifications, addNotification } = useNotifications()
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        // In a real app, this would fetch from your API
        // const data = await fetchDashboardData();

        // Mock data for demonstration
        const mockData = {
          stats: {
            pendingRequests: 5,
            activeProjects: 8,
            completedProjects: 12,
            totalEmployees: 15
          },
          recentRequests: [
            { id: 101, title: "Summer Campaign", product: "Product A", date: "2023-06-15", status: "pending" },
            { id: 102, title: "Holiday Promotion", product: "Product B", date: "2023-06-12", status: "in-progress" },
            { id: 103, title: "New Product Launch", product: "Product C", date: "2023-06-10", status: "completed" }
          ],
          chartData: [
            { month: "Jan", campaigns: 4 },
            { month: "Feb", campaigns: 3 },
            { month: "Mar", campaigns: 5 },
            { month: "Apr", campaigns: 7 },
            { month: "May", campaigns: 2 },
            { month: "Jun", campaigns: 6 }
          ]
        };

        await new Promise((resolve) => setTimeout(resolve, 1000))
        setDashboardData(mockData)
      } catch (err) {
        setError("Failed to load dashboard data. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getDashboardData()
  }, [])

  const handleNewRequest = () => {
    navigate("/marketing-request")
  }

  const handleViewRequest = (requestId) => {
    navigate(`/product-selection/${requestId}`)
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Marketing Dashboard</h1>
        <Button onClick={handleNewRequest}>New Marketing Request</Button>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6 col-lg-3">
          <Card className="text-center h-100">
            <h3>{dashboardData.stats.pendingRequests}</h3>
            <p className="text-muted mb-0">Pending Requests</p>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3">
          <Card className="text-center h-100">
            <h3>{dashboardData.stats.activeProjects}</h3>
            <p className="text-muted mb-0">Active Projects</p>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3">
          <Card className="text-center h-100">
            <h3>{dashboardData.stats.completedProjects}</h3>
            <p className="text-muted mb-0">Completed Projects</p>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3">
          <Card className="text-center h-100">
            <h3>{dashboardData.stats.totalEmployees}</h3>
            <p className="text-muted mb-0">Total Employees</p>
          </Card>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <Card title="Marketing Campaigns by Month">
            <div style={{ height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardData.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="campaigns" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="col-lg-4">
          <Card title="Recent Marketing Requests">
            <div className="list-group list-group-flush">
              {dashboardData.recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 className="mb-1">{request.title}</h6>
                    <small className="text-muted">
                      {request.product} • {request.date}
                    </small>
                  </div>
                  <div className="d-flex align-items-center">
                    <Badge
                      variant={
                        request.status === "pending"
                          ? "warning"
                          : request.status === "in-progress"
                            ? "primary"
                            : "success"
                      }
                      className="me-2"
                    >
                      {request.status}
                    </Badge>
                    <Button variant="outline-secondary" size="sm" onClick={() => handleViewRequest(request.id)}>
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage


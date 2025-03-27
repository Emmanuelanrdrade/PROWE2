"use client"

import { useState, useEffect } from "react"
import EmployeeCard from "../moleculas/EmployeeCard"
import Alert from "../atomos/Alert"

const EmployeeList = ({ onAssignEmployee }) => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getEmployees = async () => {
      setLoading(true)
      try {
        // In a real app, this would fetch from your API
        // const data = await fetchEmployees();

        // Mock data for demonstration
        const mockData = [
          { id: 1, name: "John Doe", position: "Marketing Specialist", available: true, tasksCompleted: 15 },
          { id: 2, name: "Jane Smith", position: "Senior Marketer", available: true, tasksCompleted: 27 },
          { id: 3, name: "Robert Johnson", position: "Marketing Manager", available: false, tasksCompleted: 42 },
          { id: 4, name: "Emily Davis", position: "Content Creator", available: true, tasksCompleted: 19 },
          { id: 5, name: "Michael Wilson", position: "Social Media Expert", available: true, tasksCompleted: 31 },
          { id: 6, name: "Sarah Brown", position: "Marketing Analyst", available: false, tasksCompleted: 23 },
        ]

        await new Promise((resolve) => setTimeout(resolve, 800))
        setEmployees(mockData)
      } catch (err) {
        setError("Failed to load employees. Please try again.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getEmployees()
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
      {employees.map((employee) => (
        <div key={employee.id} className="col-md-6 col-lg-4">
          <EmployeeCard employee={employee} onAssign={onAssignEmployee} />
        </div>
      ))}
    </div>
  )
}

export default EmployeeList


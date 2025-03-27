"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormGroup from "../moleculas/FormGroup"
import Alert from "../atomos/Alert"
import Card from "../atomos/Card"

const LoginPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ]

  const handleSubmit = async (formData) => {
    setLoading(true)
    setError(null)

    try {
      // In a real app, this would authenticate with your API
      // await login(formData);

      // Mock successful login
      await new Promise((resolve) => setTimeout(resolve, 1000))

      navigate("/")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-4">
          <Card className="shadow">
            <div className="text-center mb-4">
              <h2>Marketing Dashboard</h2>
              <p className="text-muted">Sign in to your account</p>
            </div>

            {error && (
              <Alert variant="danger" dismissible onClose={() => setError(null)} className="mb-4">
                {error}
              </Alert>
            )}

            <FormGroup fields={fields} onSubmit={handleSubmit} submitText="Sign In" loading={loading} />

            <div className="text-center mt-3">
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LoginPage


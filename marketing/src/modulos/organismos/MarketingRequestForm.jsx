"use client"

import { useState } from "react"
import FormGroup from "../moleculas/FormGroup"
import Alert from "../atomos/Alert"

const MarketingRequestForm = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const fields = [
    {
      name: "title",
      label: "Campaign Title",
      placeholder: "Enter campaign title",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Describe the marketing campaign",
      required: true,
    },
    {
      name: "budget",
      type: "number",
      label: "Budget (USD)",
      placeholder: "Enter budget amount",
      required: true,
    },
    {
      name: "startDate",
      type: "date",
      label: "Start Date",
      required: true,
    },
    {
      name: "endDate",
      type: "date",
      label: "End Date",
      required: true,
    },
    {
      name: "targetAudience",
      label: "Target Audience",
      placeholder: "Describe your target audience",
    },
  ]

  const handleSubmit = async (formData) => {
    setLoading(true)
    setError(null)

    try {
      // In a real app, this would send to your API
      // await createMarketingRequest(formData);

      // Mock successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSuccess(true)
      if (onSuccess) {
        onSuccess({ id: Date.now(), ...formData })
      }
    } catch (err) {
      setError("Failed to submit marketing request. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)} className="mb-4">
          {error}
        </Alert>
      )}

      {success ? (
        <Alert variant="success" className="mb-4">
          Marketing request submitted successfully!
        </Alert>
      ) : (
        <FormGroup fields={fields} onSubmit={handleSubmit} submitText="Submit Request" loading={loading} />
      )}
    </div>
  )
}

export default MarketingRequestForm


"use client"

import React from "react"
import Input from "../atomos/input"
import Button from "../atomos/Button"

const FormGroup = ({ onSubmit, fields, submitText = "Submit", loading = false, className = "" }) => {
  const [formData, setFormData] = React.useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || ""
      return acc
    }, {}),
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {fields.map((field) => (
        <Input
          key={field.name}
          type={field.type || "text"}
          label={field.label}
          placeholder={field.placeholder}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          required={field.required}
        />
      ))}
      <Button type="submit" disabled={loading} className="w-100">
        {loading ? "Loading..." : submitText}
      </Button>
    </form>
  )
}

export default FormGroup


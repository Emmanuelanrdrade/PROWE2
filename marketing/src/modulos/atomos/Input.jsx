"use client"

const Input = ({ type = "text", placeholder, value, onChange, name, label, required = false, className = "" }) => {
  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        className={`form-control ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
    </div>
  )
}

export default Input

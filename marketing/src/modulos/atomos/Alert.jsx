"use client"

const Alert = ({ children, variant = "primary", dismissible = false, onClose, className = "" }) => {
  return (
    <div className={`alert alert-${variant} ${dismissible ? "alert-dismissible" : ""} ${className}`} role="alert">
      {children}
      {dismissible && <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>}
    </div>
  )
}

export default Alert

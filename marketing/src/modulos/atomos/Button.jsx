"use client"

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`

  return (
    <button type={type} className={baseClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button


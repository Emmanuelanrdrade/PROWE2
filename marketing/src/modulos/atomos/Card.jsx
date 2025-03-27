const Card = ({ title, children, footer, className = "" }) => {
    return (
      <div className={`card ${className}`}>
        {title && <div className="card-header">{title}</div>}
        <div className="card-body">{children}</div>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    )
  }
  
  export default Card
  
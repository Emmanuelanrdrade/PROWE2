"use client"
import Card from "../atomos/Card"
import Button from "../atomos/Button"
import Badge from "../atomos/Badge"

const ProductCard = ({ product, onSelect, showDetails = false, className = "" }) => {
  return (
    <Card className={`card-hover ${className}`}>
      <h5>{product.name}</h5>
      <Badge variant="info" className="mb-2">
        {product.category}
      </Badge>

      {showDetails && (
        <div className="mt-2 mb-3">
          <p className="mb-1">{product.description}</p>
          <small className="text-muted">ID: {product.id}</small>
        </div>
      )}

      <Button variant="outline-primary" onClick={() => onSelect(product)} className="mt-2">
        {showDetails ? "Select for Marketing" : "View Details"}
      </Button>
    </Card>
  )
}

export default ProductCard


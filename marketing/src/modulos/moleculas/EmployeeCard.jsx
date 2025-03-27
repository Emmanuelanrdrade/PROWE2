"use client"
import Card from "../atomos/Card"
import Button from "../atomos/Button"
import Badge from "../atomos/Badge"

const EmployeeCard = ({ employee, onAssign, className = "" }) => {
  return (
    <Card className={`card-hover ${className}`}>
      <div className="d-flex align-items-center mb-3">
        <div
          className="rounded-circle bg-light d-flex justify-content-center align-items-center me-3"
          style={{ width: "50px", height: "50px" }}
        >
          {employee?.name.charAt(0)}
        </div>
        <div>
          <h5 className="mb-0">{employee?.name}</h5>
          <small className="text-muted">{employee?.position}</small>
        </div>
      </div>

      <div className="mb-3">
        <Badge variant={employee?.available ? "success" : "warning"} className="me-2">
          {employee?.available ? "Available" : "Busy"}
        </Badge>
        <Badge variant="info">{employee?.tasksCompleted} tasks completed</Badge>
      </div>

      <Button variant="primary" onClick={() => onAssign(employee)} disabled={!employee?.available}>
        Assign Task
      </Button>
    </Card>
  )
}

export default EmployeeCard


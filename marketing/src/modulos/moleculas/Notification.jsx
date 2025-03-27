"use client"
import Badge from "../atomos/Badge"
import { Bell } from "react-bootstrap-icons"

const Notification = ({ count = 0, onClick }) => {
  return (
    <div className="position-relative d-inline-block" onClick={onClick}>
      <Bell size={24} />
      {count > 0 && (
        <Badge variant="danger" className="notification-badge">
          {count}
        </Badge>
      )}
    </div>
  )
}

export default Notification


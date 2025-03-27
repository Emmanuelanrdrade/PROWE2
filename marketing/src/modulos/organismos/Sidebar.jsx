import { Link, useLocation } from "react-router-dom"
import { House, GraphUp, BriefcaseFill, PeopleFill, GearFill } from "react-bootstrap-icons"

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: "/", icon: <House size={18} />, label: "Dashboard" },
    { path: "/marketing-request", icon: <GraphUp size={18} />, label: "Marketing Requests" },
    { path: "/products", icon: <BriefcaseFill size={18} />, label: "Products" },
    { path: "/employees", icon: <PeopleFill size={18} />, label: "Employees" },
    { path: "/settings", icon: <GearFill size={18} />, label: "Settings" },
  ]

  return (
    <div className="sidebar d-flex flex-column p-3 text-bg-light">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
        <span className="fs-4">Marketing App</span>
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link d-flex align-items-center ${location.pathname === item.path ? "active" : "text-dark"}`}
            >
              <span className="me-2">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2"
            style={{ width: "32px", height: "32px" }}
          >
            U
          </div>
          <strong>User</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/login">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar


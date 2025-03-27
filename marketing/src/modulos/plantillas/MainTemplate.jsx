import { Outlet } from "react-router-dom"
import Navbar from "../organismos/Navbar"
import Sidebar from "../organismos/Sidebar"

const MainTemplate = () => {
  return (
    <div className="d-flex">
      <div className="d-none d-md-block">
        <Sidebar />
      </div>
      <div className="flex-grow-1">
        <Navbar />
        <main className="container-fluid py-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainTemplate


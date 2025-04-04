import { useNavigate } from "react-router-dom"
import Card from "../atomos/Card"
import MarketingRequestForm from "../organismos/MarketingRequestForm"
import { useNotifications } from "../organismos/NotificationContext"

const MarketingRequestPage = () => {
  const navigate = useNavigate()
  const { addNotification } = useNotifications()

  const handleSuccess = (request) => {
    // Add notification
    addNotification({
      title: "Marketing Request Created",
      message: `Your request "${request.title}" has been submitted successfully.`,
    })

    // Navigate to product selection
    setTimeout(() => {
      navigate(`/product-selection/${request.id}`)
    }, 1500)
  }

  return (
    <div>
      <h1 className="mb-4">Create Marketing Request</h1>

      <div className="row">
        <div className="col-lg-8">
          <Card>
            <MarketingRequestForm onSuccess={handleSuccess} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MarketingRequestPage


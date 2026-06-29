import { FiClock } from "react-icons/fi"
import "../booking.css"

interface BookingServiceCardProps {
  icon: React.ReactNode
  title: string
  duration: number
  price: number
  isSelected: boolean
  onClick: () => void
}

const BookingServiceCard = ({ icon, title, duration, price, isSelected, onClick }: BookingServiceCardProps) => {
  return (
    <div
      className={`booking__service ${isSelected ? "booking__service--selected" : ""}`}
      onClick={onClick}
    >
      <div className={`booking__service-icon ${isSelected ? "booking__service-icon--selected" : ""}`}>
        {icon}
      </div>
      <div className="booking__service-info">
        <span className="booking__service-title">{title}</span>
        <div className="booking__service-meta">
          <FiClock />
          <span>{duration}m</span>
          <span className="booking__service-price">${price}</span>
        </div>
      </div>
      <div className={`booking__checkbox ${isSelected ? "booking__checkbox--checked" : ""}`}>
        {isSelected && <span>✓</span>}
      </div>
    </div>
  )
}

export default BookingServiceCard
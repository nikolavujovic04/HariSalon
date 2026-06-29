import { FiScissors, FiClock, FiArrowUpRight } from "react-icons/fi"
import "../curated.css"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  duration: number
  price: number
}

const ServiceCard = ({ icon, title, description, duration, price }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-card__top">
        <div className="service-card__icon">{icon}</div>
        <FiArrowUpRight className="service-card__arrow" />
      </div>

      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
      </div>

      <div className="service-card__footer">
        <div className="service-card__duration">
          <FiClock className="service-card__clock" />
          <span>{duration} min</span>
        </div>
        <span className="service-card__price">${price}</span>
      </div>
    </div>
  )
}

export default ServiceCard
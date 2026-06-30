import { useState } from "react"
import { FiStar } from "react-icons/fi"
import "../barber.css"

interface BarberCardProps {
  image: string
  name: string
  role: string
  rating: number
  tags: string[]
  experience: number
  description: string
}

const BarberCard = ({ image, name, role, rating, tags, experience, description }: BarberCardProps) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="barber_pic">
        <img
          src={image}
          className={`barber ${hovered ? "barber--zoomed" : ""}`}
          alt={name}
        />
        <div className="barber_rating">
          <FiStar className="barber_rating-star" />
          <span>{rating.toFixed(1)}</span>
        </div>

        <div className={`barber_overlay-text ${hovered ? "barber_overlay-text--visible" : ""}`}>
          <p>{description}</p>
        </div>

        <div className={`barber_info ${hovered ? "barber_info--hidden" : ""}`}>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>

      <div className="barber_desc">
        <div className="barber_tags">
          {tags.map((tag) => (
            <span key={tag} className="barber_tag">{tag}</span>
          ))}
        </div>
        <p className="barber_experience">
          <strong>{experience} years</strong> of experience
        </p>
      </div>
    </div>
  )
}

export default BarberCard
import { color } from "framer-motion"
import {HiArrowCircleRight} from "react-icons/hi"
import "./Button.css"

interface ButtonProps {
  text: string
  arrow?: boolean
  color?: string
  className?: string
}

const ReservationButton = ({text, arrow, color, className}: ButtonProps) => {
  return(
    <button className={`btn ${className}`} style={{ backgroundColor: color }}>
      {text}
      {arrow && <HiArrowCircleRight />}
    </button>
  )
}

export default ReservationButton
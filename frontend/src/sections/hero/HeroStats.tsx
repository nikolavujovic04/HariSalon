import { FaStar } from "react-icons/fa"
import '../hero/hero.css'

const HeroStats = () => {
  return (
    <div className="hero-stats">
      <div className="hero-stats__rating">
        <div className="hero-stats__stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="hero-stats__star" />
          ))}
        </div>
        <span className="hero-stats__score">4.9</span>
      </div>
      <div className="hero-stats__divider" />
      <span className="hero-stats__cuts">12,000+ refined cuts delivered</span>
    </div>
  )
}

export default HeroStats
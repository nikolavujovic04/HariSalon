import "./hero.css"
import background from "../../assets/barber.jpg"
import ReservationButton from "../../components/button/ReservationButton"
import HeroStats from "./HeroStats"

const HeroSection = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${background})` }}>
      <div className="background-overlay">
        <div className="title">
          <p className="hero-label">Premium Hair Salon</p>
          <h1>Refined grooming, <span className="hero-accent">elevated</span> to an art.</h1>
          <div className="hero-buttons">
            <ReservationButton text="Reserve your seat" arrow={true} className="btn-primary" />
            <ReservationButton text="Explore Services" className="btn-white" />
          </div>
          <HeroStats />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
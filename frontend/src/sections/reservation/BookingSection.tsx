import { useState } from "react"
import { FiScissors, FiClock } from "react-icons/fi"
import BookingServiceCard from "./components/BookingServiceCard"
import './booking.css'


interface Service {
  id: number
  icon: React.ReactNode
  title: string
  duration: number
  price: number
}

const services: Service[] = [
  { id: 1, icon: <FiScissors />, title: "Signature Haircut", duration: 45, price: 45 },
  { id: 2, icon: <FiScissors />, title: "Beard Sculpt & Trim", duration: 30, price: 28 },
  { id: 3, icon: <FiScissors />, title: "Hot Towel Razor Shave", duration: 40, price: 35 },
  { id: 4, icon: <FiScissors />, title: "Cleanse & Hair Wash", duration: 20, price: 18 },
  { id: 5, icon: <FiScissors />, title: "Styling & Finish", duration: 25, price: 22 },
  { id: 6, icon: <FiScissors />, title: "Gentleman's Facial", duration: 50, price: 55 },
]


const BookingSection = () =>{

  const [selected, setSelected] = useState<number[]>([])

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const totalPrice = services
    .filter((s) => selected.includes(s.id))
      .reduce((sum, s) => sum + s.price, 0)

  const totalDuration = services
    .filter((s) => selected.includes(s.id))
      .reduce((sum, s) => sum + s.duration, 0)

  return(
    <div className='reservation_section'>
      <div className="text_section">
        <p>Reservation studio</p>
        <h2>Compose your appointment</h2>
        <p>Select as many services as you like. We'll calculate your time and total in real time.</p>
      </div>

      <div className="booking">
        <div className="booking__left">

          {/* Step 1 */}
          <div className="booking__card">
            <div className="booking__card-header">
              <div className="booking__step">
                <span className="booking__step-number">1</span>
                <h2>Select your services</h2>
              </div>
              <span className="booking__selected-count">{selected.length} selected</span>
            </div>

            <div className="booking__services-grid">
              {services.map((service) => (
                <BookingServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  duration={service.duration}
                  price={service.price}
                  isSelected={selected.includes(service.id)}
                  onClick={() => toggle(service.id)}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Order Summary */}
        <div className="booking__summary">
          <div className="booking__summary-header">
            <span className="booking__summary-label">✦ YOUR RESERVATION</span>
            <h2>Order summary</h2>
          </div>

          <div className="booking__summary-body">
            {selected.length === 0 ? (
              <p className="booking__summary-empty">
                No services selected yet. Choose from the menu to begin.
              </p>
            ) : (
              <ul className="booking__summary-list">
                {services.filter((s) => selected.includes(s.id)).map((s) => (
                  <li key={s.id} className="booking__summary-item">
                    <span>{s.title}</span>
                    <span>${s.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="booking__summary-footer">
            <div className="booking__summary-row">
              <span><FiClock /> Total duration</span>
              <span>{totalDuration}m</span>
            </div>
            <div className="booking__summary-row">
              <span>📅 When</span>
              <span>—</span>
            </div>
            <div className="booking__summary-total">
              <span>Total</span>
              <span className="booking__summary-price">${totalPrice}</span>
            </div>
            <button
              className={`booking__summary-btn ${selected.length === 0 ? "booking__summary-btn--disabled" : ""}`}
              disabled={selected.length === 0}
            >
              Complete your selection
            </button>
            <p className="booking__summary-note">No payment today — confirm and pay in studio.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSection
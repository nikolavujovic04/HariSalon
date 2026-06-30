import BarberCard from './components/BarberCard'
import barber1 from '../../assets/barber1.png'
import barber2 from '../../assets/barber2.png'
import './barber.css'

const barbers = [
  {
    id: 1,
    image: barber1,
    name: "Marco Aurelio",
    role: "Master Barber & Founder",
    rating: 5.0,
    tags: ["Scissor Work", "Classic Cuts"],
    experience: 14,
    description: "Marco brings over a decade of precision craftsmanship, blending timeless technique with modern style.",
  },
  {
    id: 2,
    image: barber2,
    name: "Luca Moretti",
    role: "Senior Stylist",
    rating: 4.9,
    tags: ["Fades", "Beard Sculpting"],
    experience: 9,
    description: "Luca specializes in sharp fades and beard artistry, with an eye for modern detail.",
  },
  {
    id: 3,
    image: barber1,
    name: "Dario Conti",
    role: "Color Specialist",
    rating: 4.8,
    tags: ["Color", "Texture"],
    experience: 11,
    description: "Dario's expertise lies in color transformation and textured cuts that turn heads.",
  },
  {
    id: 4,
    image: barber2,
    name: "Enzo Bianchi",
    role: "Grooming Expert",
    rating: 5.0,
    tags: ["Hot Towel Shave", "Facials"],
    experience: 16,
    description: "Enzo delivers a refined grooming ritual, perfecting the art of the classic shave.",
  },
]

const BarberSection = () => {
  return(
    <div className="barber_section">
      <div className="titles">
        <div className="title_col">
          <p>The Aritsans</p>
          <h2>Master barbers,<br></br> hand-selected</h2>
        </div>
        <div className='text_title'>
          <p>Each member of our team is chosen for their craft, their eye for detail,
           and their dedication to your experience.</p>
        </div>
      </div>
      <div className='card_section'>
        {barbers.map((barber) => (
          <BarberCard key={barber.id} {...barber} />
        ))}
      </div>
    </div>
  )
}

export default BarberSection
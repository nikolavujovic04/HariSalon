import { FiScissors, FiDroplet, FiStar } from "react-icons/fi"
import { GiRazor, GiComb } from "react-icons/gi"
import ServiceCard from "./components/ServiceComponent"
import './curated.css'

const services = [
  { icon: <FiScissors />, title: "Signature Haircut",description: "A precision cut tailored to your face, hair type and lifestyle.",duration: 45, price: 45},
  { icon: <FiScissors />, title: "Signature Haircut",description: "A precision cut tailored to your face, hair type and lifestyle.",duration: 45, price: 45},
  { icon: <FiScissors />, title: "Signature Haircut",description: "A precision cut tailored to your face, hair type and lifestyle.",duration: 45, price: 45},
  { icon: <FiScissors />, title: "Signature Haircut",description: "A precision cut tailored to your face, hair type and lifestyle.",duration: 45, price: 45},
  { icon: <FiScissors />, title: "Signature Haircut",description: "A precision cut tailored to your face, hair type and lifestyle.",duration: 45, price: 45},
  { icon: <FiScissors />, title: "Signature Haircut",description: "A precision cut tailored to your face, hair type and lifestyle.",duration: 45, price: 45}
]

const CuratedServices = () => {
  return(
    <div className='curated_services'>
      <div className="text_section">
        <p>Curated Services</p>
        <h1>Every detail, perfected</h1>
        <p>A considered menu of grooming rituals, each delivered with precision and the finest products.</p>
      </div>
      <div className='card_section'>
        {services.map((service)=>
          <ServiceCard
          icon={service.icon}
          title={service.title}
          description={service.description}
          duration={service.duration}
          price={service.price}
        />
        )}
      </div>
    </div>
  )
}

export default CuratedServices
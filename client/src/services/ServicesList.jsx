import ServiceCard from "./ServiceCard"
import { Col } from "reactstrap"
import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const ServicesList = () => {
  const servicesData =[
    {
      imgUrl     : weatherImg,
      title      : "Calculate Weather",
      description:  "Check the latest weather before you travel — sunshine or storm, we’ve got you covered!"
    },
    {
      imgUrl     : guideImg,
      title      : "Best Your Guide",
      description: "Find expert local guides to make your journey informative and unforgettable."
    },
    {
      imgUrl     : customizationImg,
      title      : "Customization",
      description: "Tailor your trip exactly the way you want — from destinations to activities."
    }
  ]

  return (
    <>
      {servicesData.map((item, index) => <Col lg="3" md="6" sm="12" key= {index}>
        <ServiceCard item= {item} />
      </Col>)}
    </>
  )
}

export default ServicesList
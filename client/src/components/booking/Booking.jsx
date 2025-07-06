import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap"
import "./booking.css"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { BASE_URL } from "../../utils/Config"

const Booking = ({ tour, avgRating }) => {
  const { user }= useContext(AuthContext)
  const { price, reviews, title } = tour
  const navigate = useNavigate()

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: "Younes AIT BEN ALI",
    phone: "+212610408288",
    guestSize: "1",
    bookedAt: "",
  })

  const handleChange = (event) => {
    setBooking((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }))
  }

  const serviceFee = 10
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee)

  const handleClick = async (event) => {
    event.preventDefault()
    console.log(booking)
    
    try {
      if(!user){
        return alert("Please Sign in")
      }
      const res = await fetch(`${BASE_URL}/booking`,{
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", 
        body: JSON.stringify(booking)
      })

      const result = await res.json()
      if(!res.ok){
        return alert(result.message)
      }
      
    } catch (error) {
      alert(error.message)
    }

    navigate("/thank-you")
  }

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span> /person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}{" "}
          ({reviews?.length})
        </span>
      </div>

      {/* ================== Booking Form ================== */}
      <div className="booking__form">
        <h5>Informations</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="tel"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookedAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ================== Booking Form ================== */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="total border-0 px-0">
            <h5>Total</h5>
            <span>{totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
      </div>
    </div>
  )
}

export default Booking

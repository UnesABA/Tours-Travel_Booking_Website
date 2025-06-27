import { useRef, useState } from "react"
import { Container, Row, Col, Form, ListGroup } from "reactstrap"
import { useParams } from "react-router-dom"
import tourData from "../assets/data/tours"
import calculateAvgRating from "../utils/AvgRating"
import avatar from "../assets/images/avatar.jpg"
import younes from "../assets/images/Younes_AIT_BEN_ALI.jpg"
import Booking from "../components/booking/Booking"
import Newsletter from "../shared/Newsletter"
import "../styles/tour-details.css"

const TourDetails = () => {
  const { id } = useParams()
  const reviewMsgRef = useRef("")
  const [tourRating, setTourRating] = useState(null)

  const tour = tourData.find((tour) => tour.id === id)

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tour

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  const submitHandler = (event) => {
    event.preventDefault()

    const reviewText = reviewMsgRef.current.value
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>{" "}
                      {avgRating === 0 ? null : avgRating}{" "}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>{reviews.length}</span>
                      )}
                      <span>({reviews?.length})</span>
                    </span>

                    <span>
                      <i className="ri-map-pin-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i> ${price}{" "}
                      /person
                    </span>
                    <span>
                      <i className="ri-map-pin-line"></i> {distance} Km
                    </span>
                    <span>
                      <i className="ri-group-line"></i> {maxGroupSize} people
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* ===================== Tour Reviews Section ===================== */}
                <div className="tour__reviews mt-4">
                  <h4>
                    Reviews ({reviews?.length} review
                    {reviews?.length > 1 && "s"})
                  </h4>

                  <Form onSubmit={submitHandler}>
                    <div className="rating__group d-flex align-items-center gap-3 mb-4">
                      <span onClick={() => setTourRating(1)}>
                        1 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i className="ri-star-fill"></i>
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i className="ri-star-fill"></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="Submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={avatar} />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Hra</h5>
                              <p>
                                {new Date("2024-06-25").toLocaleDateString(
                                  "fr-FR",
                                  {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5 <i className="ri-star-fill"></i>
                            </span>
                          </div>

                          <h6>Great Experience</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                  <ListGroup className="user__reviews">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={younes} alt="" />

                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Younes</h5>
                              <p>
                                {new Date("2024-06-26").toLocaleDateString(
                                  "fr-FR",
                                  {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5 <i className="ri-star-fill"></i>
                            </span>
                          </div>

                          <h6>Amazing Tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* ===================== Tour Reviews Section ===================== */}
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default TourDetails

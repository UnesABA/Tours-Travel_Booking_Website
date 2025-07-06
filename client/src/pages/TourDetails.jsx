import { useEffect, useRef, useState, useContext } from "react"
import { Container, Row, Col, Form, ListGroup } from "reactstrap"
import { useParams } from "react-router-dom"
import calculateAvgRating from "../utils/AvgRating"
import avatar from "../assets/images/avatar.jpg"
import younes from "../assets/images/Younes_AIT_BEN_ALI.jpg"
import Booking from "../components/booking/Booking"
import Newsletter from "../shared/Newsletter"
import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/Config"
import { ClipLoader } from "react-spinners"
import { AuthContext } from "../context/AuthContext"
import "../styles/tour-details.css"

const TourDetails = () => {
  const { id } = useParams()
  const reviewMsgRef = useRef("")
  const [tourRating, setTourRating] = useState(null)
  const { user } = useContext(AuthContext)

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)

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

  const submitHandler = async (event) => {
    event.preventDefault()
    const reviewText = reviewMsgRef.current.value

    try {
      if (!user) {
        alert("Please sign in")
        return
      }

      const reviewObj = {
        username: user.username,
        reviewText,
        rating: tourRating,
      }

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      })

      const result = await res.json()
      if (!res.ok) {
        return alert(result.message)
      }

      alert("Review submitted successfully!")
      reviewMsgRef.current.value = ""
      setTourRating(null)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    window.scroll(0, 0)
  }, [tour])

  return (
    <>
      <section>
        <Container>
          {loading && (
            <div className="d-flex justify-content-center align-items-center h-40">
              <ClipLoader color="#3b82f6" size={400} />
            </div>
          )}
          {error && alert({ error })}

          {!loading && !error && (
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
                          <span>{reviews?.length}</span>
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
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date(review.createdAt).toLocaleDateString(
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
                                {review.rating} <i className="ri-star-fill"></i>
                              </span>
                            </div>

                            <h6>{review.reviewText}</h6>
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
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default TourDetails

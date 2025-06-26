import { Container, Row, Col, Form, ListGroup } from "reactstrap"
import { useParams } from "react-router-dom"
import tourData from "../assets/data/tours"
import calculateAvgRating from "../utils/AvgRating"
import "../styles/tour-details.css"

const rafce = () => {
  const { id } = useParams()

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

  return (
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
                    {calculateAvgRating === 0 ? null : avgRating}{" "}
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
                    <i className="ri-money-dollar-circle-line"></i> ${price} per
                    person
                  </span>
                  <span>
                    <i className="ri-group-line"></i> {maxGroupSize}
                  </span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ===================== Tour Reviews Section ===================== */}
                
              {/* ===================== Tour Reviews Section ===================== */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default rafce

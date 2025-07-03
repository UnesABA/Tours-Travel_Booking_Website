import CommonSection from "../shared/CommonSection"
import { Container, Row, Col } from "reactstrap"
import SearchBar from "../shared/SearchBar"
import Newsletter from "../shared/Newsletter"
import TourCard from "../shared/TourCard"
import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/Config"
import { ClipLoader } from "react-spinners"
import "../styles/tour.css"

const Tours = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`)
  const { data: tourCount } = useFetch(
    `${BASE_URL}/tours/search/getToursCount`
  )

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8)
    setPageCount(pages)
    window.scroll(0, 0)
  }, [page, tourCount])

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {loading && (
              <div className="d-flex justify-content-center align-items-center h-40">
                <ClipLoader color="#3b82f6" size={300} />
              </div>
            )}
            {error && alert("Failed to fetch")}
            {!loading &&
              !error &&
              tours.map((tour) => {
                return (
                  <Col lg="3" className="mt-4" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                )
              })}

            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  )
}

export default Tours

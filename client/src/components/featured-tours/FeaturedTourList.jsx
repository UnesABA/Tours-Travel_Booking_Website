import tourData from "../../assets/data/tours"
import { Col } from "reactstrap"
import TourCard from "../../shared/TourCard"
import useFetch from "../../hooks/useFetch"
import { BASE_URL } from "../../utils/Config"
import { ClipLoader } from "react-spinners"

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center h-40">
          <ClipLoader color="#3b82f6" size={300} />
        </div>
      )}
      {error && <h4> {error}</h4>}

      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  )
}

export default FeaturedTourList

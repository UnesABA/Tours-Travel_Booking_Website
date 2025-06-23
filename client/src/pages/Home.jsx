import { Container, Row, Col } from "reactstrap"
import heroImg                 from "../assets/images/hero-img01.jpg"
import heroImg02               from "../assets/images/hero-img02.jpg"
import heroVideo               from "../assets/images/hero-video.mp4"
import worldImg                from "../assets/images/world.png"
import Subtitle                from "../shared/Subtitle"
import SearchBar               from "../shared/SearchBar"
import ServicesList            from "../services/ServicesList"
import "../styles/home.css"

const Home = () => {
  return (
    <>
      {/* ===================== Hero Section ===================== */}
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You GO"} />
                <img src={worldImg} />
              </div>
              <h1>
                Traveling opens the door to creating{" "}
                <span className="highlight">memories</span>
              </h1>
            </div>
            <p>
              Whether you're exploring hidden gems or iconic landmarks, every
              journey offers a chance to discover new cultures, meet amazing
              people, and step outside your comfort zone. Traveling isn't just
              about seeing the world—it's about experiencing it and making
              unforgettable memories along the way.
            </p>
          </Col>

          <Col>
            <div className="hero__img-box">
              <img src={heroImg} />
            </div>
          </Col>
          <Col>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} controls />
            </div>
          </Col>
          <Col>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
      {/* ===================== Hero Section ===================== */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home

import { Container, Row, Col } from "reactstrap"
import heroImg                 from "../assets/images/hero-img01.jpg"
import heroImg02               from "../assets/images/hero-img02.jpg"
import heroVideo               from "../assets/images/hero-video.mp4"
import worldImg                from "../assets/images/world.png"
import experienceImg           from "../assets/images/experience.png"
import Subtitle                from "../shared/Subtitle"
import SearchBar               from "../shared/SearchBar"
import ServicesList            from "../services/ServicesList"
import FeaturedTourList        from "../components/featured-tours/FeaturedTourList"
import "../styles/home.css"
import MasonryImagesGallery    from "../components/image-gallery/MasonryImagesGallery"
import Testimonials            from "../components/testimonial/Testimonials"
import Newsletter from "../shared/Newsletter"

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
      {/* ===================== Tour Section ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ===================== Tour Section ===================== */}
      {/* ===================== Experience Section ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  With years of delivering unforgettable journeys,
                  <br />
                  our team has the experience and passion to craft your perfect
                  travel story.
                  <br />
                   From handpicked destinations to seamless planning,
                  <br />
                  we’re here to make every moment count.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Seccessfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src= {experienceImg} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===================== Experience Section ===================== */}
      {/* ===================== Gallery Section ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"}/>
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===================== Gallery Section ===================== */}
      {/* ===================== Testimonial Section ===================== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"}/>
              <h2 className="testimonial__title">
                What our fans say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===================== Testimonial Section ===================== */}
      <Newsletter />
    </>
  )
}

export default Home

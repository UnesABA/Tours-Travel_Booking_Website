import "./newsletter.css"
import { Container, Row, Col } from "reactstrap"
import maleTourist from "../assets/images/male-tourist.png"

function Newsletter() {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Join our newsletter and be the first to discover exclusive
                travel deals, expert tips, and hidden gems around the world.
                Whether you're planning your next big adventure or just
                dreaming of one, we've got the inspiration you need!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src= {maleTourist} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter

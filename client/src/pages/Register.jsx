import { useState } from "react"
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import registerImg from "../assets/images/register.png"
import userIcon from "../assets/images/user.png"
import "../styles/register.css"

const Register = () => {
  const navigate = useNavigate()
  const[credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    username: undefined,
  })

  const handleChange = (event) => {

    setCredentials( prev => ({ ...prev, [event.target.id]: event.target.value}))
  }

  const handleClick = (event) =>{
    event.preventDefault()

    // navigate("/home")
  }

  return (
    <section className="register">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="register__container d-flex justify-content-between">
              <div className="register__img">
                <img src={registerImg} />
              </div>

              <div className="register__form">
                <div className="user">
                  <img src={userIcon} />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <Button
                    className="auth__btn btn secondary__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>

                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register

import { useState, useContext } from "react"
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap"
import { Link, useNavigate } from "react-router-dom"
import registerImg from "../assets/images/register.png"
import userIcon from "../assets/images/user.png"
import { AuthContext } from "../context/AuthContext"
import { BASE_URL } from "../utils/Config"
import "../styles/register.css"

const Register = () => {
  const navigate = useNavigate()
  const[credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
    username: undefined,
  })

  const {dispatch} = useContext(AuthContext)

  const handleChange = (event) => {

    setCredentials( prev => ({ ...prev, [event.target.id]: event.target.value}))
  }

  const handleClick = async (event) =>{
    event.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok){
        return alert(result.message)
      }
      dispatch({type: "REGISTER_SUCCESS"})
      navigate("/login")
      
    } catch (error) {
      alert(error.message)
    }
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

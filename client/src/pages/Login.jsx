import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import "../styles/login.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate()
  const[credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const handleChange = (event) => {

    setCredentials(prev => [...prev], [event.target.id]= [event.target.value])
  };

  const handleClick = (event) =>{
    event.preventDefault()

    // navigate("/home")
  }

  return (
    <section className="login">
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
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
                    Login
                  </Button>
                </Form>

                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;

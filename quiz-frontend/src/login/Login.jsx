import React from "react";
import "./Login.css";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import {
  FaLock,
  FaUser,
  FaUserCircle,
  FaFacebook,
  FaTwitterSquare,
  FaGoogle,
} from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="quizBody text-white">
        <Container className="d-flex justify-content-center">
          <div className="form-box bg-black d-flex justify-content-start">
            <div className="header-form">
              <h4 className="text-primary text-center">
                <FaUserCircle fontSize="110px" />
              </h4>
            </div>
            <div className="body-form">
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <FaLock />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button variant="secondary" size="lg">
                  Login
                </Button>{" "}
                <div className="message">
                  <div>
                    <input type="checkbox" /> Remember ME
                  </div>
                  <div>
                    <a href="#">Forgot your password</a>
                  </div>
                </div>
              </Form>
              <div className="social">
                <a href="#">
                  <FaFacebook className="icon" />
                </a>
                <a href="#">
                  <FaTwitterSquare className="icon" />
                </a>
                <a href="#">
                  <FaGoogle className="icon " />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Container fluid className="bg-success">
      <Navbar collapseOnSelect expand="lg">
        <Container >
          <Navbar.Brand href="#home">Quiz-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">View Quiz</Nav.Link>
              <Nav.Link href="#pricing">Add Quiz</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link href="#memes">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;

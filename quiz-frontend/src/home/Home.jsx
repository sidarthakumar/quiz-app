import React from "react";
import "./Home.css";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";

const Home = () => {
  return (
    <div className="quizBody">
      <Container className="quizContainer">
        <Button variant="success">Play Quiz</Button>{" "}
      </Container>
    </div>
  );
};

export default Home;

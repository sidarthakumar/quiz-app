import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ViewQuiz.css";

const ViewQuiz = () => {
  return (
    <div className="quizBody">
      <Container className="d-flex flex-column align-items-center ">
        <Row className="viewQuizData mt-2 w-75">
          <Col>
            <h1 className="text-center text-danger border border-danger rounded-4 bg-warning m-auto w-100">
              View Quiz
            </h1>
          </Col>
        </Row>
        <div className="mt-2 d-flex flex-column align-items-center gap-2">
          <Row className="viewQuizQuestion m-auto text-danger border border-danger rounded-4">
            <Col lg={1}>
              <h2>Q.1- </h2>
            </Col>
            <Col>
              <h2>
                jjjjj jjjjjjjjjj jjjjj jjjjj jjjjjjjjj jjjjj jjjjjjjjjj jjjjj
                jjjjj jjjjjjjjj jjjjj jjjjjjjjjj jjjjj jjjjj jjjjjjjjj jjjjj
                jjjjjjjjjj jjjjj jjjjj jjjjjjjjj jjjjj jjjjj
              </h2>
            </Col>
          </Row>
          <Row className="viewQuizOption text-danger border border-danger rounded-4">
            <Col lg={1}>
              <h2>A)- </h2>
            </Col>
            <Col>
              <h2>jjjjj</h2>
            </Col>
          </Row>
          <Row className="viewQuizOption text-danger border border-danger rounded-4">
            <Col lg={1}>
              <h2>B)- </h2>
            </Col>
            <Col>
              <h2>jjjjj</h2>
            </Col>
          </Row>
          <Row className="viewQuizOption text-danger border border-danger rounded-4">
            <Col lg={1}>
              <h2>C)- </h2>
            </Col>
            <Col>
              <h2>jjjjj</h2>
            </Col>
          </Row>
          <Row className="viewQuizOption text-danger border border-danger rounded-4">
            <Col lg={1}>
              <h2>D)- </h2>
            </Col>
            <Col>
              <h2>jjjjj</h2>
            </Col>
          </Row>
        </div>
        
      </Container>
    </div>
  );
};

export default ViewQuiz;

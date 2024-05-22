import React from "react";
import {Container,Button, Row, Col} from "react-bootstrap";
import './ViewQuiz.css'

const ViewQuiz = () => {
  return (
    <div className="quizBody">
      <Container className="viewQuizContainer border border-danger">
        <Row className="viewQuizData border border-danger">
          <Col><h1>View Quiz</h1></Col>
        </Row>
        <Row className="viewQuizQuestion border border-danger">
          <Col lg={1}><h2>Q.1 - </h2></Col>
          <Col><h2>jjjjj jjjjjjjjjj jjjjj jjjjj jjjjjjjjj jjjjj jjjjjjjjjj jjjjj jjjjj jjjjjjjjj jjjjj jjjjjjjjjj jjjjj jjjjj jjjjjjjjj jjjjj jjjjjjjjjj jjjjj jjjjj jjjjjjjjj jjjjj jjjjj</h2></Col>
        </Row>
      
      <div>
        <h2></h2>
      </div>
      
      <div className="d-grid gap-2 pt-2 w-50 border border-danger">
        
      <Button variant="primary" size="lg">
        Block level button
      </Button>
      <Button variant="secondary" size="lg">
        Block level button
      </Button>
    </div>
      </Container>
    </div>
  );
};

export default ViewQuiz;

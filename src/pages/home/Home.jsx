import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./home.css";

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Choose your restaurant</h1>
        <div className='container'>
          <Row xs={1} md={2} className='g-4'>
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Body style={{ color: "black", fontSize: "1.2rem" }}>
                    <Card.Title>Nice restaurant</Card.Title>
                    <Card.Text>Try it here!</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </header>
    </div>
  );
};

export default Home;

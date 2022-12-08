import React from "react";
import "./Banner.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col>
            <div className="pc">
              <img
                src="https://www.connectingtechpeople.com/img/home-slider-04.webp"
                alt=""
              />
              <div className="video"></div>
            </div>
          </Col>
          <Col>
            <p>
              ¿Necesitas talento <strong>IT</strong> para tu empresa?
            </p>
            <h1>Te aportamos el reclutamiento IT</h1>
            <Button variant="primary">Aquí</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

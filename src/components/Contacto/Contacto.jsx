import React from "react";
import "./Contacto.css";
import { Col, Container, Row } from "react-bootstrap";

export const Contacto = () => {
  return (
    <div className="contacto">
      <Container>
        <Row>
          <Col md="4">
            <Row>
              <Col md="12">
                <div className="box-icon-header">
                  <h5 className="box-icon-title">Visitanos</h5>
                </div>
                <div className="box-icon-text">
                  <a
                    href="https://goo.gl/maps/fp1hKWniReZKU2i57"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Paseo de la Castellana 91, <br />
                    4° - 1° 28046 Madrid
                  </a>
                </div>
              </Col>
              <Col md="12">
                <div className="box-icon-header">
                  <h5 className="box-icon-title">Llámanos</h5>
                </div>
                <div className="box-icon-text">
                  <a href="tel:+34600207741">+34 600 20 77 41</a>
                  <br />
                  <a href="tel:+34911853110">+34 911 85 31 10</a>
                </div>
              </Col>
              <Col md="12">
                <div className="box-icon-header">
                  <h5 className="box-icon-title">Escribenos</h5>
                </div>
                <div className="box-icon-text">
                  <a href="mailto:hola@connectingtechpeople.com">
                    hola@connectingtechpeople.com
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="7">
            <h3 className="contact-title">¿Tienes dudas?</h3>
            <h6>
              No lo pienses más, <span className="text-italic">conectemos</span>
            </h6>
            <div className="form">
              <form>
                <div className="input">
                  <input type="text" placeholder="Nombre" />
                </div>
                <div className="input">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                  <input type="number" placeholder="Teléfono" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Mensaje" />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

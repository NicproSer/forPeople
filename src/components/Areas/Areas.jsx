import React from "react";
import "./Areas.css";
import { Col, Row } from "react-bootstrap";

export const Areas = () => {
  return (
    <div className="areas text-center text-white">
      <Row>
        <Col md="6" className="section-turquesa wrapArea">
          <div className="text">
            <h2>Área de empresas</h2>
            <p>
              Somos tu fiel aliado en la búsqueda de talento tecnológico.
              Armamos equipos permanentes y temporales para el desarrollo de tus
              proyecto
            </p>
            <br />
            <p>
              Nuestra metodología de agencia de contratación IT es sencilla y
              eficiente, te invitamos a conocer las ventajas de conectar con
              nosotros
            </p>
          </div>
        </Col>
        <Col md="6" className="imgEmpresas wrapArea"></Col>
      </Row>
      <Row>
        <Col md="6" className="imgProfesionales wrapArea"></Col>
        <Col md="6" className="section-turquesa wrapArea">
          <div className="text">
            <h2>Área de Profesionales</h2>
            <p>
              Si eres un profesional y buscas contactar con empresas, te
              acompañaremos en el proceso de búsqueda sin que esto suponga un
              coste para tí.
            </p>
            <br />
            <p>
              Te conectamos con los proyecto más interesante y con las
              tecnologías del momento
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

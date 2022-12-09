import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Benefcios.css";

export const Beneficios = () => {
  return (
    <div className="beneficios">
      <Container>
        <h4 className="text-center">
          Ahorra tiempo y dinero con nosotros. Hacemos que tu proceso de
          selección de talento IT sea rápido, fácil y sencillo. Cuéntanos lo que
          necesitas y te conectamos con los candidatos que hacen match con tus
          necesidades. Adiós a las largas entrevistas, el papeleo y la
          contratación de personas que no impulsan tu proyecto.
        </h4>
        <Row>
          <Col md="4">
            <span>Optimizamos tu Tiempo</span>
            <p>
              Tu tiempo es oro, por eso, en Connecting Tech People, nos ocupamos
              de la parte más compleja de la búsqueda de talentos. En nuestro
              programa de reclutamiento IT, seleccionamos, filtramos y sometemos
              candidatos a pruebas técnicas, sin que esto suponga un coste para
              ti.
            </p>
          </Col>
          <Col md="4">
            <span>Somos amantes del códigp</span>
            <p>
              Nuestro reclutamiento de talento es altamente efectivo, porque
              somos expertos y entendemos lo que necesitas. Identificamos al
              profesional adecuado a tu necesidad Nuestro equipo de arquitectos
              validan sus habilidades Lo conectamos contigo.
            </p>
          </Col>
          <Col md="4">
            <span>Simplicamos el proceso</span>
            <p>
              Connecting Tech People hace que tu proceso de selección de talento
              sea rápido, fácil y sencillo. Sólo nos cuentas lo que necesitas y
              ubicamos el talento que mejor se ajusta a tu demanda en términos
              de capacitación, ubicación y presupuesto.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

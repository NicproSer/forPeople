import React from "react";
import "./Colaboradores.css";
import Container from "react-bootstrap/Container";

export const Colaboradores = () => {
  return (
    <div className="colaboradores">
      <Container>
        <h5>
          <strong>
            Captamos colaboradores de alto nivel y los conectamos contigo.
            Ahorra tiempo, dinero y papeleo uniendote a nuestra
          </strong>{" "}
          agencia de contratación IT
        </h5>
        <h5>
          <strong>Sabemos que el talento</strong>{" "}
          <span className="text-light">IT</span>{" "}
          <strong>
            capacitado y comprometido es clave para lograr equipos de éxito. Por
            eso en Connecting Tech People lo ubicamos para ti.
          </strong>
        </h5>
      </Container>
    </div>
  );
};

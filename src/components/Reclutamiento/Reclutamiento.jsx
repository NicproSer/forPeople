import React from "react";
import "./Reclutamiento.css";
import Container from "react-bootstrap/Container";

export const Reclutamiento = () => {
  return (
    <div className="reclutamiento text-center">
      <Container>
        <h2>¿Cómo hacemos reclutamiento IT?</h2>
        <p>
          Nuestra metodología "Customer First" se basa en la satisfacción de
          nuestros clientes. Tenemos 15 años gestionando con eficacia las
          demandas tecnológicas de reconocidas empresas, y contribuyendo en la
          formación de equipos productivos y competentes.
        </p>
        <p>
          Somos expertos en tecnología y también asesores y{" "}
          <span className="connecting-brand">consultores tecnológicos</span>, lo
          que nos ha permitido ampliar nuestro staff de contactos en el sector,
          como una reconocida{" "}
          <span className="connecting-brand">agencia de reclutamiento</span>.
          Contamos con un pool de talento altamente capacitado, listo para
          conectarse con tus equipos de desarrollo a corto o largo plazo, en
          modalidad presencial o remota
        </p>
        <p>
          Nuestros clientes reconocen las excelentes tarifas y la alta
          competitividad de nuestros profesionales.
          <br />
          Te invitamos a conocer esta{" "}
          <span className="connecting-brand">
            agencia de reclutamiento IT
          </span>{" "}
          y nuestra oferta de servicio. Ingresa en{" "}
          <span className="connecting-a">
            <a rel="noreferrer" href="/">
              área para empresas
            </a>
          </span>{" "}
          y conoce las ventajas de conectarte con nosotros.
        </p>
        <br />
        <br />
        <h3>Conectemos...</h3>
      </Container>
    </div>
  );
};

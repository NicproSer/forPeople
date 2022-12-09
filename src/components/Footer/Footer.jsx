import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";

export const Footer = () => {
  return (
    <div className="footer text-center text-white">
      <Container>
        <span>Connecting Tech People SL &copy;. All Rights Reserved</span>
        <br />
        <a href="/" className="footerLink">
          Aviso Legal
        </a>
      </Container>
    </div>
  );
};

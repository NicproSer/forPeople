import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/logo.9696e8fe.gif";
import "./Navbar.css";

export const NavbarB = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".navbar");
    header.classList.toggle("sticky", this.window.scrollY > 0);
  });
  return (
    <>
      <Navbar expand="lg" fixed="top" variant="dark" className="mb-3">
        <Container xxl={12}>
          <Navbar.Brand href="#">
            <img src={Logo} alt="" className="logoImg" loading="lazy" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="mr-auto">
              <Nav.Link active href="#">
                Inicio
              </Nav.Link>
              <Nav.Link active href="#">
                Nosotros
              </Nav.Link>
              <Nav.Link active href="#">
                Empresa
              </Nav.Link>
              <Nav.Link active href="#">
                Busco Talento
              </Nav.Link>
              <Nav.Link active href="#">
                Profesionales
              </Nav.Link>
              <Nav.Link active href="#">
                Busco Empleo
              </Nav.Link>
              <Nav.Link active href="#">
                Blog
              </Nav.Link>
              <Nav.Link active href="#">
                Contacto
              </Nav.Link>
              <Nav.Link active href="#">
                Es
              </Nav.Link>
              <Nav.Link active href="#">
                En
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

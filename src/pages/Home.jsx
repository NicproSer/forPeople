import React from "react";
import Preloader from "../components/Preloader/Preloader";
import { NavbarB } from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import { Colaboradores } from "../components/Colaboradores/Colaboradores";
import { Reclutamiento } from "../components/Reclutamiento/Reclutamiento";
import { Contadores } from "../components/Contadores/Contadores";
import { Beneficios } from "../components/Beneficios/Beneficios";
import { Areas } from "../components/Areas/Areas";
import { Contacto } from "../components/Contacto/Contacto";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Preloader />
      <NavbarB />
      <Banner />
      <Colaboradores />
      <Reclutamiento />
      <Contadores />
      <Beneficios />
      <Areas />
      <Contacto />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Home;

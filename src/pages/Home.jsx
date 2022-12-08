import React from "react";
import Preloader from "../components/Preloader/Preloader";
import { NavbarB } from "../components/Navbar/Navbar";
import { Banner } from "../components/Banner/Banner";
import { Reclutamiento } from "../components/Reclutamiento/Reclutamiento";
import { Colaboradores } from "../components/Colaboradores/Colaboradores";
import { ScrollButton } from "../components/ScrollButton/ScrollButton";
import { Footer } from "../components/Footer/Footer";
import { Contadores } from "../components/Contadores/Contadores";
import { Beneficios } from "../components/Beneficios/Beneficios";

export const Home = () => {
  return (
    <>
      <Preloader />
      <NavbarB />
      <Banner />
      <Colaboradores />
      <Reclutamiento />
      <Contadores />
      <Beneficios />
      <ScrollButton />
      <Footer />
    </>
  );
};

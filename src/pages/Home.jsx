import React from "react";
import Preloader from "../components/Preloader/Preloader";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import { NavbarB } from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import { Colaboradores } from "../components/Colaboradores/Colaboradores";
import { Footer } from "../components/Footer/Footer";
import { Reclutamiento } from "../components/Reclutamiento/Reclutamiento";
const Home = () => {
  return (
    <>
      <Preloader />
      <NavbarB />
      <Banner />
      <Colaboradores />
      <Reclutamiento />
      <ScrollButton />
      <Footer />
    </>
  );
};

export default Home;

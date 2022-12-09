import React from "react";
import { Preloader } from "../components/Preloader/Preloader";
import { NavbarB } from "../components/Navbar/Navbar";
import { Banner } from "../components/Banner/Banner";
import { Reclutamiento } from "../components/Reclutamiento/Reclutamiento";
import { ScrollButton } from "../components/ScrollButton/ScrollButton";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Preloader />
      <NavbarB />
      <Banner />
      <Reclutamiento />
      <ScrollButton />
      <Footer />
    </div>
  );
};

import React from "react";
import Preloader from "../components/Preloader/Preloader";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import { NavbarB } from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
const Home = () => {
  return (
    <>
      <Preloader />
      <NavbarB />
      <Banner />
      <ScrollButton />
    </>
  );
};

export default Home;

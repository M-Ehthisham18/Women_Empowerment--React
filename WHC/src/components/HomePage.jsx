import React, { useState } from "react";
import Womens from './Womens'
import Health from "./Health";
import Safety from "./Safety";
import Education from "./Education";
import Role from "./Role";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero"

const HomePage = () => {

  // Function to handle the close of the overlay menu
  

  return (
    <>
      <Header/>
      <Hero/>
      <Womens />
      <Health />
      <Safety/>
      <Education/>
      <Role/>
      <Footer/>
    </>
  );
};

export default HomePage;

import React from "react";
import Womens from "../components/Womens";
import Health from "../components/Health";
import Safety from "../components/Safety";
import Education from "../components/Education";
import Role from "../components/Role";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Askme from "../components/Askme";

const Home = () => {
  return (
    <div className="relative">
      <div >
      <Hero />
      <Womens />
      <Health />
      <Safety />
      <Education />
      <Role />
      <Footer />
      </div>
      <div className=" ">
      <Askme />
      </div>
    </div>
  );
};

export default Home;

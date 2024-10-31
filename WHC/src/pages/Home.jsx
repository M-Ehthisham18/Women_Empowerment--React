import React from 'react'
import Womens from '../components/Womens'
import Health from "../components/Health";
import Safety from "../components/Safety";
import Education from "../components/Education";
import Role from "../components/Role";
import Footer from "../components/Footer";
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Womens />
      <Health />
      <Safety/>
      <Education/>
      <Role/>
      <Footer/>
    </div>
  )
}

export default Home

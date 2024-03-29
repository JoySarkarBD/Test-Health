import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeCircles from "../components/HomeCircles";
import Navbar from "../components/Navbar";
import OurMission from "../components/OurMission";
import OurService from "../components/OurService";
import Purpose from "../components/Purpose";

const Home = () => {
  return (
    <>
      <div className='hero-container'>
        <Navbar />
        <Hero />
      </div>
      <Purpose />
      <AboutUs />
      <OurService />
      <OurMission />
      <HomeCircles />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import video from "../images/Health Ad Video Template (Editable).mp4";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id='hero-banner'>
      <div id='video-box'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>

      <div id='hero-content'>
        <h1>Pure Health</h1>
        <hr />
        <p>Positively impacting Health Outcomes</p>
        <div id='hero-button-container'>
          <button>
            <Link to='/register' style={{ color: "white" }}>
              Sign Up
            </Link>
          </button>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

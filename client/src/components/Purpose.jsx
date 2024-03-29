import React from "react";
import image from "../images/purpose.png";
import "../styles/purpose.css";

const Purpose = () => {
  return (
    <>
      <section className='container'>
        <h2 className='page-heading about-heading'>Purpose</h2>
        <div className='purpose'>
          <div className='hero-img'>
            <img src={image} alt='hero' />
          </div>
          <div className='hero-content purpose-content'>
            <p>
              Healthcare providers, and the teams that support them, are the
              driving force behind healthcare delivery, patient healthcare
              experiences and, ultimately, health outcomes.
              <br />
              <br />
              <br /> At Pure Health, our purpose is to modernize and improve
              healthcare delivery by empowering healthcare providers with
              cutting-edge digital technology, products and services that are
              designed to streamline care delivery, enhance/transform healthcare
              experiences, automate and digitize administrative tasks, and
              alleviate many of the inefficiencies and challenges faced by
              healthcare providers and the patients for whom they care.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Purpose;

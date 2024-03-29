import React from "react";
import image from "../images/mission.jpg";
import "../styles/purpose.css";

const OurMission = () => {
  return (
    <>
      <section className='container'>
        <h2 className='page-heading about-heading'>Our Mission</h2>
        <div className='purpose'>
          <div className='hero-img'>
            <img src={image} alt='hero' style={{ height: "500px" }} />
          </div>
          <div className='hero-content purpose-content'>
            <p>
              Our mission is to positively impact health outcomes <br /> by
              leveraging technology to empower and support <br /> healthcare
              providers and their patients globally.
            </p>

            <div className='list_content'>
              <div className='list'>
                <span>&#10004;</span>
                <p>Continue to Look After Patients</p>
              </div>
              <div className='list'>
                <span>&#10004;</span>
                <p>Giving Patients the Best Service Possible</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;

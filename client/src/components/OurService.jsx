import React from "react";
import Ambulance from "../images/ambulance.svg";
import service from "../images/service.svg";
import service2 from "../images/service2.svg";
import "../styles/ourService.css";
export default function OurService() {
  return (
    <section className='container'>
      <div>
        <h2 className='page-heading about-heading'>Our Services</h2>
        <p>Personlaized & Connected Care</p>
      </div>
      <div className='our-service'>
        <div className='box'>
          <img src={Ambulance} alt='Ambulance' />
          <div className='service-content'>
            <h4>Medical Specialist connect</h4>
            <span>
              Faster access to the right <br /> healthcare specialist
            </span>
          </div>
        </div>
        <div className='box middle'>
          <img src={service} alt='Ambulance' />
          <div className='service-content'>
            <h4>Appointment Services</h4>
            <span>
              Providing Appointment services to <br /> get the right treatment
              for the patients
            </span>
          </div>
        </div>
        <div className='box'>
          <img src={service2} alt='Ambulance' />
          <div className='service-content'>
            <h4>Account accessibility</h4>
            <span>
              Patients can have their own login <br /> account to get the better
              access to the healthcare specialist
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

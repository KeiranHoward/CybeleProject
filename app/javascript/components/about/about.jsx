import React from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import background from 'images/index-background.jpg';
import adopt from 'images/adopt.png';
import pets from 'images/pets.JPG'

const styles = {
  imageContainer: {
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundPositionY: '70%',
      overflow: 'hidden',
      backgroundRepeat:'no-repeat',
      backgroundImage: `url(${background})`

  }
};

const About = () => {
  return (
  <div className="py-5 about">
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
          <h2 className="display-6 text-white">What is The Cybele Project?</h2>
          <p className="font-italic text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={pets} alt="" className="img-fluid mb-4 mb-lg-0 pets"/></div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-5 px-5 mx-auto"><img src={adopt} alt="" className="img-fluid mb-4 mb-lg-0 adopt"/></div>
        <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
          <h2 className="display-6 text-white">Adoptions</h2>
          <p className="font-italic text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn bg-info text-white px-3 rounded-pill shadow-sm">Learn More</a>
        </div>
      </div>
    </div>
  </div>
   
  )
};




export default About;

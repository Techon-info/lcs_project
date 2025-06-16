import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // initialize the hook

  const handleBookCall = () => {
    navigate('/contact'); // navigate to contact page
  };
  return (
    <>
    <div className="home-container">
      {/* Left content */}
      <div className="home-left">
        <h1 className="home-title">Empowering Brands. Elevating Growth.</h1>
        <p className="home-description">
          At Lazeno Consultancy Services, we help ambitious businesses thrive with expert consulting, innovative strategies, and impactful digital solutions. From content creation to SEO, we craft your success story.
        </p>
        <h2 className="tagline">“Your vision our digital strategy.”</h2>
        
        <button className="home-button" onClick={handleBookCall}>Book a Discovery Call</button>
      </div>

      <div className="home-right">
      <Carousel interval={3000} controls indicators={true} fade>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded shadow"
            src="carousel1.avif"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded shadow"
            src="carousel2.avif"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded shadow"
            src="carousel3.avif"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    
    </div>
    <Footer />
    </>
  );
};

export default Home;

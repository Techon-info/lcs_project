import React from "react";
import "./About.css";
import Footer from './Footer';
import {
  FaPenNib, FaPaintBrush, FaSearch, FaUsers, FaVideo,
  FaEnvelopeOpenText, FaChartLine, FaQuoteLeft,
  FaBullseye, FaEye, FaHandshake, FaStar, FaRocket, FaCogs
} from "react-icons/fa";

const services = [
  {
    icon: <FaPenNib />,
    title: "Content Creation",
    description: "Tailored content that informs, inspires, and converts — your voice, amplified.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Poster Designing",
    description: "Striking visuals that align brand identity with creativity.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    description: "Precision-tuned strategies to elevate search rankings.",
  },
  {
    icon: <FaUsers />,
    title: "Social Media Management",
    description: "Engaging communities and authentic online growth.",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description: "Dynamic visuals that captivate and communicate.",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Email Marketing",
    description: "Targeted messaging with automation and analytics.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Consultancy",
    description: "Smart strategies from ideation to execution.",
  },
];

const testimonials = [
  {
    name: "Anjali R.",
    feedback: "Lazeno's marketing strategies helped us scale our business online with measurable results.",
  },
  {
    name: "Vikram M.",
    feedback: "Exceptional creativity and delivery! The posters and video editing really brought our brand to life.",
  },
];

const About = () => {
  return (
    <>
    <div className="about container py-5">

      {/* Introduction */}
      <section className="mb-5">
        <h2 className="text-center mb-3 about-heading">Lazeno Consultancy Services</h2>
        <p className="text-center mx-auto" style={{ maxWidth: '750px', color: '#555' }}>
          We are your growth partners in the digital world. At Lazeno, we combine creativity, strategy,
          and technology to deliver solutions that build your brand, drive traffic, and convert leads.
        </p>
      </section>

      {/* Vision and Mission */}
      <div className="row text-center mb-5">
        <div className="col-md-6 mb-4">
          <div className="info-box p-4 shadow-sm">
            <FaEye className="info-icon" />
            <h4 className="mt-3">Our Vision</h4>
            <p> To set new benchmarks in digital marketing by delivering measurable value and creative excellence.</p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="info-box p-4 shadow-sm">
            <FaBullseye className="info-icon" />
            <h4 className="mt-3">Our Mission</h4>
            <p>Delivering smart, data-driven digital marketing strategies to help brands connect, grow, and lead.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h3 className="section-title text-center mb-4">Why Choose Lazeno?</h3>
        <div className="row text-center">
          <div className="col-sm-6 col-lg-3 mb-4">
            <FaHandshake className="icon-box mb-2" />
            <h5 className="card-title">Client-Centric</h5>
            <p className="card-text">Your goals are at the core of every solution we craft.</p>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <FaStar className="icon-box mb-2" />
            <h5 className="card-title">Creative Excellence</h5>
            <p className="card-text">We blend design with storytelling for lasting impressions.</p>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <FaRocket className="icon-box mb-2" />
            <h5 className="card-title">Results-Driven</h5>
            <p className="card-text">Focused on metrics that matter and ROI that grows.</p>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <FaCogs className="icon-box mb-2" />
            <h5 className="card-title">Full Stack Expertise</h5>
            <p className="card-text">From content to consulting, everything under one roof.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <h3 className="section-title text-center mb-4">Our Core Services</h3>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div className="card service-card text-center shadow-sm p-4">
              <div className="icon-box mb-3">{service.icon}</div>
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Specializations */}
      <div className="specializations my-5">
        <h3 className="section-title text-center mb-4">Our Specializations</h3>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="spec-item">Creative Strategy & Branding</div>
            <div className="spec-item">Visual Identity Development</div>
            <div className="spec-item">Campaign Planning</div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="spec-item">Social Campaign Management</div>
            <div className="spec-item">Technical SEO & Analytics</div>
            <div className="spec-item">Trend-based Social Insights</div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="spec-item">Multimedia Storytelling</div>
            <div className="spec-item">CRM-integrated Email Marketing</div>
            <div className="spec-item">Video & Motion Graphics</div>
          </div>
        </div>
      </div>

      {/* Impact Numbers
      <section className="my-5 text-center">
        <h3 className="section-title mb-4">Our Impact</h3>
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <h2 className="text-p1">50+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <h2 className="text-p1">120+</h2>
            <p>Projects Completed</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <h2 className="text-p1">30+</h2>
            <p>Industries Served</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <h2 className="text-p1">95%</h2>
            <p>Repeat Clients</p>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <div className="testimonials text-center mt-5">
        <h3 className="section-title mb-4">What Our Clients Say</h3>
        <div className="row">
          {testimonials.map((item, i) => (
            <div className="col-md-6 mb-4" key={i}>
              <div className="testimonial-box p-4 shadow-sm">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text mt-3">{item.feedback}</p>
                <p className="client-name mt-2">- {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;

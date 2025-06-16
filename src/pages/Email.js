import React from 'react';
import './Email.css';
import { useNavigate } from 'react-router-dom';
import { FaBullhorn, FaChartLine, FaRobot, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
const EmailMarketing = () => {
  const navigate = useNavigate(); // initialize the hook

  const handleBookCall = () => {
    navigate('/contact'); // navigate to contact page
  };
  const benefits = [
    {
      icon: <FaBullhorn size={32} color="#1d72b8" />,
      title: "Direct Communication",
      desc: "Engage your audience right in their inbox with targeted messages.",
    },
    {
      icon: <FaChartLine size={32} color="#28a745" />,
      title: "High ROI",
      desc: "Email marketing delivers the highest return on investment among all channels.",
    },
    {
      icon: <FaRobot size={32} color="#ffc107" />,
      title: "Automation & Personalization",
      desc: "Deliver personalized journeys without lifting a finger.",
    },
    {
      icon: <FaSearch size={32} color="#e83e8c" />,
      title: "Real-time Tracking",
      desc: "Track opens, clicks, and engagement instantly.",
    },
  ];

  return (
    <div className="email-marketing-container">
      
      <section className="email-hero">
  <div className="email-hero-content">
    <div className="email-hero-text">
      <h1 className="fw-bold display-5 text-center text-md-start">Email Marketing Services</h1>
      <p>
        Engage. Convert. Grow. Elevate your brand with data-driven email strategies.  
        From personalized campaigns and automated workflows to compelling copy and responsive designs, we craft emails that your audience actually wants to open.  
        Our approach focuses on delivering the right message at the right time — boosting open rates, click-throughs, and long-term customer loyalty.
      </p>
      <button className="email-btn" onClick={handleBookCall}>Contact Us</button>
    </div>
    <div className="email-hero-image">
      <img src="email.jpeg" alt="Email Marketing Illustration" />
    </div>
  </div>
</section>




      {/* Services Section */}
      <section className="email-services">
        <h2>Our Email Marketing Solutions</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Custom Campaign Design</h3>
            <p>Visually rich, personalized emails that reflect your brand voice and increase open rates.</p>
          </div>
          <div className="service-card">
            <h3>Automation & Funnels</h3>
            <p>Convert leads into customers with automated sequences that do the work for you.</p>
          </div>
          <div className="service-card">
            <h3>Segmentation & Targeting</h3>
            <p>Deliver relevant content to the right audience using smart segmentation.</p>
          </div>
          <div className="service-card">
            <h3>Analytics & Reporting</h3>
            <p>Track performance with real-time dashboards and optimize for better results.</p>
          </div>
        </div>
      </section>

      {/* Why Email Marketing */}
        <section className="email-benefits">
      <h2>Why Email Marketing?</h2>
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="benefit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Featured Tools */}
      <section className="email-tools">
        <h2>Tools We Use</h2>
        <div className="tools-grid">
          <div className="tool">Mailchimp</div>
          <div className="tool">HubSpot</div>
          <div className="tool">Klaviyo</div>
          <div className="tool">ActiveCampaign</div>
        </div>
      </section>

     <section className="email-process">
  <h2 className="process-title">Our Strategic Process</h2>
  <div className="process-timeline">
    <div className="timeline-step">
      <div className="step-icon">🔍</div>
      <h4>Audience Analysis</h4>
      <p>Understand target demographics, behaviors, and preferences to tailor campaigns.</p>
    </div>
    <div className="timeline-step">
      <div className="step-icon">📝</div>
      <h4>Campaign Planning</h4>
      <p>Design goal-driven email strategies with proper segmentation and timelines.</p>
    </div>
    <div className="timeline-step">
      <div className="step-icon">🎨</div>
      <h4>Design & Copywriting</h4>
      <p>Create engaging email templates with compelling visuals and persuasive content.</p>
    </div>
    <div className="timeline-step">
      <div className="step-icon">🚀</div>
      <h4>Launch & Automate</h4>
      <p>Deploy campaigns with smart automation for personalized customer journeys.</p>
    </div>
    <div className="timeline-step">
      <div className="step-icon">📊</div>
      <h4>Optimize & Report</h4>
      <p>Analyze metrics and continuously refine performance for better ROI.</p>
    </div>
  </div>
</section>

      {/* Testimonials */}
      <section className="email-testimonials">
        <h2>Client Success Stories</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"The results speak for themselves—our engagement tripled in just one month!"</p>
            <h4>- Kavya, eCommerce Owner</h4>
          </div>
          <div className="testimonial">
            <p>"Their team turned email marketing into our top-performing channel. Impressive work!"</p>
            <h4>- Rajesh, SaaS Founder</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="email-cta">
        <button className="btn9" onClick={handleBookCall}>Book a Free Consultation</button>
       
      </footer>
    </div>
  );
};

export default EmailMarketing;

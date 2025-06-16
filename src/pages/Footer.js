import React, { useState } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faThreads } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }

    // Here you can integrate an email API like Mailchimp, SendGrid, etc.
    console.log("Newsletter email submitted:", email);
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="footer mt-auto py-5">
      <div className="container text-center text-md-start">
        <div className="row">

          {/* Brand Info */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="footer-title">Lazeno Consultancy Services</h5>
            <p className="footer-text">
              Empowering your digital presence with innovation and strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h6 className="footer-subtitle">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="footer-subtitle">Contact Info</h6>
            <p><FaMapMarkerAlt className="footer-icon" /> 123, Digital Park, Tech City, India</p>
            <p><FaPhoneAlt className="footer-icon" /> +91 98765 43210</p>
            <p>
              <a href="mailto:lazenocons01@gmail.com" style={{ color: "white" }}>
                <FaEnvelope className="footer-icon" /> lazenocons01@gmail.com
              </a>
            </p>
            <p><FaClock className="footer-icon" /> Mon - Fri: 9 AM - 6 PM</p>
          </div>

          {/* Newsletter & Social */}
          <div className="col-md-4">
          <h6 className="footer-subtitle">Newsletter Signup</h6>
<p>Stay updated with our latest news and offers</p>
<form className="d-flex mb-3" onSubmit={handleNewsletterSubmit}>
  <input
    type="email"
    className="form-control"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <button type="submit" className="btn1 ms-2">Subscribe</button>
</form>


            <p className="mb-2">Follow us for latest updates</p>
            <div className="social-icons">
              <a href="https://wa.me/916369836057" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
              <a href="https://www.facebook.com/share/16cECshpat/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/_lcs_official?igsh=emkxdjFudTR4ODh6" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://x.com/lcs_official_X?t=YJHZ8NS7XHgiCz8aagoBGA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
              <a href="https://www.threads.net/@_lcs_official" target="_blank" rel="noopener noreferrer" aria-label="Threads"><FontAwesomeIcon icon={faThreads} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-4">
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} Lazeno Consultancy Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

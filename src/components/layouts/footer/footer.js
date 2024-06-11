import React from 'react'
import './footer.css'

import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>COLLECTION</span>
          </h1>
          <p>
            Welcome to the COLLECTION, where you will find all the products you
            need. We are committed to providing you with the best we have,
            focusing on quality, customer service, and individuality.
          </p>
          <div className="contact">
            <span>
              <FaPhone /> &nbsp;+(212)606000000
            </span>
            <span>
              <FaEnvelope /> &nbsp; collection@gmail.com
            </span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="footer-section subscribe">
          <h2>Subscribe</h2>
          <br />
          <p>Sign up with your email address to receive news and updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <br />
          <div className="social-links">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} COLLECTION 
      </div>
    </footer>
  );
};

export default Footer;
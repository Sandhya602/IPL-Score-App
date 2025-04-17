// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>IPL Score Tracker</h3>
        <p>The ultimate destination for IPL cricket fans to stay updated with live scores, team standings, and match schedules.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Live Scores</li>
          <li>Schedule</li>
          <li>Teams</li>
          <li>Stats</li>
          <li>News</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect With Us</h4>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <p>Download our mobile app for a better experience</p>
      </div>
      <div className="footer-bottom">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


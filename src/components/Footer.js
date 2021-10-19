import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main">
      <div className="footer">
        <div className="company">
          <h3>Company</h3>
          <p>About</p>
          <p>Book Now</p>
          <p>Offers</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="help">
          <h3>Help</h3>
          <p>FAQs</p>
          <p>Contact</p>
          <p>Support</p>
          <p>Policy</p>
        </div>
        <div className="line" />
        <div className="follow-us">
          <h3>Follow Us On</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
          <div className="inner">
            <p>Google Plus</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
      <div className="bottom-line" />
      <div className="footer-content">
        <h5>© 2018, All rights reserved</h5>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

import "../styles/Footer.css";

import Facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png';
import Whatsapp from '../assets/icons/whatsapp.png';

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="row">
        <div className="col">
          <h4>FIVE STARS CAR SERVICE INC</h4>
          <h1 >
            <li>342-420-6969</li>
            <li>Atlanta, USA</li>
            <li>123 Streeet South North</li>
          </h1>
        </div>
        <div className="col">
        </div>
        <div className="col">
          <h4>FOLLOW US</h4>
          <div className="social-networks">
            <img id="social" src={Instagram} alt="instagram" />
            <img id="social" src={Facebook} alt="facebook" />
            <img id="social" src={Whatsapp} alt="whatsapp" />
            <h4 className="email-contact">contact@fivestarscarservice.com</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="row" id="terms-block">
        <p className="terms">
          &copy;{new Date().getFullYear()} Five Stars Car Service | All rights reserved | <a href="/faqs">FAQS</a>  | <a href="/privacy">Privacy Policy</a>| developed by<a href="/"> K&L Solutions</a>
          
        </p>
      </div>
    </footer>

  );
}
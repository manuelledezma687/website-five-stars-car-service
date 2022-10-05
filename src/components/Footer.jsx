import React from "react";
import "../styles/Footer.css";

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
            <h4>Stuff</h4>
            <ui>
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui>
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row" id="terms">
          <p className="terms">
            &copy;{new Date().getFullYear()} Five Stars Car Service | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
    </footer>
  );
}
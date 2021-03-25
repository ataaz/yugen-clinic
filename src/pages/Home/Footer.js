import React from "react";
import yicon from '../../images/y-icon.png';
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <div className="Footer content-block1 position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3">
              <h3>About Us</h3>
            </div>
            <div className="col-xl-2">
              <h3>Quick Links</h3>
            </div>
            <div className="col-xl-2">
              <h3>Contact us</h3>
            </div>
            <div className="col-xl-5">
              <p>Subscribe to our newsletter. You can always stay up to date with our Dermatology Clinic & Cosmetic Center news!</p>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Footer;
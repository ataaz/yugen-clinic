import React from "react";
import yicon from '../../images/y-icon.png';
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <div className="Footer content-block1 position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-7">
              <div className="row">
                <div className="col-xl-5">
                  <h3>About Us</h3>
                  <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed <br/>do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.</p>
                </div>
                <div className="col-xl-3">
                  <h3>Quick Links</h3>
                  <ul className="list-inline">
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Blogs</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                  </ul>
                </div>
                <div className="col-xl-3">
                  <h3>Contact us</h3>
                  <p>Building Name, <br/>Street name, Dubai, UAE</p>
                  <Link to="#" className="d-block">+971 4 123 4567</Link>
                  <Link to="#" className="d-block">info@yugenclinic.com</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="newsletterbox">
                <p>Subscribe to our newsletter. You can always stay up to date with our Dermatology Clinic & Cosmetic Center news!</p>
                <form name="">
                  <input type="email" placeholder="Email Address"></input>
                  <input type="submit" value="Submit"></input>
                </form>
              </div>
              <span className="copyright">© Yugen Clinic Group 2021. All Rights Reserved</span>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Footer;
import React from "react";
import yiconbottom from '../../images/y-icon.png';
import serviceimg from '../../images/service-img.jpg';
import { Link } from 'react-router-dom';

function HomeServices() {
  return(
    <div className="HomeServices content-block1 position-relative">
        <div className="row1">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8">
                <h2>Our services</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Face</Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Body</Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Health</Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Wellbeing</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="child1 childboxes">
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Acne Scarring</Link></li>
                  <li><Link to="#">Double Chin</Link></li>
                  <li><Link to="#">Cellulite</Link></li>
                  <li><Link to="#">Acne Scarring</Link></li>
                  <li><Link to="#">Lorem Ipsum</Link></li>
                  <li><Link to="#">Scar Removal</Link></li>
                  <li><Link to="#">Facial Redness</Link></li>
                  <li><Link to="#">Face Contouring</Link></li>
                  <li><Link to="#">Crow's Feet</Link></li>
                  <li><Link to="#">Lorem Ipsum</Link></li>
                  <li><Link to="#">Lorem Ipsum</Link></li>
                  <li><Link to="#">Crow's Feet</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div className="row2">
        <div className="container">
            <div className="row text-center">
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Anti-aging</Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Man</Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Sensual</Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Dental</Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default HomeServices;
import React from "react";
import WhoWeAreImg from '../../images/who-we-are.jpg';
import { Link } from 'react-router-dom';

function WhoWeAre() {
  return(
    <div className="WhoWeAre content-block1 position-relative pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 align-self-center">
              <h2>Who We Are</h2>
              <p>At Yugen we engineer optimal wellbeing and world class beauty through our bespoke treatments using diversified aesthetic medicine, cosmetic dermatology and wellness remedies. Treating not only the signs of aging and health concerns but using an inside-out approach to treat the underlying manifestations. Our services are distinctive because they are cutting-edge, innovative and unique.</p>
              <p>Boasting an international team of highly qualified and renowned doctors, surgeons, and cosmetic professionals, we offer the best in order to satisfy the unique need of every patient, offering the highest standards of care, the latest techniques and state of the art technology.</p>
              <p>Yugen Care luxury medical clinic is well-equipped to guide you down your path of rejuvenation using predictive, preventive and personalized clinical wellness solutions.</p>
            </div>
            <div className="col-xl-6">
              <img src={WhoWeAreImg} alt=""/>
            </div>
          </div>
        </div>
    </div>
  );
}
export default WhoWeAre;
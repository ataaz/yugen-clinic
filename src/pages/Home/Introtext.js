import React from "react";
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import yicon from '../../images/y-icon.png';

function Introtext() {
  return(
    <div className="introText text-center content-block1 position-relative">
        <img className="y-icon" src={yicon} alt=""/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
            <h2>A leader in dermatologic care</h2>
            <p>At Yugen, we engineer optimal wellbeing and world class beauty through our bespoke treatments using diversified aesthetic medicine, cosmetic dermatology and wellness remedies. </p>
            <p>Treating not only the signs of aging and health concerns but using an inside-out approach to treat the underlying manifestations. Our services are distinctive because they are cutting-edge, innovative and unique.</p>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-xl-3">
              <div className="introInner">
                <img src={icon1} alt=""/>
                <span>Health Optimization</span>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="introInner">
                <img src={icon2} alt=""/>
                <span>Longitivity</span>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="introInner">
                <img src={icon3} alt=""/>
                <span>Anti Aging</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Introtext;
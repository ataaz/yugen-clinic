import React from "react";
import insta from '../../images/insta.jpg';
import instagram from '../../images/instagram.svg';

function HomeInstagram() {
  return(
    <div className="HomeInstagram text-center position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="small-heading">
                <h2><img src={instagram}/> Follow us on instagram</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-3 col-sm-6 col-md-3">
              <img src={insta} alt=""/>
            </div>
            <div className="col-3 col-sm-6 col-md-3">
              <img src={insta} alt=""/>
            </div>
            <div className="col-3 col-sm-6 col-md-3">
              <img src={insta} alt=""/>
            </div>
            <div className="col-3 col-sm-6 col-md-3">
              <img src={insta} alt=""/>
            </div>
          </div>
      </div>
    </div>
  );
}
export default HomeInstagram;
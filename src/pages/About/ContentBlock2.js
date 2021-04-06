import React from "react";
import AboutContentImg from '../../images/about-content-img.jpg';
import { Link } from 'react-router-dom';

function ContentBlock2() {
  return(
    <div className="BannerContentBlock position-relative">
        <div className="gray_bg3">
            <div className="container h-100 position-relative">
                <div className="row h-100 justify-content-start align-items-center">
                    <div className="col-xl-5 col-md-5 col-sm-6 h-100">
                      <div className="position-relative">
                        <h2>At yugen, we adapt a <br></br>patient-centric approach</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                      </div>
                    </div>
                    <div className="col-9 col-xl-5 col-lg-7 col-md-5 col-sm-5 h-100">
                      <img src={AboutContentImg}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ContentBlock2;
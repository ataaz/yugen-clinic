import React from "react";
import CEOImage from '../../images/ceo.png';
import CEOSign from '../../images/ceo-sign.png';
import { Link } from 'react-router-dom';

function CEOMessage() {
  return(
    <div className="CEOMessage content-block1 position-relative">
        <div className="gray_bg2">
            <div className="container h-100 position-relative">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-9 col-xl-6 col-lg-7 col-md-5 col-sm-5 h-100">
                      <img src={CEOImage}/>
                    </div>
                    <div className="col-xl-4 col-md-5 col-sm-6 h-100">
                        <div className="content-block4 mb-5 mb-md-0">
                            <h2>Yugen leads with the wellness of our patients, we care!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            <img className="ceo-sign" src={CEOSign}/>
                            <span>CEO & Chief Director</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default CEOMessage;
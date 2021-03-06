import React from "react";
import HeroBG from '../../images/hero.jpg'

function Hero() {
  return(
    <div className="hero" style={{ backgroundImage: `url(${HeroBG})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}>
        <div className="container h-100">
            <div className="row align-items-center h-100">
                <div className="col-xl-6 col-md-6 col-sm-8">
                    <div className="hero_text">
                        <h1>Look Better, Feel Better, Feel <span>Yugen.</span></h1>
                        <p className="mb-0"><span className="byname"><i>by</i> Dr. GEHAD</span></p>
                        <p className="mb-0"><a href="#" className="btn1">Learn More</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Hero;
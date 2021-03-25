import React from "react";
import { Link } from 'react-router-dom';

function About() {  
  return (
    <div className="About">
      <div className="hero">
        <div className="container h-100">
	        <div className="row align-items-center h-100">
	        	<div className="col-xl-6">
            <div className="hero_text">
              <h1>About Page</h1>
              <Link to="/">Go back</Link>
            </div>
	        	</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
import React from "react";
import Hero from './Hero';
import Introtext from './Introtext';
import Homeservices from './Homeservices';

function Home() {  
  return (
    <div className="Home">
      <Hero />
      <Introtext />
      <Homeservices />
    </div>
  );
}

export default Home;
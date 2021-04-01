import React from "react";
import Header from '../../layout/Header';
import Hero from './Hero';
import Introtext from './Introtext';
import HomeServices from './Homeservices';
import HomeServicesMobile from './HomeservicesMobile';
import HomeBlogs from './Homeblogs';
import HomeProducts from './Homeproducts';
import HomeInstagram from './Homeinstagram';
import BookCTA from './Bookcta';
import HomeVideo from './Homevideo';
import Footer from '../../layout/Footer';

function Home() {  
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Introtext />
      <HomeServices />
      <HomeServicesMobile />
      <HomeBlogs />
      <HomeProducts />
      <HomeInstagram />
      <BookCTA />
      <HomeVideo />
      <Footer />
    </div>
  );
}

export default Home;
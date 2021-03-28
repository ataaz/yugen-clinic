import React from "react";
import Header from './Header';
import Hero from './Hero';
import Introtext from './Introtext';
import HomeServices from './Homeservices';
import HomeBlogs from './Homeblogs';
import HomeProducts from './Homeproducts';
import HomeInstagram from './Homeinstagram';
import BookCTA from './Bookcta';
import HomeVideo from './Homevideo';
import Footer from './Footer';

function Home() {  
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Introtext />
      <HomeServices />
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
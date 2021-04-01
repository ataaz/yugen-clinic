import React from "react";
import Header from '../../layout/Header';
import PageTitle from '../../layout/PageHeader';
import BookCTA from './Bookcta';
import HomeVideo from './Homevideo';
import Footer from '../../layout/Footer';

function About() {  
  return (
    <div className="About">
      <Header />
      <PageTitle pagename="Ford" />
      <BookCTA />
      <HomeVideo />
      <Footer />
    </div>
  );
}

export default About;
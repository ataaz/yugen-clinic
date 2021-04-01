import React from "react";
import Header from '../../layout/Header';
import PageHeader from '../../layout/PageHeader';
import BookCTA from '../../components/Bookcta';
import HomeVideo from './Homevideo';
import Footer from '../../layout/Footer';

function About() {  
  return (
    <div className="About">
      <Header />
      <PageHeader pagename="About Us" />
      <BookCTA />
      <HomeVideo />
      <Footer />
    </div>
  );
}

export default About;
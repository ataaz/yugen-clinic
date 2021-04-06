import React from "react";
import Header from '../../layout/Header';
import ServicesPageHeader from '../../layout/ServicesPageHeader';
import BookCTA from '../../components/Bookcta';
import HomeVideo from './Homevideo';
import Footer from '../../layout/Footer';

function About() {  
  return (
    <div className="YugenFace">
      <Header />
      <ServicesPageHeader pagename="Yugen Face" />
      <BookCTA />
      <HomeVideo />
      <Footer />
    </div>
  );
}

export default About;
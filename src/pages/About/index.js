import React from "react";
import Header from '../../layout/Header';
import PageHeader from '../../layout/PageHeader';
import WhoWeAre from './WhoWeAre';
import AboutGallery from './AboutGallery';
import CEOMessage from './CEOMessage';
import ContentBlock2 from './ContentBlock2';
import Team from './Team';
import BookCTA from '../../components/Bookcta';
import HomeVideo from './Homevideo';
import Footer from '../../layout/Footer';

function About() {  
  return (
    <div className="About">
      <Header />
      <PageHeader pagename="About Us" />
      <WhoWeAre />
      <AboutGallery/>
      <CEOMessage/>
      <Team/>
      <ContentBlock2/>
      <BookCTA />
      <HomeVideo />
      <Footer />
    </div>
  );
}

export default About;
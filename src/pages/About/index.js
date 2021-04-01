import React from "react";
import Header from '../../layout/Header';
import PageHeader from '../../layout/PageHeader';
import WhoWeAre from './WhoWeAre';
import GalleryVariableWidth from './GalleryVariableWidth';
import CEOMessage from './CEOMessage';
import ContentBlock2 from './ContentBlock2';
import BookCTA from '../../components/Bookcta';
import HomeVideo from './Homevideo';
import Footer from '../../layout/Footer';

function About() {  
  return (
    <div className="About">
      <Header />
      <PageHeader pagename="About Us" />
      <WhoWeAre />
      <GalleryVariableWidth/>
      <CEOMessage/>
      <ContentBlock2/>
      <BookCTA />
      <HomeVideo />
      <Footer />
    </div>
  );
}

export default About;
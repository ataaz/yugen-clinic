import React from "react";
import Header from '../../layout/Header';
import ServicesPageHeader from '../../layout/ServicesPageHeader';
import BookCTA from '../../components/Bookcta';
import HomeVideo from './Homevideo';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';

function Services() {  
  return (
    <div className="Services">
      <Header />
      <ServicesPageHeader pagename="Services" />
      <ul>
        <li><Link to="/services/yugen-face">Yugen Face</Link></li>
        <li><Link to="/services/yugen-body">Yugen Body</Link></li>
        <li><Link to="/services/yugen-health">Yugen Health</Link></li>
        <li><Link to="/services/yugen-wellbeing">Yugen Wellbeing</Link></li>
        <li><Link to="/services/yugen-anti-aging">Yugen Anti-Aging</Link></li>
        <li><Link to="/services/yugen-man">Yugen Man</Link></li>
        <li><Link to="/services/yugen-sensual">Yugen Sensual</Link></li>
        <li><Link to="/services/yugen-sensual">Yugen Dental</Link></li>
      </ul>
      <BookCTA />
      <HomeVideo />
      <Footer />
    </div>
  );
}

export default Services;
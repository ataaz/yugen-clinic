import React from "react";
import About1 from '../../images/about1.jpg';
import About2 from '../../images/about2.jpg';
import About3 from '../../images/about3.jpg';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutGallery() {
  const About_Gallery = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autplay: true,
    autoplaySpeed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  };
  return(
    <div className="About_Gallery content-block1 position-relative">
        <div className="container text-center">
            <h2>Our Clinic</h2>
        </div>
        <Slider {...About_Gallery} className="list-inline">
          <div class="list-inline-item"><img src={About2} alt=""/></div>
          <div class="list-inline-item"><img src={About1} alt=""/></div>
          <div class="list-inline-item"><img src={About2} alt=""/></div>
          <div class="list-inline-item"><img src={About3} alt=""/></div>
          <div class="list-inline-item"><img src={About2} alt=""/></div>
        </Slider>
    </div>
  );
}
export default AboutGallery;
import React from "react";
import Pro1 from '../../images/pro1.jpg';
import Pro2 from '../../images/pro2.jpg';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeProducts() {
    const product_slider = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autplay: true,
        autoplaySpeed: 500,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
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
    <div className="HomeProducts">
        <div className="gray_bg">
            <div className="container h-100 position-relative">
                <div className="row h-100">
                    <div className="col-9 col-xl-6 col-lg-7 col-md-5 col-sm-5 h-100 align-self-center custom_arrow">
                        <Slider {...product_slider} className="product_slider text-center row">
                            <div className="product_slider_box col-xl-11">
                                <Link to="#"><img src={Pro1} /></Link>
                                <Link to="#" className="pro_title">Product Name</Link>
                                <span><small>XXX</small> AED</span>
                            </div>
                            <div className="product_slider_box col-xl-11">
                                <Link to="#"><img src={Pro2} /></Link>
                                <Link to="#" className="pro_title">Product Name</Link>
                                <span><small>XXX</small> AED</span>
                            </div>
                            <div className="product_slider_box col-xl-11">
                                <Link to="#"><img src={Pro2} /></Link>
                                <Link to="#" className="pro_title">Product Name</Link>
                                <span><small>XXX</small> AED</span>
                            </div>
                        </Slider>
                    </div>
                    <div className="col-xl-4 col-md-5 col-sm-6 h-100">
                        <div className="content-block3 mb-5 mb-md-0">
                            <h2><span>Shop</span> the best <br/>selling products</h2>
                            <Link to="#" className="btn2">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default HomeProducts;
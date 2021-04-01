import React , { Component } from "react";
import yiconbottom from '../../images/y-icon.png';
import serviceimg from '../../images/service-img.jpg';
import { Link } from 'react-router-dom';
import 'react-jquery-plugin';
import $ from "jquery";

class HomeServices extends Component {
  componentDidMount() {
    $('.HomeServicesDesktop .yugen-face_box').click(() => {
      $('.child1').slideToggle();
      $('.child2, .child3, .child4').hide();
      $('.row1 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-face_box .hs_box').toggleClass('active');
    });
    $('.HomeServicesDesktop .yugen-body_box').click(() => {
      $('.child2').slideToggle();
      $('.child1, .child3, .child4').hide();
      $('.row1 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-body_box .hs_box').toggleClass('active');
    });
    $('.HomeServicesDesktop .yugen-health_box').click(() => {
      $('.child3').slideToggle();
      $('.child1, .child2, .child4').hide();
      $('.row1 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-health_box .hs_box').addClass('active');
    });
    $('.HomeServicesDesktop .yugen-wellbeing_box').click(() => {
      $('.child4').slideToggle();
      $('.child1, .child2, .child3').hide();
      $('.row1 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-wellbeing_box .hs_box').addClass('active');
    });
    $('.HomeServicesDesktop .yugen-anti-aging_box').click(() => {
      $('.child5').slideToggle();
      $('.child6, .child7, .child8').hide();
      $('.row2 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-anti-aging_box .hs_box').addClass('active');
    });
    $('.HomeServicesDesktop .yugen-man_box').click(() => {;
      $('.child6').slideToggle();
      $('.child5, .child7, .child8').hide();
      $('.row2 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-man_box .hs_box').addClass('active');
    });
    $('.HomeServicesDesktop .yugen-sensual_box').click(() => {
      $('.child7').slideToggle();
      $('.child5, .child6, .child8').hide();
      $('.row2 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-sensual_box .hs_box').addClass('active');
    });
    $('.HomeServicesDesktop .yugen-dental_box').click(() => {;
      $('.child8').slideToggle();
      $('.child5, .child6, .child7').hide();
      $('.row2 .col-xl-3 .hs_box').removeClass('active');
      $('.yugen-dental_box .hs_box').addClass('active');
    });
  }
  render(){
    return(
      <div className="HomeServices HomeServicesDesktop content-block1 position-relative d-none d-sm-block">
        <div className="row1">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8">
                <h2>Our services</h2>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-face_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Face</Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-body_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Body</Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-health_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Health</Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-wellbeing_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Wellbeing</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="child1 childboxes yugen-face" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Face</Link></li>
                  <li><Link to="#">Double Chin</Link></li>
                  <li><Link to="#">Cellulite</Link></li>
                  <li><Link to="#">Acne Scarring</Link></li>
                  <li><Link to="#">Lorem Ipsum</Link></li>
                  <li><Link to="#">Scar Removal</Link></li>
                  <li><Link to="#">Facial Redness</Link></li>
                  <li><Link to="#">Face Contouring</Link></li>
                  <li><Link to="#">Crow's Feet</Link></li>
                  <li><Link to="#">Lorem Ipsum</Link></li>
                  <li><Link to="#">Lorem Ipsum</Link></li>
                  <li><Link to="#">Crow's Feet</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="child2 childboxes yugen-body" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Body</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="child3 childboxes yugen-health" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Health</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="child4 childboxes yugen-wellbeing" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Wellbeing</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <div className="row2">
          <div className="container">
            <div className="row text-center">
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-anti-aging_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Anti-Aging</Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-man_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Man</Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-sensual_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Sensual</Link>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 col-sm-3 yugen-dental_box">
                <div className="hs_box">
                  <Link to="#"><img src={serviceimg} alt=""/></Link>
                  <Link to="#">Yugen Dental</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="child5 childboxes yugen-anti-aging" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Anti-Aging</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="child6 childboxes yugen-man" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Man</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="child7 childboxes yugen-sensual" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Sensual</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="child8 childboxes yugen-dental" style={{display: "none"}}>
          <img className="y-icon-bottom" src={yiconbottom} alt=""/>
            <div className="container">
              <h3>Explore All Treatments</h3>
              <div className="servcies-list">
                <ul className="d-flex pl-0 list-inline flex-wrap">
                  <li><Link to="#">Yugen Dental</Link></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
export default HomeServices;